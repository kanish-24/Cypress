/// const {config} = require("chai");
const { defineConfig } = require("cypress");

const cucumber = require('cypress-cucumber-preprocessor').default;

async function setupNodeEvents(on, config){
  // implement node event listeners here
  on('file:preprocessor', cucumber());
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    // specifying path/ what i want to execute to cypress
    //specPattern: 'cypress/Assessment/*.js',
    specPattern: 'cypress/Integration/framework/*.js',

  },
});
