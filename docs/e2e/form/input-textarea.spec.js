import { test, expect } from "@playwright/test";
import v from "../values";
import { styles, documentRect } from "../utils";

test.describe("Form/Input", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/input-textarea/");
  });

  test("has a Input", async ({ page }) => {
    await expect.soft(page.locator(".input").first()).toBeAttached();
  });

  test("has a correct Input", async ({ page }) => {
    {
      const cs = await styles(page, "#input");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.borderStyle).toBe("solid");
      expect.soft(cs.borderWidth).toBe("1px");
      expect.soft(cs.borderRadius).toBe(v["control-radius"]);
      expect.soft(cs.boxShadow).toBe(v["input-shadow"]);
      expect.soft(cs.display).toBe("inline-flex");
      expect.soft(cs.fontSize).toBe(v["size-normal"]);
      expect.soft(cs.height).toBe(v["control-height"]);
      expect.soft(cs.justifyContent).toBe("flex-start");
      expect.soft(cs.lineHeight).toBe(v["control-line-height"]);
      expect.soft(cs.paddingBottom).toBe(v["control-padding-vertical"]);
      expect.soft(cs.paddingLeft).toBe(v["control-padding-horizontal"]);
      expect.soft(cs.paddingRight).toBe(v["control-padding-horizontal"]);
      expect.soft(cs.paddingTop).toBe(v["control-padding-vertical"]);
      expect.soft(cs.position).toBe("relative");
      expect.soft(cs.verticalAlign).toBe("top");
    }
  });

  test(`has correct color Input`, async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const baseColor = v[name];

      {
        const cs = await styles(page, `#input-${name}`);
        expect.soft(cs.borderColor).toBe(baseColor);
      }
    }
  });

  test("has correct Input sizes", async ({ page }) => {
    for (let i = 0; i < v["just-sizes"].length; i++) {
      const size = v["just-sizes"][i];

      {
        const cs = await styles(page, `#input-${size}`);
        expect.soft(cs.fontSize).toBe(`${v.sizes[size]}px`);
      }
    }
  });

  test("has a correct fullwidth Input", async ({ page }) => {
    const viewport = await documentRect(page);

    {
      const cs = await styles(page, "#input-fullwidth");
      expect.soft(cs.display).toBe("block");
      expect.soft(cs.width).toBe(`${viewport.width}px`);
    }
  });

  test("has a correct inline Input", async ({ page }) => {
    {
      const cs = await styles(page, "#input-inline");
      expect.soft(cs.display).toBe("inline");
    }
  });

  test("has a correct rounded Input", async ({ page }) => {
    {
      const cs = await styles(page, "#input-rounded");
      expect.soft(cs.borderRadius).toBe("9999px");
      expect.soft(cs.paddingLeft).toBe("17px");
      expect.soft(cs.paddingRight).toBe("17px");
    }
  });

  test("has a correct static Input", async ({ page }) => {
    {
      const cs = await styles(page, "#input-static");
      expect.soft(cs.backgroundColor).toBe(v.transparent);
      expect.soft(cs.borderColor).toBe(v.transparent);
      expect.soft(cs.boxShadow).toBe("none");
      expect.soft(cs.paddingLeft).toBe("0px");
      expect.soft(cs.paddingRight).toBe("0px");
    }
  });
});

test.describe("Form/Textarea", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/input-textarea/");
  });

  test("has a Textarea", async ({ page }) => {
    await expect.soft(page.locator(".textarea").first()).toBeAttached();
  });

  test("has a correct Textarea", async ({ page }) => {
    {
      const cs = await styles(page, "#textarea");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.borderStyle).toBe("solid");
      expect.soft(cs.borderWidth).toBe("1px");
      expect.soft(cs.borderRadius).toBe(v["control-radius"]);
      expect.soft(cs.boxShadow).toBe(v["input-shadow"]);
      expect.soft(cs.display).toBe("block");
      expect.soft(cs.fontSize).toBe(v["size-normal"]);
      expect.soft(cs.justifyContent).toBe("flex-start");
      expect.soft(cs.lineHeight).toBe(v["control-line-height"]);
      expect.soft(cs.paddingBottom).toBe(v["control-padding-horizontal"]);
      expect.soft(cs.paddingLeft).toBe(v["control-padding-horizontal"]);
      expect.soft(cs.paddingRight).toBe(v["control-padding-horizontal"]);
      expect.soft(cs.paddingTop).toBe(v["control-padding-horizontal"]);
      expect.soft(cs.position).toBe("relative");
      expect.soft(cs.resize).toBe("vertical");
      expect.soft(cs.verticalAlign).toBe("top");
    }
  });

  test("has a correct Textarea fixed", async ({ page }) => {
    {
      const cs = await styles(page, "#textarea-fixed");
      expect.soft(cs.resize).toBe("none");
    }
  });
});
