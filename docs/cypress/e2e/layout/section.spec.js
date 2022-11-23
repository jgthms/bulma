import { setMobile, setDesktop } from "../utils";

describe("Layout/Section", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/cyp/layout/section/");
    setDesktop();
  });

  it("has a Section", () => {
    cy.get(".section").should("exist");
  });

  it("has a correct Section", () => {
    cy.get("#section").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("48px");
    });

    setMobile();

    cy.get("#section").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("48px 24px");
    });
  });

  it("has a correct medium Section", () => {
    cy.get("#section-medium").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("144px 72px");
    });
  });

  it("has a correct large Section", () => {
    cy.get("#section-large").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.padding).to.equal("288px 96px");
    });
  });
});
