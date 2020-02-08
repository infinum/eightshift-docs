---
id: boilerplate-in-existing-project
title: Integrating Boilerplate in existing project
sidebar_label: Integrating Boilerplate in existing project
---

> Integrating boilerplate in to an existing project is no trivial task! If possible, we highly recommend starting with a [new theme](/eightshift-docs/docs/theme-index) or a [new plugin](/eightshift-docs/docs/plugin-index).

## Boilerplate building blocks

In order to setup Boilerplate in your own project, you need to understand what makes boilerplate tick. In theory, this is simple, you have 2 parts.

### 1. Eightshift libs - [docs](/eightshift-docs/docs/libs-index) | [github](https://github.com/infinum/eightshift-libs)

This is where all the backend (PHP) code is kept. Think abstract classes, interfaces, dependency injection, asset enqueuing, filter & actions.

### 2. Eightshift frontend libs - [docs](/eightshift-docs/docs/frontend-libs-index) | [github](https://github.com/infinum/eightshift-frontend-libs)

This is where all the frontend (JS, SCSS, assets) code is kept.

## Setting up boilerplate in your own project

99% of the Boilerplate functionality is contained in these 2 libs. In order to have your own project work like a Boilerplate, you need to implement both of these libraries in your project.

Here's what you need to do:
1. [Install eightshift libs](/eightshift-docs/docs/libs/libs-instalation)
2. [Install eightshift frontend libs](/eightshift-docs/docs/frontend-libs/frontend-libs-instalation)
