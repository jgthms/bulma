import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Layout/Footer", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/layout/footer/");
  });

  test("has a Footer", async ({ page }) => {
    await expect.soft(page.locator(".footer").first()).toBeAttached();
  });

  test("has a correct Footer", async ({ page }) => {
    {
      const cs = await styles(page, "#footer");
      expect.soft(cs.backgroundColor).toBe(v["scheme-main-bis"]);
      expect.soft(cs.padding).toBe("48px 24px 96px");
    }
  });
});
