import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Elements/Button", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/button/");
  });

  test("has a Button", async ({ page }) => {
    await expect.soft(page.locator(".button").first()).toBeAttached();
  });

  test("has a correct Button", async ({ page }) => {
    {
      const cs = await styles(page, "#button-default");
      expect.soft(cs.backgroundColor).toBe(v.white);
      expect.soft(cs.borderColor).toBe(v["grey-lighter"]);
      expect.soft(cs.borderRadius).toBe(v.radius);
      expect.soft(cs.color).toBe(v["grey-darker"]);
      expect.soft(cs.height).toBe("40px");
      expect.soft(cs.lineHeight).toBe("24px");
      expect.soft(cs.padding).toBe("7px 15px");
    }
  });

  // States
  test("has a correct hover Button", async ({ page }) => {
    {
      const cs = await styles(page, "#button-hover");
      // Hovering darkens the background by 5% and the border by 10%
      expect.soft(cs.backgroundColor).toBe("rgb(240, 242, 244)");
      expect.soft(cs.borderColor).toBe(v["border-hover"]);
      expect.soft(cs.borderRadius).toBe(v.radius);
      expect.soft(cs.color).toBe(v["grey-darker"]);
      expect.soft(cs.height).toBe("40px");
      expect.soft(cs.lineHeight).toBe("24px");
      expect.soft(cs.padding).toBe("7px 15px");
    }
  });

  test("has a correct focus Button", async ({ page }) => {
    {
      const cs = await styles(page, "#button-focus");
      expect.soft(cs.backgroundColor).toBe(v.white);
      expect.soft(cs.borderColor).toBe(v.blue);
      expect.soft(cs.borderRadius).toBe(v.radius);
      expect
        .soft(cs.boxShadow)
        .toBe(`rgba${v.blue.slice(3, -1)}, 0.25) 0px 0px 0px 3px`);
      expect.soft(cs.color).toBe(v["grey-darker"]);
      expect.soft(cs.height).toBe("40px");
      expect.soft(cs.lineHeight).toBe("24px");
      expect.soft(cs.padding).toBe("7px 15px");
    }
  });

  // Colors
  test(`has correct color Buttons`, async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const baseColor = v[name];
      const invertColor = v[`${name}-invert`];
      const lightColor = v[`${name}-96`];
      const darkColor = v[`${name}-light-invert`];
      const focusColor = v.link;

      {
        const cs = await styles(page, `#button-${name}`);
        expect.soft(cs.backgroundColor).toBe(baseColor);
        expect.soft(cs.borderColor).toBe(baseColor);
        expect.soft(cs.borderWidth).toBe("0px");
        expect.soft(cs.color).toBe(invertColor);
      }

      {
        const cs = await styles(page, `#button-${name}-hover`);
        expect.soft(cs.borderWidth).toBe("0px");
        expect.soft(cs.color).toBe(invertColor);
      }

      // The focus ring uses the focus color (link), whatever the button color
      {
        const cs = await styles(page, `#button-${name}-focus`);
        expect
          .soft(cs.boxShadow)
          .toBe(`rgba${focusColor.slice(3, -1)}, 0.25) 0px 0px 0px 3px`);
        expect.soft(cs.borderColor).toBe(focusColor);
        expect.soft(cs.borderWidth).toBe("1px");
        expect.soft(cs.color).toBe(invertColor);
      }

      {
        const cs = await styles(page, `#button-${name}-active`);
        expect.soft(cs.borderWidth).toBe("0px");
        expect.soft(cs.color).toBe(invertColor);
      }

      {
        const cs = await styles(page, `#button-${name}-inverted`);
        expect.soft(cs.backgroundColor).toBe(invertColor);
        expect.soft(cs.color).toBe(baseColor);
      }

      {
        const cs = await styles(page, `#button-${name}-outlined`);
        expect.soft(cs.backgroundColor).toBe(v.transparent);
        expect.soft(cs.borderColor).toBe(baseColor);
        expect.soft(cs.color).toBe(baseColor);
      }

      // Outlined buttons keep their colors when hovered: only the border gets thicker
      {
        const cs = await styles(page, `#button-${name}-outlined-hover`);
        expect.soft(cs.backgroundColor).toBe(v.transparent);
        expect.soft(cs.borderColor).toBe(baseColor);
        expect.soft(cs.color).toBe(baseColor);
      }

      {
        const cs = await styles(page, `#button-${name}-inverted-outlined`);
        expect.soft(cs.backgroundColor).toBe(invertColor);
        expect.soft(cs.borderColor).toBe(baseColor);
        expect.soft(cs.color).toBe(baseColor);
      }

      {
        const cs = await styles(page, `#button-${name}-light`);
        expect.soft(cs.backgroundColor).toBe(lightColor);
        expect.soft(cs.color).toBe(darkColor);
      }
    }
  });
});
