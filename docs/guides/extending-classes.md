---
id: extending-classes
title: Extending Classes
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--libs-blue?style=for-the-badge&logo=php&labelColor=2a2a2a)](https://github.com/infinum/eightshift-libs)

We are providing abstract classes, interfaces, helpers, dependency injection and namespaces for your project. In general, you can use anything as-is from the vendor library, or you can modify/add the functionality of existing classes by extending them in your project.

If you are familiar with the extending classes (object inheritance) in PHP language then you can just skip this chapter but for the rest of you here is an awesome description on how it works:

* [Interfaces](https://www.php.net/manual/en/language.oop5.interfaces.php)
* [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection)
* [Abstract Classes](https://www.php.net/manual/en/language.oop5.abstract.php)
* [Object Inheritance](https://www.php.net/manual/en/language.oop5.inheritance.php)
* [Namespaces](https://www.php.net/manual/en/language.namespaces.php)
* [Traits](https://www.php.net/manual/en/language.oop5.traits.php)

Please get acquainted with these concepts before you continue because they will help you in the later chapters.

## Important notes

> PHP part of this project lives in `Eightshift_Libs` namespace.

> When adding a new class, changing the class name or changing the class file name, don't forget to run `composer dump-autoload` to rebuild the autoload map.
