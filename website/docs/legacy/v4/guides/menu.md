---
id: menu
title: Menu
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--boilerplate-red?style=for-the-badge&logo=wordpress&labelColor=2a2a2a)](https://github.com/infinum/eightshift-boilerplate/tree/v4.0.0/src/menu/class-menu.php)

Menu class is located in `project`. It extends `Eightshift_Libs\Menu\Menu` class.

This class is used to add all custom project implementation for menus.

To add the custom menu, you must provide an array for custom menu locations as explained in the documentation from the [official WordPress docs](https://developer.wordpress.org/reference/functions/register_nav_menus/).

```js
/**
	 * Return all menu positions
	 *
	 * @return array<string> Menu positions with slug => name structure.
	 */
	public function getMenuPositions(): array
	{
		return [
			'header_main_nav' => \esc_html__('Main Menu', 'eightshift-boilerplate'),
		];
	}
```

## BEM Menu helper

We are providing a BEM menu helper that will create a normal WordPress menu but with HTML classes specific to the [BEM methodology](http://getbem.com/).

To use it just call this helper in your template.

```js
use Eightshift_Libs\Menu\Menu;

Menu::bem_menu( 'header_main_nav', 'main-navigation' );
```

You can also provide multiple parameters to the helper. All the details are [found here](https://github.com/infinum/eightshift-libs/tree/404aeab50beef38f788c864d7c0312858b097e81/src/menu/class-menu.php#L69).
