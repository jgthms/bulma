import { test, expect } from "@playwright/test";
import { styles } from "../utils";

test.describe("Elements/Icon", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/icon/");
  });

  test("has a .icon element", async ({ page }) => {
    await expect.soft(page.locator(".icon").first()).toBeAttached();
  });

  test("has a correct Icon element", async ({ page }) => {
    {
      const cs = await styles(page, "#icon");
      expect.soft(cs.height).toBe("24px");
      expect.soft(cs.width).toBe("24px");
    }
  });

  test("has correct Icon sizes", async ({ page }) => {
    {
      const cs = await styles(page, "#icon-small");
      expect.soft(cs.height).toBe("16px");
      expect.soft(cs.width).toBe("16px");
    }

    {
      const cs = await styles(page, "#icon-normal");
      expect.soft(cs.height).toBe("24px");
      expect.soft(cs.width).toBe("24px");
    }

    {
      const cs = await styles(page, "#icon-medium");
      expect.soft(cs.height).toBe("32px");
      expect.soft(cs.width).toBe("32px");
    }

    {
      const cs = await styles(page, "#icon-large");
      expect.soft(cs.height).toBe("48px");
      expect.soft(cs.width).toBe("48px");
    }
  });

  test("has correct Icon Text elements", async ({ page }) => {
    {
      const cs = await styles(page, "#icon-text");
      expect.soft(cs.display).toBe("inline-flex");
      expect.soft(cs.columnGap).toBe("4px");
      expect.soft(cs.rowGap).toBe("4px");
    }

    {
      const cs = await styles(page, "#icon-text-div");
      expect.soft(cs.display).toBe("flex");
    }
  });
});
