const logFileName = Cypress.env("logFileName");

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
    cy.get(parent)
      .then(() => {
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
      })
      .then(() => {
        cy.get(parent).contains(selectorTitle).should("not.be.visible");
      });
  }
);

Cypress.Commands.add(
  "testChildrenCount",
  (browser, device, viewport, task, testName, selectorTitle, count) => {
    cy.get("body")
      .then(() => {
        const $el = cy.$$(`[data-original-title="${selectorTitle}"]:visible`);
        if ($el.length === count) {
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
        cy.get(selectorTitle).children().should("have.length", count);
      });
  }
);

Cypress.Commands.add(
  "checkImageURLPresent",
  (browser, device, viewport, task, testName, selectorTitle) => {
    cy.get("body")
      .then(() => {
        const $el = cy.$$(`${selectorTitle}:visible`);
        if ($el.css("background-image").includes(".jpg")) {
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
        cy.get(selectorTitle)
          .should("have.css", "background-image")
          .and("match", /jpg/);
      });
  }
);

Cypress.Commands.add(
  "checkCSSProperty",
  (
    browser,
    device,
    viewport,
    task,
    testName,
    selectorTitle,
    CSSProperty,
    CSSPropertyValue
  ) => {
    cy.get("body")
      .then(() => {
        const $el = cy.$$(`${selectorTitle}:visible`);

        if ($el.css(CSSProperty) === CSSPropertyValue) {
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
        cy.get(selectorTitle).should("have.css", CSSProperty, CSSPropertyValue);
      });
  }
);

Cypress.Commands.add(
  "checkCSSPropertyofLastChild",
  (
    browser,
    device,
    viewport,
    task,
    testName,
    selectorTitle,
    CSSProperty,
    CSSPropertyValue
  ) => {
    cy.get("body")
      .then(() => {
        const $el = cy.$$(`${selectorTitle}:visible`);
        if ($el.children().last().css(CSSProperty) === CSSPropertyValue ) {
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
        cy.get(selectorTitle).children().last().should("have.css", CSSProperty, CSSPropertyValue);
      });
  }
);

Cypress.Commands.add(
  "checkValue",
  (browser, device, viewport, task, testName, selectorTitle, value) => {
    cy.get("body")
      .then(() => {
        const $el = cy.$$(`${selectorTitle}:contains(${value})`);

        if ($el.text() === value) {
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
        cy.get(selectorTitle).should("contain", value);
      });
  }
);

Cypress.Commands.add(
  "checkCSSPropertyofParentsParent",
  (
    browser,
    device,
    viewport,
    task,
    testName,
    selectorTitle,
    CSSProperty,
    CSSPropertyValue
  ) => {
    cy.get("body")
      .then(() => {
        const $el = cy.$$(`${selectorTitle}:visible`);
        if ($el.parent().parent().css(CSSProperty) === CSSPropertyValue ) {
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
        cy.get(selectorTitle).parent().parent().should("have.css", CSSProperty, CSSPropertyValue)
      });
  }
);

Cypress.Commands.add(
  "checkCSSPropertyofParent",
  (
    browser,
    device,
    viewport,
    task,
    testName,
    selectorTitle,
    CSSProperty,
    CSSPropertyValue
  ) => {
    cy.get("body")
      .then(() => {
        const $el = cy.$$(`${selectorTitle}:visible`);
        if ($el.parent().css(CSSProperty) === CSSPropertyValue ) {
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
        cy.get(selectorTitle).parent().should("have.css", CSSProperty, CSSPropertyValue)
      });
  }
);
