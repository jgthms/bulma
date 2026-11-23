import { test, expect } from "@playwright/test";
import v from "../values";
import { styles, setMobile, setDesktop } from "../utils";

test.describe("Components/Navbar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/navbar/");
  });

  test("has a Navbar", async ({ page }) => {
    await expect.soft(page.locator(".navbar").first()).toBeAttached();
  });

  test("has a correct Navbar", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar");
      expect.soft(cs.backgroundColor).toBe(v.white);
      expect.soft(cs.minHeight).toBe("52px");
      expect.soft(cs.position).toBe("relative");
      expect.soft(cs.zIndex).toBe("30");
    }
  });

  test(`has correct color Navbars`, async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const baseColor = v[name];

      {
        const cs = await styles(page, `#navbar-${name}`);
        expect.soft(cs.backgroundColor).toBe(baseColor);
      }
    }
  });

  // Skipped: possible Bulma bug. A colored navbar sets --bulma-burger-l to the
  // invert lightness, but .navbar-burger overrides its color with
  // --bulma-navbar-burger-color (the link color), so the burger stays blue.
  test.fixme(`has correct color Navbar Burgers`, async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const invertColor = v[`${name}-invert`];

      {
        const cs = await styles(page, `#navbar-${name} .navbar-burger`);
        expect.soft(cs.color).toBe(invertColor);
      }
    }
  });

  test("has a correct Navbar Shadow", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar-has-shadow");
      expect.soft(cs.boxShadow).toBe(`${v["white-ter"]} 0px 2px 0px 0px`);
    }
  });

  test("has correct fixed Navbar", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar-is-fixed-top");
      expect.soft(cs.position).toBe("fixed");
      expect.soft(cs.top).toBe("0px");
      expect.soft(cs.zIndex).toBe("30");
    }

    {
      const cs = await styles(page, "#navbar-is-fixed-bottom");
      expect.soft(cs.bottom).toBe("0px");
      expect.soft(cs.position).toBe("fixed");
      expect.soft(cs.zIndex).toBe("30");
    }
  });

  test("has a correct Navbar Item", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-start .navbar-item");
      expect.soft(cs.color).toBe(v.text);
      expect.soft(cs.flexGrow).toBe("0");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.lineHeight).toBe("24px");
      expect.soft(cs.padding).toBe("8px 12px");
    }

    {
      const cs = await styles(
        page,
        "#navbar .navbar-start .navbar-item.has-dropdown",
      );
      expect.soft(cs.padding).toBe("0px");
    }
  });

  test("has a correct Navbar Link", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-link");
      expect.soft(cs.paddingRight).toBe("40px");
    }
  });

  test("has a correct Navbar Drodpown", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-dropdown");
      expect.soft(cs.fontSize).toBe("14px");
      expect.soft(cs.paddingBottom).toBe("12px");
      expect.soft(cs.paddingTop).toBe("8px");
    }

    {
      const cs = await styles(page, "#navbar .navbar-dropdown .navbar-item");
      expect.soft(cs.paddingLeft).toBe("24px");
      expect.soft(cs.paddingRight).toBe("24px");
    }
  });

  test("has a correct Navbar Divider", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-divider");
      // 0.125em of the 14px dropdown font size
      expect.soft(cs.backgroundColor).toBe(v["white-ter"]);
      expect.soft(cs.height).toBe("1.75px");
      expect.soft(cs.margin).toBe("8px 0px");
    }
  });

  test("has a correct Navbar Brand", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-brand");
      expect.soft(cs.alignItems).toBe("stretch");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.minHeight).toBe("52px");
    }
  });
});

// Mobile
test.describe("Components/Navbar Mobile", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/navbar/");
    await setMobile(page);
  });

  test("has a Navbar", async ({ page }) => {
    await expect.soft(page.locator(".navbar").first()).toBeAttached();
  });

  test("has a correct Navbar Container", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar-container > .container");
      expect.soft(cs.display).toBe("block");
    }
  });

  test("has a correct Navbar Item", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-start .navbar-item");
      expect.soft(cs.display).toBe("block");
    }
  });

  test("has a correct active Navbar Item", async ({ page }) => {
    {
      const cs = await styles(
        page,
        "#navbar .navbar-start .navbar-item.is-active",
      );
      expect.soft(cs.backgroundColor).toBe(v.link);
    }
  });

  test("has a correct Navbar Burger", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-burger");
      expect.soft(cs.appearance).toBe("none");
    }
  });

  test("has a correct Navbar Menu", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-menu");
      expect.soft(cs.display).toBe("none");
    }
  });

  test("has a correct Navbar Divider", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-divider");
      expect.soft(cs.display).toBe("none");
    }
  });
});

// Desktop
test.describe("Components/Navbar Desktop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/navbar/");
    await setDesktop(page);
  });

  test("has a Navbar", async ({ page }) => {
    await expect.soft(page.locator(".navbar").first()).toBeAttached();
  });

  test("has a correct Navbar Container", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar-container > .container");
      expect.soft(cs.display).toBe("flex");
    }
  });

  test("has a correct Navbar Item", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-start .navbar-item");
      expect.soft(cs.display).toBe("flex");
    }
  });

  test("has a correct active Navbar Item", async ({ page }) => {
    {
      const cs = await styles(
        page,
        "#navbar .navbar-start .navbar-item.is-active",
      );
      expect.soft(cs.backgroundColor).toBe(v.link);
    }
  });

  test("has a correct Navbar Burger", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-burger");
      expect.soft(cs.appearance).toBe("none");
      expect.soft(cs.display).toBe("none");
      expect.soft(cs.margin).toBe("0px 6px 0px auto");
    }
  });

  test("has a correct Navbar Menu", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-menu");
      expect.soft(cs.display).toBe("flex");
    }
  });

  test("has a correct Navbar Divider", async ({ page }) => {
    {
      const cs = await styles(page, "#navbar .navbar-divider");
      expect.soft(cs.display).toBe("block");
    }
  });

  test(`has correct color Navbars`, async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const baseColor = v[name];
      const invertColor = v[`${name}-invert`];

      {
        const cs = await styles(page, `#navbar-${name} .navbar-link`);
        expect.soft(cs.color).toBe(invertColor);
      }

      {
        const cs = await styles(
          page,
          `#navbar-${name} .navbar-dropdown a.navbar-item.is-active`,
        );
        expect.soft(cs.backgroundColor).toBe(baseColor);
        expect.soft(cs.color).toBe(invertColor);
      }
    }
  });
});
