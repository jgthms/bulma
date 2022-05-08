describe("Components/Dropdown", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/components/dropdown/");
  });

  it("has a Dropdown", () => {
    cy.get(".dropdown").should("exist");
  });

  it("has a correct Dropdown Content", () => {
    cy.get("#dropdown .dropdown-content").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white"));
      expect(cs.borderRadius).to.equal("4px");
      expect(cs.boxShadow).to.equal(
        "rgba(10, 10, 10, 0.1) 0px 8px 16px -2px, rgba(10, 10, 10, 0.02) 0px 0px 0px 1px"
      );
      expect(cs.paddingBottom).to.equal("8px");
      expect(cs.paddingTop).to.equal("8px");
    });
  });

  it("has a correct Dropdown Menu", () => {
    cy.get("#dropdown .dropdown-menu").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("none");
      expect(cs.paddingTop).to.equal("4px");
      expect(cs.position).to.equal("absolute");
      expect(cs.zIndex).to.equal("20");
    });

    cy.get("#dropdown-active .dropdown-menu").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("block");
    });
  });

  it("has a correct Dropdown Item", () => {
    cy.get("#dropdown .dropdown-item").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("text"));
      expect(cs.display).to.equal("block");
    });

    cy.get("#dropdown a.dropdown-item").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal("100%");
    });

    cy.get("#dropdown a.dropdown-item.is-active").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("link"));
      expect(cs.color).to.equal(Cypress.env("link-invert"));
    });
  });

  it("has a correct Dropdown Divider", () => {
    cy.get("#dropdown .dropdown-divider").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("grey-lightest"));
      expect(cs.height).to.equal("1px");
    });
  });
});
