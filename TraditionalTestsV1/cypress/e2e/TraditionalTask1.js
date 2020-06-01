const url = Cypress.env("urlVersion");

const task = "Task 1";
const testName = "Cross-Device Elements Test";
const browser = `${Cypress.browser.name} ${Cypress.browser.version}`;

describe("test full screen layout", () => {
  let device = {
    "name": "Laptop",
    "width": 1200,
    "height": 700,
  }
  let viewport = `${device.width.toString()}x${device.height.toString()}`


  it("test new filter button is visible", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.selectorShouldBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#ti-filter"
    );
  });

  it("test wish list icon is visible", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.selectorShouldBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".wishlist"
    );
  });

  it("add to favorites/ comapre/add to cart icon bar is not visible at full width", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#UL____222"
    );
  });
});

describe("test tablet layout", () => {
  let device = {
    "name": "Tablet",
    "width": 768,
    "height": 700,
  }
  let viewport = `${device.width.toString()}x${device.height.toString()}`

  it("test new filter button is visible", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.findByText(/filters/i);
    cy.selectorShouldBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#ti-filter"
    );
  });

  it("test wish list icon is hidden", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".wishlist"
    );
  });

  it("add to favorites/compare/add-to-cart icon bar is visible", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.selectorShouldBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#UL____222"
    );
  });
});

describe("test mobile layout", () => {
  let device = {
    "name": "Laptop",
    "width": 1200,
    "height": 700,
  }
  let viewport = `${device.width.toString()}x${device.height.toString()}`

  it("test new filter button is visible", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.selectorShouldBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#ti-filter"
    );
  });

  it("Hide search field on mobile", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#INPUTtext____42"
    );
  });

  it("test wish list icon is visible", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      ".wishlist"
    );
  });

  it("add to favorites/compare/add-to-cart icon bar is visible", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.selectorShouldBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#UL____222"
    );
  });

  it("Quick Links footer bar should be collapsed", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#UL____424"
    );
  });

  it("Contacts footer bar should be collapsed", () => {
    cy.viewport(365, 812);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#UL____440"
    );
  });

  it("Keep In Touch footer bar should be collapsed", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.findByText(/keep in touch/i).should("be.visible");
    cy.selectorShouldNotBeVisible(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#email_newsletter"
    );
  });
});
