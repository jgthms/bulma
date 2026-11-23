import { test, expect } from "@playwright/test";
import { styles } from "../utils";

test.describe("Elements/Image", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/image/");
  });

  test("has a Image", async ({ page }) => {
    await expect.soft(page.locator(".image").first()).toBeAttached();
  });

  test("has a correct Image", async ({ page }) => {
    {
      const cs = await styles(page, "#image");
      expect.soft(cs.height).toBe("128px");
      expect.soft(cs.width).toBe("128px");
    }
  });

  test("has a correct rounded Image", async ({ page }) => {
    {
      const cs = await styles(page, "#image-rounded img");
      expect.soft(cs.borderRadius).toBe("9999px");
    }
  });

  test("has a correct Image dimensions", async ({ page }) => {
    for (const dimension of [16, 24, 32, 48, 64, 96, 128]) {
      {
        const cs = await styles(page, `#image-${dimension}`);
        expect.soft(cs.height).toBe(`${dimension}px`);
        expect.soft(cs.width).toBe(`${dimension}px`);
      }
    }
  });

  test("has correct Image ratios", async ({ page }) => {
    for (const ratio of [
      ["1by1", 1],
      ["5by4", 0.8],
      ["4by3", 0.75],
      ["3by2", 0.6666],
      ["5by3", 0.6],
      ["16by9", 0.5625],
      ["2by1", 0.5],
      ["3by1", 0.3333],
      ["4by5", 1.25],
      ["3by4", 1.3333],
      ["2by3", 1.5],
      ["3by5", 1.6666],
      ["9by16", 1.7777],
      ["1by2", 2],
      ["1by3", 3],
    ]) {
      {
        const cs = await styles(page, `#image-${ratio[0]} img`);
        const height = cs.height.substring(0, cs.height.length - 2);
        expect
          .soft(`${Math.round(height)}px`)
          .toBe(`${Math.round(100 * ratio[1])}px`);
        expect.soft(cs.width).toBe("100px");
      }
    }
  });
});
