module.exports = {
  docs: {
    "Getting Started": [
      "theme",
      "plugin"
    ],
    "The Basics": [
      "introduction",
      "libs",
      "frontend-libs"
    ],
    "Guides": [
      "guides/extending-classes",
      "guides/di-container",
      "guides/config",
      "guides/manifest",
      "guides/enqueue",
      "guides/post-type",
      "guides/taxonomy",
      {
        "type": "category",
        "label": "Blocks",
        "items": [
          "guides/blocks-registration",
          "guides/blocks-structure",
          "guides/blocks-structure-block-item",
          "guides/blocks-structure-component",
          "guides/blocks-structure-manifest",
          "guides/blocks-block-from-components",
          "guides/blocks-render-block-view-helper",
          "guides/blocks-get-actions-helper",
          "guides/blocks-filter-block-attributes-override"
        ]
      },
      "guides/i18n",
      "guides/media",
      "guides/menu",
      {
        "type": "category",
        "label": "Rest API",
        "items": [
          "guides/rest-intro",
          "guides/rest-field-example",
          "guides/rest-route-example"
        ]
      },
      {
        "type": "category",
        "label": "Listing Columns",
        "items": [
          "guides/columns-post-type",
          "guides/columns-taxonomy",
          "guides/columns-user"
        ]
      },
      "guides/login",
      {
        "type": "category",
        "label": "Fonts",
        "items": [
          "guides/fonts-custom",
          "guides/fonts-icon"
        ]
      }
    ],
    "Advanced": [
      "advanced/docs-storybook",
      "advanced/docs-sass",
      "advanced/webpack",
      {
        "type": "category",
        "label": "Helpers",
        "items": [
          "advanced/helpers-aliases-helpers",
          "advanced/helpers-object-helpers",
          "advanced/helpers-components-helpers",
          "advanced/helpers-shortcode-helpers",
          "advanced/helpers-error-logger-helpers"
        ]
      },
      {
        "type": "category",
        "label": "Custom Components",
        "items": [
          "advanced/components-color-palette",
          "advanced/components-heading-level"
        ]
      },
      {
        "type": "category",
        "label": "Custom Installation",
        "items": [
          "advanced/installation-boilerplate-custom",
          "advanced/installation-libs",
          "advanced/installation-frontend-libs"
        ]
      }
    ]
  },
};
