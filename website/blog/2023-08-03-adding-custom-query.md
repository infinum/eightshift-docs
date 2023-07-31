---
title: Working with custom queries
description: Explains the process of registering a new service class, adding a custom query and using it in a block.
slug: working-with-custom-queries
authors: obradovic

date: 2023-08-01
tags: [eightshift, boilerplate, service, class, query]
hide_table_of_contents: false
---

Eightshift DevKit offers some blocks with query logic out of the box, but what is the best approach when you need to add a custom query to a block you’ve been working on?
<!--truncate-->

## Usage in built-in blocks

One of the Eightshift blocks that already uses `WP_Query` is the ***Featured Content*** block. In that block, you can see the query logic is inside the block. However, there is a much better way to do it. The reason it was done like this was to simplify this block and to have an already functioning block available with one WP-CLI command.

A much better approach would be to separate the query logic from the block. Other than following the MVC architecture more closely, this will also make the query logic more reusable. To do this, we’re gonna create a service class.

## What are Service classes?

*Put simply, a Service is any PHP object that performs some sort of "global" task. - Symfony docs*

If you take a look at the `ServiceInterface` interface, you’ll notice it only contains the `register()` method. This method holds action and filter hooks for that class. Other than hooking into existing actions and filters, this method can be used to register our own filters which can be used in blocks or other classes.

Basically, whenever you need to hook into actions or filters, you should use a Service class for that.

## Creating a new service class

Creating a new service class in your project is as simple as using the following WP-CLI command:

```bash
wp boilerplate create service-example --folder=CustomQuery --file_name=CustomQuery
```

Once this new class is generated, you can add a new public method that will contain the query logic. We want our method to accept three optional arguments:

- ID of the category
- number of posts per page
- number of the current page

Having the category ID optional will allow for one more use case, and that is fetching the latest posts regardless of category. By default, WordPress sorts the posts by publish date, from newest to oldest.

```php
/**
 * Get posts by category ID.
 *
 * @param int $categoryId Category ID.
 * @param int $postsPerPage Number of posts per page.
 * @param int $currentPage Current page number.
 *
 * @return WP_Query Query object.
 */
public function getPostsByCategory($categoryId = null, $postsPerPage = 3, $currentPage = 1): WP_Query
{
	$postArgs = [
		'post_type' => 'post',
		'cat' => $categoryId,
		'posts_per_page' => $postsPerPage,
		'paged' => $currentPage,
	];

	return new WP_Query($postArgs);
}
```

To use this method, we can add it as a filter. The filter name should be added as a constant for easier maintenance. Inside the `register()` method, add the following:

```php
\add_filter(self::GET_POSTS_BY_CATEGORY, [$this, 'getPostsByCategory'], 10, 3);
```

## Using the new filter

:::note
Even if you register a filter for a method that doesn’t accept any arguments, when calling `apply_filters`, you must pass at least 1 parameter. In those cases, simply add `null` as a parameter.
:::

Here are some examples how you can use the filter:

```php
// Get 3 latest posts, regardless of category.
$allLatestPosts = apply_filters(CustomQuery::GET_POSTS_BY_CATEGORY, null);

// Get 10 latest posts from the News category. News category ID is 2.
$latestNews = apply_filters(CustomQuery::GET_POSTS_BY_CATEGORY, 2, 10);

// Get another page of News category.
$pagedNews = apply_filters(CustomQuery::GET_POSTS_BY_CATEGORY, 2, 10, $currentPage);
```

The above example shows multiple use cases. The first two examples could be used in a simple block that displays only the selected number of the latest posts. The last example may be used in a REST route for a load more functionality or in a block with classic pagination.

Now you can do a regular query loop in your block to display the posts:

```php
if ($latestNews->have_posts()) {
	while ($latestNews->have_posts()) {
		$latestNews->the_post();
		// render the card here with the Components::render helper.
	}
}
wp_reset_postdata();
```

:::caution Important
Don't forget to add `wp_reset_postdata()` after looping through the custom query!
:::

## Prepare only the data you need

If you would like to improve this even further, you can run the `have_posts()` loop inside the class and save only the data you need to render to an array. This makes the logic even more separated from the view and all you have to do in a block is loop through the array and populate the component attributes with the values from the array.

```php
$postData = [];

if ($queryData->have_posts()) {
	while($queryData->have_posts()) {
		$queryData->the_post();

		$postData[] = [
			'id' => get_the_ID(),
			'title' => get_the_title(),
			'url' => get_permalink(),
			'image' => get_the_post_thumbnail_url(),
			'date' => get_the_time('d.m.Y.'),
			'excerpt' => get_the_excerpt(),
		];
	}
}

wp_reset_postdata();

return $postData;
```

## Best practices for queries

It’s important to have query optimisation in mind. Some queries may be a lot slower and you have to see if there is any way to follow the [best practices for database queries](https://infinum.com/handbook/wordpress/coding-standards/php-coding-standards/database-queries).
