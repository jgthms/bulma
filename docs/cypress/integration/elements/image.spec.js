describe("Elements/Image", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/elements/image/");
  });

  it("has a Image", () => {
    cy.get(".image").should("exist");
  });

  it("has a correct Image", () => {
    cy.get("#image").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.height).to.equal("128px");
      expect(cs.width).to.equal("128px");
    });
  });

  it("has a correct rounded Image", () => {
    cy.get("#image-rounded img").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderRadius).to.equal("9999px");
    });
  });

  it("has a correct Image dimensions", () => {
    [16, 24, 32, 48, 64, 96, 128].forEach((dimension) => {
      cy.get(`#image-${dimension}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.height).to.equal(`${dimension}px`);
        expect(cs.width).to.equal(`${dimension}px`);
      });
    });
  });

  it("has correct Image ratios", () => {
    [
      ["1by1", 1],
      ["5by4", 0.8],
      ["4by3", 0.75],
      ["3by2", 0.6666],
      ["5by3", 0.6],
      ["16by9", 0.5625],
      ["2by1", 0.5],
      ["3by1", 0.3333],
      ["4by5", 1.25],
      ["3by4", 1.3333],
      ["2by3", 1.5],
      ["3by5", 1.6666],
      ["9by16", 1.7777],
      ["1by2", 2],
      ["1by3", 3],
    ].forEach((ratio) => {
      cy.get(`#image-${ratio[0]} img`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        const height = cs.height.substring(0, cs.height.length - 2);
        expect(`${Math.round(height)}px`).to.equal(
          `${Math.round(100 * ratio[1])}px`
        );
        expect(cs.width).to.equal("100px");
      });
    });
  });
});
