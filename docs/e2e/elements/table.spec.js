import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Elements/Table", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/table/");
  });

  test("has a Table element", async ({ page }) => {
    await expect.soft(page.locator("#table").first()).toBeAttached();
  });

  test("has a correct Table", async ({ page }) => {
    {
      const cs = await styles(page, "#table");
      expect.soft(cs.backgroundColor).toBe(v.white);
      expect.soft(cs.color).toBe(v["text-strong"]);
    }

    {
      const cs = await styles(page, "#table tr.is-selected");
      expect.soft(cs.backgroundColor).toBe(v.primary);
      expect.soft(cs.color).toBe(v["primary-invert"]);
    }
  });

  test("has a correct bordered Table", async ({ page }) => {
    {
      const cs = await styles(page, "#table-bordered th, #table-bordered td");
      expect.soft(cs.borderWidth).toBe("1px");
    }
  });

  test("has a correct striped Table", async ({ page }) => {
    {
      const cs = await styles(
        page,
        "#table-striped tbody tr:not(.is-selected):nth-child(even)",
      );
      expect.soft(cs.backgroundColor).toBe(v["white-bis"]);
    }
  });

  test("has a correct narrow Table", async ({ page }) => {
    {
      const cs = await styles(page, "#table-narrow th, #table-narrow td");
      expect.soft(cs.padding).toBe("4px 8px");
    }
  });

  test("has a correct fullwidth Table", async ({ page }) => {
    {
      const cs = await styles(page, "#table-fullwidth");
      expect.soft(cs.width).toBe("800px");
    }
  });
});
