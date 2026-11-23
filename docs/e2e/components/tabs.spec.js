import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Components/Tabs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/tabs/");
  });

  test("has a Tabs", async ({ page }) => {
    await expect.soft(page.locator(".tabs").first()).toBeAttached();
  });

  test("has a correct Tabs", async ({ page }) => {
    {
      const cs = await styles(page, "#tabs");
      expect.soft(cs.alignItems).toBe("stretch");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.fontSize).toBe("16px");
      expect.soft(cs.justifyContent).toBe("space-between");
      expect.soft(cs.whiteSpace).toBe("nowrap");
    }

    {
      const cs = await styles(page, "#tabs li:not(.is-active) a");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.borderBottomColor).toBe(v.border);
      expect.soft(cs.borderBottomStyle).toBe("solid");
      expect.soft(cs.borderBottomWidth).toBe("1px");
      expect.soft(cs.color).toBe(v.text);
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.justifyContent).toBe("center");
      expect.soft(cs.marginBottom).toBe("-1px");
      expect.soft(cs.padding).toBe("8px 16px");
      expect.soft(cs.verticalAlign).toBe("top");
    }

    {
      const cs = await styles(page, "#tabs li.is-active a");
      expect.soft(cs.borderBottomColor).toBe(v["link-text"]);
      expect.soft(cs.color).toBe(v["link-text"]);
    }

    {
      const cs = await styles(page, "#tabs ul");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.borderBottomColor).toBe(v.border);
      expect.soft(cs.borderBottomStyle).toBe("solid");
      expect.soft(cs.borderBottomWidth).toBe("1px");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.justifyContent).toBe("flex-start");
    }
  });

  test("has a correct Tabs alignments", async ({ page }) => {
    {
      const cs = await styles(page, "#tabs-centered ul");
      expect.soft(cs.justifyContent).toBe("center");
    }

    {
      const cs = await styles(page, "#tabs-right ul");
      expect.soft(cs.justifyContent).toBe("flex-end");
    }
  });

  test("has a correct Tabs lists alignments", async ({ page }) => {
    {
      const cs = await styles(page, "#tabs-lists ul.is-left");
      expect.soft(cs.paddingRight).toBe("12px");
    }

    {
      const cs = await styles(page, "#tabs-lists ul.is-center");
      expect.soft(cs.flex).toBe("0 0 auto");
      expect.soft(cs.justifyContent).toBe("center");
      expect.soft(cs.paddingLeft).toBe("12px");
      expect.soft(cs.paddingRight).toBe("12px");
    }

    {
      const cs = await styles(page, "#tabs-lists ul.is-right");
      expect.soft(cs.justifyContent).toBe("flex-end");
      expect.soft(cs.paddingLeft).toBe("12px");
    }
  });

  test("has a correct boxed Tabs", async ({ page }) => {
    {
      const cs = await styles(page, "#tabs-boxed li:not(.is-active) a");
      expect.soft(cs.borderColor).toBe(v.transparent);
      expect.soft(cs.borderRadius).toBe("6px 6px 0px 0px");
    }

    {
      const cs = await styles(page, "#tabs-boxed li.is-active a");
      expect.soft(cs.backgroundColor).toBe(v["scheme-main"]);
      expect
        .soft(cs.borderColor)
        .toBe(`${v.border} ${v.border} ${v.transparent}`);
    }
  });
});
