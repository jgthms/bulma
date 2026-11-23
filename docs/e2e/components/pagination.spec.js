import { test, expect } from "@playwright/test";
import v from "../values";
import { styles, setMobile, setTablet } from "../utils";

test.describe("Components/Pagination", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/pagination/");
  });

  test("has a Pagination", async ({ page }) => {
    await expect.soft(page.locator(".pagination").first()).toBeAttached();
  });

  test("has a correct Pagination", async ({ page }) => {
    {
      const cs = await styles(page, "#pagination");
      expect.soft(cs.alignItems).toBe("center");
      expect.soft(cs.display).toBe("flex");
      expect.soft(cs.textAlign).toBe("center");
    }
  });

  test("has correct Pagination items", async ({ page }) => {
    {
      const cs = await styles(
        page,
        "#pagination .pagination-previous,#pagination .pagination-next,#pagination .pagination-link,#pagination .pagination-ellipsis",
      );
      expect.soft(cs.fontSize).toBe("16px");
      expect.soft(cs.justifyContent).toBe("center");
      expect.soft(cs.paddingLeft).toBe("12px");
      expect.soft(cs.paddingRight).toBe("12px");
      expect.soft(cs.textAlign).toBe("center");
    }

    {
      const cs = await styles(
        page,
        "#pagination .pagination-previous:not(.is-disabled),#pagination .pagination-next:not(.is-disabled),#pagination .pagination-link:not(.is-current)",
      );
      expect.soft(cs.borderColor).toBe(v.border);
      expect.soft(cs.color).toBe(v["text-strong"]);
      expect.soft(cs.minWidth).toBe("40px");
    }

    {
      const cs = await styles(
        page,
        "#pagination .pagination-previous.is-disabled",
      );
      expect.soft(cs.backgroundColor).toBe(v.border);
      expect.soft(cs.borderColor).toBe(v.border);
      expect.soft(cs.boxShadow).toBe("none");
      expect.soft(cs.color).toBe(v["text-light"]);
      expect.soft(cs.opacity).toBe("0.5");
    }

    {
      const cs = await styles(page, "#pagination .pagination-link.is-current");
      expect.soft(cs.backgroundColor).toBe(v.link);
      expect.soft(cs.borderColor).toBe(v.link);
      expect.soft(cs.color).toBe(v["link-invert"]);
    }

    {
      const cs = await styles(
        page,
        "#pagination .pagination-previous:not(.is-disabled),#pagination .pagination-next:not(.is-disabled)",
      );
      expect.soft(cs.paddingLeft).toBe("12px");
      expect.soft(cs.paddingRight).toBe("12px");
      expect.soft(cs.whiteSpace).toBe("nowrap");
    }

    {
      const cs = await styles(page, "#pagination .pagination-ellipsis");
      expect.soft(cs.color).toBe(v["text-light"]);
      expect.soft(cs.pointerEvents).toBe("none");
    }

    {
      const cs = await styles(page, "#pagination .pagination-list");
      expect.soft(cs.flexWrap).toBe("wrap");
    }
  });
});

// Mobile
test.describe("Components/Pagination Mobile", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/pagination/");
    await setMobile(page);
  });

  test("has a correct Pagination", async ({ page }) => {
    {
      const cs = await styles(page, "#pagination");
      expect.soft(cs.flexWrap).toBe("wrap");
      expect.soft(cs.justifyContent).toBe("center");
    }

    {
      const cs = await styles(
        page,
        "#pagination .pagination-previous,#pagination .pagination-next,#pagination .pagination-list li",
      );
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.flexShrink).toBe("1");
    }

    {
      const cs = await styles(
        page,
        "#pagination .pagination-previous,#pagination .pagination-next,#pagination .pagination-link,#pagination .pagination-ellipsis",
      );
      expect.soft(cs.margin).toBe("4px");
    }
  });
});

// Tablet
test.describe("Components/Navbar Tablet", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cyp/components/pagination/");
    await setTablet(page);
  });

  test("has a correct Pagination", async ({ page }) => {
    {
      const cs = await styles(page, "#pagination .pagination-list");
      expect.soft(cs.marginBottom).toBe("0px");
      expect.soft(cs.marginTop).toBe("0px");
    }

    {
      const cs = await styles(page, "#pagination .pagination-list");
      expect.soft(cs.flexGrow).toBe("1");
      expect.soft(cs.flexShrink).toBe("1");
      expect.soft(cs.justifyContent).toBe("flex-start");
      expect.soft(cs.order).toBe("1");
    }

    {
      const cs = await styles(
        page,
        "#pagination .pagination-previous,#pagination .pagination-next,#pagination .pagination-link,#pagination .pagination-ellipsis",
      );
      expect.soft(cs.marginBottom).toBe("0px");
      expect.soft(cs.marginTop).toBe("0px");
    }

    {
      const cs = await styles(page, "#pagination .pagination-previous");
      expect.soft(cs.order).toBe("2");
    }

    {
      const cs = await styles(page, "#pagination .pagination-next");
      expect.soft(cs.order).toBe("3");
    }
  });

  test("has a correct Pagination alignments", async ({ page }) => {
    {
      const cs = await styles(
        page,
        "#pagination-centered .pagination-previous",
      );
      expect.soft(cs.order).toBe("1");
    }

    {
      const cs = await styles(page, "#pagination-centered .pagination-list");
      expect.soft(cs.justifyContent).toBe("center");
      expect.soft(cs.order).toBe("2");
    }

    {
      const cs = await styles(page, "#pagination-centered .pagination-next");
      expect.soft(cs.order).toBe("3");
    }

    {
      const cs = await styles(page, "#pagination-right .pagination-previous");
      expect.soft(cs.order).toBe("1");
    }

    {
      const cs = await styles(page, "#pagination-right .pagination-list");
      expect.soft(cs.justifyContent).toBe("flex-end");
      expect.soft(cs.order).toBe("3");
    }

    {
      const cs = await styles(page, "#pagination-right .pagination-next");
      expect.soft(cs.order).toBe("2");
    }
  });
});
