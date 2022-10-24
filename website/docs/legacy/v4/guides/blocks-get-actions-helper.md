---
id: blocks-get-actions-helper
title: GetActions Helper
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/scripts/get-actions.js)


This helper will create attributes actions from blocks `manifest.json`.
Actions are passed in child components to update props on an event (`onChange`, `onClick`, etc.).

## Default Attribute

Default function output is `onChange` + attribute name.
Example: `onChangeContent`.

`manifest.json`

```json
{
  "attributes": {
    "content": {
      "type": "string"
    },
    "styleSize": {
      "type": "string",
      "default": "default"
    }
  }
}
```

### Usage

```js
import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

const actions = getActions(props, manifest);
```

Output:

```js
const actions = {
  onChangeContent: (value) => {
    setAttributes({
      content: value,
    });
  },
  onChangeStyleSize: (value) => {
    setAttributes({
      styleSize: value,
    });
  },
};
```

## Media Attribute

If the attribute needs to save multiple values at the same time for media (images, video, etc.). `ID` value is used on the front-end using the PHP methods to fetch images, and `URL` is used in the editor to provide image preview.

`manifest.json`

```json
{
  "attributes": {
    "media": {
      "type": "object",
      "default": {
        "id": 0,
        "url": "",
        "title": ""
      },
      "items": {
        "type": "object"
      },
      "mediaAction": true
    },
  }
}
```

### Usage

```js
import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

const actions = getActions(props, manifest);
```

Output:

```js
const actions = {
  onChangeMediaContent: (value) => {
    setAttributes({
      media: {
        id: 0,
        url: "",
        title: "",
      },
    });
  },
};
```


## Object/Array Attribute

If attribute needs to save multiple values at the same time, generally used for arrays and objects.

`manifest.json`

```json
{
  "attributes": {
    "heading": {
      "type": "object",
      "default": {
        "content": "",
        "level": 2,
        "styleAlign": "left",
      },
      "items": {
        "type": "object"
      },
      "multipleProps": true
    }
  }
}
```

### Usage

```js
import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';

const actions = getActions(props, manifest);
```

Output:

```js
const actions = {
  onChangeHeadingContent: (value) => {
    setAttributes({
      content: value,
    });
  },
  onChangeHeadingLevel: (value) => {
    setAttributes({
      level: value,
    });
  },
  onChangeHeadingStyleAlign: (value) => {
    setAttributes({
      styleAlign: value,
    });
  },
};
```
