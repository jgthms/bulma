describe("Elements/Content", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/elements/content/");
  });

  it("has a Content element", () => {
    cy.get(".content").should("exist");
  });

  it("has correct headings", () => {
    cy.get(".content h1").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("32px");
    });

    cy.get(".content h2").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("28px");
    });

    cy.get(".content h3").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("24px");
    });

    cy.get(".content h4").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("20px");
    });

    cy.get(".content h5").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("18px");
    });

    cy.get(".content h6").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("16px");
    });
  });

  it("has a correct blockquote", () => {
    cy.get(".content blockquote").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white-ter"));
      expect(cs.padding).to.equal("20px 24px");
    });
  });

  it("has correct lists", () => {
    cy.get(".content ol li").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.listStyleType).to.equal("decimal");
    });

    cy.get(".content ul li").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.listStyleType).to.equal("disc");
    });
  });

  it("has a correct pre", () => {
    cy.get(".content pre").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("17.5px 21px");
    });
  });
});
