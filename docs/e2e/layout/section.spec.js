import { test, expect } from "@playwright/test";
import { styles, setDesktop, setMobile } from "../utils";

test.describe("Layout/Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/layout/section/");
    await setDesktop(page);
  });

  test("has a Section", async ({ page }) => {
    await expect.soft(page.locator(".section").first()).toBeAttached();
  });

  test("has a correct Section", async ({ page }) => {
    {
      const cs = await styles(page, "#section");
      expect.soft(cs.padding).toBe("48px");
    }

    await setMobile(page);

    {
      const cs = await styles(page, "#section");
      expect.soft(cs.padding).toBe("48px 24px");
    }
  });

  test("has a correct medium Section", async ({ page }) => {
    {
      const cs = await styles(page, "#section-medium");
      expect.soft(cs.padding).toBe("144px 72px");
    }
  });

  test("has a correct large Section", async ({ page }) => {
    {
      const cs = await styles(page, "#section-large");
      expect.soft(cs.padding).toBe("288px 96px");
    }
  });
});
