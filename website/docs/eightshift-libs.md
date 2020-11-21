---
id: eightshift-libs
title: Eightshift Libs
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

This library is aimed at bringing the modern backend development tools to the [Eightshift Boilerplate](https://github.com/infinum/eightshift-boilerplate) or [Eightshift Boilerplate Plugin](https://github.com/infinum/eightshift-boilerplate-plugin), but you can use it on any WordPress project.

It uses a dependency injection container that provides a way to inject dependencies into classes to obey the single responsibility principle (SRP). Every class is responsible for registering its hooks, loaded automatically by the dependency injection container. This provides a more testable environment for your project.

We provide some helpers, abstract classes, interfaces, and abstractions on original WordPress functionality to help you write more modern code.

## Prerequisites

We focus on modern development principles, so you should be familiar with PHP Object oriented principles and SOLID design patterns. But don't be discouraged if you don't know all of this because we have a lot of examples and tutorials to help you learn stuff and become a better developer.

### The library contains
- Dependency injection container.
- PSR-12 autoloader.
- Autowiring of your service classes.
- WP-CLI commands to get all the features in your project using a single terminal command.
- Interfaces.
- Abstract classes.
- Helpers.
- ...

## How to integrate into an existing project

Please visit this [link](advanced/installation-boilerplate-custom) for more details.

## Who do I talk to?

If you have any questions or problems, please [open an issue](https://github.com/infinum/eightshift-libs/issues) on GitHub, and we will do our best to give you a timely answer.
