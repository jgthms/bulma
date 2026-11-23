describe("Layout/Footer", () => {
  beforeEach(() => {
    cy.visit("/cyp/layout/footer/");
  });

  it("has a Footer", () => {
    cy.get(".footer").should("exist");
  });

  it("has a correct Footer", () => {
    cy.get("#footer").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("scheme-main-bis"));
      expect(cs.padding).to.equal("48px 24px 96px");
    });
  });
});
