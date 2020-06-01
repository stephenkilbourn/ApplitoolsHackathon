// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
// const browser = "chrome";
// const device = "macbook";

Cypress.Commands.add(
  "testIdShouldBeVisible",
  (browser, device, viewport, task, testName, testId) => {
    let isDisplayed = false;

    if (Cypress.$(testId).length > 0) {
      isDisplayed = true;
    }
    cy.writeFile(
      "Traditional-V2-TestResults.txt",
      `"Task: ${task}, Test Name: ${testName}, DOM Id: ${testId}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${
        isDisplayed ? "Pass" : "Fail"
      }\n`,
      { flag: "a+" }
    );
    cy.findByTestId(testId).should("be.visible");
  }
);

Cypress.Commands.add(
  "testIdShouldNotBeVisible",
  (browser, device, viewport, task, testName, testId) => {
    let isDisplayed = true;

    if (Cypress.$(testId).length > 0) {
      isDisplayed = false;
    }
    cy.writeFile(
      "Traditional-V2-TestResults.txt",
      `"Task: ${task}, Test Name: ${testName}, DOM Id: ${testId}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${
        isDisplayed ? "Fail" : "Pass"
      }\n`,
      { flag: "a+" }
    );
    cy.findByTestId(testId).should("not.be.visible");
  }
);

Cypress.Commands.add(
  "selectorShouldBeVisible",
  (browser, device, viewport, task, testName, selector) => {
    cy.get("body").then(() => {
      const $el = cy.$$(`${selector}:visible`);
      if ($el.length) {
        cy.writeFile(
          "Traditional-V2-TestResults.txt",
          `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selector}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Pass\n`,
          { flag: "a+" }
        );
        cy.get(selector).should("be.visible");
      } else {
        cy.writeFile(
          "Traditional-V2-TestResults.txt",
          `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selector}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Fail\n`,
          { flag: "a+" }
        );
        cy.get(selector).should("be.visible");
      }
    });
  }
);

Cypress.Commands.add(
  "selectorShouldNotBeVisible",
  (browser, device, viewport, task, testName, selector) => {
    cy.get("body").then(() => {
      const $el = cy.$$(`${selector}:visible`);
      if ($el.length) {
        cy.writeFile(
          "Traditional-V2-TestResults.txt",
          `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selector}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Fail\n`,
          { flag: "a+" }
        );
        cy.get(selector).should("not.be.visible");
      } else {
        cy.writeFile(
          "Traditional-V2-TestResults.txt",
          `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selector}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Pass\n`,
          { flag: "a+" }
        );
        cy.get(selector).should("not.be.visible");
      }
    });
  }
);

