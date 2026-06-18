---
id: file-security-pdf-use-qpdf
title: File security PDF use qpdf
---

Controls whether `qpdf` is used to decompress PDF object streams before scanning for dangerous dictionary keys. Enabled by default (`true`).

Disabling this means only the raw, uncompressed parts of a PDF are scanned — compressed object streams will not be inspected, which may allow malicious content hidden inside them to pass validation.

```php
\add_filter('es_forms_validation_file_security_pdf_use_qpdf', [$this, 'fileSecurityPdfUseQpdf']);

/**
 * Disable qpdf decompression during PDF security scanning.
 *
 * @return bool
 */
public function fileSecurityPdfUseQpdf(): bool
{
	return false;
}
```
