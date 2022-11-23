describe("Elements/Box", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/elements/box/");
  });

  it("has a Box element", () => {
    cy.get(".box").should("exist");
  });

  it("has a correct Box", () => {
    cy.get(".box").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("scheme-main"));
      expect(cs.borderRadius).to.equal("6px");
      expect(cs.boxShadow).to.equal(
        "rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px"
      );
      expect(cs.color).to.equal(Cypress.env("text"));
      expect(cs.padding).to.equal("20px");
    });
  });
});
