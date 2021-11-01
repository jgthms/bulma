describe("Elements/Table", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/elements/table/");
  });

  it("has a Table element", () => {
    cy.get("#table").should("exist");
  });

  it("has a correct Table", () => {
    cy.get("#table").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white"));
    });
  });
});
