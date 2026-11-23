describe("Elements/Notification", () => {
  beforeEach(() => {
    cy.visit("/cyp/elements/notification/");
  });

  it("has a Notification element", () => {
    cy.get("#notification").should("exist");
  });

  it("has a correct Notification", () => {
    cy.get("#notification").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("white-ter"));
      expect(cs.borderRadius).to.equal(Cypress.expose("radius"));
      expect(cs.padding).to.equal("22px 24px");
    });
  });

  it(`has correct color Notifications`, () => {
    for (let i = 0; i < Cypress.expose("color-names").length; i++) {
      const name = Cypress.expose("color-names")[i];
      const baseColor = Cypress.expose(name);
      const invertColor = Cypress.expose(`${name}-invert`);
      const lightColor = Cypress.expose(`${name}-90`);
      const darkColor = Cypress.expose(`${name}-light-invert`);

      cy.get(`#notification-${name}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(baseColor);
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#notification-${name}-light`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(lightColor);
        expect(cs.color).to.equal(darkColor);
      });
    }
  });
});
