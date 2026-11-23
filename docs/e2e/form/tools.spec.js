import { test, expect } from "@playwright/test";
import v from "../values";
import { styles, setDesktop } from "../utils";

test.describe("Form/Label", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/tools/");
  });

  test("has a Label", async ({ page }) => {
    await expect.soft(page.locator(".label").first()).toBeAttached();
  });

  test("has a correct Label", async ({ page }) => {
    {
      const cs = await styles(page, "#label");
      expect.soft(cs.color).toBe(v["text-strong"]);
      expect.soft(cs.display).toBe("block");
      expect.soft(cs.fontSize).toBe(v["size-normal"]);
      expect.soft(cs.fontWeight).toBe(v["weight-semibold"]);
    }
  });

  test("has correct Label sizes", async ({ page }) => {
    for (let i = 0; i < v["just-sizes"].length; i++) {
      const size = v["just-sizes"][i];

      {
        const cs = await styles(page, `#label-${size}`);
        expect.soft(cs.fontSize).toBe(`${v.sizes[size]}px`);
      }
    }
  });
});

test.describe("Form/Help", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/tools/");
  });

  test("has a Help", async ({ page }) => {
    await expect.soft(page.locator(".help").first()).toBeAttached();
  });

  test("has a correct Help", async ({ page }) => {
    {
      const cs = await styles(page, "#help");
      expect.soft(cs.display).toBe("block");
      expect.soft(cs.fontSize).toBe(v["size-small"]);
      expect.soft(cs.marginTop).toBe("4px");
    }
  });

  test("has correct Help colors", async ({ page }) => {
    for (let i = 0; i < v["color-names"].length; i++) {
      const name = v["color-names"][i];
      const textColor = v[`${name}-on-scheme`];

      {
        const cs = await styles(page, `#help-${name}`);
        expect.soft(cs.color).toBe(textColor);
      }
    }
  });
});

test.describe("Form/Field", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/tools/");
    await setDesktop(page);
  });

  test("has a Field", async ({ page }) => {
    await expect.soft(page.locator(".field").first()).toBeAttached();
  });

  test("has a correct Field", async ({ page }) => {
    {
      const cs = await styles(page, "#field");
      expect.soft(cs.marginBottom).toBe("12px");
    }
  });

  test("has a correct Field with addons", async ({ page }) => {
    {
      const cs = await styles(page, "#field-has-addons");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.justifyContent).toBe("flex-start");
    }
  });

  test("has a correct Field with addons centered", async ({ page }) => {
    {
      const cs = await styles(page, "#field-has-addons-centered");
      expect.soft(cs.justifyContent).toBe("center");
    }
  });

  test("has a correct Field with addons right", async ({ page }) => {
    {
      const cs = await styles(page, "#field-has-addons-right");
      expect.soft(cs.justifyContent).toBe("flex-end");
    }
  });

  test("has a correct Field with addons fullwidth .control", async ({
    page,
  }) => {
    {
      const cs = await styles(page, "#field-has-addons-fullwidth .control");
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.flexShrink).toBe("0");
    }
  });

  test("has a correct Field grouped", async ({ page }) => {
    {
      const cs = await styles(page, "#field-is-grouped");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.justifyContent).toBe("flex-start");
    }
  });

  test("has a correct Field grouped centered", async ({ page }) => {
    {
      const cs = await styles(page, "#field-is-grouped-centered");
      expect.soft(cs.justifyContent).toBe("center");
    }
  });

  test("has a correct Field grouped right", async ({ page }) => {
    {
      const cs = await styles(page, "#field-is-grouped-right");
      expect.soft(cs.justifyContent).toBe("flex-end");
    }
  });

  test("has a correct Field grouped multiline", async ({ page }) => {
    {
      const cs = await styles(page, "#field-is-grouped-multiline");
      expect.soft(cs.flexWrap).toBe("wrap");
    }
  });

  test("has a correct Field horizontal", async ({ page }) => {
    {
      const cs = await styles(page, "#field-is-horizontal");
      expect.soft(cs.display).toBe("flex");
    }
  });
});

test.describe("Form/Field Label", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/tools/");
    await setDesktop(page);
  });

  test("has a Field Label", async ({ page }) => {
    await expect.soft(page.locator(".field-label").first()).toBeAttached();
  });

  test("has a correct Field Label", async ({ page }) => {
    {
      const cs = await styles(page, "#field-label");
      expect.soft(cs.flexBasis).toBe("0px");
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.flexShrink).toBe("0");
      expect.soft(cs.textAlign).toBe("right");
    }

    {
      const cs = await styles(page, "#field-label .label");
      expect.soft(cs.fontSize).toBe("16px");
    }
  });

  test("has correct Field Label sizes", async ({ page }) => {
    for (let i = 0; i < v["just-sizes"].length; i++) {
      const size = v["just-sizes"][i];

      {
        const cs = await styles(page, `#field-label-${size}`);
        const sizeValue = v.sizes[size];
        expect.soft(cs.fontSize).toBe(`${sizeValue}px`);
        expect.soft(cs.paddingTop).toBe(`${sizeValue * 0.375}px`);
      }
    }
  });
});

test.describe("Form/Field Body", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/tools/");
    await setDesktop(page);
  });

  test("has a Field Body", async ({ page }) => {
    await expect.soft(page.locator(".field-body").first()).toBeAttached();
  });

  test("has a correct Field Body", async ({ page }) => {
    {
      const cs = await styles(page, "#field-body");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.flexBasis).toBe("0px");
      expect.soft(cs.flexGrow).toBe("5");
      expect.soft(cs.flexShrink).toBe("1");
    }

    {
      const cs = await styles(page, "#field-body .field");
      expect.soft(cs.marginBottom).toBe("0px");
    }

    {
      const cs = await styles(page, "#field-body > .field");
      expect.soft(cs.flexShrink).toBe("1");
    }

    {
      const cs = await styles(page, "#field-body .field .field");
      expect.soft(cs.marginBottom).toBe("0px");
    }
  });
});

test.describe("Form/Control", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/form/tools/");
    await setDesktop(page);
  });

  test("has a Control", async ({ page }) => {
    await expect.soft(page.locator(".control").first()).toBeAttached();
  });

  test("has a correct Control", async ({ page }) => {
    {
      const cs = await styles(page, "#control");
      expect.soft(cs.boxSizing).toBe("border-box");
      expect.soft(cs.clear).toBe("both");
      expect.soft(cs.fontSize).toBe(v["size-normal"]);
      expect.soft(cs.position).toBe("relative");
      expect.soft(cs.textAlign).toBe("start");
    }
  });

  test("has a correct Control with icons left", async ({ page }) => {
    {
      const cs = await styles(page, "#control-has-icons-left .icon");
      expect.soft(cs.color).toBe(v["input-icon"]);
      expect.soft(cs.height).toBe(v["control-height"]);
      expect.soft(cs.left).toBe("0px");
      expect.soft(cs.pointerEvents).toBe("none");
      expect.soft(cs.position).toBe("absolute");
      expect.soft(cs.top).toBe("0px");
      expect.soft(cs.width).toBe(v["control-height"]);
      expect.soft(cs.zIndex).toBe("4");
    }
  });

  test("has a correct Control with icons right", async ({ page }) => {
    {
      const cs = await styles(page, "#control-has-icons-right .icon");
      expect.soft(cs.color).toBe(v["input-icon"]);
      expect.soft(cs.height).toBe(v["control-height"]);
      expect.soft(cs.pointerEvents).toBe("none");
      expect.soft(cs.position).toBe("absolute");
      expect.soft(cs.right).toBe("0px");
      expect.soft(cs.top).toBe("0px");
      expect.soft(cs.width).toBe(v["control-height"]);
      expect.soft(cs.zIndex).toBe("4");
    }
  });

  test("has a correct loading Control", async ({ page }) => {
    {
      const after = await styles(page, "#control-loading", "after");
      expect.soft(after.animationDuration).toBe("0.5s");
      expect.soft(after.animationIterationCount).toBe("infinite");
      expect.soft(after.animationName).toBe("spinAround");
      expect.soft(after.animationTimingFunction).toBe("linear");
      expect.soft(after.borderBottomColor).toBe(v["grey-lighter"]);
      expect.soft(after.borderLeftColor).toBe(v["grey-lighter"]);
      expect.soft(after.borderRightColor).toBe(v.transparent);
      expect.soft(after.borderTopColor).toBe(v.transparent);
      expect.soft(after.borderRadius).toBe("9999px");
      expect.soft(after.borderStyle).toBe("solid");
      expect.soft(after.borderWidth).toBe("2px");
      expect.soft(after.content).toBe('""');
      expect.soft(after.display).toBe("block");
      expect.soft(after.height).toBe("16px");
      expect.soft(after.position).toBe("absolute");
      expect.soft(after.top).toBe(`${0.75 * 16}px`);
      expect.soft(after.width).toBe("16px");
      expect.soft(after.zIndex).toBe("4");
    }

    {
      const after = await styles(page, "#control-loading-small", "after");
      expect.soft(after.fontSize).toBe(v["size-small"]);
    }

    {
      const after = await styles(page, "#control-loading-medium", "after");
      expect.soft(after.fontSize).toBe(v["size-medium"]);
    }

    {
      const after = await styles(page, "#control-loading-large", "after");
      expect.soft(after.fontSize).toBe(v["size-large"]);
    }
  });
});
