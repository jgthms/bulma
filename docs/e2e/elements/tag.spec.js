import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Elements/Tag", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/tag/");
  });

  test("has a Tag", async ({ page }) => {
    await expect.soft(page.locator(".tag").first()).toBeAttached();
  });

  test("has a correct Tag", async ({ page }) => {
    {
      const cs = await styles(page, "#tag");
      expect.soft(cs.backgroundColor).toBe(v["white-ter"]);
      expect.soft(cs.borderRadius).toBe(v.radius);
      expect.soft(cs.color).toBe(v["grey-dark"]);
      expect.soft(cs.fontSize).toBe("12px");
      expect.soft(cs.height).toBe("24px");
      expect.soft(cs.padding).toBe("0px 9px");
    }

    {
      const cs = await styles(page, "#tag-rounded");
      expect.soft(cs.borderRadius).toBe("9999px");
    }
  });

  test("has a correct Tag sizes", async ({ page }) => {
    {
      const cs = await styles(page, "#tag-normal");
      expect.soft(cs.fontSize).toBe("12px");
      expect.soft(cs.height).toBe("24px");
    }

    {
      const cs = await styles(page, "#tag-medium");
      expect.soft(cs.fontSize).toBe("16px");
      expect.soft(cs.height).toBe("32px");
    }

    {
      const cs = await styles(page, "#tag-large");
      expect.soft(cs.fontSize).toBe("20px");
      expect.soft(cs.height).toBe("40px");
    }
  });

  // Colors
  test(`has correct color Tags`, async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const baseColor = v[name];
      const invertColor = v[`${name}-invert`];
      const lightColor = v[`${name}-96`];
      const darkColor = v[`${name}-light-invert`];

      {
        const cs = await styles(page, `#tag-${name}`);
        expect.soft(cs.backgroundColor).toBe(baseColor);
        expect.soft(cs.color).toBe(invertColor);
      }

      {
        const cs = await styles(page, `#tag-${name}-light`);
        expect.soft(cs.backgroundColor).toBe(lightColor);
        expect.soft(cs.color).toBe(darkColor);
      }
    }
  });

  test("has correct Tags containers", async ({ page }) => {
    {
      const cs = await styles(page, "#tags");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.columnGap).toBe("8px");
      expect.soft(cs.rowGap).toBe("8px");
    }

    {
      const cs = await styles(page, "#tags-medium .tag");
      expect.soft(cs.fontSize).toBe("16px");
    }

    {
      const cs = await styles(page, "#tags-large .tag");
      expect.soft(cs.fontSize).toBe("20px");
    }

    {
      const cs = await styles(page, "#tags-centered");
      expect.soft(cs.justifyContent).toBe("center");
    }

    {
      const cs = await styles(page, "#tags-right");
      expect.soft(cs.justifyContent).toBe("flex-end");
    }

    {
      const cs = await styles(page, "#tags-addons .tag:nth-child(2)");
      expect.soft(cs.borderRadius).toBe("0px");
      expect.soft(cs.marginRight).toBe("0px");
    }
  });
});
