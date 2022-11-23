describe("Elements/Progress", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/elements/progress/");
  });

  it("has a Progress element", () => {
    cy.get("#progress").should("exist");
  });

  it("has a correct Progress", () => {
    cy.get("#progress").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal(`${Cypress.env("sizes").normal}px`);
    });
  });

  it("has correct Progress sizes", () => {
    cy.get("#progress-small").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal(`${Cypress.env("sizes").small}px`);
    });

    cy.get("#progress-normal").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal(`${Cypress.env("sizes").normal}px`);
    });

    cy.get("#progress-medium").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal(`${Cypress.env("sizes").medium}px`);
    });

    cy.get("#progress-large").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal(`${Cypress.env("sizes").large}px`);
    });
  });
});
