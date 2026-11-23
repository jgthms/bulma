import { test, expect } from "@playwright/test";
import {
  styles,
  setMobile,
  documentRect,
  setDesktop,
  setWidescreen,
  setFullHD,
} from "../utils";

test.describe("Elements/Container", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/container/");
  });

  test("has a Container element", async ({ page }) => {
    await expect.soft(page.locator("#container").first()).toBeAttached();
  });

  test("has fullwidth mobile Containers", async ({ page }) => {
    await setMobile(page);

    const viewport = await documentRect(page);

    {
      const cs = await styles(page, "#container");
      expect.soft(cs.width).toBe(`${viewport.width}px`);
    }

    {
      const cs = await styles(page, "#container-fluid");
      expect.soft(cs.width).toBe(`${viewport.width}px`);
    }

    {
      const cs = await styles(page, "#container-max-desktop");
      expect.soft(cs.width).toBe(`${viewport.width}px`);
    }

    {
      const cs = await styles(page, "#container-max-widescreen");
      expect.soft(cs.width).toBe(`${viewport.width}px`);
    }
  });

  test("has centered desktop Containers", async ({ page }) => {
    await setDesktop(page);

    const viewport = await documentRect(page);

    {
      const cs = await styles(page, "#container");
      expect.soft(cs.width).toBe("960px");
    }

    {
      const cs = await styles(page, "#container-widescreen");
      expect.soft(cs.width).toBe(`${viewport.width}px`);
    }

    {
      const cs = await styles(page, "#container-fullhd");
      expect.soft(cs.width).toBe(`${viewport.width}px`);
    }
  });

  test("has centered widescreen Containers", async ({ page }) => {
    await setWidescreen(page);

    const viewport = await documentRect(page);

    {
      const cs = await styles(page, "#container");
      expect.soft(cs.width).toBe("1152px");
    }

    {
      const cs = await styles(page, "#container-max-desktop");
      expect.soft(cs.width).toBe("960px");
    }

    {
      const cs = await styles(page, "#container-widescreen");
      expect.soft(cs.width).toBe("1152px");
    }

    {
      const cs = await styles(page, "#container-fullhd");
      expect.soft(cs.width).toBe(`${viewport.width}px`);
    }
  });

  test("has centered fullhd Containers", async ({ page }) => {
    await setFullHD(page);

    {
      const cs = await styles(page, "#container");
      expect.soft(cs.width).toBe("1344px");
    }

    {
      const cs = await styles(page, "#container-max-desktop");
      expect.soft(cs.width).toBe("960px");
    }

    {
      const cs = await styles(page, "#container-max-widescreen");
      expect.soft(cs.width).toBe("1152px");
    }

    {
      const cs = await styles(page, "#container-widescreen");
      expect.soft(cs.width).toBe("1344px");
    }

    {
      const cs = await styles(page, "#container-fullhd");
      expect.soft(cs.width).toBe("1344px");
    }
  });

  test("has a fullwidth fluid Container", async ({ page }) => {
    await setFullHD(page);

    const viewport = await documentRect(page);

    {
      const cs = await styles(page, "#container-fluid");
      expect.soft(cs.width).toBe(`${viewport.width}px`);
    }
  });
});
