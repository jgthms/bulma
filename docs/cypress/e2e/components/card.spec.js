describe("Components/Card", () => {
  beforeEach(() => {
    cy.visit("/cyp/components/card/");
  });

  it("has a Card", () => {
    cy.get(".card").should("exist");
  });

  it("has a correct Card", () => {
    cy.get("#card").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("white"));
      expect(cs.color).to.equal(Cypress.expose("text"));
      expect(cs.boxShadow).to.equal(Cypress.expose("shadow"));
    });
  });

  it("has correct Card Item border-radius", () => {
    cy.get("#card-only-content > .card-content:first-child").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderTopLeftRadius).to.equal(Cypress.expose("radius-large"));
      expect(cs.borderTopRightRadius).to.equal(Cypress.expose("radius-large"));
    });

    cy.get("#card-only-content > .card-content:last-child").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderBottomLeftRadius).to.equal(Cypress.expose("radius-large"));
      expect(cs.borderBottomRightRadius).to.equal(Cypress.expose("radius-large"));
    });
  });

  it("has correct Card Header", () => {
    cy.get("#card-header-content > .card-header").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("transparent"));
      expect(cs.boxShadow).to.equal("rgba(9, 10, 12, 0.1) 0px 2px 4px 0px");
    });

    cy.get("#card-header-content .card-header-title").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.expose("text-strong"));
      expect(cs.fontWeight).to.equal("700");
      expect(cs.padding).to.equal("12px 16px");
    });

    cy.get("#card-header-content .card-header-icon").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("12px 16px");
    });
  });

  it("has correct Card Content", () => {
    cy.get("#card .card-content").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("24px");
    });
  });

  it("has correct Card Footer", () => {
    cy.get("#card .card-footer").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("transparent"));
      expect(cs.borderTopColor).to.equal(Cypress.expose("grey-lightest"));
      expect(cs.borderTopStyle).to.equal("solid");
      expect(cs.borderTopWidth).to.equal("1px");
    });

    cy.get("#card .card-footer-item").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("12px");
    });
  });
});
