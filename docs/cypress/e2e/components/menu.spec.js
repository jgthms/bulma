describe("Components/Menu", () => {
  beforeEach(() => {
    cy.visit("/cyp/components/menu/");
  });

  it("has a Menu", () => {
    cy.get(".menu").should("exist");
  });

  it("has a correct Menu", () => {
    cy.get("#menu").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("16px");
    });
  });

  it("has a correct Menu List", () => {
    cy.get("#menu .menu-list").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.lineHeight).to.equal("20px");
    });

    cy.get("#menu .menu-list a").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderRadius).to.equal(Cypress.expose("radius-small"));
      expect(cs.color).to.equal(Cypress.expose("text"));
      expect(cs.display).to.equal("block");
      expect(cs.padding).to.equal("8px 12px");
    });

    cy.get("#menu .menu-list a.is-active").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("link"));
      expect(cs.color).to.equal(Cypress.expose("link-invert"));
    });
  });

  it("has a correct nested Menu List", () => {
    cy.get("#menu .menu-list ul").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderLeftColor).to.equal(Cypress.expose("border"));
      expect(cs.borderLeftStyle).to.equal("solid");
      expect(cs.borderLeftWidth).to.equal("1px");
      expect(cs.margin).to.equal("12px");
      expect(cs.paddingLeft).to.equal("12px");
    });
  });

  it("has a correct Menu Label", () => {
    cy.get("#menu .menu-label").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.expose("text-light"));
      expect(cs.fontSize).to.equal("12px");
      expect(cs.letterSpacing).to.equal("1.2px");
      expect(cs.textTransform).to.equal("uppercase");
    });

    cy.get("#menu .menu-label:not(:first-child)").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginTop).to.equal("12px");
    });

    cy.get("#menu .menu-label:not(:last-child)").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("12px");
    });
  });
});
