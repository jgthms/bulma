describe("Elements/Button", () => {
  beforeEach(() => {
    cy.visit("/cyp/elements/button/");
  });

  it("has a Button", () => {
    cy.get(".button").should("exist");
  });

  it("has a correct Button", () => {
    cy.get("#button-default").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("white"));
      expect(cs.borderColor).to.equal(Cypress.expose("grey-lighter"));
      expect(cs.borderRadius).to.equal(Cypress.expose("radius"));
      expect(cs.color).to.equal(Cypress.expose("grey-darker"));
      expect(cs.height).to.equal("40px");
      expect(cs.lineHeight).to.equal("24px");
      expect(cs.padding).to.equal("7px 15px");
    });
  });

  // States
  it("has a correct hover Button", () => {
    cy.get("#button-hover").then(($) => {
      const cs = window.getComputedStyle($[0]);
      // Hovering darkens the background by 5% and the border by 10%
      expect(cs.backgroundColor).to.equal("rgb(240, 242, 244)");
      expect(cs.borderColor).to.equal(Cypress.expose("border-hover"));
      expect(cs.borderRadius).to.equal(Cypress.expose("radius"));
      expect(cs.color).to.equal(Cypress.expose("grey-darker"));
      expect(cs.height).to.equal("40px");
      expect(cs.lineHeight).to.equal("24px");
      expect(cs.padding).to.equal("7px 15px");
    });
  });

  it("has a correct focus Button", () => {
    cy.get("#button-focus").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("white"));
      expect(cs.borderColor).to.equal(Cypress.expose("blue"));
      expect(cs.borderRadius).to.equal(Cypress.expose("radius"));
      expect(cs.boxShadow).to.equal(
        `rgba${Cypress.expose("blue").slice(3, -1)}, 0.25) 0px 0px 0px 3px`
      );
      expect(cs.color).to.equal(Cypress.expose("grey-darker"));
      expect(cs.height).to.equal("40px");
      expect(cs.lineHeight).to.equal("24px");
      expect(cs.padding).to.equal("7px 15px");
    });
  });

  // Colors
  it(`has correct color Buttons`, () => {
    for (let i = 0; i < Cypress.expose("color-names").length; i++) {
      const name = Cypress.expose("color-names")[i];
      const baseColor = Cypress.expose(name);
      const invertColor = Cypress.expose(`${name}-invert`);
      const lightColor = Cypress.expose(`${name}-96`);
      const darkColor = Cypress.expose(`${name}-light-invert`);
      const focusColor = Cypress.expose("link");

      cy.get(`#button-${name}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(baseColor);
        expect(cs.borderColor).to.equal(baseColor);
        expect(cs.borderWidth).to.equal("0px");
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#button-${name}-hover`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.borderWidth).to.equal("0px");
        expect(cs.color).to.equal(invertColor);
      });

      // The focus ring uses the focus color (link), whatever the button color
      cy.get(`#button-${name}-focus`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.boxShadow).to.equal(
          `rgba${focusColor.slice(3, -1)}, 0.25) 0px 0px 0px 3px`
        );
        expect(cs.borderColor).to.equal(focusColor);
        expect(cs.borderWidth).to.equal("1px");
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#button-${name}-active`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.borderWidth).to.equal("0px");
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#button-${name}-inverted`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(invertColor);
        expect(cs.color).to.equal(baseColor);
      });

      cy.get(`#button-${name}-outlined`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(Cypress.expose("transparent"));
        expect(cs.borderColor).to.equal(baseColor);
        expect(cs.color).to.equal(baseColor);
      });

      // Outlined buttons keep their colors when hovered: only the border gets thicker
      cy.get(`#button-${name}-outlined-hover`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(Cypress.expose("transparent"));
        expect(cs.borderColor).to.equal(baseColor);
        expect(cs.color).to.equal(baseColor);
      });

      cy.get(`#button-${name}-inverted-outlined`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(invertColor);
        expect(cs.borderColor).to.equal(baseColor);
        expect(cs.color).to.equal(baseColor);
      });

      cy.get(`#button-${name}-light`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(lightColor);
        expect(cs.color).to.equal(darkColor);
      });
    }
  });
});
