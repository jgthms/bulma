describe("Elements/Progress", () => {
  beforeEach(() => {
    cy.visit("/cyp/elements/progress/");
  });

  it("has a Progress element", () => {
    cy.get("#progress").should("exist");
  });

  it("has a correct Progress", () => {
    cy.get("#progress").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal(`${Cypress.expose("sizes").normal}px`);
    });
  });

  it("has correct Progress sizes", () => {
    cy.get("#progress-small").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal(`${Cypress.expose("sizes").small}px`);
    });

    cy.get("#progress-normal").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal(`${Cypress.expose("sizes").normal}px`);
    });

    cy.get("#progress-medium").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal(`${Cypress.expose("sizes").medium}px`);
    });

    cy.get("#progress-large").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal(`${Cypress.expose("sizes").large}px`);
    });
  });
});
