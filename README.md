# CodingChallenge Automation Framework

This repository contains an end-to-end automation testing framework built with Cypress and TypeScript. It follows a modular Page Object Model (POM) architecture, integrates Allure for reporting, and is configured to run on GitHub Actions with seamless deployment of test results to GitHub Pages.

## Framework Structure and Rationale

```
├── cypress
│   ├── components                  # Reusable UI components (e.g., TextField, Button, SidePanel)
│   ├── constants                   # Selector and message constants for maintainability
│   ├── core                        # Base classes (BasePage, BaseUIObject, BaseLoggedInPage)
│   ├── fixtures                    # Test fixture data (users, searchData)
│   ├── pages                       # Page Object classes encapsulating UI interactions
│   ├── report                      # Generated test result files (GitHub Actions artifact)
│   ├── support
│   │   ├── commands.ts             # Custom Cypress commands (assertions, utilities)
│   │   └── index.ts                # Imports and global hooks
│   └── utils                       # Helper functions (data generators, assertions)
├── .github/workflows               # CI configuration for GitHub Actions
│   └── cypress-crossPlatform.yml   # Runs tests on multiple browsers across platforms (Ubuntu, Mac, Windows) and Allure report
│   └── cypress-multibrowser.yml    # Runs tests on multiple browsers on Ubuntu and Allure report
├── package.json                    # Dependencies and NPM scripts
└── cypress.config.ts               # Cypress project configuration
└── tsconfig.ts                     # TypeScript project configuration
```

## Prerequisites

- Node.js v16+ and npm
- Git
- A valid GitHub account with Pages enabled (for report hosting)

## Setup & Execute Demo Scripts

1. **Clone the repository**:
   ```bash
   git clone https://github.com/goldenriver1592/codingChallenge.git
   cd codingChallenge
   ```

2. **Install dependencies**:
   ```bash
   npm ci
   ```

3. **Run tests locally on Chrome**:
   - **Headless** (Chrome):
     ```bash
     npm run test:chrome
     ```
   - **Interactive** (UI runner):
     ```bash
     npx cypress open
     ```

3. **Run tests locally and open allure report on Chrome**:
     ```bash
     npm run test:allure
     ```

## Run Tests via GitHub Actions

Tests are automatically triggered on every push or pull request. To run them manually:

1. Go to the **Actions** tab of this repository on GitHub.  
2. Select the **Cypress Cross-Platform & Multi-Browser** or **Cypress Multi-Browser (Manual Shell)** workflow in the left sidebar.  
3. Click the **Run workflow** dropdown, choose the options you want to test, then click **Run workflow**.  
4. Monitor the job logs to see test progress, results, and download any artifacts (e.g. `allure-results-macos-latest-firefox`).


## View Allure Report on GitHub Pages

After each GitHub Actions workflow run, the Allure report is automatically published to the `gh-pages` branch and served under GitHub Pages.

1.  Once the workflow completes, click the **Pages** badge in the workflow summary (or navigate to `https://goldenriver1592.github.io/codingChallenge/`).

---