---
title: Using Custom Post Types and Taxonomies
description: How to register and use custom post types and taxonomies with Eightshift Dev Kit
slug: using-cpts-and-taxonomies
authors: obradovic
date: 2022-12-13
tags: [eightshift, boilerplate, cpt, custom post type, taxonomy, taxonomies, terms]
hide_table_of_contents: false
---

 WordPress offers two default ways to group content by content type - using posts or pages. Posts and pages are registered as default post types in the WordPress app. But sometimes, that is not enough. That's where custom post types (CPT) and custom taxonomies come in. This blog post will cover the basics of registering CPTs and taxonomies using Eightshift Dev Kit.

<!--truncate-->
## Why should you use CPTs?
The great thing about WordPress is how extensible it is. With projects becoming more complex, the need for additional post types and taxonomies increases. Sure, you can cram everything into default posts or pages, but this can become very chaotic. Using custom post types allows you to manage your content much better. You can separate events and projects from news articles for instance.

Post `category` and `tag` are taxonomies - a grouping you can further separate by terms belonging to that taxonomy. WordPress, since version 2.3.0 offers a way to register your own, custom taxonomies.

## Registering Custom Post Types
For this exercise, we'll create a new post type called `Projects`. To make the process of registering new CPTs as easy as possible, we'll use a WP-CLI command to create our CPT with the following command:

```bash
wp boilerplate create post-type --label='Project' --plural_label='Projects' --slug='project' --rewrite_url='project' --rest_endpoint_slug='projects'
```

:::tip
If your new CPT is not working, try flushing rewrite rules by re-saving the settings in **Settings -> Permalinks** or by using `wp cache flush` CLI command
:::

Your new post type is registered and ready to use! Easy, right?

Sometimes all these parameters can be a bit confusing, so here's a quick reference of best practices when setting these parameters:

| Parameter          | Singular/Plural | Writing style | Example  |
|--------------------|-----------------|---------------|----------|
| label              | Singular        | Regular       | Project  |
| plural_label       | Plural          | Regular       | Projects |
| slug               | Singular        | kebab-case    | project  |
| rewrite_url        | Singular        | kebab-case    | project  |
| rest_endpoint_slug | Plural          | kebab-case    | projects |

There is a reason for this naming convention. For example:
- `slug` is attached to a single custom post type in the database, which is why it is written in singular
- `rest_endpoint_slug` is used to fetch a collection of posts from that custom post type, which is why it should be written in plural

## Registering Taxonomies
Now that we have the new custom post type, we need a way to group the projects. We'll create a custom taxonomy called `Project Technology`. As with the CPT registration, the easiest way to register taxonomies is by using the following WP-CLI command:

```bash
wp boilerplate create taxonomy --label='Project Technology' --plural_label='Project Technologies' --slug='project-technology' --rest_endpoint_slug='project-technologies' --post_type_slug='project'
```

Similar suggestions apply to the parameters when naming taxonomies as well. Be sure to write the correct post type slug for which you are registering this new taxonomy!

## Structure
When checking your codebase after adding these new custom post types and taxonomies, you'll notice the post types are located inside the `src/CustomPostType` folder, and the taxonomies are located inside the `src/CustomTaxonomy` folder. Following the **Single Responsibility Principle**, each post type or taxonomy is in a separate class.

## Modifying options
Our custom post type and taxonomy are ready to use, but we still want to make some changes. For starters, we want another icon and for the Projects to be located below the Posts in the WordPress admin menu. In `src/CustomPostType/ProjectPostType.php`, find the `MENU_POSITION` constant and change it to `5`. The lower the number, the higher it will be in the menu.

Next, we want to update the icon representing the new post type in the menu. These icons are named dashicons. Change the `MENU_ICON` constant to `dashicons-clipboard`. If you want another icon for your CPT, here is the list of [available dashicons](https://developer.wordpress.org/resource/dashicons/). Finally, we want to remove the author and comments. In `getPostTypeArguments()` method, find the key `supports` in the return value and remove `author` and `comments` from the array.

## Clashing slugs
Something that can happen when working on your project is that you have the same slugs for your custom post type and your page, for example. Let's say you have a page with a slug `project`, and a custom post type with a slug `project`. When trying to access the page, you'll keep getting the Project CPT archive. To fix it, you have to change one of the slugs or write a custom redirection rule (which we don't recommend, as the redirections are tricky to handle in WordPress).

## Further reading
For the best overview of all the options you have when registering your custom post type or taxonomy, we recommend checking the official WordPress docs for the [register_post_type()](https://developer.wordpress.org/reference/functions/register_post_type/) and [register_taxonomy()](https://developer.wordpress.org/reference/functions/register_taxonomy/) functions.

If you would like to know more about taxonomies and terms, along with how they are stored in the database, you can read more about it in the [Categories, Tags, & Custom Taxonomies](https://developer.wordpress.org/themes/basics/categories-tags-custom-taxonomies/) page of the WordPress docs.
