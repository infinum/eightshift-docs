module.exports = {
  docs: {
    "Getting Started": [
      "welcome",
      "eightshift-libs",
      "eightshift-frontend-libs",
      "requirements",
      "theme",
      "plugin",
    ],
    "Basics": [
      'basics/basics',
      'basics/wp-cli',
      {
        "type": "category",
        "label": "Backend Stuff",
        "items": [
          "basics/backend",
          "basics/namespaces",
          "basics/extending-classes",
          "basics/autowiring",
          "basics/example-class",
          "basics/the-structure",
          "basics/manifest",
          {
            "type": "category",
            "label": "Rest",
            "items": [
              "basics/rest",
              "basics/rest-field",
              "basics/rest-route",
            ]
          },
        ]
      },
      {
        "type": "category",
        "label": "Frontend Stuff",
        "items": [
          "basics/frontend",
          "basics/webpack",
          "basics/library",
          "basics/global-settings",
          "basics/writing-styles",
          "basics/fonts",
          "basics/browser-sync",
          "basics/dynamic-import",
        ]
      },
      {
        "type": "category",
        "label": "Blocks",
        "items": [
          "basics/blocks",
          "basics/blocks-important",
          "basics/blocks-intro",
          "basics/blocks-registration",
          "basics/blocks-structure",
          "basics/blocks-global-manifest",
          "basics/block-structure",
          "basics/blocks-component-structure",
          "basics/block-manifest",
          "basics/blocks-component-manifest",
          "basics/blocks-attributes",
          "basics/blocks-component-in-block",
          "basics/blocks-wrapper",
          "basics/blocks-variations",
          "basics/blocks-patterns",
          "basics/blocks-transforms",
          "basics/blocks-hooks",
          "basics/blocks-special-use-cases",
          "basics/blocks-reusable",
          "basics/blocks-styles",
          "basics/blocks-storybook",
        ]
      },
      {
        "type": "category",
        "label": "Helpers",
        "items": [
          'basics/helpers',
          'basics/helpers-javascript',
          'basics/helpers-scss',
          'basics/helpers-php',
        ]
      },
    ],
    "Advanced": [
      'advanced/additional-libraries',
      'advanced/the-eightshift-way',
      'advanced/custom-eightshift-libs-usage',
      'advanced/custom-eightshift-frontend-libs-usage',
    ],
    "Legacy": [
      {
        "type": "category",
        "label": "v4",
        "items": [
          {
            "type": "category",
            "label": "Getting Started",
            "items": [
              "legacy/v4/theme",
              "legacy/v4/plugin",
            ]
          },
          {
            "type": "category",
            "label": "The Basics",
            "items": [
              "legacy/v4/introduction",
              "legacy/v4/libs",
              "legacy/v4/frontend-libs"
            ]
          },
          {
            "type": "category",
            "label": "Guides",
            "items": [
              "legacy/v4/guides/extending-classes",
              "legacy/v4/guides/di-container",
              "legacy/v4/guides/config",
              "legacy/v4/guides/manifest",
              "legacy/v4/guides/enqueue",
              "legacy/v4/guides/post-type",
              "legacy/v4/guides/taxonomy",
              {
                "type": "category",
                "label": "Blocks",
                "items": [
                  "legacy/v4/guides/blocks-registration",
                  "legacy/v4/guides/blocks-structure",
                  "legacy/v4/guides/blocks-structure-block-item",
                  "legacy/v4/guides/blocks-structure-component",
                  "legacy/v4/guides/blocks-structure-manifest",
                  "legacy/v4/guides/blocks-block-from-components",
                  "legacy/v4/guides/blocks-render-block-view-helper",
                  "legacy/v4/guides/blocks-get-actions-helper",
                  "legacy/v4/guides/blocks-filter-block-attributes-override"
                ]
              },
              "legacy/v4/guides/i18n",
              "legacy/v4/guides/media",
              "legacy/v4/guides/menu",
              {
                "type": "category",
                "label": "Rest API",
                "items": [
                  "legacy/v4/guides/rest-intro",
                  "legacy/v4/guides/rest-field-example",
                  "legacy/v4/guides/rest-route-example"
                ]
              },
              {
                "type": "category",
                "label": "Listing Columns",
                "items": [
                  "legacy/v4/guides/columns-post-type",
                  "legacy/v4/guides/columns-taxonomy",
                  "legacy/v4/guides/columns-user"
                ]
              },
              "legacy/v4/guides/login",
              {
                "type": "category",
                "label": "Fonts",
                "items": [
                  "legacy/v4/guides/fonts-custom",
                  "legacy/v4/guides/fonts-icon"
                ]
              }
            ],
          },
          {
            "type": "category",
            "label": "Advanced",
            "items": [
              "legacy/v4/advanced/docs-storybook",
              "legacy/v4/advanced/docs-sass",
              "legacy/v4/advanced/webpack",
              "legacy/v4/advanced/browsersync",
              {
                "type": "category",
                "label": "Helpers",
                "items": [
                  "legacy/v4/advanced/helpers-aliases-helpers",
                  "legacy/v4/advanced/helpers-object-helpers",
                  "legacy/v4/advanced/helpers-components-helpers",
                  "legacy/v4/advanced/helpers-shortcode-helpers",
                  "legacy/v4/advanced/helpers-error-logger-helpers"
                ]
              },
              {
                "type": "category",
                "label": "Custom Components",
                "items": [
                  "legacy/v4/advanced/components-color-palette",
                  "legacy/v4/advanced/components-heading-level"
                ]
              },
              {
                "type": "category",
                "label": "Custom Installation",
                "items": [
                  "legacy/v4/advanced/installation-boilerplate-custom",
                  "legacy/v4/advanced/installation-libs",
                  "legacy/v4/advanced/installation-frontend-libs"
                ]
              }
            ]
          },
        ]
      },
    ],
  },
};
