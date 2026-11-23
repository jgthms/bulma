describe("Components/Message", () => {
  beforeEach(() => {
    cy.visit("/cyp/components/message/");
  });

  it("has a Message", () => {
    cy.get(".message").should("exist");
  });

  it("has a correct Message", () => {
    cy.get("#message").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("transparent"));
      expect(cs.borderRadius).to.equal(Cypress.expose("radius"));
      expect(cs.fontSize).to.equal("16px");
    });
  });

  it(`has a correct Message Header`, () => {
    cy.get("#message .message-header").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("text-strong"));
      expect(cs.color).to.equal("rgb(165, 172, 187)");
      expect(cs.display).to.equal("flex");
      expect(cs.fontWeight).to.equal(Cypress.expose("weight-semibold"));
      expect(cs.padding).to.equal("16px 20px");
    });
  });

  it(`has a correct Message Body`, () => {
    cy.get("#message-no-header .message-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("white-ter"));
      expect(cs.borderLeftColor).to.equal(Cypress.expose("border"));
      expect(cs.borderRadius).to.equal(Cypress.expose("radius-small"));
      expect(cs.borderWidth).to.equal("0px 0px 0px 4px");
      expect(cs.color).to.equal(Cypress.expose("text"));
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
    for (let i = 0; i < Cypress.expose("color-names").length; i++) {
      const name = Cypress.expose("color-names")[i];
      const baseColor = Cypress.expose(name);
      const invertColor = Cypress.expose(`${name}-invert`);
      const lightColor = Cypress.expose(`${name}-96`);
      const darkColor = Cypress.expose(`${name}-on-scheme`);
      const borderColor = Cypress.expose(`${name}-message-border`);

      cy.get(`#message-${name}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.color).to.equal(darkColor);
      });

      cy.get(`#message-${name} .message-header`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(baseColor);
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#message-${name} .message-body`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(lightColor);
        expect(cs.borderLeftColor).to.equal(borderColor);
        expect(cs.color).to.equal(darkColor);
      });
    }
  });
});
