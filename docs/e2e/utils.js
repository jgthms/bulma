import v from "./values";

// Returns the computed style of the first element matching the selector,
// as a plain object keyed by camelCase property names (shorthands included).
// Pass "before" or "after" to read a pseudo-element.
export const styles = async (page, selector, pseudo) => {
  const locator = page.locator(selector).first();

  return locator.evaluate((element, pseudo) => {
    const cs = window.getComputedStyle(element, pseudo ? `::${pseudo}` : null);
    const result = {};

    for (const property in cs) {
      if (typeof cs[property] === "string") {
        // Recent Chromium versions serialize the alignment keywords
        // flex-start and flex-end as flow-start and flow-end
        result[property] = cs[property].replace(
          /\bflow-(start|end)\b/g,
          "flex-$1",
        );
      }
    }

    return result;
  }, pseudo);
};

const setViewport = (page, name) => {
  const [width, height] = v.viewports[name];

  return page.setViewportSize({ width, height });
};

export const setMobile = (page) => setViewport(page, "mobile");
export const setTablet = (page) => setViewport(page, "tablet");
export const setDesktop = (page) => setViewport(page, "desktop");
export const setWidescreen = (page) => setViewport(page, "widescreen");
export const setFullHD = (page) => setViewport(page, "fullhd");

// The bounding box of the document, to compare widths against the viewport
export const documentRect = (page) =>
  page.evaluate(() => {
    const { width, height } = document.documentElement.getBoundingClientRect();

    return { width, height };
  });
