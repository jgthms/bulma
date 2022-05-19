describe("Components/Media", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/layout/media/");
  });

  it("has a Media", () => {
    cy.get(".media").should("exist");
  });

  it("has a correct Media", () => {
    cy.get("#media").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("flex-start");
      expect(cs.display).to.equal("flex");
    });
  });

  it("has a correct nested Media", () => {
    cy.get("#media-nested .media-content .media + .media").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderTopColor).to.equal("rgba(219, 219, 219, 0.5)");
      expect(cs.borderTopStyle).to.equal("solid");
      expect(cs.borderTopWidth).to.equal("1px");
      expect(cs.marginTop).to.equal("8px");
      expect(cs.paddingTop).to.equal("8px");
    });
  });

  it("has a correct Media Content", () => {
    cy.get("#media .media-content").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexGrow).to.equal("1");
      expect(cs.flexShrink).to.equal("1");
    });
  });

  it("has correct Media Left and Right", () => {
    cy.get("#media .media-left").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexGrow).to.equal("0");
      expect(cs.flexShrink).to.equal("0");
      expect(cs.marginRight).to.equal("16px");
    });

    cy.get("#media .media-right").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexGrow).to.equal("0");
      expect(cs.flexShrink).to.equal("0");
      expect(cs.marginLeft).to.equal("16px");
    });
  });
});
