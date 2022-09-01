---
id: blocks
title: Blocks
---

[![docs-source](https://img.shields.io/badge/source-eightshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/6.0.0/blocks/init/src/blocks/)

Since WordPress 5.0, we were introduced to the new editing experience using the so-called Gutenberg blocks. With blocks, the idea is to have the same look and feel in the editor as on the front end. As a developer, you just got a new technology that you should know if you want to build a great project on WordPress. That new technology is React because everything regarding blocks is done using React.

Don't get discouraged just yet, because the WordPress team has made the process of creating blocks relatively easy. But we are not here to talk about the simple stuff. We want to do more complex projects with custom blocks, so follow along and see what we have prepared here.

> You can read everything regarding blocks in the [WordPress documentation](https://developer.wordpress.org/block-editor/tutorials/block-tutorial/). We will not be explaining how everything natively works in this documentation. Instead, we will only describe how to use our setup and how it correlates with the native one. Everything that you can't find here, please look up in the WordPress Handbook.

## Types of blocks

WordPress Core Editor team has provided us with two different kinds of blocks:

- Static blocks
- Dynamic blocks


### Static blocks

These are the blocks that you can see in the core. Almost every block from WordPress comes this way. With static blocks, you have the same content on the front end as you do in the editor. This was accomplished by providing the same layout in the save callback as in the edit callback.

The drawback of building blocks this way is that you must also provide the HTML markup that you will use on the front-end, inside the save callback. That method saves everything to the database, and you can't just change the HTML markup without some transformations or deprecation methods. If you change the markup while working on it, you'll get an error in the editor screen, and you'll have to add the content again.

We don't like this approach because of how it stores the HTML content in the database. Lucky for us, WordPress has provided a different kind of blocks for this matter. They are called dynamic blocks.

### Dynamic blocks

As you already saw in the previous chapter, the main difference between static and dynamic blocks is storing content in the database. For many dynamic blocks, the save callback function should be returned as null, which tells the editor to save only the block attributes to the database. These attributes are then passed into the server-side rendering callback, so you can decide how to display the block on the front end of your site.

This means that you write code using React and JSX in the editor, and you must provide the same code in the PHP for the front-end. Yes, it is a lot of work because you must switch technologies and do the same thing multiple times, but we tried to make this process as simple as possible.

Follow along and see what we prepared. From now on, we'll be talking only about dynamic blocks in this documentation.

## Eightshift blocks

Our setup's main advantage is that you don't need to do a bunch of boilerplate every time you want to create a new block for your project. Also, we have a bunch of cool features we think you might like:

- Separated blocks from components.
- You have a predefined structure for everything.
- If you follow the structure we provided, everything is registered and called automatically.
- You don't have to worry: "did I register this the right way?", "what style goes where?", etc.
- Storybook for your project.
- A dozen of the pre-created blocks from our end. Once we create a new block in some of our projects, we make it available in the libs.
- Easy usage of blocks and components with our [WP-CLI](wp-cli) commands.
- Setup that shares configuration between JS, PHP, and SCSS files.
- Wrapper that comes with every block and allows you to control how a block behaves in the layout entirely.
- Everything is responsive. Yes, you read that correctly; we created options that you can control on multiple breakpoints.
- **Everything is configurable and editable from your project.**
- Linting standards.
- Multiple helpers work the same on JS and PHP side, so it is easy to copy code from one language to another.
- And much, much more.
