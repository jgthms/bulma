import { test, expect } from "@playwright/test";
import { styles } from "../utils";

test.describe("Components/Media", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/layout/media/");
  });

  test("has a Media", async ({ page }) => {
    await expect.soft(page.locator(".media").first()).toBeAttached();
  });

  test("has a correct Media", async ({ page }) => {
    {
      const cs = await styles(page, "#media");
      expect.soft(cs.alignItems).toBe("flex-start");
      expect.soft(cs.display).toBe("flex");
    }
  });

  test("has a correct nested Media", async ({ page }) => {
    {
      const cs = await styles(
        page,
        "#media-nested .media-content .media + .media",
      );
      expect.soft(cs.borderTopColor).toBe("rgba(214, 217, 224, 0.5)");
      expect.soft(cs.borderTopStyle).toBe("solid");
      expect.soft(cs.borderTopWidth).toBe("1px");
      expect.soft(cs.marginTop).toBe("8px");
      expect.soft(cs.paddingTop).toBe("8px");
    }
  });

  test("has a correct Media Content", async ({ page }) => {
    {
      const cs = await styles(page, "#media .media-content");
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.flexShrink).toBe("1");
    }
  });

  test("has correct Media Left and Right", async ({ page }) => {
    {
      const cs = await styles(page, "#media .media-left");
      expect.soft(cs.flexGrow).toBe("0");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.marginRight).toBe("16px");
    }

    {
      const cs = await styles(page, "#media .media-right");
      expect.soft(cs.flexGrow).toBe("0");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.marginLeft).toBe("16px");
    }
  });
});
