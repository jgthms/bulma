import { familyPrimary } from "../utils";

describe("Base/Generic", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/base/generic/");
  });

  it("has a correct html", () => {
    cy.get("html").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("scheme-main"));
      expect(cs.fontSize).to.equal("16px");
      expect(cs.minWidth).to.equal("300px");
      expect(cs.overflowX).to.equal("hidden");
      expect(cs.overflowY).to.equal("scroll");
      expect(cs.textRendering).to.equal("optimizelegibility");
      expect(cs.textSizeAdjust).to.equal("100%");
      expect(cs.webkitFontSmoothing).to.equal("antialiased");
    });
  });

  it("has correct HTML5 elements", () => {
    cy.get("article, aside, figure, footer, header, hgroup, section").then(
      ($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.display).to.equal("block");
      }
    );
  });

  it("has correct form elements", () => {
    cy.get("body, button, input, optgroup, select, textarea").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontFamily).to.contains("-apple-system");
      expect(cs.fontFamily).to.contains("Helvetica");
      expect(cs.fontFamily).to.contains("Arial");
      expect(cs.fontFamily).to.contains("sans-serif");
    });
  });

  it("has correct monospace elements", () => {
    cy.get("pre, code").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontFamily).to.equal(Cypress.env("family-code"));
      expect(cs.webkitFontSmoothing).to.equal("auto");
    });
  });

  it("has a correct body", () => {
    cy.get("body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("text"));
      expect(cs.fontFamily).to.contains("-apple-system");
      expect(cs.fontFamily).to.contains("Helvetica");
      expect(cs.fontFamily).to.contains("Arial");
      expect(cs.fontFamily).to.contains("sans-serif");
      expect(cs.fontSize).to.equal("16px");
      expect(cs.fontWeight).to.equal("400");
      expect(cs.lineHeight).to.equal("24px");
    });
  });

  it("has a correct a", () => {
    cy.get("a").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("link"));
      expect(cs.cursor).to.equal("pointer");
      expect(cs.textDecorationLine).to.equal("none");
    });
  });

  it("has a correct code", () => {
    cy.get("code").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white-ter"));
      expect(cs.color).to.equal(Cypress.env("code"));
    });
  });

  it("has a correct hr", () => {
    cy.get("hr").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white-ter"));
      expect(cs.borderStyle).to.equal("none");
      expect(cs.display).to.equal("block");
      expect(cs.height).to.equal("2px");
      expect(cs.margin).to.equal("24px 0px");
    });
  });

  it("has a correct img", () => {
    cy.get("img").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal("28px");
      expect(cs.width).to.equal("112px");
    });
  });

  it("has a correct checkbox", () => {
    cy.get("input[type='checkbox']").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.verticalAlign).to.equal("baseline");
    });
  });

  it("has a correct radio", () => {
    cy.get("input[type='radio']").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.verticalAlign).to.equal("baseline");
    });
  });

  it("has a correct small", () => {
    cy.get("small").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("14px");
    });
  });

  it("has a correct fieldset", () => {
    cy.get("fieldset").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderStyle).to.equal("none");
    });
  });

  it("has a correct pre", () => {
    cy.get("pre").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white-ter"));
      expect(cs.color).to.equal(Cypress.env("text"));
      expect(cs.fontSize).to.equal("14px");
      expect(cs.overflowX).to.equal("auto");
      expect(cs.padding).to.equal("20px 24px");
      expect(cs.whiteSpace).to.equal("pre");
      expect(cs.wordWrap).to.equal("normal");
    });

    cy.get("pre code").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("transparent"));
      expect(cs.color).to.equal(Cypress.env("text"));
      expect(cs.fontSize).to.equal("14px");
      expect(cs.padding).to.equal("0px");
    });
  });
});
