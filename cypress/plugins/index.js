/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

//For Cypress file Download
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

//For Adding Tags to Tests
const selectTestsWithGrep = require('cypress-select-tests/grep')

//For cucumber integration
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('task', { downloadFile }); //Cypress file Download
  on('file:preprocessor', selectTestsWithGrep(config)); //Adding Tags to Tests
  on('file:preprocessor', cucumber()); //For cypress cucumber preprocessor
}