export const setMobile = () => {
  cy.viewport(
    Cypress.env("viewports").mobile[0],
    Cypress.env("viewports").mobile[1]
  );
};

export const setTablet = () => {
  cy.viewport(
    Cypress.env("viewports").tablet[0],
    Cypress.env("viewports").tablet[1]
  );
};

export const setDesktop = () => {
  cy.viewport(
    Cypress.env("viewports").desktop[0],
    Cypress.env("viewports").desktop[1]
  );
};

export const setWidescreen = () => {
  cy.viewport(
    Cypress.env("viewports").widescreen[0],
    Cypress.env("viewports").widescreen[1]
  );
};

export const setFullHD = () => {
  cy.viewport(
    Cypress.env("viewports").fullhd[0],
    Cypress.env("viewports").fullhd[1]
  );
};

export const familyPrimary = 'system-ui, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif';
