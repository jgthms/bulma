import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Elements/Progress", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/progress/");
  });

  test("has a Progress element", async ({ page }) => {
    await expect.soft(page.locator("#progress").first()).toBeAttached();
  });

  test("has a correct Progress", async ({ page }) => {
    {
      const cs = await styles(page, "#progress");
      expect.soft(cs.height).toBe(`${v.sizes.normal}px`);
    }
  });

  test("has correct Progress sizes", async ({ page }) => {
    {
      const cs = await styles(page, "#progress-small");
      expect.soft(cs.height).toBe(`${v.sizes.small}px`);
    }

    {
      const cs = await styles(page, "#progress-normal");
      expect.soft(cs.height).toBe(`${v.sizes.normal}px`);
    }

    {
      const cs = await styles(page, "#progress-medium");
      expect.soft(cs.height).toBe(`${v.sizes.medium}px`);
    }

    {
      const cs = await styles(page, "#progress-large");
      expect.soft(cs.height).toBe(`${v.sizes.large}px`);
    }
  });
});
