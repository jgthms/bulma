import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Elements/Box", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/box/");
  });

  test("has a Box element", async ({ page }) => {
    await expect.soft(page.locator(".box").first()).toBeAttached();
  });

  test("has a correct Box", async ({ page }) => {
    {
      const cs = await styles(page, ".box");
      expect.soft(cs.backgroundColor).toBe(v["scheme-main"]);
      expect.soft(cs.borderRadius).toBe(v["radius-large"]);
      expect.soft(cs.boxShadow).toBe(v.shadow);
      expect.soft(cs.color).toBe(v.text);
      expect.soft(cs.padding).toBe("20px");
    }
  });
});
