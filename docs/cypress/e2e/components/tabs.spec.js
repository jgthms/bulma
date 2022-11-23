describe("Components/Tabs", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/components/tabs/");
  });

  it("has a Tabs", () => {
    cy.get(".tabs").should("exist");
  });

  it("has a correct Tabs", () => {
    cy.get("#tabs").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("stretch");
      expect(cs.display).to.equal("flex");
      expect(cs.fontSize).to.equal("16px");
      expect(cs.justifyContent).to.equal("space-between");
      expect(cs.whiteSpace).to.equal("nowrap");
    });

    cy.get("#tabs li:not(.is-active) a").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.borderBottomColor).to.equal(Cypress.env("border"));
      expect(cs.borderBottomStyle).to.equal("solid");
      expect(cs.borderBottomWidth).to.equal("1px");
      expect(cs.color).to.equal(Cypress.env("text"));
      expect(cs.display).to.equal("flex");
      expect(cs.justifyContent).to.equal("center");
      expect(cs.marginBottom).to.equal("-1px");
      expect(cs.padding).to.equal("8px 16px");
      expect(cs.verticalAlign).to.equal("top");
    });

    cy.get("#tabs li.is-active a").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderBottomColor).to.equal(Cypress.env("link"));
      expect(cs.color).to.equal(Cypress.env("link"));
    });

    cy.get("#tabs ul").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.borderBottomColor).to.equal(Cypress.env("border"));
      expect(cs.borderBottomStyle).to.equal("solid");
      expect(cs.borderBottomWidth).to.equal("1px");
      expect(cs.display).to.equal("flex");
      expect(cs.flexGrow).to.equal("1");
      expect(cs.flexShrink).to.equal("0");
      expect(cs.justifyContent).to.equal("flex-start");
    });
  });

  it("has a correct Tabs alignments", () => {
    cy.get("#tabs-centered ul").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("center");
    });

    cy.get("#tabs-right ul").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("flex-end");
    });
  });

  it("has a correct Tabs lists alignments", () => {
    cy.get("#tabs-lists ul.is-left").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.paddingRight).to.equal("12px");
    });

    cy.get("#tabs-lists ul.is-center").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flex).to.equal("0 0 auto");
      expect(cs.justifyContent).to.equal("center");
      expect(cs.paddingLeft).to.equal("12px");
      expect(cs.paddingRight).to.equal("12px");
    });

    cy.get("#tabs-lists ul.is-right").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("flex-end");
      expect(cs.paddingLeft).to.equal("12px");
    });
  });

  it("has a correct boxed Tabs", () => {
    cy.get("#tabs-boxed li:not(.is-active) a").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderColor).to.equal(Cypress.env("transparent"));
      expect(cs.borderRadius).to.equal("4px 4px 0px 0px");
    });

    cy.get("#tabs-boxed li.is-active a").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("scheme-main"));
      expect(cs.borderColor).to.equal(
        `${Cypress.env("border")} ${Cypress.env("border")} ${Cypress.env(
          "transparent"
        )}`
      );
    });
  });
});
