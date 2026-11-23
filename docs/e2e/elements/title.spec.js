import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Elements/Title", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/title/");
  });

  test("has a Title", async ({ page }) => {
    await expect.soft(page.locator(".title").first()).toBeAttached();
  });

  test("has a correct Title", async ({ page }) => {
    {
      const cs = await styles(page, "#title");
      expect.soft(cs.color).toBe(v["text-strong"]);
      expect.soft(cs.fontSize).toBe(`${v.sizes["3"]}px`);
      expect.soft(cs.fontWeight).toBe(v["weight-extrabold"]);
      expect.soft(cs.lineHeight).toBe(`${v.sizes["3"] * 1.125}px`);
    }

    {
      const cs = await styles(page, "#title strong");
      expect.soft(cs.color).toBe(v["text-strong"]);
      expect.soft(cs.fontWeight).toBe(v["weight-extrabold"]);
    }
  });

  test("has correct Title sizes", async ({ page }) => {
    for (let i = 1; i <= 7; i++) {
      {
        const cs = await styles(page, `#title-${i}`);
        expect.soft(cs.fontSize).toBe(`${v.sizes[i]}px`);
      }
    }
  });

  test("has a Subtitle", async ({ page }) => {
    await expect.soft(page.locator(".subtitle").first()).toBeAttached();
  });

  test("has a correct Subtitle", async ({ page }) => {
    {
      const cs = await styles(page, "#subtitle");
      expect.soft(cs.color).toBe(v.text);
      expect.soft(cs.fontSize).toBe(`${v.sizes["5"]}px`);
      expect.soft(cs.fontWeight).toBe("400");
      expect.soft(cs.lineHeight).toBe(`${v.sizes["5"] * 1.25}px`);
    }

    {
      const cs = await styles(page, "#subtitle strong");
      expect.soft(cs.color).toBe(v["text-strong"]);
      expect.soft(cs.fontWeight).toBe("600");
    }
  });

  test("has correct Subtitle sizes", async ({ page }) => {
    for (let i = 1; i <= 7; i++) {
      {
        const cs = await styles(page, `#subtitle-${i}`);
        expect.soft(cs.fontSize).toBe(`${v.sizes[i]}px`);
      }
    }
  });
});
