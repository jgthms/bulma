import { setMobile, setTablet } from "../utils";

describe("Components/Pagination", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/components/pagination/");
  });

  it("has a Pagination", () => {
    cy.get(".pagination").should("exist");
  });

  it("has a correct Pagination", () => {
    cy.get("#pagination").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("center");
      expect(cs.display).to.equal("flex");
      expect(cs.textAlign).to.equal("center");
    });
  });

  it("has a correct Pagination", () => {
    cy.get(
      "#pagination .pagination-previous,#pagination .pagination-next,#pagination .pagination-link,#pagination .pagination-ellipsis"
    ).then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("16px");
      expect(cs.justifyContent).to.equal("center");
      expect(cs.paddingLeft).to.equal("12px");
      expect(cs.paddingRight).to.equal("12px");
      expect(cs.textAlign).to.equal("center");
    });

    cy.get(
      "#pagination .pagination-previous:not(.is-disabled),#pagination .pagination-next:not(.is-disabled),#pagination .pagination-link:not(.is-current)"
    ).then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.borderColor).to.equal(Cypress.env("border"));
      expect(cs.color).to.equal(Cypress.env("text-strong"));
      expect(cs.minWidth).to.equal("40px");
    });

    cy.get("#pagination .pagination-previous.is-disabled").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("border"));
      expect(cs.borderColor).to.equal(Cypress.env("border"));
      expect(cs.boxShadow).to.equal("none");
      expect(cs.color).to.equal(Cypress.env("text-light"));
      expect(cs.opacity).to.equal("0.5");
    });

    cy.get("#pagination .pagination-link.is-current").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("link"));
      expect(cs.borderColor).to.equal(Cypress.env("link"));
      expect(cs.color).to.equal(Cypress.env("link-invert"));
    });

    cy.get(
      "#pagination .pagination-previous:not(.is-disabled),#pagination .pagination-next:not(.is-disabled)"
    ).then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.paddingLeft).to.equal("12px");
      expect(cs.paddingRight).to.equal("12px");
      expect(cs.whiteSpace).to.equal("nowrap");
    });

    cy.get("#pagination .pagination-ellipsis").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("grey-light"));
      expect(cs.pointerEvents).to.equal("none");
    });

    cy.get("#pagination .pagination-list").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexWrap).to.equal("wrap");
    });
  });
});

// Mobile
describe("Components/Pagination Mobile", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/components/pagination/");
    setMobile();
  });

  it("has a correct Pagination", () => {
    cy.get("#pagination").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexWrap).to.equal("wrap");
      expect(cs.justifyContent).to.equal("center");
    });

    cy.get(
      "#pagination .pagination-previous,#pagination .pagination-next,#pagination .pagination-list li"
    ).then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexGrow).to.equal("1");
      expect(cs.flexShrink).to.equal("1");
    });

    cy.get(
      "#pagination .pagination-previous,#pagination .pagination-next,#pagination .pagination-link,#pagination .pagination-ellipsis"
    ).then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.margin).to.equal("4px");
    });
  });
});

// Tablet
describe("Components/Navbar Tablet", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/components/pagination/");
    setTablet();
  });

  it("has a correct Pagination", () => {
    cy.get("#pagination .pagination-list").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("0px");
      expect(cs.marginTop).to.equal("0px");
    });

    cy.get("#pagination .pagination-list").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.flexGrow).to.equal("1");
      expect(cs.flexShrink).to.equal("1");
      expect(cs.justifyContent).to.equal("flex-start");
      expect(cs.order).to.equal("1");
    });

    cy.get(
      "#pagination .pagination-previous,#pagination .pagination-next,#pagination .pagination-link,#pagination .pagination-ellipsis"
    ).then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.marginBottom).to.equal("0px");
      expect(cs.marginTop).to.equal("0px");
    });

    cy.get("#pagination .pagination-previous").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.order).to.equal("2");
    });

    cy.get("#pagination .pagination-next").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.order).to.equal("3");
    });
  });

  it("has a correct Pagination alignments", () => {
    cy.get("#pagination-centered .pagination-previous").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.order).to.equal("1");
    });

    cy.get("#pagination-centered .pagination-list").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("center");
      expect(cs.order).to.equal("2");
    });

    cy.get("#pagination-centered .pagination-next").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.order).to.equal("3");
    });

    cy.get("#pagination-right .pagination-previous").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.order).to.equal("1");
    });

    cy.get("#pagination-right .pagination-list").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("flex-end");
      expect(cs.order).to.equal("3");
    });

    cy.get("#pagination-right .pagination-next").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.order).to.equal("2");
    });
  });
});
