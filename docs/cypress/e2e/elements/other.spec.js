describe("Elements/Other", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/elements/other/");
  });

  it("has a Block element", () => {
    cy.get(".block").should("exist");
  });

  it("has a correct Block", () => {
    cy.get("#block").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("24px");
    });
  });

  it("has a Delete element", () => {
    cy.get(".delete").should("exist");
  });

  it("has a correct Delete", () => {
    cy.get("#delete").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal("rgba(10, 10, 10, 0.2)");
      expect(cs.borderColor).to.equal(Cypress.env("grey-dark"));
      expect(cs.borderStyle).to.equal("none");
      expect(cs.borderRadius).to.equal("9999px");
      expect(cs.borderWidth).to.equal("0px");
      expect(cs.cursor).to.equal("pointer");
      expect(cs.display).to.equal("inline-block");
      expect(cs.flexGrow).to.equal("0");
      expect(cs.flexShrink).to.equal("0");
      expect(cs.fontSize).to.equal("0px");
      expect(cs.height).to.equal("20px");
      expect(cs.maxHeight).to.equal("20px");
      expect(cs.maxWidth).to.equal("20px");
      expect(cs.minHeight).to.equal("20px");
      expect(cs.minWidth).to.equal("20px");
      expect(cs.outlineColor).to.equal(Cypress.env("grey-dark"));
      expect(cs.outlineStyle).to.equal("none");
      expect(cs.outlineWidth).to.equal("0px");
      expect(cs.pointerEvents).to.equal("auto");
      expect(cs.position).to.equal("relative");
      expect(cs.verticalAlign).to.equal("top");
      expect(cs.width).to.equal("20px");

      const before = window.getComputedStyle($[0], "before");
      expect(before.backgroundColor).to.equal(Cypress.env("scheme-main"));
      expect(before.content).to.equal('""');
      expect(before.display).to.equal("block");
      expect(before.height).to.equal("2px");
      expect(before.left).to.equal("10px");
      expect(before.position).to.equal("absolute");
      expect(before.top).to.equal("10px");
      expect(before.width).to.equal("10px");

      const after = window.getComputedStyle($[0], "after");
      expect(after.backgroundColor).to.equal(Cypress.env("scheme-main"));
      expect(after.content).to.equal('""');
      expect(after.display).to.equal("block");
      expect(after.height).to.equal("10px");
      expect(after.left).to.equal("10px");
      expect(after.position).to.equal("absolute");
      expect(after.top).to.equal("10px");
      expect(after.width).to.equal("2px");
    });
  });

  it("has a correct small Delete", () => {
    cy.get("#delete-small").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal("16px");
      expect(cs.maxHeight).to.equal("16px");
      expect(cs.maxWidth).to.equal("16px");
      expect(cs.minHeight).to.equal("16px");
      expect(cs.minWidth).to.equal("16px");
      expect(cs.width).to.equal("16px");
    });
  });

  it("has a correct medium Delete", () => {
    cy.get("#delete-medium").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal("24px");
      expect(cs.maxHeight).to.equal("24px");
      expect(cs.maxWidth).to.equal("24px");
      expect(cs.minHeight).to.equal("24px");
      expect(cs.minWidth).to.equal("24px");
      expect(cs.width).to.equal("24px");
    });
  });

  it("has a correct large Delete", () => {
    cy.get("#delete-large").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal("32px");
      expect(cs.maxHeight).to.equal("32px");
      expect(cs.maxWidth).to.equal("32px");
      expect(cs.minHeight).to.equal("32px");
      expect(cs.minWidth).to.equal("32px");
      expect(cs.width).to.equal("32px");
    });
  });

  it("has a correct Loader", () => {
    cy.get("#loader").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.animationDuration).to.equal("0.5s");
      expect(cs.animationIterationCount).to.equal("infinite");
      expect(cs.animationName).to.equal("spinAround");
      expect(cs.animationTimingFunction).to.equal("linear");
      expect(cs.borderBottomColor).to.equal(Cypress.env("grey-lighter"));
      expect(cs.borderLeftColor).to.equal(Cypress.env("grey-lighter"));
      expect(cs.borderRightColor).to.equal(Cypress.env("transparent"));
      expect(cs.borderTopColor).to.equal(Cypress.env("transparent"));
      expect(cs.borderRadius).to.equal("9999px");
      expect(cs.borderStyle).to.equal("solid");
      expect(cs.borderWidth).to.equal("2px");
      expect(cs.content).to.equal('""');
      expect(cs.display).to.equal("block");
      expect(cs.height).to.equal("16px");
      expect(cs.position).to.equal("relative");
      expect(cs.width).to.equal("16px");
    });
  });
});
