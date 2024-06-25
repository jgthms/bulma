export const SUFFIX_TO_KIND = {
  "-h": "hue",
  "-s": "saturation",
  "-l": "lightness",
  "-gap": "gap",
  "-delta": "delta",
};

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
};
