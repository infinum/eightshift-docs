---
id: blocks-patterns
title: Patterns
sidebar_label: Patterns
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

Block Patterns are predefined block layouts, ready to insert and tweak.

Here you can check [WordPress documentation](https://developer.wordpress.org/block-editor/developers/block-api/block-patterns/) on this subject.

Patterns are (as we understood) the same thing as block variations, but the main difference is that you can provide full layouts with patterns. As we described in [this chapter](blocks-variations#limitations), you can also provide the full page layouts with our variations.

This means the only difference between our variations and block patterns are:

**Variations**
- Variations provide data using our manifest.json file (the rest is handled using JavaScript)
- Variation appear in the editor next to the regular blocks

**Patterns**
- Patterns are registered using PHP.
- Patterns appear in the editor inside the special tab for patterns.

*We will soon provide WP-CLI command to automaticity create block patterns, boilerplate class, for you to use.*
