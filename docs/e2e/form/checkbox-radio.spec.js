import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Form/Checkbox", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/checkbox-radio/");
  });

  test("has a Checkbox", async ({ page }) => {
    await expect.soft(page.locator(".checkbox").first()).toBeAttached();
  });

  test("has a correct Checkbox", async ({ page }) => {
    {
      const cs = await styles(page, "#checkbox");
      expect.soft(cs.cursor).toBe("pointer");
      expect.soft(cs.display).toBe("inline-block");
      expect.soft(cs.lineHeight).toBe("20px");
      expect.soft(cs.position).toBe("relative");
    }

    {
      const cs = await styles(page, "#checkbox input");
      expect.soft(cs.cursor).toBe("pointer");
    }
  });

  test("has a correct disabled Checkbox", async ({ page }) => {
    {
      const cs = await styles(page, "#checkbox-disabled");
      expect.soft(cs.color).toBe(v["text-light"]);
      expect.soft(cs.cursor).toBe("not-allowed");
    }

    {
      const cs = await styles(page, "#checkbox-disabled input");
      expect.soft(cs.cursor).toBe("not-allowed");
    }
  });
});

test.describe("Form/Radio", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/checkbox-radio/");
  });

  test("has a Radio", async ({ page }) => {
    await expect.soft(page.locator(".radio").first()).toBeAttached();
  });

  test("has a correct Radio", async ({ page }) => {
    {
      const cs = await styles(page, "#radio .radio");
      expect.soft(cs.cursor).toBe("pointer");
      expect.soft(cs.display).toBe("inline-block");
      expect.soft(cs.lineHeight).toBe("20px");
      expect.soft(cs.position).toBe("relative");
    }

    {
      const cs = await styles(page, "#radio input");
      expect.soft(cs.cursor).toBe("pointer");
    }
  });

  test("has a correct disabled Radio", async ({ page }) => {
    {
      const cs = await styles(page, "#radio .radio[disabled]");
      expect.soft(cs.color).toBe(v["text-light"]);
      expect.soft(cs.cursor).toBe("not-allowed");
    }
  });

  test("has correct Radio spacing", async ({ page }) => {
    {
      const cs = await styles(page, "#radios");
      expect.soft(cs.columnGap).toBe("16px");
      expect.soft(cs.rowGap).toBe("8px");
    }
  });
});
