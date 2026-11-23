import { test, expect } from "@playwright/test";
import v from "../values";
import { styles } from "../utils";

test.describe("Base/Generic", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/base/generic/");
  });

  test("has a correct html", async ({ page }) => {
    {
      const cs = await styles(page, "html");
      expect.soft(cs.backgroundColor).toBe(v["scheme-main"]);
      expect.soft(cs.fontSize).toBe("16px");
      expect.soft(cs.minWidth).toBe("300px");
      expect.soft(cs.overflowX).toBe("hidden");
      expect.soft(cs.overflowY).toBe("scroll");
      expect.soft(cs.textRendering).toBe("optimizelegibility");
      expect.soft(cs.textSizeAdjust).toBe("100%");
      expect.soft(cs.webkitFontSmoothing).toBe("antialiased");
    }
  });

  test("has correct HTML5 elements", async ({ page }) => {
    {
      const cs = await styles(
        page,
        "article, aside, figure, footer, header, hgroup, section",
      );
      expect.soft(cs.display).toBe("block");
    }
  });

  test("has correct form elements", async ({ page }) => {
    {
      const cs = await styles(
        page,
        "body, button, input, optgroup, select, textarea",
      );
      expect.soft(cs.fontFamily).toContain("Inter");
      expect.soft(cs.fontFamily).toContain("Helvetica");
      expect.soft(cs.fontFamily).toContain("Arial");
      expect.soft(cs.fontFamily).toContain("sans-serif");
    }
  });

  test("has correct monospace elements", async ({ page }) => {
    {
      const cs = await styles(page, "pre, code");
      expect.soft(cs.fontFamily).toBe(v["family-code"]);
      expect.soft(cs.webkitFontSmoothing).toBe("auto");
    }
  });

  test("has a correct body", async ({ page }) => {
    {
      const cs = await styles(page, "body");
      expect.soft(cs.color).toBe(v.text);
      expect.soft(cs.fontFamily).toContain("Inter");
      expect.soft(cs.fontFamily).toContain("Helvetica");
      expect.soft(cs.fontFamily).toContain("Arial");
      expect.soft(cs.fontFamily).toContain("sans-serif");
      expect.soft(cs.fontSize).toBe("16px");
      expect.soft(cs.fontWeight).toBe("400");
      expect.soft(cs.lineHeight).toBe("24px");
    }
  });

  test("has a correct a", async ({ page }) => {
    {
      const cs = await styles(page, "a");
      expect.soft(cs.color).toBe(v["link-text"]);
      expect.soft(cs.cursor).toBe("pointer");
      expect.soft(cs.textDecorationLine).toBe("none");
    }
  });

  test("has a correct code", async ({ page }) => {
    {
      const cs = await styles(page, "code");
      expect.soft(cs.backgroundColor).toBe(v["white-ter"]);
      expect.soft(cs.color).toBe(v.code);
    }
  });

  test("has a correct hr", async ({ page }) => {
    {
      const cs = await styles(page, "hr");
      expect.soft(cs.backgroundColor).toBe(v["white-ter"]);
      expect.soft(cs.borderStyle).toBe("none");
      expect.soft(cs.display).toBe("block");
      expect.soft(cs.height).toBe("2px");
      expect.soft(cs.margin).toBe("24px 0px");
    }
  });

  test("has a correct img", async ({ page }) => {
    {
      const cs = await styles(page, "img");
      expect.soft(cs.height).toBe("28px");
      expect.soft(cs.width).toBe("112px");
    }
  });

  test("has a correct checkbox", async ({ page }) => {
    {
      const cs = await styles(page, "input[type='checkbox']");
      expect.soft(cs.verticalAlign).toBe("baseline");
    }
  });

  test("has a correct radio", async ({ page }) => {
    {
      const cs = await styles(page, "input[type='radio']");
      expect.soft(cs.verticalAlign).toBe("baseline");
    }
  });

  test("has a correct small", async ({ page }) => {
    {
      const cs = await styles(page, "small");
      expect.soft(cs.fontSize).toBe("14px");
    }
  });

  test("has a correct fieldset", async ({ page }) => {
    {
      const cs = await styles(page, "fieldset");
      expect.soft(cs.borderStyle).toBe("none");
    }
  });

  test("has a correct pre", async ({ page }) => {
    {
      const cs = await styles(page, "pre");
      expect.soft(cs.backgroundColor).toBe(v["white-ter"]);
      expect.soft(cs.color).toBe(v.text);
      expect.soft(cs.fontSize).toBe("14px");
      expect.soft(cs.overflowX).toBe("auto");
      expect.soft(cs.padding).toBe("20px 24px");
      expect.soft(cs.whiteSpace).toBe("pre");
      expect.soft(cs.wordWrap).toBe("normal");
    }

    {
      const cs = await styles(page, "pre code");
      expect.soft(cs.backgroundColor).toBe(v.transparent);
      expect.soft(cs.color).toBe(v.text);
      expect.soft(cs.fontSize).toBe("14px");
      expect.soft(cs.padding).toBe("0px");
    }
  });
});
