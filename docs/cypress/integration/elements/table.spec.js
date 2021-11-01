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
      expect(cs.color).to.equal(Cypress.env("text-strong"));
    });

    cy.get("#table tr.is-selected").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("primary"));
      expect(cs.color).to.equal(Cypress.env("primary-invert"));
    });
  });

  it("has a correct bordered Table", () => {
    cy.get("#table-bordered th, #table-bordered td").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderWidth).to.equal("1px");
    });
  });

  it("has a correct striped Table", () => {
    cy.get("#table-striped tbody tr:not(.is-selected):nth-child(even)").then(
      ($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(Cypress.env("white-bis"));
      }
    );
  });

  it("has a correct narrow Table", () => {
    cy.get("#table-narrow th, #table-narrow td").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("4px 8px");
    });
  });

  it("has a correct fullwidth Table", () => {
    cy.get("#table-fullwidth").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal("800px");
    });
  });
});
