
const fs = require('fs');

const browser = "chrome";
const viewport = "700 x 600";
const device = "macbook";


module.exports =
  function hackathonReporter(task, testName, domId, comparisonResult) {
    fs.appendFileSync(
      "Traditional-V1-TestResults.txt",
      `"Task: ${task}, Test Name: ${testName}, DOM Id: ${domId}, Browser: ${browser}, Viewport: ${viewport}, Device: ${device}, Status: ${
        comparisonResult ? "Pass" : "Fail"
      }\n`
    );
    return comparisonResult;
  }
