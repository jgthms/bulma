import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Elements/Notification", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/elements/notification/");
  });

  test("has a Notification element", async ({ page }) => {
    await expect.soft(page.locator("#notification").first()).toBeAttached();
  });

  test("has a correct Notification", async ({ page }) => {
    {
      const cs = await styles(page, "#notification");
      expect.soft(cs.backgroundColor).toBe(v["white-ter"]);
      expect.soft(cs.borderRadius).toBe(v.radius);
      expect.soft(cs.padding).toBe("22px 24px");
    }
  });

  test(`has correct color Notifications`, async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const baseColor = v[name];
      const invertColor = v[`${name}-invert`];
      const lightColor = v[`${name}-90`];
      const darkColor = v[`${name}-light-invert`];

      {
        const cs = await styles(page, `#notification-${name}`);
        expect.soft(cs.backgroundColor).toBe(baseColor);
        expect.soft(cs.color).toBe(invertColor);
      }

      {
        const cs = await styles(page, `#notification-${name}-light`);
        expect.soft(cs.backgroundColor).toBe(lightColor);
        expect.soft(cs.color).toBe(darkColor);
      }
    }
  });
});
