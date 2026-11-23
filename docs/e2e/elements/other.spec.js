import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Elements/Other", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/other/");
  });

  test("has a Block element", async ({ page }) => {
    await expect.soft(page.locator(".block").first()).toBeAttached();
  });

  test("has a correct Block", async ({ page }) => {
    {
      const cs = await styles(page, "#block");
      expect.soft(cs.marginBottom).toBe("24px");
    }
  });

  test("has a Delete element", async ({ page }) => {
    await expect.soft(page.locator(".delete").first()).toBeAttached();
  });

  test("has a correct Delete", async ({ page }) => {
    {
      const cs = await styles(page, "#delete");
      expect.soft(cs.backgroundColor).toBe("rgba(0, 0, 0, 0.5)");
      expect.soft(cs.borderColor).toBe(v["grey-dark"]);
      expect.soft(cs.borderStyle).toBe("none");
      expect.soft(cs.borderRadius).toBe("9999px");
      expect.soft(cs.borderWidth).toBe("0px");
      expect.soft(cs.cursor).toBe("pointer");
      expect.soft(cs.display).toBe("inline-flex");
      expect.soft(cs.flexGrow).toBe("0");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.fontSize).toBe("16px");
      expect.soft(cs.height).toBe("20px");
      expect.soft(cs.maxHeight).toBe("20px");
      expect.soft(cs.maxWidth).toBe("20px");
      expect.soft(cs.minHeight).toBe("20px");
      expect.soft(cs.minWidth).toBe("20px");
      expect.soft(cs.outlineColor).toBe(v["grey-dark"]);
      expect.soft(cs.outlineStyle).toBe("none");
      expect.soft(cs.pointerEvents).toBe("auto");
      expect.soft(cs.position).toBe("relative");
      expect.soft(cs.verticalAlign).toBe("top");
      expect.soft(cs.width).toBe("20px");

      const before = await styles(page, "#delete", "before");
      expect.soft(before.backgroundColor).toBe(v["scheme-main"]);
      expect.soft(before.content).toBe('""');
      expect.soft(before.display).toBe("block");
      expect.soft(before.height).toBe("2px");
      expect.soft(before.left).toBe("10px");
      expect.soft(before.position).toBe("absolute");
      expect.soft(before.top).toBe("10px");
      expect.soft(before.width).toBe("10px");

      const after = await styles(page, "#delete", "after");
      expect.soft(after.backgroundColor).toBe(v["scheme-main"]);
      expect.soft(after.content).toBe('""');
      expect.soft(after.display).toBe("block");
      expect.soft(after.height).toBe("10px");
      expect.soft(after.left).toBe("10px");
      expect.soft(after.position).toBe("absolute");
      expect.soft(after.top).toBe("10px");
      expect.soft(after.width).toBe("2px");
    }
  });

  test("has a correct small Delete", async ({ page }) => {
    {
      const cs = await styles(page, "#delete-small");
      expect.soft(cs.height).toBe("16px");
      expect.soft(cs.maxHeight).toBe("16px");
      expect.soft(cs.maxWidth).toBe("16px");
      expect.soft(cs.minHeight).toBe("16px");
      expect.soft(cs.minWidth).toBe("16px");
      expect.soft(cs.width).toBe("16px");
    }
  });

  test("has a correct medium Delete", async ({ page }) => {
    {
      const cs = await styles(page, "#delete-medium");
      expect.soft(cs.height).toBe("24px");
      expect.soft(cs.maxHeight).toBe("24px");
      expect.soft(cs.maxWidth).toBe("24px");
      expect.soft(cs.minHeight).toBe("24px");
      expect.soft(cs.minWidth).toBe("24px");
      expect.soft(cs.width).toBe("24px");
    }
  });

  test("has a correct large Delete", async ({ page }) => {
    {
      const cs = await styles(page, "#delete-large");
      expect.soft(cs.height).toBe("32px");
      expect.soft(cs.maxHeight).toBe("32px");
      expect.soft(cs.maxWidth).toBe("32px");
      expect.soft(cs.minHeight).toBe("32px");
      expect.soft(cs.minWidth).toBe("32px");
      expect.soft(cs.width).toBe("32px");
    }
  });

  test("has a correct Loader", async ({ page }) => {
    {
      const cs = await styles(page, "#loader");
      expect.soft(cs.animationDuration).toBe("0.5s");
      expect.soft(cs.animationIterationCount).toBe("infinite");
      expect.soft(cs.animationName).toBe("spinAround");
      expect.soft(cs.animationTimingFunction).toBe("linear");
      expect.soft(cs.borderBottomColor).toBe(v["grey-lighter"]);
      expect.soft(cs.borderLeftColor).toBe(v["grey-lighter"]);
      expect.soft(cs.borderRightColor).toBe(v.transparent);
      expect.soft(cs.borderTopColor).toBe(v.transparent);
      expect.soft(cs.borderRadius).toBe("9999px");
      expect.soft(cs.borderStyle).toBe("solid");
      expect.soft(cs.borderWidth).toBe("2px");
      expect.soft(cs.content).toBe('""');
      expect.soft(cs.display).toBe("block");
      expect.soft(cs.height).toBe("16px");
      expect.soft(cs.position).toBe("relative");
      expect.soft(cs.width).toBe("16px");
    }
  });
});
