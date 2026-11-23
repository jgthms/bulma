import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Components/Card", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/card/");
  });

  test("has a Card", async ({ page }) => {
    await expect.soft(page.locator(".card").first()).toBeAttached();
  });

  test("has a correct Card", async ({ page }) => {
    {
      const cs = await styles(page, "#card");
      expect.soft(cs.backgroundColor).toBe(v.white);
      expect.soft(cs.color).toBe(v.text);
      expect.soft(cs.boxShadow).toBe(v.shadow);
    }
  });

  test("has correct Card Item border-radius", async ({ page }) => {
    {
      const cs = await styles(
        page,
        "#card-only-content > .card-content:first-child",
      );
      expect.soft(cs.borderTopLeftRadius).toBe(v["radius-large"]);
      expect.soft(cs.borderTopRightRadius).toBe(v["radius-large"]);
    }

    {
      const cs = await styles(
        page,
        "#card-only-content > .card-content:last-child",
      );
      expect.soft(cs.borderBottomLeftRadius).toBe(v["radius-large"]);
      expect.soft(cs.borderBottomRightRadius).toBe(v["radius-large"]);
    }
  });

  test("has correct Card Header", async ({ page }) => {
    {
      const cs = await styles(page, "#card-header-content > .card-header");
      expect.soft(cs.backgroundColor).toBe(v.transparent);
      expect.soft(cs.boxShadow).toBe("rgba(9, 10, 12, 0.1) 0px 2px 4px 0px");
    }

    {
      const cs = await styles(page, "#card-header-content .card-header-title");
      expect.soft(cs.color).toBe(v["text-strong"]);
      expect.soft(cs.fontWeight).toBe("700");
      expect.soft(cs.padding).toBe("12px 16px");
    }

    {
      const cs = await styles(page, "#card-header-content .card-header-icon");
      expect.soft(cs.padding).toBe("12px 16px");
    }
  });

  test("has correct Card Content", async ({ page }) => {
    {
      const cs = await styles(page, "#card .card-content");
      expect.soft(cs.padding).toBe("24px");
    }
  });

  test("has correct Card Footer", async ({ page }) => {
    {
      const cs = await styles(page, "#card .card-footer");
      expect.soft(cs.backgroundColor).toBe(v.transparent);
      expect.soft(cs.borderTopColor).toBe(v["grey-lightest"]);
      expect.soft(cs.borderTopStyle).toBe("solid");
      expect.soft(cs.borderTopWidth).toBe("1px");
    }

    {
      const cs = await styles(page, "#card .card-footer-item");
      expect.soft(cs.padding).toBe("12px");
    }
  });
});
