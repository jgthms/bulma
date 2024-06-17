describe("Form/File", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/form/file/");
  });

  it("has a File", () => {
    cy.get(".file").should("exist");
  });

  it("has a correct File", () => {
    cy.get("#file").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
      expect(cs.justifyContent).to.equal("flex-start");
      expect(cs.position).to.equal("relative");
    });

    cy.get("#file .file-input").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.opacity).to.equal("0");
      expect(cs.position).to.equal("absolute");
    });

    cy.get("#file .file-cta, #file .file-name").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderColor).to.equal(Cypress.env("border"));
      expect(cs.borderRadius).to.equal("4px");
    });

    cy.get("#file .file-cta").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("scheme-main-ter"));
      expect(cs.color).to.equal(Cypress.env("text"));
    });

    cy.get("#file .file-icon").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.display).to.equal("flex");
      expect(cs.height).to.equal("16px");
      expect(cs.justifyContent).to.equal("center");
      expect(cs.width).to.equal("16px");
    });
  });

  it(`has correct color File`, () => {
    for (let i = 0; i < Cypress.env("color-names").length; i++) {
      const name = Cypress.env("color-names")[i];
      const baseColor = Cypress.env(name);
      const invertColor = Cypress.env(`${name}-invert`);
      const lightColor = Cypress.env(`${name}-light`);
      const darkColor = Cypress.env(`${name}-dark`);

      cy.get(`#file-${name} .file-cta`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(baseColor);
        expect(cs.color).to.equal(invertColor);
      });
    }
  });

  it("has correct File sizes", () => {
    cy.get("#file-small").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal(`${Cypress.env("sizes").small}px`);
    });

    cy.get("#file-normal").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal(`${Cypress.env("sizes").normal}px`);
    });

    cy.get("#file-medium").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal(`${Cypress.env("sizes").medium}px`);
    });

    cy.get("#file-large").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal(`${Cypress.env("sizes").large}px`);
    });
  });

  it("has correct File With Name", () => {
    cy.get("#file-with-name .file-cta").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderBottomRightRadius).to.equal("0px");
      expect(cs.borderTopRightRadius).to.equal("0px");
    });

    cy.get("#file-with-name .file-name").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderColor).to.equal(Cypress.env("border"));
      expect(cs.borderStyle).to.equal("solid");
      expect(cs.borderWidth).to.equal("1px 1px 1px 0px");
      expect(cs.borderBottomLeftRadius).to.equal("0px");
      expect(cs.borderTopLeftRadius).to.equal("0px");
      expect(cs.display).to.equal("block");
      expect(cs.overflow).to.equal("hidden");
    });
  });

  it("has correct File Boxed", () => {
    cy.get("#file-boxed .file-label").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexDirection).to.equal("column");
    });

    cy.get("#file-boxed .file-cta").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexDirection).to.equal("column");
      expect(cs.padding).to.equal("16px 48px");
    });

    cy.get("#file-boxed .file-name").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderWidth).to.equal("0px 1px 1px");
    });
  });

  it("has correct File Centered", () => {
    cy.get("#file-centered").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("center");
    });
  });

  it("has correct File Right", () => {
    cy.get("#file-right").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("flex-end");
    });

    cy.get("#file-right .file-cta").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderBottomLeftRadius).to.equal("0px");
      expect(cs.borderTopLeftRadius).to.equal("0px");
    });

    cy.get("#file-right .file-name").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderBottomRightRadius).to.equal("0px");
      expect(cs.borderTopRightRadius).to.equal("0px");
      expect(cs.borderWidth).to.equal("1px 0px 1px 1px");
      expect(cs.order).to.equal("-1");
    });
  });

  it("has correct File fullwidth", () => {
    cy.get("#file-fullwidth .file-name").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexGrow).to.equal("1");
      expect(cs.maxWidth).to.equal("none");
    });
  });
});
