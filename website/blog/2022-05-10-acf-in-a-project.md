---
title: ACF in a project
description: Example of using ACF in your project
slug: acf-in-a-project
authors: iobrado
date: 2022-05-10
tags: [eightshift, boilerplate, acf, advanced custom fields, theme options]
hide_table_of_contents: false
---

If you've been working with WordPress for a while, you must have heard of **_Advanced Custom Fields_** plugin (**_ACF_** for short). While the use of blocks has simplified content editing and meta fields are not as needed anymore, there are still cases where having meta fields is very useful.
<!--truncate-->

## Ways of registering ACF fields

There are multiple approaches to register ACF fields. The easiest way is through WP Admin interface. But, if you're using Git, this approach isn't the best since the fields are being saved in the database, which means you would have to export and import fields into your staging and production environment each time you make a change.

The recommended way is to register the fields with PHP. There is also an option to register the fields with **_.json_** files, but in Eightshift dev kit, we already have some goodies which will make registering fields with PHP a breeze.

## Getting PHP code export

The easiest way to get the PHP code that you will use for registering ACF fields is by adding those fields through the WP Admin ACF interface first. As an example, I'll add a field group called **_Intro_**, which will contain one text field of the same name. That field group will be displayed only on posts. You can add a few more fields, but for the sake of simplicity, I'll use only one field.

When you set all the fields you need, save them and go to `Custom Fields -> Tools`. Here you will see the option to **_Export Field Groups_**. Simply select which field groups you want to export and select **_Generate PHP_**.

![ACF PHP code export](/img/blog/acf-generate-php.png)

This will generate a PHP code snippet that you can use in your theme. But now you may be wondering, where exactly should that code go?

## CustomMeta class

Those ACF goodies in Eightshift dev kit I talked about earlier? Let me introduce you to one of them. We have a WP CLI command which we can use to generate a CustomMeta class where we can add our field groups. The command is `wp boilerplate create_acf_meta`. This command has one required parameter, and that is `name`. To create a class that we will use for registering our custom fields, we'll use the following command:

```bash
wp boilerplate create_acf_meta --name=intro
```

This command will generate a **_CustomMeta_** folder inside **_src_** folder and add a new file called **_IntroAcfMeta.php_**. Inside that file, you should see the following method:
```php
public function fields(): void
{
	if (function_exists('acf_add_local_field_group')) {
		\acf_add_local_field_group([]);
	}
}
```

Go back to your PHP code export for ACF fields and select everything inside the `acf_add_local_field_group()` function and paste it into your function. To make it in line with our coding standards, we have to do the following:
- replace `array()` with `[]`
- make every label translatable and escaped - use `esc_html__()`
- instead of hardcoding the field name, replace it with a class constant

After all these changes, your code should look like this:

```php
class IntroAcfMeta extends AbstractAcfMeta
{

	/**
	 * Intro field name.
	 */
	public const INTRO_FIELD_NAME = 'intro';
	
	/**
	 * Render acf fields.
	 *
	 * @return void
	 */
	public function fields(): void
	{
		if (function_exists('acf_add_local_field_group')) {
			\acf_add_local_field_group([
				'key' => 'group_6269300acefda',
				'title' =>  \esc_html__('Intro', 'eightshift-theme'),
				'fields' => [
					[
						'key' => 'field_6269300f8029b',
						'label' => \esc_html__('Intro', 'eightshift-theme'),
						'name' => self::INTRO_FIELD_NAME,
						'type' => 'text',
						// ...
					]
				]
				// ...
			]);
		}
	}
}
```

The final step is to go back to Custom Fields in WP Admin and delete your field group from there. Your field should now be visible when editing Posts.

## Using get_field()

To fetch the saved meta value, we use ACF's `get_field()` function, but here are a few tips that could improve your code quality. First, you should check if that function exists. If ACF gets for whatever reason deactivated on your site, it won't break your site. The second one is using class constant instead of hardcoding the field name. With these practices in mind, your code should look like this:

```php
use YourNamespace\CustomMeta\IntroAcfMeta;

// ...

if (function_exists('get_field')) {
	$introText = get_field(IntroAcfMeta::INTRO_FIELD_NAME, $postId);
}
```

> It's better to use class constants because if you decide to change the field name, you will have to change it only in one place.

## Theme Options

ACF's Options page has a wide array of uses and there's a very likely chance you may also need some sort of Theme Options in your project. To make the implementation of Theme Options a bit easier, we have a CLI command which generates the `ThemeOptions` class in your project. Just use the following command:

```bash
wp boilerplate create_theme_options
```

This command generates a class with two methods. The first one, `createThemeOptionsPage()` creates Theme Options page and adds it to WP Admin sidebar. The second one, `registerThemeOptions()`, is what registers the fields you will have in Theme Options. Here is an example how Theme Options look after being created with WP CLI.

![ACF Theme Options](/img/blog/acf-theme-options.png)

To add fields to your Theme Options, follow the steps from the **_Getting PHP code export_** section of this post and add the fields inside the `'fields' => []` array.



## Tip - create a helper class

In this blog post, we covered the whole process of registering and using ACF fields in your project. But, if you are using a lot of ACF fields, wrapping each `get_field()` function with a `function_exists()` conditional may become tedious at some point. For that reason, it may be a good idea to create a helper class that you can use for ACF functions.

I won't cover the whole process in detail, but I'll give you some general pointers.

- when registering plugin-related classes, use the `Plugins` namespace. In this case, you should have namespace `YourNamespace\Plugins\Acf`
- inside that namespace, you can create a class called `AcfHelper`
- add a method `getField` which accepts the same arguments as the `get_field()` function
- add a method `getThemeOption` which only accepts one argument, the field name, and the second argument is hardcoded
- use early returns in your methods
```php
if (!function_exists('get_field')) {
	return '';
}
```
