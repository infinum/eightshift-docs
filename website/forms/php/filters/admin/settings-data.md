---
id: settings-data
title: Settings data
---

This filter allows adding a custom settings page in the WordPress admin area. Useful when creating custom option pages for Forms add-on plugins.

```php
\add_filter('es_forms_admin_settings_data', [$this, 'getSettingsConfig']);

/**
 * Settings config data.
 *
 * @return array<mixed>
 */
public function getSettingsConfig(): array
{
	return [
		self::SETTINGS_TYPE_KEY => [
			'settings' => 'es_forms_settings_addon_<setting-name>',
			'settingsGlobal' => 'es_forms_settings_global_<setting-name>',
			'type' => 'addon',
			'use' => '<setting-name>-use',
			'labels' => [
				'title' => \__('Title', '<text-domain>'),
				'desc' => \__('Description', '<text-domain>'),
				'icon' => '<svg-icon>',
			],
		],
	];
}
```
