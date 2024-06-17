describe("Form/Checkbox", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/form/checkbox-radio/");
  });

  it("has a Checkbox", () => {
    cy.get(".checkbox").should("exist");
  });

  it("has a correct Checkbox", () => {
    cy.get("#checkbox").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.cursor).to.equal("pointer");
      expect(cs.display).to.equal("inline-block");
      expect(cs.lineHeight).to.equal("20px");
      expect(cs.position).to.equal("relative");
    });

    cy.get("#checkbox input").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.cursor).to.equal("pointer");
    });
  });

  it("has a correct disabled Checkbox", () => {
    cy.get("#checkbox-disabled").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("text-light"));
      expect(cs.cursor).to.equal("not-allowed");
    });

    cy.get("#checkbox-disabled input").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.cursor).to.equal("not-allowed");
    });
  });
});

describe("Form/Radio", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/form/checkbox-radio/");
  });

  it("has a Radio", () => {
    cy.get(".radio").should("exist");
  });

  it("has a correct Radio", () => {
    cy.get("#radio .radio").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.cursor).to.equal("pointer");
      expect(cs.display).to.equal("inline-block");
      expect(cs.lineHeight).to.equal("20px");
      expect(cs.position).to.equal("relative");
    });

    cy.get("#radio input").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.cursor).to.equal("pointer");
    });
  });

  it("has a correct disabled Radio", () => {
    cy.get("#radio .radio[disabled]").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("text-light"));
      expect(cs.cursor).to.equal("not-allowed");
    });
  });

  it("has correct Radio spacing", () => {
    cy.get("#radio .radio + .radio").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginLeft).to.equal("8px");
    });
  });
});
