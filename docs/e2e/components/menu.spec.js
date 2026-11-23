import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Components/Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/menu/");
  });

  test("has a Menu", async ({ page }) => {
    await expect.soft(page.locator(".menu").first()).toBeAttached();
  });

  test("has a correct Menu", async ({ page }) => {
    {
      const cs = await styles(page, "#menu");
      expect.soft(cs.fontSize).toBe("16px");
    }
  });

  test("has a correct Menu List", async ({ page }) => {
    {
      const cs = await styles(page, "#menu .menu-list");
      expect.soft(cs.lineHeight).toBe("20px");
    }

    {
      const cs = await styles(page, "#menu .menu-list a");
      expect.soft(cs.borderRadius).toBe(v["radius-small"]);
      expect.soft(cs.color).toBe(v.text);
      expect.soft(cs.display).toBe("block");
      expect.soft(cs.padding).toBe("8px 12px");
    }

    {
      const cs = await styles(page, "#menu .menu-list a.is-active");
      expect.soft(cs.backgroundColor).toBe(v.link);
      expect.soft(cs.color).toBe(v["link-invert"]);
    }
  });

  test("has a correct nested Menu List", async ({ page }) => {
    {
      const cs = await styles(page, "#menu .menu-list ul");
      expect.soft(cs.borderLeftColor).toBe(v.border);
      expect.soft(cs.borderLeftStyle).toBe("solid");
      expect.soft(cs.borderLeftWidth).toBe("1px");
      expect.soft(cs.margin).toBe("12px");
      expect.soft(cs.paddingLeft).toBe("12px");
    }
  });

  test("has a correct Menu Label", async ({ page }) => {
    {
      const cs = await styles(page, "#menu .menu-label");
      expect.soft(cs.color).toBe(v["text-light"]);
      expect.soft(cs.fontSize).toBe("12px");
      expect.soft(cs.letterSpacing).toBe("1.2px");
      expect.soft(cs.textTransform).toBe("uppercase");
    }

    {
      const cs = await styles(page, "#menu .menu-label:not(:first-child)");
      expect.soft(cs.marginTop).toBe("12px");
    }

    {
      const cs = await styles(page, "#menu .menu-label:not(:last-child)");
      expect.soft(cs.marginBottom).toBe("12px");
    }
  });
});
