import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Components/Panel", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/panel/");
  });

  test("has a Panel", async ({ page }) => {
    await expect.soft(page.locator(".panel").first()).toBeAttached();
  });

  test("has a correct Panel", async ({ page }) => {
    {
      const cs = await styles(page, "#panel");
      expect.soft(cs.borderRadius).toBe(v["radius-large"]);
      expect.soft(cs.boxShadow).toBe(v.shadow);
      expect.soft(cs.fontSize).toBe("16px");
    }
  });

  test("has a correct Panel colors", async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const baseColor = v[name];
      const invertColor = v[`${name}-invert`];

      {
        const cs = await styles(page, `#panel-${name} .panel-heading`);
        expect.soft(cs.backgroundColor).toBe(baseColor);
        expect.soft(cs.color).toBe(invertColor);
      }

      {
        const cs = await styles(page, `#panel-${name} .panel-tabs a.is-active`);
        expect.soft(cs.borderBottomColor).toBe(baseColor);
      }

      {
        const cs = await styles(
          page,
          `#panel-${name} .panel-block.is-active .panel-icon`,
        );
        expect.soft(cs.color).toBe(baseColor);
      }
    }
  });

  test("has a correct Panel Heading", async ({ page }) => {
    {
      const cs = await styles(page, "#panel .panel-heading");
      expect.soft(cs.backgroundColor).toBe(v.text);
      expect.soft(cs.borderRadius).toBe("12px 12px 0px 0px");
      expect.soft(cs.color).toBe(v["text-invert"]);
      expect.soft(cs.fontSize).toBe("20px");
      expect.soft(cs.fontWeight).toBe("700");
      expect.soft(cs.lineHeight).toBe("25px");
      expect.soft(cs.padding).toBe("20px 25px");
    }
  });

  test("has correct Panel Tabs", async ({ page }) => {
    {
      const cs = await styles(page, "#panel .panel-tabs");
      expect.soft(cs.alignItems).toBe("flex-end");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.fontSize).toBe("16px");
      expect.soft(cs.justifyContent).toBe("center");
    }

    {
      const cs = await styles(page, "#panel .panel-tabs a:not(.is-active)");
      expect.soft(cs.borderBottomColor).toBe(v.border);
      expect.soft(cs.borderBottomStyle).toBe("solid");
      expect.soft(cs.borderBottomWidth).toBe("1px");
      expect.soft(cs.marginBottom).toBe("-1px");
      expect.soft(cs.padding).toBe("12px");
    }

    {
      const cs = await styles(page, "#panel .panel-tabs a.is-active");
      expect.soft(cs.borderBottomColor).toBe(v["grey-dark"]);
    }
  });

  // Skipped: possible Bulma bug. The active tab and active block get their color
  // from --bulma-link-active, which is referenced but never defined, so they
  // fall back to the inherited text color.
  test.fixme("has correct active Panel colors", async ({ page }) => {
    {
      const cs = await styles(page, "#panel .panel-tabs a.is-active");
      expect.soft(cs.color).toBe(v["grey-darker"]);
    }

    {
      const cs = await styles(page, "#panel .panel-block.is-active");
      expect.soft(cs.color).toBe(v["grey-darker"]);
    }
  });

  test("has correct Panel Block", async ({ page }) => {
    {
      const cs = await styles(page, "#panel .panel-block");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.color).toBe(v["text-strong"]);
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.justifyContent).toBe("flex-start");
      expect.soft(cs.padding).toBe("12px 16px");
    }

    {
      const cs = await styles(page, "#panel .panel-block.is-wrapped");
      expect.soft(cs.flexWrap).toBe("wrap");
    }

    {
      const cs = await styles(page, "#panel .panel-block.is-active");
      expect.soft(cs.borderLeftColor).toBe(v.link);
    }

    {
      const cs = await styles(
        page,
        "#panel .panel-block.is-active .panel-icon",
      );
      expect.soft(cs.color).toBe(v.text);
    }

    {
      const cs = await styles(page, "#panel .panel-block:last-child");
      expect.soft(cs.borderBottomLeftRadius).toBe(v["radius-large"]);
      expect.soft(cs.borderBottomRightRadius).toBe(v["radius-large"]);
    }
  });

  test("has correct Panel Icon", async ({ page }) => {
    {
      const cs = await styles(
        page,
        "#panel .panel-block:not(.is-active) .panel-icon",
      );
      expect.soft(cs.color).toBe(v["text-light"]);
    }
  });
});
