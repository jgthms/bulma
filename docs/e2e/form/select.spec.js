import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Form/Select", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/select/");
  });

  test("has a Select", async ({ page }) => {
    await expect.soft(page.locator(".select").first()).toBeAttached();
  });

  test("has a correct Select", async ({ page }) => {
    {
      const cs = await styles(page, "#select");
      expect.soft(cs.display).toBe("inline-block");
      expect.soft(cs.height).toBe(v["control-height"]);
      expect.soft(cs.maxWidth).toBe("100%");
      expect.soft(cs.position).toBe("relative");
      expect.soft(cs.verticalAlign).toBe("top");

      const after = await styles(page, "#select", "after");
      expect.soft(after.borderBottomColor).toBe(v.link);
      expect.soft(after.borderLeftColor).toBe(v.link);
    }

    {
      const cs = await styles(page, "#select select");
      expect.soft(cs.cursor).toBe("pointer");
      expect.soft(cs.display).toBe("block");
      expect.soft(cs.fontSize).toBe("16px");
      expect.soft(cs.height).toBe(v["control-height"]);
      expect.soft(cs.maxWidth).toBe("100%");
    }
  });

  test(`has correct color Select`, async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const baseColor = v[name];

      {
        const after = await styles(page, `#select-${name}`, "after");
        expect.soft(after.borderBottomColor).toBe(baseColor);
        expect.soft(after.borderLeftColor).toBe(baseColor);
      }

      {
        const cs = await styles(page, `#select-${name} select`);
        expect.soft(cs.borderColor).toBe(baseColor);
      }
    }
  });

  test("has correct Select sizes", async ({ page }) => {
    for (let i = 0; i < v["just-sizes"].length; i++) {
      const size = v["just-sizes"][i];

      {
        const cs = await styles(page, `#select-${size}`);
        expect.soft(cs.fontSize).toBe(`${v.sizes[size]}px`);
      }
    }
  });

  test("has a correct Select multiple", async ({ page }) => {
    {
      const cs = await styles(page, "#select-multiple");
      expect.soft(cs.height).not.toBe(v["control-height"]);
    }

    {
      const cs = await styles(page, "#select-multiple select");
      expect.soft(cs.cursor).toBe("pointer");
      expect.soft(cs.display).toBe("block");
      expect.soft(cs.fontSize).toBe("16px");
      expect.soft(cs.height).not.toBe(v["control-height"]);
      expect.soft(cs.maxWidth).toBe("100%");
    }
  });

  test("has a correct Select disabled", async ({ page }) => {
    {
      const after = await styles(page, "#select-disabled", "after");
      expect.soft(after.borderColor).toBe(v["text-light"]);
    }
  });
});
