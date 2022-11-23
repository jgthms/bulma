describe("Components/Message", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/components/message/");
  });

  it("has a Message", () => {
    cy.get(".message").should("exist");
  });

  it("has a correct Message", () => {
    cy.get("#message").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white-ter"));
      expect(cs.borderRadius).to.equal("4px");
      expect(cs.fontSize).to.equal("16px");
    });
  });

  it(`has a correct Message Header`, () => {
    cy.get("#message .message-header").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("text"));
      expect(cs.color).to.equal(Cypress.env("text-invert"));
      expect(cs.display).to.equal("flex");
      expect(cs.fontWeight).to.equal("700");
      expect(cs.padding).to.equal("12px 16px");
    });
  });

  it(`has a correct Message Body`, () => {
    cy.get("#message-no-header .message-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderColor).to.equal(Cypress.env("border"));
      expect(cs.borderRadius).to.equal("4px");
      expect(cs.borderWidth).to.equal("0px 0px 0px 4px");
      expect(cs.color).to.equal(Cypress.env("text"));
      expect(cs.padding).to.equal("20px 24px");
    });

    cy.get("#message .message-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderTopLeftRadius).to.equal("0px");
      expect(cs.borderTopRightRadius).to.equal("0px");
      expect(cs.borderWidth).to.equal("0px");
    });
  });

  it(`has correct color Messages`, () => {
    for (let i = 0; i < Cypress.env("color-names").length; i++) {
      const name = Cypress.env("color-names")[i];
      const baseColor = Cypress.env(name);
      const invertColor = Cypress.env(`${name}-invert`);
      const lightColor = Cypress.env(`${name}-light`);
      const darkColor = Cypress.env(`${name}-dark`);

      cy.get(`#message-${name}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(lightColor);
      });

      cy.get(`#message-${name} .message-header`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(baseColor);
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#message-${name} .message-body`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.borderColor).to.equal(baseColor);
        expect(cs.color).to.equal(darkColor);
      });
    }
  });
});
