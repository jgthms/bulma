describe("Elements/Button", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/elements/button/");
  });

  it("has a Button", () => {
    cy.get(".button").should("exist");
  });

  it("has a correct Button", () => {
    cy.get("#button-default").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white"));
      expect(cs.borderColor).to.equal(Cypress.env("grey-lighter"));
      expect(cs.borderRadius).to.equal("4px");
      expect(cs.color).to.equal(Cypress.env("grey-darker"));
      expect(cs.height).to.equal("40px");
      expect(cs.lineHeight).to.equal("24px");
      expect(cs.padding).to.equal("7px 16px");
    });
  });

  // States
  it("has a correct hover Button", () => {
    cy.get("#button-hover").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white"));
      expect(cs.borderColor).to.equal(Cypress.env("grey-light"));
      expect(cs.borderRadius).to.equal("4px");
      expect(cs.color).to.equal(Cypress.env("grey-darker"));
      expect(cs.height).to.equal("40px");
      expect(cs.lineHeight).to.equal("24px");
      expect(cs.padding).to.equal("7px 16px");
    });
  });

  it("has a correct focus Button", () => {
    cy.get("#button-focus").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white"));
      expect(cs.borderColor).to.equal(Cypress.env("blue"));
      expect(cs.borderRadius).to.equal("4px");
      expect(cs.boxShadow).to.equal(
        `rgba${Cypress.env("blue").slice(3, -1)}, 0.25) 0px 0px 0px 2px`
      );
      expect(cs.color).to.equal(Cypress.env("grey-darker"));
      expect(cs.height).to.equal("40px");
      expect(cs.lineHeight).to.equal("24px");
      expect(cs.padding).to.equal("7px 16px");
    });
  });

  // Colors
  it(`has correct color Buttons`, () => {
    for (let i = 0; i < Cypress.env("color-names").length; i++) {
      const name = Cypress.env("color-names")[i];
      const baseColor = Cypress.env(name);
      const invertColor = Cypress.env(`${name}-invert`);
      const lightColor = Cypress.env(`${name}-light`);
      const darkColor = Cypress.env(`${name}-dark`);

      cy.get(`#button-${name}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(baseColor);
        expect(cs.borderColor).to.equal(Cypress.env("transparent"));
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#button-${name}-hover`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.borderColor).to.equal(Cypress.env("transparent"));
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#button-${name}-focus`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.boxShadow).to.equal(
          `rgba${baseColor.slice(3, -1)}, 0.25) 0px 0px 0px 2px`
        );
        expect(cs.borderColor).to.equal(Cypress.env("transparent"));
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#button-${name}-active`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.borderColor).to.equal(Cypress.env("transparent"));
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#button-${name}-inverted`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(invertColor);
        expect(cs.color).to.equal(baseColor);
      });

      cy.get(`#button-${name}-outlined`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(Cypress.env("transparent"));
        expect(cs.borderColor).to.equal(baseColor);
        expect(cs.color).to.equal(baseColor);
      });

      cy.get(`#button-${name}-outlined-hover`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(baseColor);
        expect(cs.borderColor).to.equal(baseColor);
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#button-${name}-inverted-outlined`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(Cypress.env("transparent"));
        expect(cs.borderColor).to.equal(invertColor);
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#button-${name}-light`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(lightColor);
        expect(cs.color).to.equal(darkColor);
      });
    }
  });
});
