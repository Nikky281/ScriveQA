const { defineConfig } = require("cypress");

// Added below for Cucumber set up
const cucumber = require('cypress-cucumber-preprocessor').default;


module.exports = defineConfig({
  projectId: 'bjzwwx',
  e2e: {



    setupNodeEvents(on, config) {
      // implement node event listeners here

      // added this for cucumber
      on('file:preprocessor',cucumber())
    },
    specPattern: 'cypress/integration/examples/todoqa/*.feature'
    
  },
});
