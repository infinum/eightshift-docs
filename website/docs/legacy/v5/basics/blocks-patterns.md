---
id: blocks-patterns
title: Patterns
sidebar_label: Patterns
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/4.0.0/blocks/init/src/blocks/)

Block Patterns are predefined block layouts, ready to insert and tweak.

You can check the [WordPress documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-patterns/) on this subject.

Patterns are (as we understand them) the same thing as block variations. The main difference is that you can provide full layouts with patterns, as described in [this chapter](blocks-variations#limitations). You can also provide the full page layouts with our variations.

This means that the only differences between our variations and block patterns are:

**Variations**
- Variations provide data using our manifest.json file (the rest is handled using JavaScript).
- Variations appear in the editor next to the static blocks.

**Patterns**
- Patterns are registered using PHP.
- Patterns appear in the editor inside the special tab for patterns.

*We will soon provide WP-CLI command to automaticity create block patterns, boilerplate class, for you to use.*

### Remove all core patterns

If you don't use core blocks, core patterns won't work. Don't confuse your users and remove them (but feel free to add new patterns based on your own custom blocks!)

To remove all core patterns add this code to you `src/Blocks/Blocks.php` class.

Filter goes in the register method:
```php
// Remove block patterns.
add_action('after_setup_theme', [$this, 'removeCorePatterns']);
```

Callback method:
```php
/**
	* Remove core block patterns.
	*
	* @return void
	*/
public function removeCorePatterns(): void
{
	remove_theme_support('core-block-patterns');
}
```
