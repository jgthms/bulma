export const CSSVAR_KEYS = {
  scheme: [
    {
      id: "scheme-h",
      description:
        "Defines the Scheme's Hue, that is used for backgrounds, borders, and text, in both Light and Dark modes",
    },
    {
      id: "scheme-s",
      description:
        "Defines the Scheme's Saturation, that is used for backgrounds, borders, and text, in both Light and Dark modes",
    },
    { id: "light-l", description: "Defines the lightness of backgrounds" },
    {
      id: "light-invert-l",
      description: "Defines the lightness of backgrounds' invert color",
    },
    { id: "dark-l", description: "Defines the lightness of dark backgrounds" },
    {
      id: "dark-invert-l",
      description: "Defines the lightness of dark backgrounds' invert color",
    },
    { id: "soft-l", description: "Defines the lightness of soft colors" },
    { id: "bold-l", description: "Defines the lightness of bold colors" },
    {
      id: "soft-invert-l",
      description: "Defines the lightness of soft color's invert color",
    },
    {
      id: "bold-invert-l",
      description: "Defines the lightness of bold color's invert color",
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
    { id: "primary-h", description: "Defines the Primary color's hue" },
    { id: "primary-s", description: "Defines the Primary color's saturation" },
    { id: "primary-l", description: "Defines the Primary color's lightness" },
    { id: "link-h", description: "Defines the Link color's hue" },
    { id: "link-s", description: "Defines the Link color's saturation" },
    { id: "link-l", description: "Defines the Link color's lightness" },
    { id: "info-h", description: "Defines the Info color's hue" },
    { id: "info-s", description: "Defines the Info color's saturation" },
    { id: "info-l", description: "Defines the Info color's lightness" },
    { id: "success-h", description: "Defines the Success color's hue" },
    { id: "success-s", description: "Defines the Success color's saturation" },
    { id: "success-l", description: "Defines the Success color's lightness" },
    { id: "warning-h", description: "Defines the Warning color's hue" },
    { id: "warning-s", description: "Defines the Warning color's saturation" },
    { id: "warning-l", description: "Defines the Warning color's lightness" },
    { id: "danger-h", description: "Defines the Danger color's hue" },
    { id: "danger-s", description: "Defines the Danger color's saturation" },
    { id: "danger-l", description: "Defines the Danger color's lightness" },
  ],
  typography: [
    { id: "family-primary", description: "Defines the Primary font family" },
    {
      id: "family-secondary",
      description: "Defines the Secondary font family",
    },
    { id: "family-code", description: "Defines the Code font family" },
    { id: "size-small", description: "Defines the Small font size" },
    { id: "size-normal", description: "Defines the Normal font size" },
    { id: "size-medium", description: "Defines the Medium font size" },
    { id: "size-large", description: "Defines the Large font size" },
    { id: "weight-light", description: "Defines the Light font weight" },
    { id: "weight-normal", description: "Defines the Normal font weight" },
    { id: "weight-medium", description: "Defines the Medium font weight" },
    { id: "weight-semibold", description: "Defines the Semibold font weight" },
    { id: "weight-bold", description: "Defines the Bold font weight" },
    {
      id: "weight-extrabold",
      description: "Defines the Extrabold font weight",
    },
  ],
  other: [
    {
      id: "block-spacing",
      description: "Defines the space below Block elements",
    },
    {
      id: "duration",
      description: "Defines the duration of Transitions and Animations",
    },
    {
      id: "easing",
      description: "Defines the timing function of Transitions and Animations",
    },
    { id: "radius-small", description: "Defines the Small border radius" },
    { id: "radius", description: "Defines the Normal border radius" },
    { id: "radius-medium", description: "Defines the Medium border radius" },
    { id: "radius-large", description: "Defines the Large border radius" },
    { id: "radius-rounded", description: "Defines the Rounded border radius" },
    { id: "speed", description: "" },
    {
      id: "arrow-color",
      description: "Defines the arrow color use for Select dropdowns",
    },
    {
      id: "loading-color",
      description: "Defines the color of the loading spinner",
    },
    {
      id: "burger-h",
      description: "Defines the Hue of the burger element lines",
    },
    {
      id: "burger-s",
      description: "Defines the Saturation of the burger element lines",
    },
    {
      id: "burger-l",
      description: "Defines the Lightness of the burger element lines",
    },
    {
      id: "burger-border-radius",
      description: "Defines the border radius of the burger element",
    },
    { id: "burger-gap", description: "Defines the gap of the burger element" },
    {
      id: "burger-item-height",
      description: "Defines the height of the burger element",
    },
    {
      id: "burger-item-width",
      description: "Defines the width of the burger element",
    },
  ],
  generic: [
    { id: "body-background-color", description: "The page's background color" },
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
};
