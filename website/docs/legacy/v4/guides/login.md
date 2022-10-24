---
id: login
title: Login
---
[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs/tree/v2.0.0/src/login/class-login.php)

Login class is located in `Eightshift Libs`. To extend it use `Eightshift_Libs\Login\Login` class.

It changes the default logo url on WordPress login page to you site home url.

## Additional options

This class goes great hand in hand with `assets/styles/application-admin.scss` file. This is the main style entry point for project style used for the `WordPress admin screen`.

For example, you can provide custom login logo image for some custom project styling:

```scss
/* Full path due to wp-login.php is not in the theme folder */

.login h1 a { /* stylelint-disable-line selector-no-type */
  background-image: url('/wp-content/themes/eightshift-boilerplate/public/logo.svg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 49%;
  width: 100%;
  height: 70px;
  margin: 0 auto 15px;
}

```
