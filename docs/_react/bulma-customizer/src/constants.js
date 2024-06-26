export const CSSVAR_KEYS = {
  scheme: [
    {
      id: "scheme-h",
      description:
        "The Scheme's Hue, that is used for backgrounds, borders, and text, in both Light and Dark modes",
    },
    {
      id: "scheme-s",
      description:
        "The Scheme's Saturation, that is used for backgrounds, borders, and text, in both Light and Dark modes",
    },
    { id: "light-l", description: "The lightness of backgrounds" },
    {
      id: "light-invert-l",
      description: "The lightness of backgrounds' invert color",
    },
    {
      id: "dark-l",
      description: "The lightness of dark backgrounds",
    },
    {
      id: "dark-invert-l",
      description: "The lightness of dark backgrounds' invert color",
    },
    { id: "soft-l", description: "The lightness of soft colors" },
    { id: "bold-l", description: "The lightness of bold colors" },
    {
      id: "soft-invert-l",
      description: "The lightness of soft color's invert color",
    },
    {
      id: "bold-invert-l",
      description: "The lightness of bold color's invert color",
    },
    {
      id: "hover-background-l-delta",
      description:
        "Defines how much the lightness will change when a background is hovered",
    },
    {
      id: "active-background-l-delta",
      description:
        "Defines how much the lightness will change when a background is active",
    },
    {
      id: "hover-border-l-delta",
      description:
        "Defines how much the lightness will change when a border is hovered",
    },
    {
      id: "active-border-l-delta",
      description:
        "Defines how much the lightness will change when a border is active",
    },
    {
      id: "hover-color-l-delta",
      description:
        "Defines how much the lightness will change when a color is hovered",
    },
    {
      id: "active-color-l-delta",
      description:
        "Defines how much the lightness will change when a color is active",
    },
    {
      id: "hover-shadow-a-delta",
      description:
        "Defines how much the lightness will change when a shadow is hovered",
    },
    {
      id: "active-shadow-a-delta",
      description:
        "Defines how much the lightness will change when a shadow is active",
    },
  ],
  colors: [
    { id: "primary-h", description: "The Primary color's hue" },
    {
      id: "primary-s",
      description: "The Primary color's saturation",
    },
    { id: "primary-l", description: "The Primary color's lightness" },
    { id: "link-h", description: "The Link color's hue" },
    { id: "link-s", description: "The Link color's saturation" },
    { id: "link-l", description: "The Link color's lightness" },
    { id: "info-h", description: "The Info color's hue" },
    { id: "info-s", description: "The Info color's saturation" },
    { id: "info-l", description: "The Info color's lightness" },
    { id: "success-h", description: "The Success color's hue" },
    {
      id: "success-s",
      description: "The Success color's saturation",
    },
    { id: "success-l", description: "The Success color's lightness" },
    { id: "warning-h", description: "The Warning color's hue" },
    {
      id: "warning-s",
      description: "The Warning color's saturation",
    },
    { id: "warning-l", description: "The Warning color's lightness" },
    { id: "danger-h", description: "The Danger color's hue" },
    { id: "danger-s", description: "The Danger color's saturation" },
    { id: "danger-l", description: "The Danger color's lightness" },
  ],
  typography: [
    { id: "family-primary", description: "The Primary font family" },
    {
      id: "family-secondary",
      description: "The Secondary font family",
    },
    { id: "family-code", description: "The Code font family" },
    { id: "size-small", description: "The Small font size" },
    { id: "size-normal", description: "The Normal font size" },
    { id: "size-medium", description: "The Medium font size" },
    { id: "size-large", description: "The Large font size" },
    { id: "weight-light", description: "The Light font weight" },
    { id: "weight-normal", description: "The Normal font weight" },
    { id: "weight-medium", description: "The Medium font weight" },
    {
      id: "weight-semibold",
      description: "The Semibold font weight",
    },
    { id: "weight-bold", description: "The Bold font weight" },
    {
      id: "weight-extrabold",
      description: "The Extrabold font weight",
    },
  ],
  other: [
    {
      id: "block-spacing",
      description: "The space below Block elements",
    },
    {
      id: "duration",
      description: "The duration of Transitions and Animations",
    },
    {
      id: "easing",
      description: "The timing function of Transitions and Animations",
    },
    { id: "radius-small", description: "The Small border radius" },
    { id: "radius", description: "The Normal border radius" },
    { id: "radius-medium", description: "The Medium border radius" },
    { id: "radius-large", description: "The Large border radius" },
    {
      id: "radius-rounded",
      description: "The Rounded border radius",
    },
    { id: "speed", description: "" },
    {
      id: "arrow-color",
      description: "The arrow color use for Select dropdowns",
    },
    {
      id: "loading-color",
      description: "The color of the loading spinner",
    },
    {
      id: "burger-h",
      description: "The Hue of the burger element lines",
    },
    {
      id: "burger-s",
      description: "The Saturation of the burger element lines",
    },
    {
      id: "burger-l",
      description: "The Lightness of the burger element lines",
    },
    {
      id: "burger-border-radius",
      description: "The border radius of the burger element",
    },
    {
      id: "burger-gap",
      description: "The gap of the burger element",
    },
    {
      id: "burger-item-height",
      description: "The height of the burger element",
    },
    {
      id: "burger-item-width",
      description: "The width of the burger element",
    },
  ],
  generic: [
    {
      id: "body-background-color",
      description: "The page's background color",
    },
    { id: "body-size", description: "The page's font size" },
    { id: "body-min-width", description: "The page's minimum width" },
    { id: "body-rendering", description: "The page's text rendering type" },
    { id: "body-family", description: "The page's font family" },
    {
      id: "body-overflow-x",
      description: "The page's horizontal overflow behavior",
    },
    {
      id: "body-overflow-y",
      description: "The page's vertical overflow behavior",
    },
    { id: "body-color", description: "The page's text color" },
    { id: "body-font-size", description: "The body's font size" },
    { id: "body-weight", description: "The body's font weight" },
    { id: "body-line-height", description: "The body's line height" },
    { id: "code-family", description: "The code elements font family" },
    { id: "code-padding", description: "The code elements padding" },
    { id: "code-weight", description: "The code elements font weight" },
    { id: "code-size", description: "The code elements font size" },
    { id: "small-font-size", description: "The small elements font size" },
    {
      id: "hr-background-color",
      description: "The horizontal rules background color",
    },
    { id: "hr-height", description: "The horizontal rules height" },
    { id: "hr-margin", description: "The horizontal rules margin" },
    { id: "strong-color", description: "The strong elements text color" },
    { id: "strong-weight", description: "The strong elements font weight" },
    { id: "pre-font-size", description: "The pre elements font size" },
    { id: "pre-padding", description: "The pre elements padding" },
    {
      id: "pre-code-font-size",
      description: "The code elements inside pre ones font size",
    },
  ],
  skeleton: [
    {
      id: "skeleton-background",
      description: "The skeleton background color",
    },
    { id: "skeleton-radius", description: "The skeleton border radius" },
    {
      id: "skeleton-block-min-height",
      description: "The minimum height of skeleton blocks",
    },
    {
      id: "skeleton-lines-gap",
      description: "The gap between skeleton lines",
    },
    {
      id: "skeleton-line-height",
      description: "The height of each skeleton line",
    },
  ],
  box: [
    { id: "box-background-color", description: "The box background color" },
    { id: "box-color", description: "The box text color" },
    { id: "box-radius", description: "The box border radius" },
    { id: "box-shadow", description: "The box box shadow" },
    { id: "box-padding", description: "The box padding" },
    {
      id: "box-link-hover-shadow",
      description: "The box link shadow when hovered",
    },
    {
      id: "box-link-active-shadow",
      description: "The box link shadow when active",
    },
  ],
  content: [
    { id: "content-heading-color", description: "The content headings color" },
    {
      id: "content-heading-weight",
      description: "The content headings font weight",
    },
    {
      id: "content-heading-line-height",
      description: "The content headings line height",
    },
    {
      id: "content-block-margin-bottom",
      description: "The content blocks margin bottom",
    },
    {
      id: "content-blockquote-background-color",
      description: "The content blockquotes background color",
    },
    {
      id: "content-blockquote-border-left",
      description: "The content blockquotes left border",
    },
    {
      id: "content-blockquote-padding",
      description: "The content blockquotes padding",
    },
    { id: "content-pre-padding", description: "The content pres padding" },
    {
      id: "content-table-cell-border",
      description: "The content table cells border",
    },
    {
      id: "content-table-cell-border-width",
      description: "The content table cells border width",
    },
    {
      id: "content-table-cell-padding",
      description: "The content table cells heading color",
    },
    {
      id: "content-table-cell-heading-color",
      description: "The content table cells heading color",
    },
    {
      id: "content-table-head-cell-border-width",
      description: "The content table head cells border width",
    },
    {
      id: "content-table-head-cell-color",
      description: "The content table head cells color",
    },
    {
      id: "content-table-body-last-row-cell-border-bottom-width",
      description: "The content table last rows bottom border width",
    },
    {
      id: "content-table-foot-cell-border-width",
      description: "The content table foot cells border width",
    },
    {
      id: "content-table-foot-cell-color",
      description: "The content table foot cells heading color",
    },
  ],
  delete: [
    { id: "delete-dimensions", description: "The delete element dimensions" },
    {
      id: "delete-background-l",
      description: "The delete element background lightness",
    },
    {
      id: "delete-background-alpha",
      description: "The delete element background transparency",
    },
    { id: "delete-color", description: "The delete element color" },
  ],
  icon: [
    { id: "icon-dimensions", description: "The icon element dimensions" },
    {
      id: "icon-dimensions-small",
      description: "The Small icon element dimensions",
    },
    {
      id: "icon-dimensions-medium",
      description: "The Medium icon element dimensions",
    },
    {
      id: "icon-dimensions-large",
      description: "The Large icon element dimensions",
    },
    { id: "icon-text-spacing", description: "The icon element text spacing" },
  ],
  notification: [
    { id: "notification-h", description: "The notification main Hue" },
    { id: "notification-s", description: "The notification main Saturation" },
    {
      id: "notification-background-l",
      description: "The notification background Lightness",
    },
    {
      id: "notification-color-l",
      description: "The notification main text color Lightness",
    },
    {
      id: "notification-code-background-color",
      description: "The notification code background color",
    },
    {
      id: "notification-radius",
      description: "The notification border radius",
    },
    { id: "notification-padding", description: "The notification padding" },
  ],
  progress: [
    {
      id: "progress-border-radius",
      description: "The progress bar border radius",
    },
    {
      id: "progress-bar-background-color",
      description: "The progress bar background color",
    },
    {
      id: "progress-value-background-color",
      description: "The progress value background color",
    },
    {
      id: "progress-indeterminate-duration",
      description: "The progress bar loading animation speed",
    },
  ],
  table: [
    { id: "table-color", description: "The table text color" },
    { id: "table-background-color", description: "The table background color" },
    {
      id: "table-cell-border-color",
      description: "The table cells border color",
    },
    {
      id: "table-cell-border-style",
      description: "The table cells border style",
    },
    {
      id: "table-cell-border-width",
      description: "The table cells border width",
    },
    { id: "table-cell-padding", description: "The table cells padding" },
    {
      id: "table-cell-heading-color",
      description: "The table heading cells text color",
    },
    {
      id: "table-cell-text-align",
      description: "The table cells text alignment",
    },
    {
      id: "table-head-cell-border-width",
      description: "The table head cells border width",
    },
    {
      id: "table-head-cell-color",
      description: "The table head cells text color",
    },
    {
      id: "table-foot-cell-border-width",
      description: "The table foot cells border width",
    },
    {
      id: "table-foot-cell-color",
      description: "The table foot cells text color",
    },
    {
      id: "table-head-background-color",
      description: "The table head background color",
    },
    {
      id: "table-body-background-color",
      description: "The table body background color",
    },
    {
      id: "table-foot-background-color",
      description: "The table foot background color",
    },
    {
      id: "table-row-hover-background-color",
      description: "The table rows hover background color",
    },
    {
      id: "table-row-active-background-color",
      description: "The table rows active background color",
    },
    {
      id: "table-row-active-color",
      description: "The table rows active text color",
    },
    {
      id: "table-striped-row-even-background-color",
      description: "The striped tables alternate rows background color",
    },
    {
      id: "table-striped-row-even-hover-background-color",
      description:
        "The striped tables alternate rows background color when hovered",
    },
  ],
  tag: [
    { id: "tag-h", description: "The tag elements Hue" },
    { id: "tag-s", description: "The tag elements Saturation" },
    {
      id: "tag-background-l",
      description: "The tag elements background Lightness",
    },
    {
      id: "tag-background-l-delta",
      description: "The tag elements background Lightness delta",
    },
    {
      id: "tag-hover-background-l-delta",
      description: "The tag elements background Lightness when hovered",
    },
    {
      id: "tag-active-background-l-delta",
      description: "The tag elements background Lightness when active",
    },
    { id: "tag-color-l", description: "The tag elements text color Lightness" },
    { id: "tag-radius", description: "The tag elements border radius" },
    { id: "tag-delete-margin", description: "The tag delete elements margin" },
  ],
  title: [
    { id: "title-color", description: "The title elements text color" },
    { id: "title-family", description: "The title elements font family" },
    { id: "title-size", description: "The title elements font size" },
    { id: "title-weight", description: "The title elements font weight" },
    { id: "title-line-height", description: "The title elements line height" },
    {
      id: "title-strong-color",
      description: "The title strong elements text color",
    },
    {
      id: "title-strong-weight",
      description: "The title strong elements font weight",
    },
    { id: "title-sub-size", description: "The title sub elements font size" },
    { id: "title-sup-size", description: "The title sup elements font size" },
    { id: "subtitle-color", description: "The subtitle elements text color" },
    { id: "subtitle-family", description: "The subtitle elements font family" },
    { id: "subtitle-size", description: "The subtitle elements font size" },
    { id: "subtitle-weight", description: "The subtitle elements font weight" },
    {
      id: "subtitle-line-height",
      description: "The subtitle elements line height",
    },
    {
      id: "subtitle-strong-color",
      description: "The subtitle strong elements text color",
    },
    {
      id: "subtitle-strong-weight",
      description: "The subtitle strong elements font weight",
    },
  ],
  control: [
    { id: "control-radius", description: "The control elements border radius" },
    {
      id: "control-radius-small",
      description: "The control elements small border radius",
    },
    {
      id: "control-border-width",
      description: "The control elements border width",
    },
    { id: "control-height", description: "The control elements height" },
    {
      id: "control-line-height",
      description: "The control elements line height",
    },
    {
      id: "control-padding-vertical",
      description: "The control elements vertical padding",
    },
    {
      id: "control-padding-horizontal",
      description: "The control elements horizontal padding",
    },
    { id: "control-size", description: "The control elements font size" },
    {
      id: "control-focus-shadow-l",
      description: "The control elements shadow Lightness when focused",
    },
  ],
  file: [
    { id: "file-radius", description: "The file element border radius" },
    {
      id: "file-name-border-color",
      description: "The file name element border color",
    },
    {
      id: "file-name-border-style",
      description: "The file name element border style",
    },
    {
      id: "file-name-border-width",
      description: "The file name element border width",
    },
    {
      id: "file-name-max-width",
      description: "The file name element maximum width",
    },
    { id: "file-h", description: "The file element main Hue" },
    { id: "file-s", description: "The file element main Saturation" },
    {
      id: "file-background-l",
      description: "The file element background Lightness",
    },
    {
      id: "file-background-l-delta",
      description: "The file element background Lightness delta",
    },
    {
      id: "file-hover-background-l-delta",
      description: "The file element background Lightness delta when hovered",
    },
    {
      id: "file-active-background-l-delta",
      description: "The file element background Lightness delta when active",
    },
    { id: "file-border-l", description: "The file element border Lightness" },
    {
      id: "file-border-l-delta",
      description: "The file element border Lightness delta",
    },
    {
      id: "file-hover-border-l-delta",
      description: "The file element border Lightness delta when hovered",
    },
    {
      id: "file-active-border-l-delta",
      description: "The file element border Lightness delta when active",
    },
    { id: "file-cta-color-l", description: "The file CTA element Lightness" },
    { id: "file-name-color-l", description: "The file name element Lightness" },
    {
      id: "file-color-l-delta",
      description: "The file element Lightness delta",
    },
    {
      id: "file-hover-color-l-delta",
      description: "The file element Lightness delta when hovered",
    },
    {
      id: "file-active-color-l-delta",
      description: "The file element Lightness delta when active",
    },
  ],
  input: [
    { id: "input-h", description: "The input element main Hue" },
    { id: "input-s", description: "The input element main Saturation" },
    { id: "input-l", description: "The input element main Lightness" },
    {
      id: "input-border-style",
      description: "The input element main border style",
    },
    {
      id: "input-border-l",
      description: "The input element main border Lightness",
    },

    {
      id: "input-border-l-delta",
      description: "The input element border Lightness delta",
    },
    {
      id: "input-hover-border-l-delta",
      description: "The input element border Lightness delta when hovered",
    },
    {
      id: "input-active-border-l-delta",
      description: "The input element border Lightness delta when active",
    },
    {
      id: "input-focus-h",
      description: "The input element main Hue when focused",
    },
    {
      id: "input-focus-s",
      description: "The input element main Saturation when focused",
    },
    {
      id: "input-focus-l",
      description: "The input element main Lightness when focused",
    },
    {
      id: "input-focus-shadow-size",
      description: "The input element box shadow size when focused",
    },
    {
      id: "input-focus-shadow-alpha",
      description: "The input element box shadow transparency when focused",
    },
    {
      id: "input-color-l",
      description: "The input element text color Lightness",
    },
    {
      id: "input-background-l",
      description: "The input element background Lightness",
    },
    {
      id: "input-background-l-delta",
      description: "The input element background Lightness delta when hovered",
    },
    { id: "input-height", description: "The input element height" },
    { id: "input-shadow", description: "The input element box shadow" },
    {
      id: "input-placeholder-color",
      description: "The input placeholder text color",
    },
    {
      id: "input-disabled-color",
      description: "The input element text color when disabled",
    },
    {
      id: "input-disabled-background-color",
      description: "The input element background when disabled",
    },
    {
      id: "input-disabled-border-color",
      description: "The input element border color when disabled",
    },
    {
      id: "input-disabled-placeholder-color",
      description: "The input placeholder color when disabled",
    },
    { id: "input-arrow", description: "The input arrow element color" },
    { id: "input-icon-color", description: "The input icon element color" },
    {
      id: "input-icon-hover-color",
      description: "The input icon element color when hovered",
    },
    {
      id: "input-icon-focus-color",
      description: "The input icon element color when focused",
    },
    { id: "input-radius", description: "The input element border radius" },
  ],
  columns: [{ id: "column-gap", description: "The gap between columns" }],
  grid: [
    { id: "grid-gap", description: "The gap between Grid cells" },
    {
      id: "grid-column-count",
      description: "The number of columns in the Grid",
    },
    {
      id: "grid-column-min",
      description: "The minimum width of Grid columns",
    },
    {
      id: "grid-cell-column-span",
      description: "How many columns a Grid cell will span",
    },
    {
      id: "grid-cell-column-span",
      description: "How many columns a Grid cell will span",
    },
    {
      id: "grid-cell-column-start",
      description: "At which column a Grid cell will start",
    },
    {
      id: "grid-cell-column-start",
      description: "At which column a Grid cell will start",
    },
  ],
  footer: [
    {
      id: "footer-background-color",
      description: "The footer background color",
    },
    { id: "footer-color", description: "The footer text color" },
    { id: "footer-padding", description: "The footer padding" },
  ],
  hero: [
    { id: "hero-body-padding", description: "The hero body padding" },
    {
      id: "hero-body-padding-tablet",
      description: "The hero body padding on Tablet viewports and wider",
    },
    {
      id: "hero-body-padding-small",
      description: "The Small hero body padding",
    },
    {
      id: "hero-body-padding-medium",
      description: "The Medium hero body padding",
    },
    {
      id: "hero-body-padding-large",
      description: "The Large hero body padding",
    },
  ],
  media: [
    { id: "media-border-color", description: "The media element border color" },
    { id: "media-border-size", description: "The media element border size" },
    { id: "media-spacing", description: "The media element spacing" },
    {
      id: "media-spacing-large",
      description: "The Large media element spacing",
    },
    {
      id: "media-content-spacing",
      description: "The media content element spacing",
    },
    {
      id: "media-level-1-spacing",
      description: "The media element spacing when nested 1 level deep",
    },
    {
      id: "media-level-1-content-spacing",
      description: "The media content element spacing when nested 1 level deep",
    },
    {
      id: "media-level-2-spacing",
      description: "The media element spacing when nested 2 levels deep",
    },
  ],
  section: [
    { id: "section-padding", description: "The section element padding" },
    {
      id: "section-padding-desktop",
      description: "The section element padding on Desktop viewports and wider",
    },
    {
      id: "section-padding-medium",
      description: "The Medium section element padding",
    },
    {
      id: "section-padding-large",
      description: "The Large section element padding",
    },
  ],
};
