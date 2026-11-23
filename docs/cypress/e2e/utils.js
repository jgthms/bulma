export const setMobile = () => {
  cy.viewport(
    Cypress.expose("viewports").mobile[0],
    Cypress.expose("viewports").mobile[1]
  );
};

export const setTablet = () => {
  cy.viewport(
    Cypress.expose("viewports").tablet[0],
    Cypress.expose("viewports").tablet[1]
  );
};

export const setDesktop = () => {
  cy.viewport(
    Cypress.expose("viewports").desktop[0],
    Cypress.expose("viewports").desktop[1]
  );
};

export const setWidescreen = () => {
  cy.viewport(
    Cypress.expose("viewports").widescreen[0],
    Cypress.expose("viewports").widescreen[1]
  );
};

export const setFullHD = () => {
  cy.viewport(
    Cypress.expose("viewports").fullhd[0],
    Cypress.expose("viewports").fullhd[1]
  );
};

export const familyPrimary = 'Inter, "SF Pro", "Segoe UI", Roboto, Oxygen, Ubuntu, "Helvetica Neue", Helvetica, Arial, sans-serif';
