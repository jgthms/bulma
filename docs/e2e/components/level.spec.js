import { test, expect } from "@playwright/test";
import { styles } from "../utils";

test.describe("Layout/Level", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/layout/level/");
  });

  test("has a Level", async ({ page }) => {
    await expect.soft(page.locator(".level").first()).toBeAttached();
  });

  test("has a correct Level", async ({ page }) => {
    {
      const cs = await styles(page, "#level");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.display).toBe("flex");
    }
  });

  test("has a correct Level Item", async ({ page }) => {
    {
      const cs = await styles(page, "#level .level-item");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.flexGrow).toBe("0");
      expect.soft(cs.flexShrink).toBe("0");
    }

    {
      const cs = await styles(page, "#level-centered .level-item .title");
      expect.soft(cs.marginBottom).toBe("0px");
    }
  });

  test("has correct Level Left and Right", async ({ page }) => {
    {
      const cs = await styles(page, "#level .level-left");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.flexGrow).toBe("0");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.justifyContent).toBe("flex-start");
    }

    {
      const cs = await styles(page, "#level .level-right");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.flexGrow).toBe("0");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.justifyContent).toBe("flex-end");
    }
  });
});
