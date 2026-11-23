import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Components/Message", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/message/");
  });

  test("has a Message", async ({ page }) => {
    await expect.soft(page.locator(".message").first()).toBeAttached();
  });

  test("has a correct Message", async ({ page }) => {
    {
      const cs = await styles(page, "#message");
      expect.soft(cs.backgroundColor).toBe(v.transparent);
      expect.soft(cs.borderRadius).toBe(v.radius);
      expect.soft(cs.fontSize).toBe("16px");
    }
  });

  test(`has a correct Message Header`, async ({ page }) => {
    {
      const cs = await styles(page, "#message .message-header");
      expect.soft(cs.backgroundColor).toBe(v["text-strong"]);
      expect.soft(cs.color).toBe("rgb(165, 172, 187)");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.fontWeight).toBe(v["weight-semibold"]);
      expect.soft(cs.padding).toBe("16px 20px");
    }
  });

  test(`has a correct Message Body`, async ({ page }) => {
    {
      const cs = await styles(page, "#message-no-header .message-body");
      expect.soft(cs.backgroundColor).toBe(v["white-ter"]);
      expect.soft(cs.borderLeftColor).toBe(v.border);
      expect.soft(cs.borderRadius).toBe(v["radius-small"]);
      expect.soft(cs.borderWidth).toBe("0px 0px 0px 4px");
      expect.soft(cs.color).toBe(v.text);
      expect.soft(cs.padding).toBe("20px 24px");
    }

    {
      const cs = await styles(page, "#message .message-body");
      expect.soft(cs.borderTopLeftRadius).toBe("0px");
      expect.soft(cs.borderTopRightRadius).toBe("0px");
      expect.soft(cs.borderWidth).toBe("0px");
    }
  });

  test(`has correct color Messages`, async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const baseColor = v[name];
      const invertColor = v[`${name}-invert`];
      const lightColor = v[`${name}-96`];
      const darkColor = v[`${name}-on-scheme`];
      const borderColor = v[`${name}-message-border`];

      {
        const cs = await styles(page, `#message-${name}`);
        expect.soft(cs.color).toBe(darkColor);
      }

      {
        const cs = await styles(page, `#message-${name} .message-header`);
        expect.soft(cs.backgroundColor).toBe(baseColor);
        expect.soft(cs.color).toBe(invertColor);
      }

      {
        const cs = await styles(page, `#message-${name} .message-body`);
        expect.soft(cs.backgroundColor).toBe(lightColor);
        expect.soft(cs.borderLeftColor).toBe(borderColor);
        expect.soft(cs.color).toBe(darkColor);
      }
    }
  });
});
