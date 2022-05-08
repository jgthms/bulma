import {
  setMobile,
  setTablet,
  setDesktop,
  setWidescreen,
  setFullHD,
} from "../utils";

describe("Grid/Tiles", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/grid/tiles/");
    setDesktop();
  });

  it("has a Tile", () => {
    cy.get(".tile").should("exist");
  });

  it("has a correct Tile", () => {
    cy.get("#tile").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("stretch");
      expect(cs.display).to.equal("flex");
      expect(cs.flexBasis).to.equal("0px");
      expect(cs.flexGrow).to.equal("1");
      expect(cs.flexShrink).to.equal("1");
      expect(cs.minHeight).to.equal("min-content");
    });
  });

  it("has a correct ancestor Tile", () => {
    cy.get("#tile-ancestor").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("12px");
      expect(cs.marginLeft).to.equal("-12px");
      expect(cs.marginRight).to.equal("-12px");
      expect(cs.marginTop).to.equal("-12px");
    });
  });

  it("has a correct last ancestor Tile", () => {
    cy.get("#tile-ancestor-last").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("-12px");
      expect(cs.marginLeft).to.equal("-12px");
      expect(cs.marginRight).to.equal("-12px");
      expect(cs.marginTop).to.equal("-12px");
    });
  });

  it("has a correct parent Tile", () => {
    cy.get("#tile-parent").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("12px");
    });
  });

  it("has a correct vertical Tile", () => {
    cy.get("#tile-vertical").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexDirection).to.equal("column");
    });
  });

  it("has a correct child Tile", () => {
    cy.get("#tile-child").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("0px");
      expect(cs.marginLeft).to.equal("0px");
      expect(cs.marginRight).to.equal("0px");
      expect(cs.marginTop).to.equal("0px");
    });
  });

  it("has a correct vertical child Tile", () => {
    cy.get("#tile-vertical-child").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("24px");
    });
  });

  it("has a correct Tile sizes", () => {
    for (let i = 1; i <= 12; i++) {
      cy.get(`#tile-${i}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        const actualWidth = cs.width.substring(0, cs.width.length - 2);
        expect(cs.flexBasis).to.equal("auto");
        expect(cs.flexGrow).to.equal("0");
        expect(cs.flexShrink).to.equal("0");
        expect(`${Math.round(actualWidth)}px`).to.equal(
          `${Math.round((i / 12) * 1000)}px`
        );
      });
    }
  });
});
