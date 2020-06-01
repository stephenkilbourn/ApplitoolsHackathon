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

  it.only("Item Count of results is invalid", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();

    cy.testChildrenCount(
      browser,
      device.name,
      viewport,
      task,
      testName,
      '#product_grid',
      expectedNumberOfResults
    );
  });


  it("add to favorites is not visible on items at full width", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to favorites";
      cy.selectorByTitleShouldNotBeVisibleWithinParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        selector,
        $grid_item
      );
    });
  });

  it("add to compare is not visible on items at full width", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to compare";
      cy.selectorByTitleShouldNotBeVisibleWithinParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        selector,
        $grid_item
      );
    });
  });

  it("add to cart is not visible on items at full width", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to cart";
      cy.selectorByTitleShouldNotBeVisibleWithinParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        selector,
        $grid_item
      );
    });
  });
});

describe("test tablet layout", () => {
  let device = {
    name: "Tablet",
    width: 768,
    height: 700,
  };
  let viewport = `${device.width.toString()}x${device.height.toString()}`;


  it("add to favorites is not visible on items", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to favorites";
      cy.selectorByTitleShouldBeVisibleWithinParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        selector,
        $grid_item
      );
    });
  });

  it("add to compare is visible on items", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to compare";
      cy.selectorByTitleShouldBeVisibleWithinParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        selector,
        $grid_item
      );
    });
  });

  it("add to cart is visible on items", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to cart";
      cy.selectorByTitleShouldBeVisibleWithinParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        selector,
        $grid_item
      );
    });
  });
});

describe("test mobile layout", () => {
  let device = {
    name: "Mobile",
    width: 500,
    height: 700,
  };
  let viewport = `${device.width.toString()}x${device.height.toString()}`;

  it("test filter button is  visible", () => {
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

  it("add to favorites is not visible on items at full width", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to favorites";
      cy.selectorByTitleShouldBeVisibleWithinParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        selector,
        $grid_item
      );
    });
  });

  it("add to compare is visible on items", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to compare";
      cy.selectorByTitleShouldBeVisibleWithinParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        selector,
        $grid_item
      );
    });
  });

  it("add to cart is visible on items", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to cart";
      cy.selectorByTitleShouldBeVisibleWithinParent(
        browser,
        device.name,
        viewport,
        task,
        testName,
        selector,
        $grid_item
      );
    });
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
    cy.viewport(device.width, device.height);
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
