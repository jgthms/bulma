import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Components/Dropdown", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/dropdown/");
  });

  test("has a Dropdown", async ({ page }) => {
    await expect.soft(page.locator(".dropdown").first()).toBeAttached();
  });

  test("has a correct Dropdown Content", async ({ page }) => {
    {
      const cs = await styles(page, "#dropdown .dropdown-content");
      expect.soft(cs.backgroundColor).toBe(v.white);
      expect.soft(cs.borderRadius).toBe(v.radius);
      expect.soft(cs.boxShadow).toBe(v.shadow);
      expect.soft(cs.paddingBottom).toBe("8px");
      expect.soft(cs.paddingTop).toBe("8px");
    }
  });

  test("has a correct Dropdown Menu", async ({ page }) => {
    {
      const cs = await styles(page, "#dropdown .dropdown-menu");
      expect.soft(cs.display).toBe("none");
      expect.soft(cs.paddingTop).toBe("4px");
      expect.soft(cs.position).toBe("absolute");
      expect.soft(cs.zIndex).toBe("20");
    }

    {
      const cs = await styles(page, "#dropdown-active .dropdown-menu");
      expect.soft(cs.display).toBe("block");
    }
  });

  test("has a correct Dropdown Item", async ({ page }) => {
    {
      const cs = await styles(page, "#dropdown .dropdown-item");
      expect.soft(cs.color).toBe(v["text-strong"]);
      expect.soft(cs.display).toBe("block");
    }

    {
      const cs = await styles(page, "#dropdown a.dropdown-item");
      expect.soft(cs.width).toBe("100%");
    }

    {
      const cs = await styles(page, "#dropdown a.dropdown-item.is-active");
      expect.soft(cs.backgroundColor).toBe(v.link);
      expect.soft(cs.color).toBe(v["link-invert"]);
    }
  });

  test("has a correct Dropdown Divider", async ({ page }) => {
    {
      const cs = await styles(page, "#dropdown .dropdown-divider");
      expect.soft(cs.backgroundColor).toBe(v["grey-lightest"]);
      expect.soft(cs.height).toBe("1px");
    }
  });
});
