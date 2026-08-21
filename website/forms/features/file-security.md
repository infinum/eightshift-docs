---
id: file-security
title: File upload security
---

Every file that reaches a form is inspected before it is stored. The scanner stack determines what a file **actually is** from its contents, rejects formats that have no business on a public upload endpoint, and looks inside the supported formats for active content (scripts, macros, embedded payloads).

:::note
Scanning runs on every upload, regardless of whether the file field has an `accept` configuration set. A field with no allow-list is still fully validated.
:::

The scanner never sanitizes or rewrites a file. A file is either accepted as-is or rejected with a validation message.

## When it runs

1. During form validation, on each uploaded file, before the submission is processed.
2. Again in the upload helper, immediately before the file leaves PHP's managed temporary directory — so a file can never reach the `esforms-tmp` folder unscanned.

## Files are never stored permanently

Uploaded files are not added to the media library and are not kept with the form or the entry. They only pass through the site:

1. The file is moved to a temporary folder (`wp-content/esforms-tmp/`).
2. From there it is handed to the integration (as part of the integration request) or attached to the email.
3. A daily [cron job](cron-jobs) (`es_forms_file_upload`) cleans out the temporary folder, deleting everything older than two hours.

:::caution
Since files live in the temporary folder only, form entries never contain the uploaded files. If you need to keep them, the integration or the email recipient is the system of record.
:::

## Always-on checks

These run for every file, in this order:

1. **Extension deny list** — executables (`exe`, `msi`, `bat`, `jar`, `apk`, …), shell and scripting formats (`sh`, `ps1`, `vbs`, `hta`, `reg`, …), server-interpreted code (`php`, `phar`, `asp`, `jsp`, `py`, `rb`, `cgi`, …), server config files (`htaccess`, `htpasswd`, `ini`, `conf`), browser-executable formats (`html`, `htm`, `xhtml`, `shtml`, `svg`, `svgz`) and macro-enabled Office formats (`docm`, `xlsm`, `pptm`, …) are rejected outright.
2. **MIME detection from contents** — the MIME type is detected from the file bytes using libmagic (`finfo`), falling back to `mime_content_type()`. The MIME type reported by the browser is never trusted.
3. **MIME registered on the site** — the detected MIME must be registered in the site's MIME map (`wp_get_mime_types()`). This separates "this site does not accept this type" from a genuine content mismatch, so e.g. an `.xml` upload on a default WordPress install gets an accurate message.
4. **Extension and MIME agreement** — the declared extension and the detected MIME must line up in the WordPress MIME map. A `.jpg` that is really a ZIP is rejected here.

## Type-specific scanners

When the always-on checks pass, the file is handed to the scanner that matches its detected MIME type.

| Scanner | Handles                                                     | Rejects when                                                                                                                                                                                                                                                                                          |
| ------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PDF     | `application/pdf`                                           | The file doesn't start with `%PDF-`, or it contains payload dictionary keys: `/JS`, `/JavaScript`, `/Launch`, `/EmbeddedFile`, `/EmbeddedFiles`, `/SubmitForm`, `/ImportData`, `/RichMedia`, `/XFA`. With `qpdf` available, compressed object streams are expanded and scanned too.                   |
| Image   | `image/*`                                                   | A raster image (JPEG, PNG, GIF, WebP, BMP, TIFF) doesn't decode as a valid image, or an SVG contains `<script>`, `<foreignObject>`, `<iframe>`, `<embed>`, `<object>`, `javascript:`, `data:text/html`, or inline `on*` event handlers.                                                               |
| Office  | `.docx`, `.xlsx`, `.pptx` and legacy `.doc`, `.xls`, `.ppt` | Office Open XML (a ZIP container) holds macro bodies (`vbaProject.bin`), embedded OLE objects, ActiveX, or a relationship with `TargetMode="External"`. Legacy Compound File Binary Format files contain macro or embedded-object streams (`Macros`, `_VBA_PROJECT`, `ObjectPool`, `Ole10Native`, …). |
| CSV     | `text/csv`, `application/csv`                               | A cell contains a known formula-injection payload (`=cmd                                                                                                                                                                                                                                              | `, `=DDE(`, `=MSEXCEL | `, `=HYPERLINK(`, …). Plain leading `=`or`-` is allowed, so negative numbers and arithmetic don't false-positive. |
| Archive | `application/zip`                                           | A member name contains path traversal (`../`) or an absolute path, a member has a deny-listed extension, the total uncompressed size exceeds 100 MB, or a single member's compression ratio exceeds 100:1 (zip-bomb protection).                                                                      |
| Text    | `text/plain`                                                | The file contains server-side script markers: `<?php`, `<?=`, `<%@ page`, `<jsp:`, `#!/bin/sh`, `#!/bin/bash`.                                                                                                                                                                                        |

Files whose detected MIME type has no dedicated scanner pass through with the always-on checks only.

## Server requirements

The scanners degrade gracefully, but each one needs its PHP extension to do its job. You can check the current state of the stack in **Global settings → Validation → File security**, where every dependency is listed with a status light.

| Dependency        | Used for                                                       |
| ----------------- | -------------------------------------------------------------- |
| `fileinfo`        | MIME detection from file contents.                             |
| `zip`             | Archive and Office Open XML inspection.                        |
| `dom`             | File structure parsing.                                        |
| `gd` or `imagick` | Image processing.                                              |
| `proc_open()`     | Required to invoke `qpdf`.                                     |
| `qpdf` binary     | Optional. Decompresses PDF object streams for deep inspection. |

:::caution
Without `qpdf` (or with `proc_open()` disabled), PDFs are still scanned, but only their uncompressed parts. Dangerous keys hidden inside Flate-compressed object streams will not be seen.
:::

`qpdf` is auto-detected at `/usr/bin/qpdf`, `/usr/local/bin/qpdf` and `/opt/homebrew/bin/qpdf`. Use the [file security PDF qpdf binary](../php/filters/validation/file-security-pdf-qpdf-binary) filter for a custom path.

## Error messages

Each rejection reason has its own label, so you can tailor the message shown to the user. Labels can be changed globally or per form — see the [labels](labels) feature.

| Label key                       | Default message                                                                              |
| ------------------------------- | -------------------------------------------------------------------------------------------- |
| `validationFileExtensionDenied` | This file type is not allowed.                                                               |
| `validationFileMimeMismatch`    | The file contents do not match its extension.                                                |
| `validationFileMimeNotAllowed`  | This file type is not permitted on this site.                                                |
| `validationFileScanFailed`      | The file could not be processed for security inspection.                                     |
| `validationFilePdfUnsafe`       | This PDF contains active content (scripts, embedded files or auto-actions) and was rejected. |
| `validationFileImageUnsafe`     | This image is malformed or contains unexpected content.                                      |
| `validationFileOfficeUnsafe`    | This document contains macros, embedded objects or external references and was rejected.     |
| `validationFileCsvUnsafe`       | This CSV/spreadsheet contains formula content that could be malicious and was rejected.      |
| `validationFileArchiveUnsafe`   | This archive contains disallowed or unsafe content and was rejected.                         |
| `validationFileTextUnsafe`      | This text file contains script content and was rejected.                                     |

## Customization

- [File security deny extensions](../php/filters/validation/file-security-deny-extensions) — extend or override the built-in deny list.
- [File security PDF use qpdf](../php/filters/validation/file-security-pdf-use-qpdf) — toggle the `qpdf` integration.
- [File security PDF qpdf binary](../php/filters/validation/file-security-pdf-qpdf-binary) — set a custom `qpdf` path.
