---
id: blocks-reusable
title: Reusable Blocks
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/Blocks/)

Block editor provides us with the reusable blocks out of the box. These blocks are a custom post type that holds blocks that you can call in your editor to reuse in multiple places. So if you change your reusable block that change will impact all places where this block is imported.

### Register admin sidemenu

Reusable blocks can be accessed from the block editors options page but to help our editors, we like to add a new menu in the admin sidebar where you can easily access all your reusable blocks. If you use our custom blocks setup this sidebar menu will be added by default.

### Use the reusable block as a partial

We also like to use a reusable block for website parts that were previously hardcoded in the theme and are not a part of the block editor. We like to use this footer of additional options in categories and terms.

**Here are the steps:**
* Create a new reusable block for your partial.
* Create a config where you can configure what reusable block are you going to use in your theme. We like to use ACF PRO and its option to create a theme options page.
* Call this option in your theme and output your block.

The first two steps are easy enough, but here is an example for the third step:

footer.php
```php
// Check if the footer partial is set and use the contents of it.
$footerPartialId = '1'; // here you provide your way to get the option set in the second step.

if (!empty($footerPartialId)) {
	$footerBlocks = parse_blocks(get_the_content(null, null, $footerPartialId));

	foreach ($footerBlocks as $block) {
		echo wp_kses_post(\apply_filters('the_content', \render_block($block)));
	}
}
```

> Notes about reusable blocks, they're not native WP search friendly (as in the content you only have the WP block comment markup that there's a specific reusable block there). So if you use a lot of these in the content of a page / post, it might affect your search relevancy.
