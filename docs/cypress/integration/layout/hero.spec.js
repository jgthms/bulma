import { setMobile, setDesktop } from "../utils";

describe("Layout/Hero", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/layout/hero/");
    setDesktop();
  });

  it("has a Hero", () => {
    cy.get(".hero").should("exist");
  });

  it("has a correct Hero", () => {
    cy.get("#hero").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("stretch");
      expect(cs.display).to.equal("flex");
      expect(cs.flexDirection).to.equal("column");
      expect(cs.justifyContent).to.equal("space-between");
    });
  });

  it("has a correct Hero colors", () => {
    for (let i = 0; i < Cypress.env("color-names").length; i++) {
      const name = Cypress.env("color-names")[i];
      const baseColor = Cypress.env(name);
      const invertColor = Cypress.env(`${name}-invert`);
      const lightColor = Cypress.env(`${name}-light`);
      const darkColor = Cypress.env(`${name}-dark`);

      cy.get(`#hero-${name}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(baseColor);
        expect(cs.color).to.equal(invertColor);
      });
    }
  });

  it("has a correct small Hero", () => {
    cy.get("#hero-small .hero-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("24px");
    });
  });

  it("has a correct medium Hero", () => {
    cy.get("#hero-medium .hero-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("144px 72px");
    });
  });

  it("has a correct large Hero", () => {
    cy.get("#hero-large .hero-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("288px 96px");
    });
  });

  it("has a correct halfheight Hero", () => {
    cy.get("#hero-halfheight").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.minHeight).to.equal(`${Cypress.env("viewports").desktop[1] / 2}px`);
    });

    cy.get("#hero-halfheight .hero-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.display).to.equal("flex");
    });
  });

  it("has a correct fullheight Hero", () => {
    cy.get("#hero-fullheight").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.minHeight).to.equal(`${Cypress.env("viewports").desktop[1]}px`);
    });

    cy.get("#hero-fullheight .hero-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.display).to.equal("flex");
    });
  });

  it("has a correct Hero with container", () => {
    cy.get("#hero-with-container > .container").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexGrow).to.equal("1");
      expect(cs.flexShrink).to.equal("1");
    });
  });

  it("has a Hero Buttons", () => {
    cy.get(".hero-buttons").should("exist");
  });

  it("has a correct Hero Buttons", () => {
    cy.get("#hero-buttons").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
      expect(cs.justifyContent).to.equal("center");
      expect(cs.marginTop).to.equal("24px");
    });
  });

  it("has a Hero Head", () => {
    cy.get(".hero-head").should("exist");
  });

  it("has a correct Hero Head", () => {
    cy.get("#hero-head").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexGrow).to.equal("0");
      expect(cs.flexShrink).to.equal("0");
    });
  });

  it("has a Hero Foot", () => {
    cy.get(".hero-foot").should("exist");
  });

  it("has a correct Hero Foot", () => {
    cy.get("#hero-foot").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexGrow).to.equal("0");
      expect(cs.flexShrink).to.equal("0");
    });
  });

  it("has a Hero Body", () => {
    cy.get(".hero-body").should("exist");
  });

  it("has a correct Hero Body", () => {
    cy.get("#hero-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexGrow).to.equal("1");
      expect(cs.flexShrink).to.equal("0");
      expect(cs.padding).to.equal("48px");
    });

    setMobile();

    cy.get("#hero-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("48px 24px");
    });
  });
});
