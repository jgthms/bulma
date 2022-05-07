describe("Form/Select", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/form/select/");
  });

  it("has a Select", () => {
    cy.get(".select").should("exist");
  });

  it("has a correct Select", () => {
    cy.get("#select").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("inline-block");
      expect(cs.height).to.equal(Cypress.env("control-height"));
      expect(cs.maxWidth).to.equal("100%");
      expect(cs.position).to.equal("relative");
      expect(cs.verticalAlign).to.equal("top");

      const after = window.getComputedStyle($[0], "after");
      expect(after.borderColor).to.equal(Cypress.env("link"));
    });

    cy.get("#select select").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.cursor).to.equal("pointer");
      expect(cs.display).to.equal("block");
      expect(cs.fontSize).to.equal("16px");
      expect(cs.height).to.equal(Cypress.env("control-height"));
      expect(cs.maxWidth).to.equal("100%");
    });
  });

  it(`has correct color Select`, () => {
    for (let i = 0; i < Cypress.env("color-names").length; i++) {
      const name = Cypress.env("color-names")[i];
      const baseColor = Cypress.env(name);
      const invertColor = Cypress.env(`${name}-invert`);
      const lightColor = Cypress.env(`${name}-light`);
      const darkColor = Cypress.env(`${name}-dark`);

      cy.get(`#select-${name}`).then(($) => {
        const after = window.getComputedStyle($[0], "after");
        expect(after.borderColor).to.equal(baseColor);
      });

      cy.get(`#select-${name} select`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.borderColor).to.equal(baseColor);
      });
    }
  });

  it("has correct Select sizes", () => {
    for (let i = 0; i < Cypress.env("just-sizes").length; i++) {
      const size = Cypress.env("just-sizes")[i];

      cy.get(`#select-${size}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.fontSize).to.equal(`${Cypress.env("sizes")[size]}px`);
      });
    }
  });

  it("has a correct Select multiple", () => {
    cy.get("#select-multiple").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.not.equal(Cypress.env("control-height"));
    });

    cy.get("#select-multiple select").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.cursor).to.equal("pointer");
      expect(cs.display).to.equal("block");
      expect(cs.fontSize).to.equal("16px");
      expect(cs.height).to.not.equal(Cypress.env("control-height"));
      expect(cs.maxWidth).to.equal("100%");
    });
  });

  it("has a correct Select disabled", () => {
    cy.get("#select-disabled").then(($) => {
      const after = window.getComputedStyle($[0], "after");
      expect(after.borderColor).to.equal(Cypress.env("text-light"));
    });
  });
});
