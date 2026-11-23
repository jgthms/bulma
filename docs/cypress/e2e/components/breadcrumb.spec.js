describe("Components/Breadcrumb", () => {
  beforeEach(() => {
    cy.visit("/cyp/components/breadcrumb/");
  });

  it("has a Breadcrumb", () => {
    cy.get(".breadcrumb").should("exist");
  });

  it("has a correct Breadcrumb", () => {
    cy.get("#breadcrumb").then(($) => {
      const cs = window.getComputedStyle($[0]);
    });

    cy.get("#breadcrumb li:nth-child(2) a").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.expose("link-text"));
      expect(cs.padding).to.equal("0px 12px");
    });

    cy.get("#breadcrumb li.is-active a").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.expose("link-text-active"));
      expect(cs.padding).to.equal("0px 12px");
    });
  });

  it("has correct Breadcrumb alignments", () => {
    cy.get("#breadcrumb-centered ul").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("center");
    });

    cy.get("#breadcrumb-right ul").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.justifyContent).to.equal("flex-end");
    });
  });

  it("has correct Breadcrumb sizes", () => {
    cy.get("#breadcrumb-small").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal(`${Cypress.expose("sizes").small}px`);
    });

    cy.get("#breadcrumb-normal").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal(`${Cypress.expose("sizes").normal}px`);
    });

    cy.get("#breadcrumb-medium").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal(`${Cypress.expose("sizes").medium}px`);
    });

    cy.get("#breadcrumb-large").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal(`${Cypress.expose("sizes").large}px`);
    });
  });

  it("has correct Breadcrumb separators", () => {
    cy.get("#breadcrumb li:nth-child(2)").then(($) => {
      const content = window
        .getComputedStyle($[0], "before")
        .getPropertyValue("content");
      expect(content).to.equal('"/"');
    });

    cy.get("#breadcrumb-arrow li:nth-child(2)").then(($) => {
      const content = window
        .getComputedStyle($[0], "before")
        .getPropertyValue("content");
      expect(content).to.equal('"→"');
    });

    cy.get("#breadcrumb-bullet li:nth-child(2)").then(($) => {
      const content = window
        .getComputedStyle($[0], "before")
        .getPropertyValue("content");
      expect(content).to.equal('"•"');
    });

    cy.get("#breadcrumb-dot li:nth-child(2)").then(($) => {
      const content = window
        .getComputedStyle($[0], "before")
        .getPropertyValue("content");
      expect(content).to.equal('"·"');
    });

    cy.get("#breadcrumb-succeeds li:nth-child(2)").then(($) => {
      const content = window
        .getComputedStyle($[0], "before")
        .getPropertyValue("content");
      expect(content).to.equal('"≻"');
    });
  });
});
