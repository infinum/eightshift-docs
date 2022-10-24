---
id: blocks-block-from-components
title: Creating Block from Components
---

[![docs-source](https://img.shields.io/badge/source-eigthshift--frontend--libs-yellow?style=for-the-badge&logo=javascript&labelColor=2a2a2a)](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/blocks/init/src/blocks/custom/button)

You may wonder: what is the difference between components and blocks? Aren't they the same thing?

They are similar, but not the same. Components are, for lack of a better word, _dumb_. They aren't bothered with the context and they are **reusable**.
This is the keyword in this whole ordeal. One component may be reused in different blocks. Also, the main difference is that the component is not registered in WordPress; its sole purpose is to provide reusable parts for your blocks.

Let's look at an example.
For instance, we want to create a card block. This block consists of an image, a title, and a text.

### Folder structure

First, we'll create a block in the `src/blocks/custom/card` folder. The folder structure will look like this

```shell
|card
| |components
| | |card-editor.js
| | |card-options.js
| |card-block.js
| |card.php
| |card-style.scss
| |manifest.json
```

The `manifest.json` will hold all the default attributes and data about the new block

### Manifest

```json
{
  "blockName": "card",
  "title": "Card",
  "description" : "Card with custom settings.",
  "category": "eightshift",
  "icon": {
    "src": "buddicons-buddypress-logo"
  },
  "keywords": [
    "Service",
    "Box",
    "Card"
  ],
  "hasWrapper": false,
  "parent": [
    "eightshift-boilerplate/cards-grid"
  ],
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
    "heading": {
      "type": "string"
    },
    "paragraph": {
      "type": "string"
    }
  }
}
```

### Components

Next, we want to set up the editor and options component for this block. So in the `components` folder, we'll add `card-editor.js` and `card-options.js` files.

**card-editor.js**

```js
import React from 'react'; // eslint-disable-line no-unused-vars
import { RichText } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';
import { ImageEditor } from '../../../components/image/components/image-editor';

export const CardEditor = (props) => {
  const {
    attributes: {
      blockClass,
      heading,
      paragraph,
      media,
    },
    actions: {
      onChangeHeading,
      onChangeParagraph,
    },
  } = props;

  return (
    <div className={blockClass}>
      <div className={`${blockClass}__media`}>
        <ImageEditor
          blockClass={blockClass}
          media={media}
        />
      </div>
      <div className={`${blockClass}__content`}>
        <div className={`${blockClass}__heading`}>
          <RichText
            placeholder={__('Add Heading', 'eightshift-boilerplate')}
            onChange={onChangeHeading}
            value={heading}
          />
        </div>
        <div className={`${blockClass}__paragraph`}>
          <RichText
            placeholder={__('Add Paragraph', 'eightshift-boilerplate')}
            onChange={onChangeParagraph}
            value={paragraph}
          />
        </div>
      </div>
    </div>
  );
};
```

Notice how we've imported the [`image-editor`](https://github.com/infinum/eightshift-frontend-libs/tree/v2.0.0/blocks/init/src/blocks/components/image/components/image-editor.js) component from the project's component folder. Note that in your project you'd just copy this component from the frontend-libs blocks (that is you'd copy the entire folder in your project as previously described).

Our card editor component will have an `<ImageEditor />` component and two `<RichText />` components (which come from the core editor).

**card-options.js**

```js
import React from 'react'; // eslint-disable-line no-unused-vars
import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { ImageOptions } from '../../../components/image/components/image-options';

export const CardOptions = (props) => {
  const {
    attributes: {
      media,
    },
    actions: {
      onChangeMedia,
    },
  } = props;

  return (
    <PanelBody title={__('Card Details', 'eightshift-boilerplate')}>
      <ImageOptions
        media={media}
        onChangeMedia={onChangeMedia}
      />
    </PanelBody>
  );
};
```

The options component (the one shown on the right side in the editor screen), will only contain the `<ImageOptions />` so that we can upload image in our block.

### Editor render

Back to the block, we need to create the `edit` method functionality and the view that we'll render on the front.

**card-block.js**

```js
import React from 'react'; // eslint-disable-line no-unused-vars
import { Fragment } from '@wordpress/element';
import { InspectorControls } from '@wordpress/editor';
import { getActions } from 'EighshiftBlocksGetActions';
import manifest from './manifest.json';
import { CardEditor } from './components/card-editor';
import { CardOptions } from './components/card-options';
import './hooks';

export const Card = (props) => {

  const {
    attributes,
  } = props;

  const actions = getActions(props, manifest);

  return (
    <Fragment>
      <InspectorControls>
        <CardOptions
          attributes={attributes}
          actions={actions}
        />
      </InspectorControls>
      <CardEditor
        attributes={attributes}
        actions={actions}
      />
    </Fragment>
  );
};
```

Here we'll use our ready-made component (built out of other components - reusability), and wrap it in [React Fragment](https://reactjs.org/docs/fragments.html). It is a pattern used to return multiple elements.

Another thing you'll note is the usage of `<InspectorControls />` [component](https://github.com/WordPress/gutenberg/tree/master/packages/block-editor/src/components/inspector-controls). It is used to display settings of the block in the sidebar (in our case our options that contain the image upload component).
Lastly, both our `<CardEditor />` and `<InspectorControls />` are wrapped in the `<Fragment />` wrapper due to Reacts one top-level element rule. If your block doesn't have options, you can only have `<CardEditor />` component in here.

### PHP view

So all we need now is the PHP view.

**card.php**

```js
<?php
/**
 * Template for the Card Block.
 *
 * @since 1.0.0
 * @package Eightshift_Boilerplate\Blocks.
 */

namespace Eightshift_Boilerplate\Blocks;

$heading   = $attributes['heading'] ?? '';
$paragraph = $attributes['paragraph'] ?? '';
$media     = $attributes['media'] ?? [];

$block_class = $attributes['blockClass'] ?? '';

?>

<div class="<?php echo esc_attr( $block_class ); ?>">

  <?php if ( ! empty( $media ) ) { ?>
    <div class="<?php echo esc_attr( "{$block_class}__media" ); ?>">
      <?php $this->render_block_view(
        '/components/image/image.php',
        [
          'blockClass' => $attributes['blockClass'] ?? '',
          'media'      => $media,
        ]
      );
      ?>
    </div>
  <?php } ?>

  <div class="<?php echo esc_attr( "{$block_class}__content" ); ?>">
    <?php if ( ! empty( $heading ) ) { ?>
      <div class="<?php echo esc_attr( "{$block_class}__heading" ); ?>">
        <?php echo wp_kses_post( $heading ); ?>
      </div>
    <?php } ?>

    <?php if ( ! empty( $paragraph ) ) { ?>
      <div class="<?php echo esc_attr( "{$block_class}__paragraph" ); ?>">
        <?php echo wp_kses_post( $paragraph ); ?>
      </div>
    <?php } ?>
  </div>

</div>

```

Notice how we used

```js
<?php $this->render_block_view(
  '/components/image/image.php',
  [
    'blockClass' => $attributes['blockClass'] ?? '',
    'media'      => $media,
  ]
);
?>
```

To render out our `image` component. Again, we're showing the power of reusability here.

### Styling

You can style them how you want, but we added some default styles

**card-style.scss**

```scss
$block-card: (
  heading: (
    mobile: (
      font-size: 24px,
      line-height: 1.33,
    ),
  ),
  paragraph: (
    mobile: (
      font-size: 18px,
      line-height: 1.5,
    ),
  ),
);

.block-card {
  $this: &;

  &__media {
    margin-bottom: 25px;
  }

  &__img {
    margin: 0 auto;
  }

  &__content {
    text-align: center;
  }

  &__heading {
    @include responsive($block-card, heading);
    font-weight: bold;
  }

  &__paragraph {
    @include responsive($block-card, paragraph);
    margin-top: 15px;
  }
}
```
