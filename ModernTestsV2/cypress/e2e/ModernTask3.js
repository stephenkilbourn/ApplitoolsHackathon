const url = process.env.URL;

const browserCombo = [
  // Add browsers with different viewports
  { width: 1200, height: 700, name: "chrome" },
  { width: 1200, height: 700, name: "firefox" },
  { width: 1200, height: 700, name: "edgechromium" },
  { width: 768, height: 700, name: "chrome" },
  { width: 768, height: 700, name: "firefox" },
  { width: 768, height: 700, name: "edgechromium" },
  // Add mobile emulation devices in Portrait mode
  { deviceName: "iPhone X", screenOrientation: "portrait" },
];

const appName = "AppliFashion";
const batchName = "UFG Hackathon";
const testName = "Task 3";
const stepName = "“Product Details test”";

function eyesCheck(params) {
  cy.eyesOpen({
    appName: appName,
    batchName: batchName,
    testName: params.testName,
    browser: browserCombo,
  });

  cy.eyesCheckWindow({
    tag: params.tag,
    target: "window",
  });

  cy.eyesClose();
}

describe("Cross Browser Tests", () => {
  it("look at first black shoe result", () => {
    cy.viewport(800, 600);

    cy.visit(url);
    cy.get("#ti-filter").click();
    cy.findByRole("checkbox", { name: /black/i }).click();
    cy.findByRole("button", { name: /filter/i }).click();
    cy.get(".grid_item").first().click();
    eyesCheck({ testName: testName, tag: stepName });
  });
});
