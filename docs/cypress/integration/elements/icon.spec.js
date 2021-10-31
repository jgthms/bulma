describe("Elements/Icon", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/elements/icon/");
  });

  it("has a .icon element", () => {
    cy.get(".icon").should("exist");
  });

  it("has a correct Icon element", () => {
    cy.get("#icon").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal("24px");
      expect(cs.width).to.equal("24px");
    });
  });

  it("has correct Icon sizes", () => {
    cy.get("#icon-small").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal("16px");
      expect(cs.width).to.equal("16px");
    });

    cy.get("#icon-normal").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal("24px");
      expect(cs.width).to.equal("24px");
    });

    cy.get("#icon-medium").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal("32px");
      expect(cs.width).to.equal("32px");
    });

    cy.get("#icon-large").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal("48px");
      expect(cs.width).to.equal("48px");
    });
  });

  it("has correct Icon Text elements", () => {
    cy.get("#icon-text").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("inline-flex");
    });

    cy.get("#icon-text > .icon").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginRight).to.equal("4px");
    });

    cy.get("#icon-text-div").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
    });
  });
});
