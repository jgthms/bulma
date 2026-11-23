import { test, expect } from "@playwright/test";
import {
  styles,
  setDesktop,
  setMobile,
  setTablet,
  setWidescreen,
  setFullHD,
} from "../utils";

const SCREENS = [
  ["-mobile", setMobile],
  ["-tablet", setTablet],
  ["-desktop", setDesktop],
  ["-widescreen", setWidescreen],
  ["-fullhd", setFullHD],
];

const WIDTHS = [
  ["three-quarters", 0.75],
  ["two-thirds", 0.6666],
  ["half", 0.5],
  ["one-third", 0.3333],
  ["one-quarter", 0.25],
  ["one-fifth", 0.2],
  ["two-fifths", 0.4],
  ["three-fifths", 0.6],
  ["four-fifths", 0.8],
];

test.describe("Grid/Columns", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/grid/columns/");
    await setDesktop(page);
  });

  test("has Columns", async ({ page }) => {
    await expect.soft(page.locator(".columns").first()).toBeAttached();
  });

  test("has correct Columns", async ({ page }) => {
    {
      const cs = await styles(page, "#columns");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.marginBottom).toBe("12px");
      expect.soft(cs.marginLeft).toBe("-12px");
      expect.soft(cs.marginRight).toBe("-12px");
      expect.soft(cs.marginTop).toBe("-12px");
    }
  });

  test("has correct last Columns", async ({ page }) => {
    {
      const cs = await styles(page, "#columns-last");
      expect.soft(cs.marginBottom).toBe("-12px");
    }
  });

  test("has correct centered Columns", async ({ page }) => {
    {
      const cs = await styles(page, "#columns-centered");
      expect.soft(cs.justifyContent).toBe("center");
    }
  });

  test("has correct gapless Columns", async ({ page }) => {
    {
      const cs = await styles(page, "#columns-gapless");
      expect.soft(cs.marginBottom).toBe("24px");
      expect.soft(cs.marginLeft).toBe("0px");
      expect.soft(cs.marginRight).toBe("0px");
      expect.soft(cs.marginTop).toBe("0px");
    }

    {
      const cs = await styles(page, "#columns-gapless .column");
      expect.soft(cs.margin).toBe("0px");
      expect.soft(cs.padding).toBe("0px");
    }
  });

  test("has correct gapless last Columns", async ({ page }) => {
    {
      const cs = await styles(page, "#columns-gapless-last");
      expect.soft(cs.marginBottom).toBe("0px");
    }
  });

  test("has correct multiline Columns", async ({ page }) => {
    {
      const cs = await styles(page, "#columns-multiline");
      expect.soft(cs.flexWrap).toBe("wrap");
    }
  });

  test("has correct vcentered Columns", async ({ page }) => {
    {
      const cs = await styles(page, "#columns-vcentered");
      expect.soft(cs.alignItems).toBe("center");
    }
  });

  // Responsiveness

  test("has correct mobile Columns", async ({ page }) => {
    await setMobile(page);

    {
      const cs = await styles(page, "#columns-mobile");
      expect.soft(cs.display).toBe("flex");
    }

    await setDesktop(page);

    {
      const cs = await styles(page, "#columns-mobile");
      expect.soft(cs.display).toBe("flex");
    }
  });

  test("has correct desktop Columns", async ({ page }) => {
    await setMobile(page);

    {
      const cs = await styles(page, "#columns-desktop");
      expect.soft(cs.display).toBe("block");
    }

    await setTablet(page);

    {
      const cs = await styles(page, "#columns-desktop");
      expect.soft(cs.display).toBe("block");
    }

    await setDesktop(page);

    {
      const cs = await styles(page, "#columns-desktop");
      expect.soft(cs.display).toBe("flex");
    }
  });
});

test.describe("Grid/Column", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/grid/columns/");
    await setTablet(page);
  });

  test("has a Column", async ({ page }) => {
    await expect.soft(page.locator(".column").first()).toBeAttached();
  });

  test("has a correct Column", async ({ page }) => {
    {
      const cs = await styles(page, "#columns .column");
      expect.soft(cs.display).toBe("block");
      expect.soft(cs.flexBasis).toBe("0px");
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.flexShrink).toBe("1");
      expect.soft(cs.padding).toBe("12px");
    }
  });

  test("has a correct Column sizes", async ({ page }) => {
    const px = (value) => `${Math.round(parseFloat(value))}px`;

    for (const [suffix, setScreen] of SCREENS) {
      await setScreen(page);

      const columns = `#columns-special${suffix}`;
      const columnsWidth = await page
        .locator(columns)
        .first()
        .evaluate((element) => element.clientWidth);

      const checkWidth = async (selector, expectedWidth) => {
        const cs = await styles(page, `${columns} ${selector}`);
        expect.soft(cs.flexBasis).toBe("auto");
        expect.soft(cs.flexGrow).toBe("0");
        expect.soft(cs.flexShrink).toBe("0");
        expect.soft(px(cs.width)).toBe(px(expectedWidth));
      };

      const checkOffset = async (selector, expectedOffset) => {
        const cs = await styles(page, `${columns} ${selector}`);
        expect.soft(px(cs.marginLeft)).toBe(px(expectedOffset));
      };

      await checkWidth(`.column.is-full${suffix}`, columnsWidth);

      {
        const cs = await styles(page, `${columns} .column.is-narrow${suffix}`);
        expect.soft(cs.flexBasis).toBe("auto");
        expect.soft(cs.flexGrow).toBe("0");
        expect.soft(cs.flexShrink).toBe("0");
      }

      for (const [name, factor] of WIDTHS) {
        await checkWidth(`.column.is-${name}${suffix}`, factor * columnsWidth);
        await checkOffset(
          `.column.is-offset-${name}${suffix}`,
          factor * columnsWidth,
        );
      }

      for (let i = 1; i <= 12; i++) {
        await checkWidth(`.column.is-${i}${suffix}`, (i / 12) * columnsWidth);
        await checkOffset(
          `.column.is-offset-${i}${suffix}`,
          (i / 12) * columnsWidth,
        );
      }
    }
  });
});
