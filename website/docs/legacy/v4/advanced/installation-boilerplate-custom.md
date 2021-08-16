---
id: installation-boilerplate-custom
title: Integrating Boilerplate in existing project
---

> Integrating boilerplate in to an existing project is no trivial task! If possible, we highly recommend starting with a [new theme](theme.md) or a [new plugin](plugin.md).

## Setting up boilerplate in your own project

99% of the Boilerplate functionality is contained in these 2 libs. In order to have your own project work like a Boilerplate, you need to implement both of these libraries in your project.

Here's what you need to do:
1. [Install Eightshift Libs](installation-libs)
2. [Install Eightshift Frontend Libs](installation-frontend-libs)

Implementing of this library inside your existing project is not that trivial.

That is why we created a boilerplate repository that incorporates this library. To see the detailed implementation and how it works in action check the [Eightshift Boilerplate repo](https://github.com/infinum/eightshift-boilerplate).

**In order to incorporate this lib inside your project you need to have:**

1. [Node.js](https://nodejs.org/en/) and [Composer](https://getcomposer.org/) installed on your system

**Implementation process:**

1. Install the front-end library and backend library

    ```shell script
    npm install @eightshift/frontend-libs

    composer require infinum/eightshift-libs
    ```

2. If you have an existing Webpack config, look at how the config is set up on this [link](webpack) and merge any changes you have.

3. Follow the steps on [Eightshift Libs](installation-libs) custom instalation.

4. Follow the steps on [Eightshift Frontend Libs](installation-frontend-libs) custom instalation.

<div class="legacy-badge legacy-badge--v4"></div>
