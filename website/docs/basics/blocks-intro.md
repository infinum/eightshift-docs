---
id: blocks-intro
title: Intro
sidebar_label: Intro
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/develop/blocks/init/src/blocks/)

Before we dive into blocks and see how everything is set, we should describe this setup's mindset.
If you managed to set up your project by this point with [WP-CLI](wp-cli) command `setup_theme`, you might have a few questions. We will try to answer all those questions here.

### Why do all my blocks look the same and have the same name structure?

This is because we defined the name structure for all our blocks and components to load everything automatically. For more info about this please check the [block structure](block-structure) and [component structure](blocks-component-structure) chapters.

### What is the difference between components and blocks?

The main difference is that blocks are available in the block editor's block picker, and components are not. With that being said, blocks are registered using the `registerBlockType` method, and components are just here for you to bundle some functionality in one place and reuse it where ever you need.

For more info about blocks, you can read the [block structure](block-structure) chapter, and about components, you can read in the [component structure](blocks-component-structure) chapter.

### Do I need to have storybook stories in my block?

No, you don't. But we provided you with the ability to use the Storybook for all of your blocks and components. Why not use it? It will speed up your development time. Trust us 🙂.

### Do you support block variations, and how can I use them?

Yes, we do. All block variations are located in the `src/Blocks/variations` folder. For more info about this, please check the [variations](blocks-variations) chapters.

### Do you support patterns, and how can I use them?

*Comming soon*

### What is a wrapper?

All the details about wrapper can be found in [this chapter](blocks-wrapper).

### Do you support inner blocks?

Yes, we support everything that core natively supports.  You can find more information about how to use them in [this chapter](block-manifest).

### Why do you use manifest.json in all blocks and components?

So that we can provide content, attributes, options, and much more across multiple different files in multiple contexts (in both PHP and JS), you can read all about it in [this chapter](block-manifest).

### Why do you use global manifest.json

The same answer as the previous one. In the global `manifest.json`, we have options that are shared across all blocks and components. Read more about it in [this chapter](blocks-global-manifest).

### If I want to create a new block/component, what do I do?

In your terminal, write `wp boilerplate use_block --name=example` and style that block however you seem fit.

### How can I use your pre-made blocks?

You can check all available blocks/components using our `wp boilerplate use_block --help` or `wp boilerplate use_component --help` command.

### Can I use block/component from Eightshift-frontend-libs directly?

It depends; you can't use stuff from the blocks folder like `components`, `custom`, `variations`, `wrapper`, etc. This stuff is made to be copied to your project and styled and changed depending on your project's needs. 

You can move stuff from block to your project using these commands describes in [this chapter](blocks-intro#how-can-i-use-your-pre-made-blocks).

### I want to change attributes on inner blocks; how do I do it?

We described how attributes are used and combined in [this chapter](blocks-attributes) and [this chapter](blocks-component-in-block).

### Do I need to write JS and PHP implementation for all my blocks?

For block, you must provide the JS and PHP implementation because it won't work without it.

For components, if you are not using the JS part, you don't need to write one, but we recommend you do so because the JS part is used in Storybook.

If you have a more advanced block and don't benefit from writing the JS implementation of the block, you can always use [ServerSideRender component](https://developer.wordpress.org/block-editor/packages/packages-server-side-render/) form the core. If the editor can't input anything from admin, there is no need to write JS implementation of the block; just use ServerSideRender component.

### How do I use components in blocks?

Yes, we do. Please check [this chapter](blocks-component-in-block) out for more information.

### How do I use multiple heading components in my block?

You can follow the instructions given in [this chapter](blocks-component-in-block).

### Where can I define my global styles?

You can follow the instructions given in [this chapter](writing-styles).

### Where can I define global typography for all my blocks/components?

You can follow the instructions given in [this chapter](writing-styles).

### Can I make a component with WP_Query logic in it?

Yes, you can, but think of the component as a dumb and simple piece of code that should not hold any business logic. A component should only be used as a view. If you need to write WP_Query logic, you can do that in a block and just pass the data to your component as props.

### Do I need to make components for all my blocks?

No, it might look like that from the examples provided, but that is not the case. You should create components depending on your needs.

Ask yourself, will I reuse this functionality anywhere else?

- if the answer is **yes**, create a component.
- if the answer is **no**, don't create a component.

Our recommendation is not to burden yourself from the begging with the components. Start creating blocks and if you find yourself in need of code that you already wrote, just extract it in a component.

### Will this setup works with full site editing?

Yes, it will. We are constantly upgrading this documentation and our code to say that it will work with full site editing. This boilerplate was made for Infinum/Eightshift WordPress team, so se are constantly using it on our projects.

### Can I use core blocks with your setup?

Yes, you can. We are working on an ability to override core block on our smart way, but until we make this work, you can use everything the normal way that is defined in the core documentation. 

### How can I limit my blocklist?

Easy, we have a method that you can extend that limits your project's block to the only block from your project. you should put this filter in your projects `src/Blocks/Blocks.php` file under the `register` method

```php
  // Limits the usage of only custom project blocks.
  add_filter('allowed_block_types', [ $this, 'getAllBlocksList' ], 10, 2);
```

### How to allow only one pattern category?

*Comming soon*

### Can I have blocks in multiple categories?

In your block manifest, you can define in what category your block will appear. You can create a new category for your project or use our category. We created our category called `eightshift` using this filter:

```php
  // Create a new custom category for custom blocks.
  add_filter('block_categories', [ $this, 'getCustomCategory' ]);
```

### How can I add a new blocks category?

You can provide your implementation, or you can extend our method for registering a custom category. Here is how you do it:

```php
 /**
  * Register all the hooks
  *
  * @return void
  */
public function register(): void
{
  // Create a new custom category for custom blocks.
  add_filter('block_categories', [ $this, 'getCustomCategory' ]);
}

 /**
  * Create a custom category to assign all custom blocks
  *
  * This category will be shown on all blocks list in the "Add Block" button.
  *
  * @param array[]  $categories Array of all block categories.
  * @param \WP_Post $post Post being loaded.
  *
  * @return array[] Array of block categories.
  */
public function getCustomCategory(array $categories, \WP_Post $post): array
{
  return array_merge(
    parent::getCustomCategory($categories, $post),
    [
      [
        'slug' => 'custom-category-name',
        'title' => \esc_html__('Custom Category', 'project text domain'),
        'icon' => 'admin-settings',
      ],
    ]
  );
}
```

### What if you don't yet support something from the native setup? What can I do?

As we described in [this chapter](blocks), if we don't support something natively from the core or you can't find it in this documentation, you can always use it in the normal native way from the [WordPress documentation](https://developer.wordpress.org/block-editor/tutorials/block-tutorial/). Also, if you think we are missing something, please open a [pull request](https://github.com/infinum/eightshift-frontend-libs/pulls) or an [issue](https://github.com/infinum/eightshift-frontend-libs/issues) on our GitHub repository.

### Why is this my blocks folder called custom and not blocks, for example?

The idea was to put all your custom blocks inside the custom folder and all core block in the core folder. This boilerplate is not designed only for your custom block, but you can use it as an ultimate block setup. 

And folder structure `src/Blocks/blocks` is kinda weird.

### In the global manifest, you have a key called “customBlocksName”: “eightshift-block”, can I change this to my-project-name-block?

You can, but you shouldn't. We use this key to provide the css selector on all our custom block in the block editor. Additional styles are added to this selector for the wrapper to work on full width and remove some of the native block editor styles. 

So don't remove this.
