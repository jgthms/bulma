import { test, expect } from "@playwright/test";
import v from "../values";
import { styles, setDesktop, setMobile } from "../utils";

test.describe("Layout/Hero", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/layout/hero/");
    await setDesktop(page);
  });

  test("has a Hero", async ({ page }) => {
    await expect.soft(page.locator(".hero").first()).toBeAttached();
  });

  test("has a correct Hero", async ({ page }) => {
    {
      const cs = await styles(page, "#hero");
      expect.soft(cs.alignItems).toBe("stretch");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.flexDirection).toBe("column");
      expect.soft(cs.justifyContent).toBe("space-between");
    }
  });

  test("has a correct Hero colors", async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const baseColor = v[name];
      const invertColor = v[`${name}-invert`];

      {
        const cs = await styles(page, `#hero-${name}`);
        expect.soft(cs.backgroundColor).toBe(baseColor);
        expect.soft(cs.color).toBe(invertColor);
      }
    }
  });

  test("has a correct small Hero", async ({ page }) => {
    {
      const cs = await styles(page, "#hero-small .hero-body");
      expect.soft(cs.padding).toBe("24px");
    }
  });

  test("has a correct medium Hero", async ({ page }) => {
    {
      const cs = await styles(page, "#hero-medium .hero-body");
      expect.soft(cs.padding).toBe("144px 72px");
    }
  });

  test("has a correct large Hero", async ({ page }) => {
    {
      const cs = await styles(page, "#hero-large .hero-body");
      expect.soft(cs.padding).toBe("288px 96px");
    }
  });

  test("has a correct halfheight Hero", async ({ page }) => {
    {
      const cs = await styles(page, "#hero-halfheight");
      expect.soft(cs.minHeight).toBe(`${v.viewports.desktop[1] / 2}px`);
    }

    {
      const cs = await styles(page, "#hero-halfheight .hero-body");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.display).toBe("flex");
    }
  });

  test("has a correct fullheight Hero", async ({ page }) => {
    {
      const cs = await styles(page, "#hero-fullheight");
      expect.soft(cs.minHeight).toBe(`${v.viewports.desktop[1]}px`);
    }

    {
      const cs = await styles(page, "#hero-fullheight .hero-body");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.display).toBe("flex");
    }
  });

  test("has a correct Hero with container", async ({ page }) => {
    {
      const cs = await styles(page, "#hero-with-container > .container");
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.flexShrink).toBe("1");
    }
  });

  test("has a Hero Buttons", async ({ page }) => {
    await expect.soft(page.locator(".hero-buttons").first()).toBeAttached();
  });

  test("has a correct Hero Buttons", async ({ page }) => {
    {
      const cs = await styles(page, "#hero-buttons");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.justifyContent).toBe("center");
      expect.soft(cs.marginTop).toBe("24px");
    }
  });

  test("has a Hero Head", async ({ page }) => {
    await expect.soft(page.locator(".hero-head").first()).toBeAttached();
  });

  test("has a correct Hero Head", async ({ page }) => {
    {
      const cs = await styles(page, "#hero-head");
      expect.soft(cs.flexGrow).toBe("0");
      expect.soft(cs.flexShrink).toBe("0");
    }
  });

  test("has a Hero Foot", async ({ page }) => {
    await expect.soft(page.locator(".hero-foot").first()).toBeAttached();
  });

  test("has a correct Hero Foot", async ({ page }) => {
    {
      const cs = await styles(page, "#hero-foot");
      expect.soft(cs.flexGrow).toBe("0");
      expect.soft(cs.flexShrink).toBe("0");
    }
  });

  test("has a Hero Body", async ({ page }) => {
    await expect.soft(page.locator(".hero-body").first()).toBeAttached();
  });

  test("has a correct Hero Body", async ({ page }) => {
    {
      const cs = await styles(page, "#hero-body");
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.padding).toBe("48px");
    }

    await setMobile(page);

    {
      const cs = await styles(page, "#hero-body");
      expect.soft(cs.padding).toBe("48px 24px");
    }
  });
});
