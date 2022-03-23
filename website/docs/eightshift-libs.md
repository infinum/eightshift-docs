---
id: eightshift-libs
title: Eightshift Libs
---

[![docs-source](https://img.shields.io/badge/source-eightshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

This library is aimed at bringing modern back-end development tools to the [Eightshift Boilerplate](https://github.com/infinum/eightshift-boilerplate) or [Eightshift Boilerplate Plugin](https://github.com/infinum/eightshift-boilerplate-plugin), but you can use it on any WordPress project.

It uses a dependency injection container that provides a way to inject dependencies into classes to obey the single responsibility principle (SRP). Every class is responsible for registering its hooks, loaded automatically by the dependency injection container. This provides a more testable environment for your project.

We provide helpers, abstract classes, interfaces, and abstractions on original WordPress functionality to help you write more modern code.

## Prerequisites

In our projects, we use object-oriented PHP, design patterns, and the SOLID principle. When you work on complex projects with various third-party integrations, it makes sense to use our boilerplate. You want your code to be easily extended, testable, and future-proof.

If all you need is a simple website, some of these concepts might be too much for you, and you won't see many benefits in using them. This is totally valid. We need to pick our battles and decide for ourselves what is the best tool for the job.

If you want to try our setup, but you might not be as versed in the above concepts, don't worry. We have lots of examples and we tried to make them easy to follow.

### The library contains

- Dependency injection container
- PSR-4 autoloader
- Autowiring of your service classes
- WP-CLI commands to get all the features in your project using a single terminal command
- Interfaces
- Abstract classes
- Helpers
- ...

## How to integrate into an existing project

The process of integrating the libs into an existing project is not easy, because it really depends on how your theme or plugin is built. Our libs expect the usage of namespacing, and adding namespace in a non namespaced codebase can potentially cause breakage.

You can try to manually add the backend libs using composer and frontend using npm, but the process of connecting everything up can be a complex one. So we recommend starting from a clean slate.

## Who do I talk to?

If you have any questions or problems, please [open an issue](https://github.com/infinum/eightshift-libs/issues) on GitHub, and we will do our best to give you a timely answer.
