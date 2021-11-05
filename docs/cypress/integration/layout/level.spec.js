describe("Layout/Level", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/layout/level/");
  });

  it("has a Level", () => {
    cy.get(".level").should("exist");
  });

  it("has a correct Level", () => {
    cy.get("#level").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.display).to.equal("flex");
    });
  });

  it("has a correct Level Item", () => {
    cy.get("#level .level-item").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.display).to.equal("flex");
      expect(cs.flexGrow).to.equal("0");
      expect(cs.flexShrink).to.equal("0");
    });

    cy.get("#level-centered .level-item .title").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("0px");
    });
  });

  it("has correct Level Left and Right", () => {
    cy.get("#level .level-left").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.flexGrow).to.equal("0");
      expect(cs.flexShrink).to.equal("0");
      expect(cs.justifyContent).to.equal("flex-start");
    });

    cy.get("#level .level-right").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.flexGrow).to.equal("0");
      expect(cs.flexShrink).to.equal("0");
      expect(cs.justifyContent).to.equal("flex-end");
    });
  });
});
