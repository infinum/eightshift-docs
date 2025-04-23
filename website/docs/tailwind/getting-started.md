---
id: getting-started
title: Getting started
---

To set up a new theme, check the docs for creating a new [theme](/docs/theme) or [plugin](/docs/plugin).

## Editor setup

While you can use any editor, you'll probably have the best Tailwind experience in Visual Studio Code.

First, install the official [TailwindCSS IntelliSense extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss).

This will enable autocomplete, error detection, and a feature where you can hover on a Tailwind class and see what CSS it'll output.

To expand this into JSON files (for use in manifests), add this to your *User settings* JSON:
```
"editor.quickSuggestions": {
	"strings": "on"
},
"tailwindCSS.includeLanguages": {
	"plaintext": "html",
	"json": "html"
},
"tailwindCSS.classAttributes": [
	"class",
	"className",
	"ngClass",
	".*Class",
	".*ClassName",
	"additionalClass",
	"twClasses",
	"twClassesEditor",
	"twClassesEditorOnly"
],
"tailwindCSS.experimental.classRegex": [
	"\"twClasses\\w*\":\\s\"(.*)\"",
	["\"twClasses\\w*\":\\s{([^}]*)}", "\":\\s\"(.*)\""],
	"getTwClasses\\(attributes, manifest, '(.*)'\\)",
	"getTwPart\\(.+, manifest, '(.*)'\\)",
	"className:\\s[\"'](.*)[\"']",
	"\\w+ClassName:\\s[\"'](.*)[\"']",
	"\\additionalClass\\w*:\\s[\"'](.*)[\"']",
],
```

Now you should get auto-completions and see advanced highlighting within your manifests!

### Other editors

While there are no official extensions for other editors, here are some resources that might be useful:
- [NeoVim](https://elijahmanor.com/blog/neovim-tailwindcss)
- [JetBrains (PHPStorm / WebStorm)](https://www.jetbrains.com/help/phpstorm/tailwind-css.html#ws_css_tailwind_preview_resulting_css)
