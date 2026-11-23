describe("Components/Modal", () => {
  beforeEach(() => {
    cy.visit("/cyp/components/modal/");
  });

  it("has a Modal", () => {
    cy.get(".modal").should("exist");
  });

  it("has a correct Modal", () => {
    cy.get("#modal").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("none");
      expect(cs.flexDirection).to.equal("column");
      expect(cs.overflow).to.equal("hidden");
      expect(cs.position).to.equal("fixed");
      expect(cs.zIndex).to.equal("40");
    });

    cy.get("#modal-active").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
    });
  });

  it("has a correct Modal Background", () => {
    cy.get("#modal .modal-background").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal("rgba(9, 10, 12, 0.86)");
      expect(cs.position).to.equal("absolute");
    });
  });

  it("has a correct Modal Content", () => {
    cy.get("#modal .modal-content").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.margin).to.equal("0px auto");
      expect(cs.width).to.equal("640px");
    });
  });

  it("has a correct Modal Card", () => {
    cy.get("#modal-card .modal-card").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
    });

    cy.get("#modal-card .modal-card-head, #modal-card .modal-card-foot").then(
      ($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.display).to.equal("flex");
        expect(cs.flexShrink).to.equal("0");
        expect(cs.padding).to.equal("32px");
        expect(cs.position).to.equal("relative");
      }
    );

    cy.get("#modal-card .modal-card-head").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("scheme-main"));
      expect(cs.borderBottomStyle).to.equal("none");
      expect(cs.borderTopLeftRadius).to.equal(Cypress.expose("radius-large"));
      expect(cs.borderTopRightRadius).to.equal(Cypress.expose("radius-large"));
    });

    cy.get("#modal-card .modal-card-foot").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("scheme-main-bis"));
      expect(cs.borderTopStyle).to.equal("none");
      expect(cs.borderBottomLeftRadius).to.equal(Cypress.expose("radius-large"));
      expect(cs.borderBottomRightRadius).to.equal(Cypress.expose("radius-large"));
    });

    cy.get("#modal-card .modal-card-title").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.expose("text-strong"));
      expect(cs.flexGrow).to.equal("1");
      expect(cs.flexShrink).to.equal("0");
      expect(cs.fontSize).to.equal("24px");
      expect(cs.lineHeight).to.equal("24px");
    });

    cy.get("#modal-card .modal-card-body").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.expose("white"));
      expect(cs.flexGrow).to.equal("1");
      expect(cs.flexShrink).to.equal("1");
      expect(cs.overflow).to.equal("auto");
      expect(cs.padding).to.equal("32px");
    });
  });
});
