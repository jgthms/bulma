import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Components/Modal", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/modal/");
  });

  test("has a Modal", async ({ page }) => {
    await expect.soft(page.locator(".modal").first()).toBeAttached();
  });

  test("has a correct Modal", async ({ page }) => {
    {
      const cs = await styles(page, "#modal");
      expect.soft(cs.display).toBe("none");
      expect.soft(cs.flexDirection).toBe("column");
      expect.soft(cs.overflow).toBe("hidden");
      expect.soft(cs.position).toBe("fixed");
      expect.soft(cs.zIndex).toBe("40");
    }

    {
      const cs = await styles(page, "#modal-active");
      expect.soft(cs.display).toBe("flex");
    }
  });

  test("has a correct Modal Background", async ({ page }) => {
    {
      const cs = await styles(page, "#modal .modal-background");
      expect.soft(cs.backgroundColor).toBe("rgba(9, 10, 12, 0.86)");
      expect.soft(cs.position).toBe("absolute");
    }
  });

  test("has a correct Modal Content", async ({ page }) => {
    {
      const cs = await styles(page, "#modal .modal-content");
      expect.soft(cs.margin).toBe("0px auto");
      expect.soft(cs.width).toBe("640px");
    }
  });

  test("has a correct Modal Card", async ({ page }) => {
    {
      const cs = await styles(page, "#modal-card .modal-card");
      expect.soft(cs.display).toBe("flex");
    }

    {
      const cs = await styles(
        page,
        "#modal-card .modal-card-head, #modal-card .modal-card-foot",
      );
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.padding).toBe("32px");
      expect.soft(cs.position).toBe("relative");
    }

    {
      const cs = await styles(page, "#modal-card .modal-card-head");
      expect.soft(cs.backgroundColor).toBe(v["scheme-main"]);
      expect.soft(cs.borderBottomStyle).toBe("none");
      expect.soft(cs.borderTopLeftRadius).toBe(v["radius-large"]);
      expect.soft(cs.borderTopRightRadius).toBe(v["radius-large"]);
    }

    {
      const cs = await styles(page, "#modal-card .modal-card-foot");
      expect.soft(cs.backgroundColor).toBe(v["scheme-main-bis"]);
      expect.soft(cs.borderTopStyle).toBe("none");
      expect.soft(cs.borderBottomLeftRadius).toBe(v["radius-large"]);
      expect.soft(cs.borderBottomRightRadius).toBe(v["radius-large"]);
    }

    {
      const cs = await styles(page, "#modal-card .modal-card-title");
      expect.soft(cs.color).toBe(v["text-strong"]);
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.fontSize).toBe("24px");
      expect.soft(cs.lineHeight).toBe("24px");
    }

    {
      const cs = await styles(page, "#modal-card .modal-card-body");
      expect.soft(cs.backgroundColor).toBe(v.white);
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.flexShrink).toBe("1");
      expect.soft(cs.overflow).toBe("auto");
      expect.soft(cs.padding).toBe("32px");
    }
  });
});
