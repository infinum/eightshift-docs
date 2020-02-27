---
id: menu
title: Menu
---

Menu class is located in `project`. It extends `Eightshift_Libs\Menu\Menu` namespace.

This class is used to add all custom project implementation for menues.

To add custom menu you must provide array for custom menu location by using documentation from [official WordPress docs](TODO).

```php
/**
   * Return all menu poistions
   *
   * @return array Of menu positions with name and slug.
   *
   * @since 1.0.0
   */
  public function get_menu_positions() : array {
    return [
      'header_main_default' => esc_html__( 'Header Main', 'eightshift-boilerplate' ),
    ];
  }
```
