---
id: how-to-use
title: How to use?
---

You can access all the global configurations from the WordPress admin interface. However, if you want to ensure that some of these configurations remain constant, you can make use of global variables. 

:::note
It is important to note that these global variables must be set in your project's `wp-config.php` file.
:::

Typically, these variables are used for storing sensitive data such as API keys, passwords, etc. Therefore, it is recommended to use secrets or any other secure method to store them.

:::caution
If you set a global variable you will not be able to change it from the WordPress admin.
:::
