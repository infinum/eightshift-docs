---
id: components-heading-level
title: Heading Level
---

This is a custom react component the renders a custom heading level. It is used in heading component or block.

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

Defines minimal value to show for heading 

Default: 1

#### maxLevel

Defines maximal value to show for heading 

Default: 6

#### selectedLevel

Defines selected level value to show for heading 


#### onChange

On Change callback method for saving the components attributes.
