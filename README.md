[![CircleCI](https://circleci.com/gh/QualityAssuranceTeam/selenium-webdriver-js.svg?style=svg)](https://circleci.com/gh/QualityAssuranceTeam/selenium-webdriver-js)
# Automated UI Testing
Selenium Webdriver, Chai and Mocha based project.

## Getting started

1. Checkout repository
```
git clone https://github.com/QualityAssuranceTeam/selenium-webdriver-js
```
2. Install dependencies
```
yarn install
```
3. Run tests
```
mocha test/**/*.spec.js --timeout 30000
```
or just
```
yarn test
```
4. Enjoy!

## Mochawesome-reporter
in order to use the reporting tool:
```
mocha test/**/*.js --reporter mochawesome --timeout 30000
```
or just
```
yarn test
```

## Project structure
```
.
├── src
│   ├── pom
│   │   └── *.page.js
│   ├── menu.js
│   ├── page.js
│   └── utils.js
├── test
│   └── *.spec.js
├── README.md
├── bdd.md
├── bug-report.md
├── package.json
└── yarn.lock
```
