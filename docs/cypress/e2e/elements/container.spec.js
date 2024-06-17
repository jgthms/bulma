import { setMobile, setDesktop, setWidescreen, setFullHD } from "../utils";

describe("Elements/Container", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/elements/container/");
  });

  it("has a Container element", () => {
    cy.get("#container").should("exist");
  });

  it("has fullwidth mobile Containers", () => {
    setMobile();

    let viewport;

    cy.document()
      .then((doc) => {
        return doc.documentElement.getBoundingClientRect();
      })
      .then((rect) => {
        viewport = rect;
      });

    cy.get("#container").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal(`${viewport.width}px`);
    });

    cy.get("#container-fluid").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal(`${viewport.width}px`);
    });

    cy.get("#container-max-desktop").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal(`${viewport.width}px`);
    });

    cy.get("#container-max-widescreen").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal(`${viewport.width}px`);
    });
  });

  it("has centered desktop Containers", () => {
    setDesktop();

    let viewport;

    cy.document()
      .then((doc) => {
        return doc.documentElement.getBoundingClientRect();
      })
      .then((rect) => {
        viewport = rect;
      });

    cy.get("#container").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal("960px");
    });

    cy.get("#container-widescreen").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal(`${viewport.width}px`);
    });

    cy.get("#container-fullhd").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal(`${viewport.width}px`);
    });
  });

  it("has centered widescreen Containers", () => {
    setWidescreen();

    let viewport;

    cy.document()
      .then((doc) => {
        return doc.documentElement.getBoundingClientRect();
      })
      .then((rect) => {
        viewport = rect;
      });

    cy.get("#container").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal("1152px");
    });

    cy.get("#container-max-desktop").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal("960px");
    });

    cy.get("#container-widescreen").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal("1152px");
    });

    cy.get("#container-fullhd").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal(`${viewport.width}px`);
    });
  });

  it("has centered fullhd Containers", () => {
    setFullHD();

    cy.get("#container").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal("1344px");
    });

    cy.get("#container-max-desktop").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal("960px");
    });

    cy.get("#container-max-widescreen").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal("1152px");
    });

    cy.get("#container-widescreen").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal("1344px");
    });

    cy.get("#container-fullhd").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal("1344px");
    });
  });

  it("has a fullwidth fluid Container", () => {
    cy.viewport(
      Cypress.env("viewports").fullhd[0],
      Cypress.env("viewports").fullhd[1]
    );

    let viewport;

    cy.document()
      .then((doc) => {
        return doc.documentElement.getBoundingClientRect();
      })
      .then((rect) => {
        viewport = rect;
      });

    cy.get("#container-fluid").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.width).to.equal(`${viewport.width}px`);
    });
  });
});
