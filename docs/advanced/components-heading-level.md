---
id: components-heading-level
title: Heading Level
---

This is a custom React component that renders a custom heading level (`<h1>` to `<h6>`). It is used in the heading component or block.

## Usage

```js
import { HeadingLevel } from 'EightshiftComponentHeadingLevel';

{onChangeLevel &&
  <HeadingLevel
    selectedLevel={level}
    onChange={onChangeLevel}
  />
}
```

### Options

#### minLevel

Defines the minimum value to show in a heading.

Default: 1

#### maxLevel

Defines the maximum value to show in a heading.

Default: 6

#### selectedLevel

Defines the selected level value to show in a heading.

#### onChange

On Change callback method for saving the attributes of the component.
