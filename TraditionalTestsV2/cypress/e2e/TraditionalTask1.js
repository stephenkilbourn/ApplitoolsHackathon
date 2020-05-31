const url = Cypress.env("urlVersion");

const task = "Task 1";
const testName = "Cross-Device Elements Test";
const browser = `${Cypress.browser.name} ${Cypress.browser.version}`;

describe("test full screen layout", () => {
  let viewport = "1200x700";
  let device = "Laptop";

  it("test new filter button is visible", () => {
    cy.viewport(1200, 700);
    cy.visit(url);
    cy.selectorShouldBeVisible(
      browser,
      device,
      viewport,
      task,
      testName,
      "#ti-filter"
    );
  });

  it("test wish list icon is visible", () => {
    cy.viewport(1200, 700);
    cy.visit(url);
    cy.selectorShouldBeVisible(
      browser,
      device,
      viewport,
      task,
      testName,
      ".wishlist"
    );
  });

  it("add to favorites/ comapre/add to cart icon bar is not visible at full width", () => {
    cy.viewport(1200, 700);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
      browser,
      device,
      viewport,
      task,
      testName,
      "#UL____222"
    );
  });
});

describe("test tablet layout", () => {
  let viewport = "768x700";
  let device = "Tablet";

  it("test new filter button is visible", () => {
    cy.viewport(768, 700);
    cy.visit(url);
    cy.findByText(/filters/i);
    cy.selectorShouldBeVisible(
      browser,
      device,
      viewport,
      task,
      testName,
      "#ti-filter"
    );
  });

  it("test wish list icon is hidden", () => {
    cy.viewport(768, 700);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
      browser,
      device,
      viewport,
      task,
      testName,
      ".wishlist"
    );
  });

  it("add to favorites/compare/add-to-cart icon bar is visible", () => {
    cy.viewport(768, 700);
    cy.visit(url);
    cy.selectorShouldBeVisible(
      browser,
      device,
      viewport,
      task,
      testName,
      "#UL____222"
    );
  });
});

describe("test mobile layout", () => {
  let viewport = "365x812";
  let device = "Mobile";

  it("test new filter button is visible", () => {
    cy.viewport(365, 812);
    cy.visit(url);
    cy.selectorShouldBeVisible(
      browser,
      device,
      viewport,
      task,
      testName,
      "#ti-filter"
    );
  });

  it("Hide search field on mobile", () => {
    cy.viewport(365, 812);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
      browser,
      device,
      viewport,
      task,
      testName,
      "#INPUTtext____42"
    );
  });

  it("test wish list icon is visible", () => {
    cy.viewport(365, 812);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
      browser,
      device,
      viewport,
      task,
      testName,
      ".wishlist"
    );
  });

  it("add to favorites/compare/add-to-cart icon bar is visible", () => {
    cy.viewport(365, 812);
    cy.visit(url);
    cy.selectorShouldBeVisible(
      browser,
      device,
      viewport,
      task,
      testName,
      "#UL____222"
    );
  });

  it("Quick Links footer bar should be collapsed", () => {
    cy.viewport(365, 812);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
      browser,
      device,
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
      device,
      viewport,
      task,
      testName,
      "#UL____440"
    );
  });

  it("Keep In Touch footer bar should be collapsed", () => {
    cy.viewport(365, 812);
    cy.visit(url);
    cy.findByText(/keep in touch/i).should("be.visible");
    cy.selectorShouldNotBeVisible(
      browser,
      device,
      viewport,
      task,
      testName,
      "#email_newsletter"
    );
  });
});
