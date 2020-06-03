const url = Cypress.env("urlVersion");

const task = "Task 1";
const testName = "Cross-Device Elements Test";
const browser = `${Cypress.browser.name} ${Cypress.browser.version}`;

describe("test full screen layout", () => {
  let device = {
    name: "Laptop",
    width: 1200,
    height: 700,
  };
  let viewport = `${device.width.toString()}x${device.height.toString()}`;

  it("filter button is not visible", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.selectorShouldNotBeVisible(
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
      cy.selectorByOriginalTitleShouldNotBeVisibleWithinParent(
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
      cy.selectorByOriginalTitleShouldNotBeVisibleWithinParent(
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

  it("filter button is visible", () => {
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

  it("add to favorites is not visible on items in grid", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to favorites";
      cy.selectorByOriginalTitleShouldBeVisibleWithinParent(
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

  it("add to compare is visible on items in grid", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to compare";
      cy.selectorByOriginalTitleShouldBeVisibleWithinParent(
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

  it("add to cart is visible on items in grid", () => {
    cy.viewport(device.width, device.height);
    cy.visit(url);
    cy.get(".grid_item").each(($grid_item) => {
      let selector = "Add to cart";
      cy.selectorByOriginalTitleShouldBeVisibleWithinParent(
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

if (Cypress.isBrowser("chrome")) {
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

    it("add to favorites is visible on items in grid", () => {
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.get(".grid_item").each(($grid_item) => {
        let selector = "Add to favorites";
        cy.selectorByOriginalTitleShouldBeVisibleWithinParent(
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

    it("add to compare is visible on items in grid", () => {
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.get(".grid_item").each(($grid_item) => {
        let selector = "Add to compare";
        cy.selectorByOriginalTitleShouldBeVisibleWithinParent(
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

    it("add to cart is visible on all items in grid", () => {
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.get(".grid_item").each(($grid_item) => {
        let selector = "Add to cart";
        cy.selectorByOriginalTitleShouldBeVisibleWithinParent(
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
      cy.checkChildrenHidden(
        browser,
        device.name,
        viewport,
        task,
        testName,
        "#collapse_1"
      );
    });

    it("Contacts footer bar should be collapsed", () => {
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.checkChildrenHidden(
        browser,
        device.name,
        viewport,
        task,
        testName,
        "#collapse_3"
      );
    });

    it("Keep In Touch footer bar should be collapsed", () => {
      cy.viewport(device.width, device.height);
      cy.visit(url);
      cy.checkChildrenHidden(
        browser,
        device.name,
        viewport,
        task,
        testName,
        "#collapse_4"
      );
    });
  });
}
