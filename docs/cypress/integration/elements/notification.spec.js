describe("Elements/Notification", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/elements/notification/");
  });

  it("has a Notification element", () => {
    cy.get("#notification").should("exist");
  });

  it("has a correct Notification", () => {
    cy.get("#notification").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white-ter"));
      expect(cs.borderRadius).to.equal("4px");
      expect(cs.padding).to.equal("20px 40px 20px 24px");
    });
  });

  it(`has correct color Notifications`, () => {
    for (let i = 0; i < Cypress.env("color-names").length; i++) {
      const name = Cypress.env("color-names")[i];
      const baseColor = Cypress.env(name);
      const invertColor = Cypress.env(`${name}-invert`);
      const lightColor = Cypress.env(`${name}-light`);
      const darkColor = Cypress.env(`${name}-dark`);

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
