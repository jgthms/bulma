describe("Components/Panel", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/components/panel/");
  });

  it("has a Panel", () => {
    cy.get(".panel").should("exist");
  });

  it("has a correct Panel", () => {
    cy.get("#panel").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderRadius).to.equal("6px");
      expect(cs.boxShadow).to.equal(
        "rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px"
      );
      expect(cs.fontSize).to.equal("16px");
    });
  });

  it("has a correct Panel colors", () => {
    for (let i = 0; i < Cypress.env("color-names").length; i++) {
      const name = Cypress.env("color-names")[i];
      const baseColor = Cypress.env(name);
      const invertColor = Cypress.env(`${name}-invert`);
      const lightColor = Cypress.env(`${name}-light`);
      const darkColor = Cypress.env(`${name}-dark`);

      cy.get(`#panel-${name} .panel-heading`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(baseColor);
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#panel-${name} .panel-tabs a.is-active`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.borderBottomColor).to.equal(baseColor);
      });

      cy.get(`#panel-${name} .panel-block.is-active .panel-icon`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.color).to.equal(baseColor);
      });
    }
  });

  it("has a correct Panel Heading", () => {
    cy.get("#panel .panel-heading").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("grey-lightest"));
      expect(cs.borderRadius).to.equal("6px 6px 0px 0px");
      expect(cs.color).to.equal(Cypress.env("text-strong"));
      expect(cs.fontSize).to.equal("20px");
      expect(cs.fontWeight).to.equal("700");
      expect(cs.lineHeight).to.equal("25px");
      expect(cs.padding).to.equal("15px 20px");
    });
  });

  it("has correct Panel Tabs", () => {
    cy.get("#panel .panel-tabs").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("flex-end");
      expect(cs.display).to.equal("flex");
      expect(cs.fontSize).to.equal("14px");
      expect(cs.justifyContent).to.equal("center");
    });

    cy.get("#panel .panel-tabs a:not(.is-active)").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderBottomColor).to.equal(Cypress.env("border"));
      expect(cs.borderBottomStyle).to.equal("solid");
      expect(cs.borderBottomWidth).to.equal("1px");
      expect(cs.marginBottom).to.equal("-1px");
      expect(cs.padding).to.equal("7px");
    });

    cy.get("#panel .panel-tabs a.is-active").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderBottomColor).to.equal(Cypress.env("grey-dark"));
      expect(cs.color).to.equal(Cypress.env("grey-darker"));
    });
  });

  it("has correct Panel Block", () => {
    cy.get("#panel .panel-block").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.color).to.equal(Cypress.env("text-strong"));
      expect(cs.display).to.equal("flex");
      expect(cs.justifyContent).to.equal("flex-start");
      expect(cs.padding).to.equal("8px 12px");
    });

    cy.get("#panel .panel-block.is-wrapped").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexWrap).to.equal("wrap");
    });

    cy.get("#panel .panel-block.is-active").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderLeftColor).to.equal(Cypress.env("link"));
      expect(cs.color).to.equal(Cypress.env("grey-darker"));
    });

    cy.get("#panel .panel-block.is-active .panel-icon").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("link"));
    });

    cy.get("#panel .panel-block:last-child").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderBottomLeftRadius).to.equal("6px");
      expect(cs.borderBottomRightRadius).to.equal("6px");
    });
  });

  it("has correct Panel Icon", () => {
    cy.get("#panel .panel-block:not(.is-active) .panel-icon").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("text-light"));
    });
  });
});
