import { setMobile, setDesktop } from "../utils";

describe("Components/Navbar", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/components/navbar/");
  });

  it("has a Navbar", () => {
    cy.get(".navbar").should("exist");
  });

  it("has a correct Navbar", () => {
    cy.get("#navbar").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white"));
      expect(cs.minHeight).to.equal("52px");
      expect(cs.position).to.equal("relative");
      expect(cs.zIndex).to.equal("30");
    });
  });

  it(`has correct color Navbars`, () => {
    for (let i = 0; i < Cypress.env("color-names").length; i++) {
      const name = Cypress.env("color-names")[i];
      const baseColor = Cypress.env(name);
      const invertColor = Cypress.env(`${name}-invert`);
      const lightColor = Cypress.env(`${name}-light`);
      const darkColor = Cypress.env(`${name}-dark`);

      cy.get(`#navbar-${name}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.backgroundColor).to.equal(baseColor);
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#navbar-${name} .navbar-burger`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.color).to.equal(invertColor);
      });
    }
  });

  it("has a correct Navbar Shadow", () => {
    cy.get("#navbar-has-shadow").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.boxShadow).to.equal(
        `${Cypress.env("white-ter")} 0px 2px 0px 0px`
      );
    });
  });

  it("has correct fixed Navbar", () => {
    cy.get("#navbar-is-fixed-top").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.position).to.equal("fixed");
      expect(cs.top).to.equal("0px");
      expect(cs.zIndex).to.equal("30");
    });

    cy.get("#navbar-is-fixed-bottom").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.bottom).to.equal("0px");
      expect(cs.position).to.equal("fixed");
      expect(cs.zIndex).to.equal("30");
    });
  });

  it("has a correct Navbar Item", () => {
    cy.get("#navbar .navbar-start .navbar-item").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.env("text"));
      expect(cs.flexGrow).to.equal("0");
      expect(cs.flexShrink).to.equal("0");
      expect(cs.lineHeight).to.equal("24px");
      expect(cs.padding).to.equal("8px 12px");
    });

    cy.get("#navbar .navbar-start .navbar-item.has-dropdown").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("0px");
    });
  });

  it("has a correct Navbar Link", () => {
    cy.get("#navbar .navbar-link").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.paddingRight).to.equal("40px");
    });
  });

  it("has a correct Navbar Drodpown", () => {
    cy.get("#navbar .navbar-dropdown").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.fontSize).to.equal("14px");
      expect(cs.paddingBottom).to.equal("8px");
      expect(cs.paddingTop).to.equal("8px");
    });

    cy.get("#navbar .navbar-dropdown .navbar-item").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.paddingLeft).to.equal("24px");
      expect(cs.paddingRight).to.equal("24px");
    });
  });

  it("has a correct Navbar Divider", () => {
    cy.get("#navbar .navbar-divider").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white-ter"));
      expect(cs.height).to.equal("2px");
      expect(cs.margin).to.equal("8px 0px");
    });
  });

  it("has a correct Navbar Brand", () => {
    cy.get("#navbar .navbar-brand").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.alignItems).to.equal("stretch");
      expect(cs.display).to.equal("flex");
      expect(cs.flexShrink).to.equal("0");
      expect(cs.minHeight).to.equal("52px");
    });
  });
});

// Mobile
describe("Components/Navbar Mobile", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/components/navbar/");
    setMobile();
  });

  it("has a Navbar", () => {
    cy.get(".navbar").should("exist");
  });

  it("has a correct Navbar Container", () => {
    cy.get("#navbar-container > .container").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("block");
    });
  });

  it("has a correct Navbar Item", () => {
    cy.get("#navbar .navbar-start .navbar-item").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("block");
    });
  });

  it("has a correct active Navbar Item", () => {
    cy.get("#navbar .navbar-start .navbar-item.is-active").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("white-bis"));
    });
  });

  it("has a correct Navbar Burger", () => {
    cy.get("#navbar .navbar-burger").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.appearance).to.equal("none");
    });
  });

  it("has a correct Navbar Menu", () => {
    cy.get("#navbar .navbar-menu").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("none");
    });
  });

  it("has a correct Navbar Divider", () => {
    cy.get("#navbar .navbar-divider").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("none");
    });
  });
});

// Desktop
describe("Components/Navbar Desktop", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/components/navbar/");
    setDesktop();
  });

  it("has a Navbar", () => {
    cy.get(".navbar").should("exist");
  });

  it("has a correct Navbar Container", () => {
    cy.get("#navbar-container > .container").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
    });
  });

  it("has a correct Navbar Item", () => {
    cy.get("#navbar .navbar-start .navbar-item").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
    });
  });

  it("has a correct active Navbar Item", () => {
    cy.get("#navbar .navbar-start .navbar-item.is-active").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.backgroundColor).to.equal(Cypress.env("transparent"));
    });
  });

  it("has a correct Navbar Burger", () => {
    cy.get("#navbar .navbar-burger").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.appearance).to.equal("none");
      expect(cs.display).to.equal("none");
      expect(cs.margin).to.equal("0px 0px 0px auto");
    });
  });

  it("has a correct Navbar Menu", () => {
    cy.get("#navbar .navbar-menu").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("flex");
    });
  });

  it("has a correct Navbar Divider", () => {
    cy.get("#navbar .navbar-divider").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.display).to.equal("block");
    });
  });

  it(`has correct color Navbars`, () => {
    for (let i = 0; i < Cypress.env("color-names").length; i++) {
      const name = Cypress.env("color-names")[i];
      const baseColor = Cypress.env(name);
      const invertColor = Cypress.env(`${name}-invert`);
      const lightColor = Cypress.env(`${name}-light`);
      const darkColor = Cypress.env(`${name}-dark`);

      cy.get(`#navbar-${name} .navbar-link`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.color).to.equal(invertColor);
      });

      cy.get(`#navbar-${name} .navbar-dropdown a.navbar-item.is-active`).then(
        ($) => {
          const cs = window.getComputedStyle($[0]);
          expect(cs.backgroundColor).to.equal(baseColor);
          expect(cs.color).to.equal(invertColor);
        }
      );
    }
  });
});
