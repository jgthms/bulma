import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Form/File", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/file/");
  });

  test("has a File", async ({ page }) => {
    await expect.soft(page.locator(".file").first()).toBeAttached();
  });

  test("has a correct File", async ({ page }) => {
    {
      const cs = await styles(page, "#file");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.justifyContent).toBe("flex-start");
      expect.soft(cs.position).toBe("relative");
    }

    {
      const cs = await styles(page, "#file .file-input");
      expect.soft(cs.opacity).toBe("0");
      expect.soft(cs.position).toBe("absolute");
    }

    {
      const cs = await styles(page, "#file .file-cta, #file .file-name");
      expect.soft(cs.borderColor).toBe(v.border);
      expect.soft(cs.borderRadius).toBe(v.radius);
    }

    {
      const cs = await styles(page, "#file .file-cta");
      expect.soft(cs.backgroundColor).toBe(v["scheme-main-ter"]);
      expect.soft(cs.color).toBe(v["text-strong"]);
    }

    {
      const cs = await styles(page, "#file .file-icon");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.height).toBe("16px");
      expect.soft(cs.justifyContent).toBe("center");
      expect.soft(cs.width).toBe("16px");
    }
  });

  test(`has correct color File`, async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const baseColor = v[name];
      const invertColor = v[`${name}-invert`];

      {
        const cs = await styles(page, `#file-${name} .file-cta`);
        expect.soft(cs.backgroundColor).toBe(baseColor);
        expect.soft(cs.color).toBe(invertColor);
      }
    }
  });

  test("has correct File sizes", async ({ page }) => {
    {
      const cs = await styles(page, "#file-small");
      expect.soft(cs.fontSize).toBe(`${v.sizes.small}px`);
    }

    {
      const cs = await styles(page, "#file-normal");
      expect.soft(cs.fontSize).toBe(`${v.sizes.normal}px`);
    }

    {
      const cs = await styles(page, "#file-medium");
      expect.soft(cs.fontSize).toBe(`${v.sizes.medium}px`);
    }

    {
      const cs = await styles(page, "#file-large");
      expect.soft(cs.fontSize).toBe(`${v.sizes.large}px`);
    }
  });

  test("has correct File With Name", async ({ page }) => {
    {
      const cs = await styles(page, "#file-with-name .file-cta");
      expect.soft(cs.borderBottomRightRadius).toBe("0px");
      expect.soft(cs.borderTopRightRadius).toBe("0px");
    }

    {
      const cs = await styles(page, "#file-with-name .file-name");
      expect.soft(cs.borderColor).toBe(v.border);
      expect.soft(cs.borderStyle).toBe("solid");
      expect.soft(cs.borderWidth).toBe("1px 1px 1px 0px");
      expect.soft(cs.borderBottomLeftRadius).toBe("0px");
      expect.soft(cs.borderTopLeftRadius).toBe("0px");
      expect.soft(cs.display).toBe("block");
      expect.soft(cs.overflow).toBe("hidden");
    }
  });

  test("has correct File Boxed", async ({ page }) => {
    {
      const cs = await styles(page, "#file-boxed .file-label");
      expect.soft(cs.flexDirection).toBe("column");
    }

    {
      const cs = await styles(page, "#file-boxed .file-cta");
      expect.soft(cs.flexDirection).toBe("column");
      expect.soft(cs.padding).toBe("16px 48px");
    }

    {
      const cs = await styles(page, "#file-boxed .file-name");
      expect.soft(cs.borderWidth).toBe("0px 1px 1px");
    }
  });

  test("has correct File Centered", async ({ page }) => {
    {
      const cs = await styles(page, "#file-centered");
      expect.soft(cs.justifyContent).toBe("center");
    }
  });

  test("has correct File Right", async ({ page }) => {
    {
      const cs = await styles(page, "#file-right");
      expect.soft(cs.justifyContent).toBe("flex-end");
    }

    {
      const cs = await styles(page, "#file-right .file-cta");
      expect.soft(cs.borderBottomLeftRadius).toBe("0px");
      expect.soft(cs.borderTopLeftRadius).toBe("0px");
    }

    {
      const cs = await styles(page, "#file-right .file-name");
      expect.soft(cs.borderBottomRightRadius).toBe("0px");
      expect.soft(cs.borderTopRightRadius).toBe("0px");
      expect.soft(cs.borderWidth).toBe("1px 0px 1px 1px");
      expect.soft(cs.order).toBe("-1");
    }
  });

  test("has correct File fullwidth", async ({ page }) => {
    {
      const cs = await styles(page, "#file-fullwidth .file-name");
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.maxWidth).toBe("none");
    }
  });
});
