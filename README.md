This repo contains source code for my entry to the Applitools Cross Browser Testing Hackathon using Cypress testing framework to run cross browser tests on both the Applitools Ultrafast Grid for the modern approach and the traditional approach using my local Chrome, Firefox, and Edge Chromium browsers.

## Overview

Imagine you are a test automation engineer for “AppliFashion”, a high profile e-commerce company that sells fancy shoes. The AppliFashion web app is used by millions of people, using various devices and browsers to buy shoes. The 1st version of the app (V1) is already built and is “bug-free”. Your developers are now coming up with a newer version, version (V2) of the app, and assume that it’s full of bugs.

The challenge is to build the automation suite for the first version of the app and use it to find bugs in the second version (V2) of the app. You need to automate three (3) main tasks across seven (7) different combinations of browsers and screen resolutions (viewports). Further, you need to automate the tasks in both the traditional approach and the Modern approach, for both V1 and V2 versions of the app. By “traditional approach”, we mean without using Applitools. You can execute the traditional tests either locally or by using other cross-browser cloud solutions that you are already familiar with.

The Hackathon App
[Version 1 (V1)](https://demo.applitools.com/gridHackathonV1.html) and 
[Version 2 (V2)](https://demo.applitools.com/gridHackathonV2.html)

## The Github repo contains the following:

1. “TraditionalTestsV1” — Folder/Project with traditional Test code for V1 of the app
1. “TraditionalTestsV2” — Folder/Project with traditional Test code for V2 of the app
1. “ModernTestsV1” — Folder/Project with UFG Test code for V1 of the app
1. “ModernTestsV2” — Folder/Project with UFG Test code for V2 of the app
1. Traditional-V1-TestResults.txt
1. Traditional-V2-TestResults.txt
1. README.md – Details about how to execute your projects.

## Configuration

Each repo shares similar configuration:

### URLs

The base URL and the dirctory for the version under test are set under the `cypress.json` file found in the project's root. For Example:

```
{
  "baseUrl": "https://demo.applitools.com",
  "integrationFolder": "cypress/e2e",
  "env": {
    "urlVersion": "/gridHackathonV1.html"
  }
}
```

### API Keys

The Applitools API Key is stored as an environmental variable for the project in a `.env` file in the format:

```
APPLITOOLS_API_KEY='[Your key here]'
```

And that api key is loaded by the `applitools.config.js` file found in the project's root.

### Traditional Tests Reporting

Cypress be default has built in waiting that fails tests. For this challenge, it is necessary to log the failure to a `.txt` file. To enable this, custom cypress commands have been added to the `/cypress/support/commands.js` file that will log the necessary information for each assertation.

## Tasks

### Task 1

The “AppliFashion” app is responsive, so when testing on various viewports, the elements of your application change. Some are hidden, some are made visible, some are repositioned to accommodate the space available. For example, in our app, the Search field is displayed on laptops and tablets but is hidden on mobile devices. Your job is to visually find such changing elements (not all elements) and ensure they are properly hidden or displayed in different viewports and on different browsers.

### Task 2

Filter for “Black” shoes. Ensure that there are 2 black shoes and everything works and looks good.

### Task 3

Click on the first Black shoe to navigate to its details page. Check if everything looks good and accurate.

### Running Tests

#### 1. Modern Tests

1. Navigate to the V1 or V2 folder and install the node modules: `npm install`
1. Run the Cypress test suites in your local broswer: `npm run cy:run:chrome` or `npm run cy:run:ff`
1. Navigate to your Applitools dashboard and look at the test results

#### 2. Traditional Tests

1. Navigate to the V1 or V2 folder and install the node modules: `npm install`
1. Run the Cypress test suites in all 3 local broswers: `npm run cy:run:all`
1. Open the `Traditional-V[x]-TestResults.txt` file in the root of your directory to view the logged results.

- Note: you can alternately run each browser individually with: `npm run cy:run:chrome` or `npm run cy:run:ff` or `npm run cy:run:edge`
