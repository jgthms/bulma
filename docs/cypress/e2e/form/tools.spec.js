import { setDesktop } from "../utils";

describe("Form/Label", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/form/tools/");
  });

  it("has a Label", () => {
    cy.get(".label").should("exist");
  });

  it("has a correct Label", () => {
    cy.get("#label").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("text-strong"));
      expect(cs.display).to.equal("block");
      expect(cs.fontSize).to.equal(Cypress.env("size-normal"));
      expect(cs.fontWeight).to.equal(Cypress.env("weight-bold"));
    });
  });


  it("has correct Label sizes", () => {
    for (let i = 0; i < Cypress.env("just-sizes").length; i++) {
      const size = Cypress.env("just-sizes")[i];

      cy.get(`#label-${size}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.fontSize).to.equal(`${Cypress.env("sizes")[size]}px`);
      });
    }
  });
});

describe("Form/Help", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/form/tools/");
  });

  it("has a Help", () => {
    cy.get(".help").should("exist");
  });

  it("has a correct Help", () => {
    cy.get("#help").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("block");
      expect(cs.fontSize).to.equal(Cypress.env("size-small"));
      expect(cs.marginTop).to.equal("4px");
    });
  });


  it("has correct Help colors", () => {
    for (let i = 0; i < Cypress.env("color-names").length; i++) {
      const name = Cypress.env("color-names")[i];
      const baseColor = Cypress.env(name);
      const invertColor = Cypress.env(`${name}-invert`);
      const lightColor = Cypress.env(`${name}-light`);
      const darkColor = Cypress.env(`${name}-dark`);

      cy.get(`#help-${name}`).then(($) => {
      const cs = window.getComputedStyle($[0]);
        expect(cs.color).to.equal(baseColor);
      });
    }
  });
});

describe("Form/Field", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/form/tools/");
    setDesktop();
  });

  it("has a Field", () => {
    cy.get(".field").should("exist");
  });

  it("has a correct Field", () => {
    cy.get("#field").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("12px");
    });
  });

  it("has a correct Field with addons", () => {
    cy.get("#field-has-addons").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
      expect(cs.justifyContent).to.equal("flex-start");
    });
  });

  it("has a correct Field with addons centered", () => {
    cy.get("#field-has-addons-centered").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("center");
    });
  });

  it("has a correct Field with addons right", () => {
    cy.get("#field-has-addons-right").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("flex-end");
    });
  });

  it("has a correct Field with addons fullwidth .control", () => {
    cy.get("#field-has-addons-fullwidth .control").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexGrow).to.equal("1");
      expect(cs.flexShrink).to.equal("0");
    });
  });

  it("has a correct Field grouped", () => {
    cy.get("#field-is-grouped").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
      expect(cs.justifyContent).to.equal("flex-start");
    });
  });

  it("has a correct Field grouped centered", () => {
    cy.get("#field-is-grouped-centered").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("center");
    });
  });

  it("has a correct Field grouped right", () => {
    cy.get("#field-is-grouped-right").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("flex-end");
    });
  });

  it("has a correct Field grouped multiline", () => {
    cy.get("#field-is-grouped-multiline").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexWrap).to.equal("wrap");
    });
  });

  it("has a correct Field horizontal", () => {
    cy.get("#field-is-horizontal").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
    });
  });
});

describe("Form/Field Label", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/form/tools/");
    setDesktop();
  });

  it("has a Field Label", () => {
    cy.get(".field-label").should("exist");
  });

  it("has a correct Field Label", () => {
    cy.get("#field-label").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexBasis).to.equal("0px");
      expect(cs.flexGrow).to.equal("1");
      expect(cs.flexShrink).to.equal("0");
      expect(cs.textAlign).to.equal("right");
    });

    cy.get("#field-label .label").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("16px");
    });
  });

  it("has correct Field Label sizes", () => {
    for (let i = 0; i < Cypress.env("just-sizes").length; i++) {
      const size = Cypress.env("just-sizes")[i];

      cy.get(`#field-label-${size}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        const sizeValue = Cypress.env("sizes")[size];
        expect(cs.fontSize).to.equal(`${sizeValue}px`);
        expect(cs.paddingTop).to.equal(`${sizeValue * 0.375}px`);
      });
    }
  });
});

describe("Form/Field Body", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/form/tools/");
    setDesktop();
  });

  it("has a Field Body", () => {
    cy.get(".field-body").should("exist");
  });

  it("has a correct Field Body", () => {
    cy.get("#field-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
      expect(cs.flexBasis).to.equal("0px");
      expect(cs.flexGrow).to.equal("5");
      expect(cs.flexShrink).to.equal("1");
    });

    cy.get("#field-body .field").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("0px");
    });

    cy.get("#field-body > .field").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexShrink).to.equal("1");
    });

    cy.get("#field-body .field .field").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("0px");
    });
  });
});

describe("Form/Control", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/form/tools/");
    setDesktop();
  });

  it("has a Control", () => {
    cy.get(".control").should("exist");
  });

  it("has a correct Control", () => {
    cy.get("#control").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.boxSizing).to.equal("border-box");
      expect(cs.clear).to.equal("both");
      expect(cs.fontSize).to.equal(Cypress.env("size-normal"));
      expect(cs.position).to.equal("relative");
      expect(cs.textAlign).to.equal("start");
    });
  });

  it("has a correct Control with icons left", () => {
    cy.get("#control-has-icons-left .icon").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("grey-lighter"));
      expect(cs.height).to.equal(Cypress.env("control-height"));
      expect(cs.left).to.equal("0px");
      expect(cs.pointerEvents).to.equal("none");
      expect(cs.position).to.equal("absolute");
      expect(cs.top).to.equal("0px");
      expect(cs.width).to.equal(Cypress.env("control-height"));
      expect(cs.zIndex).to.equal("4");
    });
  });

  it("has a correct Control with icons right", () => {
    cy.get("#control-has-icons-right .icon").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("grey-lighter"));
      expect(cs.height).to.equal(Cypress.env("control-height"));
      expect(cs.pointerEvents).to.equal("none");
      expect(cs.position).to.equal("absolute");
      expect(cs.right).to.equal("0px");
      expect(cs.top).to.equal("0px");
      expect(cs.width).to.equal(Cypress.env("control-height"));
      expect(cs.zIndex).to.equal("4");
    });
  });

  it("has a correct loading Control", () => {
    cy.get("#control-loading").then(($) => {
      const after = window.getComputedStyle($[0], "after");
      expect(after.animationDuration).to.equal("0.5s");
      expect(after.animationIterationCount).to.equal("infinite");
      expect(after.animationName).to.equal("spinAround");
      expect(after.animationTimingFunction).to.equal("linear");
      expect(after.borderBottomColor).to.equal(Cypress.env("grey-lighter"));
      expect(after.borderLeftColor).to.equal(Cypress.env("grey-lighter"));
      expect(after.borderRightColor).to.equal(Cypress.env("transparent"));
      expect(after.borderTopColor).to.equal(Cypress.env("transparent"));
      expect(after.borderRadius).to.equal("9999px");
      expect(after.borderStyle).to.equal("solid");
      expect(after.borderWidth).to.equal("2px");
      expect(after.content).to.equal('""');
      expect(after.display).to.equal("block");
      expect(after.height).to.equal("16px");
      expect(after.position).to.equal("absolute");
      expect(after.top).to.equal(`${0.625 * 16}px`);
      expect(after.width).to.equal("16px");
      expect(after.zIndex).to.equal("4");
    });

    cy.get("#control-loading-small").then(($) => {
      const after = window.getComputedStyle($[0], "after");
      expect(after.fontSize).to.equal(Cypress.env("size-small"));
    });

    cy.get("#control-loading-medium").then(($) => {
      const after = window.getComputedStyle($[0], "after");
      expect(after.fontSize).to.equal(Cypress.env("size-medium"));
    });

    cy.get("#control-loading-large").then(($) => {
      const after = window.getComputedStyle($[0], "after");
      expect(after.fontSize).to.equal(Cypress.env("size-large"));
    });
  });
});
