const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl:'https://rahulshettyacademy.com/angularpractice',
     setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});

module.exports = {
  projectId: "prmd8a",
  // ...rest of the Cypress project config
}