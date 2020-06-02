const url = Cypress.env("urlVersion");

const task = "Task 2";
const testName = "Filter Results";
const browser = `${Cypress.browser.name} ${Cypress.browser.version}`;

const expectedNumberOfResults = 2;

describe("test full screen layout", () => {
  let device = {
    name: "Laptop",
    width: 1200,
    height: 700,
  };
  let viewport = `${device.width.toString()}x${device.height.toString()}`;

  it.only("show product image", () => {
    cy.viewport(device.width, device.height);
    cy.visit("/gridHackathonV2.html");
    // cy.get("#ti-filter").click();
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    // cy.get("#shoe_img").should("have.css", "background-image").and('match', /jpg/);
    cy.checkImageURLPresent(
      browser,
      device.name,
      viewport,
      task,
      testName,
      "#shoe_img"
    );
  });

  it("Check for SKU", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
  });

  it("Show sale price in correct format", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
  });

  it("Show default size option as Small", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
  });
});

describe("test tablet layout", () => {
  let device = {
    name: "Tablet",
    width: 768,
    height: 700,
  };
  let viewport = `${device.width.toString()}x${device.height.toString()}`;

  it("Item Count of results is valid", () => {});

  it("add to compare is visible on items", () => {});

  it("add to cart is visible on items", () => {});
});

describe("test mobile layout", () => {
  let device = {
    name: "Mobile",
    width: 500,
    height: 700,
  };
  let viewport = `${device.width.toString()}x${device.height.toString()}`;

  it("Item Count of results is valid", () => {});

  it("add to favorites is visible on items", () => {});

  it("add to compare is visible on items", () => {});

  it("add to cart is visible on items", () => {});
});
