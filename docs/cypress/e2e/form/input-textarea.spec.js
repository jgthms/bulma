describe("Form/Input", () => {
  beforeEach(() => {
    cy.visit("/cyp/form/input-textarea/");
  });

  it("has a Input", () => {
    cy.get(".input").should("exist");
  });

  it("has a correct Input", () => {
    cy.get("#input").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.borderStyle).to.equal("solid");
      expect(cs.borderWidth).to.equal("1px");
      expect(cs.borderRadius).to.equal(Cypress.expose("control-radius"));
      expect(cs.boxShadow).to.equal(Cypress.expose("input-shadow"));
      expect(cs.display).to.equal("inline-flex");
      expect(cs.fontSize).to.equal(Cypress.expose("size-normal"));
      expect(cs.height).to.equal(Cypress.expose("control-height"));
      expect(cs.justifyContent).to.equal("flex-start");
      expect(cs.lineHeight).to.equal(Cypress.expose("control-line-height"));
      expect(cs.paddingBottom).to.equal(
        Cypress.expose("control-padding-vertical")
      );
      expect(cs.paddingLeft).to.equal(
        Cypress.expose("control-padding-horizontal")
      );
      expect(cs.paddingRight).to.equal(
        Cypress.expose("control-padding-horizontal")
      );
      expect(cs.paddingTop).to.equal(Cypress.expose("control-padding-vertical"));
      expect(cs.position).to.equal("relative");
      expect(cs.verticalAlign).to.equal("top");
    });
  });

  it(`has correct color Input`, () => {
    for (let i = 0; i < Cypress.expose("color-names").length; i++) {
      const name = Cypress.expose("color-names")[i];
      const baseColor = Cypress.expose(name);
      const invertColor = Cypress.expose(`${name}-invert`);
      const lightColor = Cypress.expose(`${name}-light`);
      const darkColor = Cypress.expose(`${name}-dark`);

      cy.get(`#input-${name}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.borderColor).to.equal(baseColor);
      });
    }
  });

  it("has correct Input sizes", () => {
    for (let i = 0; i < Cypress.expose("just-sizes").length; i++) {
      const size = Cypress.expose("just-sizes")[i];

      cy.get(`#input-${size}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.fontSize).to.equal(`${Cypress.expose("sizes")[size]}px`);
      });
    }
  });

  it("has a correct fullwidth Input", () => {
    let viewport;

    cy.document()
      .then((doc) => {
        return doc.documentElement.getBoundingClientRect();
      })
      .then((rect) => {
        viewport = rect;
      });

    cy.get("#input-fullwidth").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("block");
      expect(cs.width).to.equal(`${viewport.width}px`);
    });
  });

  it("has a correct fullwidth Input", () => {
    cy.get("#input-inline").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("inline");
    });
  });

  it("has a correct rounded Input", () => {
    cy.get("#input-rounded").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderRadius).to.equal("9999px");
      expect(cs.paddingLeft).to.equal("17px");
      expect(cs.paddingRight).to.equal("17px");
    });
  });

  it("has a correct static Input", () => {
    cy.get("#input-static").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("transparent"));
      expect(cs.borderColor).to.equal(Cypress.expose("transparent"));
      expect(cs.boxShadow).to.equal("none");
      expect(cs.paddingLeft).to.equal("0px");
      expect(cs.paddingRight).to.equal("0px");
    });
  });
});

describe("Form/Textarea", () => {
  beforeEach(() => {
    cy.visit("/cyp/form/input-textarea/");
  });

  it("has a Textarea", () => {
    cy.get(".textarea").should("exist");
  });

  it("has a correct Textarea", () => {
    cy.get("#textarea").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.borderStyle).to.equal("solid");
      expect(cs.borderWidth).to.equal("1px");
      expect(cs.borderRadius).to.equal(Cypress.expose("control-radius"));
      expect(cs.boxShadow).to.equal(Cypress.expose("input-shadow"));
      expect(cs.display).to.equal("block");
      expect(cs.fontSize).to.equal(Cypress.expose("size-normal"));
      expect(cs.justifyContent).to.equal("flex-start");
      expect(cs.lineHeight).to.equal(Cypress.expose("control-line-height"));
      expect(cs.paddingBottom).to.equal(
        Cypress.expose("control-padding-horizontal")
      );
      expect(cs.paddingLeft).to.equal(
        Cypress.expose("control-padding-horizontal")
      );
      expect(cs.paddingRight).to.equal(
        Cypress.expose("control-padding-horizontal")
      );
      expect(cs.paddingTop).to.equal(Cypress.expose("control-padding-horizontal"));
      expect(cs.position).to.equal("relative");
      expect(cs.resize).to.equal("vertical");
      expect(cs.verticalAlign).to.equal("top");
    });
  });

  it("has a correct Textarea fixed", () => {
    cy.get("#textarea-fixed").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.resize).to.equal("none");
    });
  });
});
