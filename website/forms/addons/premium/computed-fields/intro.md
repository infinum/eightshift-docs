---
id: intro
title: Intro
---

Computed Fields add-on provides the ability to do more advanced calculations and complex logic using a custom, PHP-based programming language. Multiple output variables can be set to further customize the output.

## What are Computed Fields?

_Forms computed language_ (FCL) is a subset of PHP designed to be safe to execute when the code entered is arbitrary user input, while allowing users to manipulate variables, use flow control features and run functions.

It relies on `@nikic/php-parser` to produce an abstract syntax tree, and implements a `virtual machine` for evaluating a subset of PHP tokens in a safe manner in PHP.

## Supported features and tokens

* Basic variables (numeric, boolean and string types)
* Fetching constants from PHP
* Arithmetic and logical operators (`+, -, /, *, !, &&, ||`)
* Assignment operators (`+=, .= etc.`)
* Comparison operators (`<, <=, ==`), string concatenation
* `if/elseif/else` blocks
* The ternary `if ? then : else` operator
* Unary plus and minus (e.g. `-1, +1` are valid)
* Function calls to FCL-provided functions (`currently`, `countSelectedItems`, `round` and `isSelected`)

## Notably missing or different

* Arrays can't be defined or manipulated with using FCL, apart from arrays that are defined during VM initialization (which can be counted and checked to see if an entry exists)
* `++`, `--` and `===` operators
* `switch` and `match` blocks
* User-defined functions
* OOP and namespaces
* References and unpacking
* Superglobals (`$_GET` etc.)
* Output to `stdout`, files etc. (you can not echo anything)
