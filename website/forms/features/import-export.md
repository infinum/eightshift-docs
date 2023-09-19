---
id: import-export
title: Import/Export
---

The import/export feature enables forms to be easily transferred between projects, allowing for efficient creation and modification across different environments.

## Export

You can choose to export:
* global settings
* everything (global settings and all forms)
* individual forms (form and form settings)

Export data will be provided in JSON format, compatible with our import feature.

![Export screen](/img/forms/export.webp)

## Import

You must upload the JSON export file to import data in the designated field on the import screen. The importer will automatically create a new form with the addition of a "copy" suffix and import all data from the export file.

If you wish to replace an existing form, enable the "Override existing form" option. This function will overwrite any forms with identical form IDs, making it helpful for transferring forms between different environments.

![Import screen](/img/forms/import.webp)

## Import manual

The Import Manual feature enables you to import forms from a JSON file you receive via email. This happens when you use the fallback emails feature or turn off integration. By using the JSON file, you can directly import your data into the integration tool you are using. This feature ensures that you don't lose any data if you decide to turn off integration or encounter any issues.

![Import manual screen](/img/forms/import-manual.webp)
