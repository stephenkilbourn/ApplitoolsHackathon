const logFileName = Cypress.env("logFileName");

Cypress.Commands.add(
  "testIdShouldBeVisible",
  (browser, device, viewport, task, testName, testId) => {
    let isDisplayed = false;

    if (Cypress.$(testId).length > 0) {
      isDisplayed = true;
    }
    cy.writeFile(
      logFileName,
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
      logFileName,
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
          logFileName,
          `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selector}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Pass\n`,
          { flag: "a+" }
        );
        cy.get(selector).should("be.visible");
      } else {
        cy.writeFile(
          logFileName,
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
          "Traditional-V1-TestResults.txt",
          `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selector}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Fail\n`,
          { flag: "a+" }
        );
        cy.get(selector).should("not.be.visible");
      } else {
        cy.writeFile(
          "Traditional-V1-TestResults.txt",
          `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selector}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Pass\n`,
          { flag: "a+" }
        );
        cy.get(selector).should("not.be.visible");
      }
    });
  }
);

Cypress.Commands.add(
  "selectorByTitleShouldNotBeVisible",
  (browser, device, viewport, task, testName, selectorTitle) => {
    cy.get("body").then(() => {
      const $el = cy.$$(`[title="${selectorTitle}"]`);
      if ($el.length) {
        cy.writeFile(
          logFileName,
          `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selectorTitle}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Fail\n`,
          { flag: "a+" }
        );
        cy.findByTitle(selectorTitle).should("not.be.visible");
      } else {
        cy.writeFile(
          logFileName,
          `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selectorTitle}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Pass\n`,
          { flag: "a+" }
        );
        cy.findByTitle(selectorTitle).should("not.be.visible");
      }
    });
  }
);

Cypress.Commands.add(
  "selectorByTitleShouldBeVisibleWithinParent",
  (browser, device, viewport, task, testName, selectorTitle, parent) => {
    cy.get(parent)
      .then(() => {
        const $el = cy.$$(`[data-original-title="${selectorTitle}"]:visible`);
        if ($el.length) {
          cy.writeFile(
            logFileName,
            `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selectorTitle}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Pass\n`,
            { flag: "a+" }
          );
        } else {
          cy.writeFile(
            logFileName,
            `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selectorTitle}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Fail\n`,
            { flag: "a+" }
          );
        }
      })
      .then(() => {
        cy.get(parent).contains(selectorTitle).should("be.visible");
      });
  }
);

Cypress.Commands.add(
  "selectorByTitleShouldNotBeVisibleWithinParent",
  (browser, device, viewport, task, testName, selectorTitle, parent) => {
    cy.get(parent).then(() => {
      const $el = cy.$$(`[data-original-title="${selectorTitle}"]:visible`);
      if ($el.length) {
        cy.writeFile(
          logFileName,
          `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selectorTitle}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Fail\n`,
          { flag: "a+" }
        );
      } else {
        cy.writeFile(
          logFileName,
          `"Task: ${task}, Test Name: ${testName}, DOM Id: ${selectorTitle}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: Pass\n`,
          { flag: "a+" }
        );
      }
    });
    cy.get(parent).contains(selectorTitle).should("not.be.visible");
  }
);
