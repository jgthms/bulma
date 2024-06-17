describe("Elements/Tag", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/elements/tag/");
  });

  it("has a Tag", () => {
    cy.get(".tag").should("exist");
  });

  it("has a correct Tag", () => {
    cy.get("#tag").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white-ter"));
      expect(cs.borderRadius).to.equal("4px");
      expect(cs.color).to.equal(Cypress.env("grey-dark"));
      expect(cs.fontSize).to.equal("12px");
      expect(cs.height).to.equal("24px");
      expect(cs.padding).to.equal("0px 9px");
    });

    cy.get("#tag-rounded").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderRadius).to.equal("9999px");
    });
  });

  it("has a correct Tag sizes", () => {
    cy.get("#tag-normal").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("12px");
      expect(cs.height).to.equal("24px");
    });

    cy.get("#tag-medium").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("16px");
      expect(cs.height).to.equal("32px");
    });

    cy.get("#tag-large").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("20px");
      expect(cs.height).to.equal("40px");
    });
  });

  // Colors
  it(`has correct color Tags`, () => {
    for (let i = 0; i < Cypress.env("color-names").length; i++) {
      const name = Cypress.env("color-names")[i];
      const baseColor = Cypress.env(name);
      const invertColor = Cypress.env(`${name}-invert`);
      const lightColor = Cypress.env(`${name}-light`);
      const darkColor = Cypress.env(`${name}-dark`);

      cy.get(`#tag-${name}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(baseColor);
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#tag-${name}-light`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(lightColor);
        expect(cs.color).to.equal(darkColor);
      });
    }
  });

  it("has correct Tags containers", () => {
    cy.get("#tags").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
    });

    cy.get("#tags .tag").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("8px");
    });

    cy.get("#tags-medium .tag").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("16px");
    });

    cy.get("#tags-large .tag").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("20px");
    });

    cy.get("#tags-centered").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("center");
    });

    cy.get("#tags-right").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("flex-end");
    });

    cy.get("#tags-addons .tag:nth-child(2)").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderRadius).to.equal("0px");
      expect(cs.marginRight).to.equal("0px");
    });
  });
});
