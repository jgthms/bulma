describe("Elements/Title", () => {
  beforeEach(() => {
    cy.visit("/cyp/elements/title/");
  });

  it("has a Title", () => {
    cy.get(".title").should("exist");
  });

  it("has a correct Title", () => {
    cy.get("#title").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.expose("text-strong"));
      expect(cs.fontSize).to.equal(`${Cypress.expose("sizes")["3"]}px`);
      expect(cs.fontWeight).to.equal(Cypress.expose("weight-extrabold"));
      expect(cs.lineHeight).to.equal(`${Cypress.expose("sizes")["3"] * 1.125}px`);
    });

    cy.get("#title strong").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.expose("text-strong"));
      expect(cs.fontWeight).to.equal(Cypress.expose("weight-extrabold"));
    });
  });

  it("has correct Title sizes", () => {
    for (let i = 1; i <= 7; i++) {
      cy.get(`#title-${i}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.fontSize).to.equal(`${Cypress.expose("sizes")[i]}px`);
      });
    }
  });

  it("has a Subtitle", () => {
    cy.get(".subtitle").should("exist");
  });

  it("has a correct Subtitle", () => {
    cy.get("#subtitle").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.expose("text"));
      expect(cs.fontSize).to.equal(`${Cypress.expose("sizes")["5"]}px`);
      expect(cs.fontWeight).to.equal("400");
      expect(cs.lineHeight).to.equal(`${Cypress.expose("sizes")["5"] * 1.25}px`);
    });

    cy.get("#subtitle strong").then(($) => {
      const cs = window.getComputedStyle($[0]);
      expect(cs.color).to.equal(Cypress.expose("text-strong"));
      expect(cs.fontWeight).to.equal("600");
    });
  });

  it("has correct Subtitle sizes", () => {
    for (let i = 1; i <= 7; i++) {
      cy.get(`#subtitle-${i}`).then(($) => {
        const cs = window.getComputedStyle($[0]);
        expect(cs.fontSize).to.equal(`${Cypress.expose("sizes")[i]}px`);
      });
    }
  });
});
