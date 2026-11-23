describe("Elements/Box", () => {
  beforeEach(() => {
    cy.visit("/cyp/elements/box/");
  });

  it("has a Box element", () => {
    cy.get(".box").should("exist");
  });

  it("has a correct Box", () => {
    cy.get(".box").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("scheme-main"));
      expect(cs.borderRadius).to.equal(Cypress.expose("radius-large"));
      expect(cs.boxShadow).to.equal(Cypress.expose("shadow"));
      expect(cs.color).to.equal(Cypress.expose("text"));
      expect(cs.padding).to.equal("20px");
    });
  });
});
