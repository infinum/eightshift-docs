---
id: blocks-faq
title: Faq
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/5.0.0/blocks/init/src/blocks/)

Before we dive into blocks and see how everything is set, we should describe this setup's mindset.
If you've managed to set up your project by this point with the [WP-CLI](wp-cli) command `setup_theme`, you might have a few questions. We will try to answer all those questions here.

### Why do all my blocks look the same and have the same name structure?

This is so because we defined the name structure for all our blocks and components to load everything automatically. For more information, please check the [block structure](block-structure) and [component structure](blocks-component-structure) chapters.

### What is the difference between components and blocks?

The main difference is that blocks are available in the block editor's block picker, and components are not. With that being said, blocks are registered using the `registerBlockType` method, and components are just here for you to bundle some functionality in one place and reuse it wherever you need.

For more information about blocks, read the [block structure](block-structure) chapter. To find out more about components, read the [component structure](blocks-component-structure) chapter.

### Do I need to have Storybook stories in my block?

No, you don't. But we provided you with the ability to use the Storybook for all of your blocks and components. Why not use it? It will speed up your development time. Trust us. 🙂

For more details on how to write stories, check out [this chapter](blocks-storybook).

### Do you support block variations, and how can I use them?

Yes, we do. All block variations are located in the `src/Blocks/variations` folder. For more information about this, please check the [variations](blocks-variations) chapter.

### Do you support patterns, and how can I use them?

Yes, we do. For more information, please read the [patterns](blocks-patterns) chapter.

### What is a wrapper?

Read about wrappers in [this chapter](blocks-wrapper).

### Do you support inner blocks?

Yes, we support everything that the core natively supports.  You can find more information on how to use them in [this chapter](block-manifest).

### Why do you use manifest.json in all blocks and components?

So that we can provide content, attributes, options, and much more across multiple different files in multiple contexts (in both PHP and JS). You can read all about it in [this chapter](block-manifest).

### Why do you use global manifest.json?

The answer is the same as the previous one. In the global `manifest.json`, we have options that are shared across all blocks and components. Read more about it in [this chapter](blocks-global-manifest).

### If I want to create a new block/component, what do I do?

In your terminal, write
```shell
wp boilerplate use_block --name=example
```
and style that block however you seem fit.

### What if I add a block and it throws an error that it is missing some components, what do I do?

All blocks/components have some kind of documentation and in that documentation we have a list of dependencies each block/component needs to have in the project in order for it to work. For example you can look in the [heading block](https://github.com/infinum/eightshift-frontend-libs/blob/develop/blocks/init/src/Blocks/custom/heading/docs/readme.mdx), as you can see the heading blocks depends on the heading component, so if you install a heading block before heading component it will resolve in to an error. So please be sure that your block/component installation follows the correct order.

### How can I use your pre-made blocks?

You can check all available blocks/components using these two commands
```shell
wp boilerplate use_block --help

wp boilerplate use_component --help
```

### Can I use block/component from Eightshift-frontend-libs directly?

It depends. You can't use things from the blocks folder like `components`, `custom`, `variations`, `wrapper`, etc. They are meant to be copied to your project, styled, and changed depending on your project's needs.

You can move things from a block to your project using the commands described [above](#how-can-i-use-your-pre-made-blocks).

### I want to change attributes on inner blocks. How do I do it?

We described how attributes are used and combined in [this chapter](blocks-attributes) and [this chapter](blocks-component-in-block).

### Do I need to write JS and PHP implementation for all my blocks?

For a block, you must provide the JS and PHP implementations because it won't work without them.

For components, if you are not using the JS part, you don't need to write one, but we recommend you do so because the JS part is used in Storybook.

If you have a more advanced block and don't benefit from writing the JS implementation of the block, you can always use the [ServerSideRender component](https://developer.wordpress.org/block-editor/packages/packages-server-side-render/) form the core. If you have no inputs in the editor from the admin, there is no need to write JS implementation of the block. Just use `ServerSideRender` component in that case.

### How do I use components in blocks?

Please check out [this chapter](blocks-component-in-block) for more information.

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

- If the answer is **yes**, create a component.
- If the answer is **no**, don't create a component.

Our recommendation is not to burden yourself with components from the beginning. Start creating blocks and, if you find yourself in need of code that you already wrote, just extract it in a component.

### Will this setup work with full site editing?

Yes, it will. We are constantly upgrading this documentation and our code to say that it will work with full site editing. This boilerplate was made for the Infinum/Eightshift WordPress team, so we are constantly using it in our projects.

### Can I use core blocks with your setup?

Yes, you can. We are working on the ability to override core blocks in our smart way. Until we make this work, you can use everything that is already defined in the core documentation.

We avoid using core blocks because they add different class naming and additional markup that makes it harder to style things.

Also, they are prone to breaking changes every several months, so we prefer to write our own implementation.

### How can I limit my blocklist?

Easy. We have a method you can extend that limits your project's block to the only block from your project. You should put this filter in your project's `src/Blocks/Blocks.php` file under the `register` method:

```php
  // Limits the usage of only custom project blocks.
  add_filter('allowed_block_types', [ $this, 'getAllBlocksList' ], 10, 2);
```

### How to allow only one pattern category?

*Coming soon*

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
        'title' => \esc_html__('Custom Category', 'project-text-domain'),
        'icon' => 'admin-settings',
      ],
    ]
  );
}
```

### What if you don't yet support something from the native setup? What can I do?

As we described in [this chapter](blocks), if we don't support something natively from the core or you can't find it in this documentation, you can always use it in the normal native way from the [WordPress documentation](https://developer.wordpress.org/block-editor/tutorials/block-tutorial/). Also, if you think we are missing something, please open a [pull request](https://github.com/infinum/eightshift-frontend-libs/pulls) or an [issue](https://github.com/infinum/eightshift-frontend-libs/issues) on our GitHub repository.

### Why is my blocks folder called `custom` and not `blocks`, for example?

The idea was to put all your custom blocks inside the custom folder and all core block in the core folder. This boilerplate is not designed only for your custom block, but you can use it as an ultimate block setup.

And folder structure `src/Blocks/blocks` is kind of weird.

### In the global manifest, you have a key called “customBlocksName”: “eightshift-block”. Can I change this to my-project-name-block?

You can, but you shouldn't. We use this key to provide the CSS selectors on all our custom blocks in the block editor. Additional styles are added to this selector for the wrapper to work on full width and remove some of the native block editor styles.

So don't remove or change this 😅.

### Simple vs Compound blocks

In a nutshell, there is no difference between blocks. The WordPress core block is a block, but we like to make a distinction between what is simple and what is a compound block.

**Simple block** is a block that is used just as is and provides a small isolated functionality. For example: heading, paragraph, button, etc.

**Compound block** is a block built from multiple components. For example: card, featured posts, etc

### Naming is hard

*There are only two hard things in Computer Science: cache invalidation and naming things. - Phil Karlton*

Yes, naming is hard, and no matter how long your development experience is you will always struggle with names for your components, block, files, variables, functions, etc.

Here are some of our recommendations to ease your pain:
* Always try to name your block based on **what they are**, rather than **what they will be used for**. For example, if you have a component card for custom post-type `books`, you should never call this component `card-book`. Instead, use a more generic name like `card-product`.
* Make your names as generic as possible for better reusability, but specific enough to fully understand what the block/component is used for.
* Always think about the future. How can this feature be used in some other way?
* When naming your attributes ask yourself: "is this attribute going to be used in any other way?". For example, you have an attribute for adding font-weight: bold to your text. You can create an attribute called font-weight and set it as a `boolean` type and that will be ok if you have only one font-weight. A better way would be to put it as a string and provide a `SelectControl` component if there is any possibility that in the future you will have additional font-weight.
* Name booleans positively as a question. Example: `isValid`, `isLoading`, `isComplete`.
* Don’t hesitate to use longer names.
* Use singular names.
* The variables or functions should be named by their work: Name of variables/functions should always try to express their meaning without diving into the code base try to pack meaningful information inside the name.
* Naming should be simple enough to be understood by everyone: Using complex words to describe a simple thing only creates hassle while reading the code. Also, use simple English.
* You might not be the only person working on your particular project in the future. Think about the next person. Your naming will provide an insight into the process and project.
* **BE CONSISTENT**.
