import { setDesktop } from "../utils";

// describe("Form/Label", () => {
//   beforeEach(() => {
//     cy.visit("http://127.0.0.1:4000/cyp/form/tools/");
//   });

//   it("has a Label", () => {
//     cy.get(".label").should("exist");
//   });

//   it("has a correct Label", () => {
//     cy.get("#label").then(($) => {
//       const cs = window.getComputedStyle($[0]);
//       expect(cs.color).to.equal(Cypress.env("text-strong"));
//       expect(cs.display).to.equal("block");
//       expect(cs.fontSize).to.equal(Cypress.env("size-normal"));
//       expect(cs.fontWeight).to.equal(Cypress.env("weight-bold"));
//     });
//   });


//   it("has correct Label sizes", () => {
//     for (let i = 0; i < Cypress.env("just-sizes").length; i++) {
//       const size = Cypress.env("just-sizes")[i];

//       cy.get(`#label-${size}`).then(($) => {
//         const cs = window.getComputedStyle($[0]);
//         expect(cs.fontSize).to.equal(`${Cypress.env("sizes")[size]}px`);
//       });
//     }
//   });
// });

// describe("Form/Help", () => {
//   beforeEach(() => {
//     cy.visit("http://127.0.0.1:4000/cyp/form/tools/");
//   });

//   it("has a Help", () => {
//     cy.get(".help").should("exist");
//   });

//   it("has a correct Help", () => {
//     cy.get("#help").then(($) => {
//       const cs = window.getComputedStyle($[0]);
//       expect(cs.display).to.equal("block");
//       expect(cs.fontSize).to.equal(Cypress.env("size-small"));
//       expect(cs.marginTop).to.equal("4px");
//     });
//   });


//   it("has correct Help colors", () => {
//     for (let i = 0; i < Cypress.env("color-names").length; i++) {
//       const name = Cypress.env("color-names")[i];
//       const baseColor = Cypress.env(name);
//       const invertColor = Cypress.env(`${name}-invert`);
//       const lightColor = Cypress.env(`${name}-light`);
//       const darkColor = Cypress.env(`${name}-dark`);

//       cy.get(`#help-${name}`).then(($) => {
//       const cs = window.getComputedStyle($[0]);
//         expect(cs.color).to.equal(baseColor);
//       });
//     }
//   });
// });

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
