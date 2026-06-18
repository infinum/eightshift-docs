---
id: file-security-pdf-qpdf-binary
title: File security PDF qpdf binary
---

Specifies the path to the `qpdf` binary used during PDF security scanning. When a valid executable path is returned, it takes precedence over the auto-detected paths (`/usr/bin/qpdf`, `/usr/local/bin/qpdf`, `/opt/homebrew/bin/qpdf`).

If no path is provided or the path is not executable, Forms falls back to the auto-detection candidates. `qpdf` is used to decompress object streams in PDFs before scanning for dangerous dictionary keys.

```php
\add_filter('es_forms_validation_file_security_pdf_qpdf_binary', [$this, 'fileSecurityPdfQpdfBinary']);

/**
 * Provide the path to the qpdf binary.
 *
 * @return string
 */
public function fileSecurityPdfQpdfBinary(): string
{
	return '/custom/path/to/qpdf';
}
```
