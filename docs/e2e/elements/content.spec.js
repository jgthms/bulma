import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Elements/Content", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/content/");
  });

  test("has a Content element", async ({ page }) => {
    await expect.soft(page.locator(".content").first()).toBeAttached();
  });

  test("has correct headings", async ({ page }) => {
    {
      const cs = await styles(page, ".content h1");
      expect.soft(cs.fontSize).toBe("32px");
    }

    {
      const cs = await styles(page, ".content h2");
      expect.soft(cs.fontSize).toBe("28px");
    }

    {
      const cs = await styles(page, ".content h3");
      expect.soft(cs.fontSize).toBe("24px");
    }

    {
      const cs = await styles(page, ".content h4");
      expect.soft(cs.fontSize).toBe("20px");
    }

    {
      const cs = await styles(page, ".content h5");
      expect.soft(cs.fontSize).toBe("18px");
    }

    {
      const cs = await styles(page, ".content h6");
      expect.soft(cs.fontSize).toBe("16px");
    }
  });

  test("has a correct blockquote", async ({ page }) => {
    {
      const cs = await styles(page, ".content blockquote");
      expect.soft(cs.backgroundColor).toBe(v["white-ter"]);
      expect.soft(cs.padding).toBe("20px 24px");
    }
  });

  test("has correct lists", async ({ page }) => {
    {
      const cs = await styles(page, ".content ol li");
      expect.soft(cs.listStyleType).toBe("decimal");
    }

    {
      const cs = await styles(page, ".content ul li");
      expect.soft(cs.listStyleType).toBe("disc");
    }
  });

  test("has a correct pre", async ({ page }) => {
    {
      const cs = await styles(page, ".content pre");
      expect.soft(cs.padding).toBe("17.5px 21px");
    }
  });
});
