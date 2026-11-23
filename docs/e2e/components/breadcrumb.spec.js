import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Components/Breadcrumb", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/breadcrumb/");
  });

  test("has a Breadcrumb", async ({ page }) => {
    await expect.soft(page.locator(".breadcrumb").first()).toBeAttached();
  });

  test("has a correct Breadcrumb", async ({ page }) => {
    {
      const cs = await styles(page, "#breadcrumb");
    }

    {
      const cs = await styles(page, "#breadcrumb li:nth-child(2) a");
      expect.soft(cs.color).toBe(v["link-text"]);
      expect.soft(cs.padding).toBe("0px 12px");
    }

    {
      const cs = await styles(page, "#breadcrumb li.is-active a");
      expect.soft(cs.color).toBe(v["link-text-active"]);
      expect.soft(cs.padding).toBe("0px 12px");
    }
  });

  test("has correct Breadcrumb alignments", async ({ page }) => {
    {
      const cs = await styles(page, "#breadcrumb-centered ul");
      expect.soft(cs.justifyContent).toBe("center");
    }

    {
      const cs = await styles(page, "#breadcrumb-right ul");
      expect.soft(cs.justifyContent).toBe("flex-end");
    }
  });

  test("has correct Breadcrumb sizes", async ({ page }) => {
    {
      const cs = await styles(page, "#breadcrumb-small");
      expect.soft(cs.fontSize).toBe(`${v.sizes.small}px`);
    }

    {
      const cs = await styles(page, "#breadcrumb-normal");
      expect.soft(cs.fontSize).toBe(`${v.sizes.normal}px`);
    }

    {
      const cs = await styles(page, "#breadcrumb-medium");
      expect.soft(cs.fontSize).toBe(`${v.sizes.medium}px`);
    }

    {
      const cs = await styles(page, "#breadcrumb-large");
      expect.soft(cs.fontSize).toBe(`${v.sizes.large}px`);
    }
  });

  test("has correct Breadcrumb separators", async ({ page }) => {
    {
      const content = (
        await styles(page, "#breadcrumb li:nth-child(2)", "before")
      ).content;
      expect.soft(content).toBe('"/"');
    }

    {
      const content = (
        await styles(page, "#breadcrumb-arrow li:nth-child(2)", "before")
      ).content;
      expect.soft(content).toBe('"→"');
    }

    {
      const content = (
        await styles(page, "#breadcrumb-bullet li:nth-child(2)", "before")
      ).content;
      expect.soft(content).toBe('"•"');
    }

    {
      const content = (
        await styles(page, "#breadcrumb-dot li:nth-child(2)", "before")
      ).content;
      expect.soft(content).toBe('"·"');
    }

    {
      const content = (
        await styles(page, "#breadcrumb-succeeds li:nth-child(2)", "before")
      ).content;
      expect.soft(content).toBe('"≻"');
    }
  });
});
