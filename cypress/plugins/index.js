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

//For connecting to SQL Server
const mysql = require('mysql')
function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.json env's
  const connection = mysql.createConnection(config.env.db)
  // start connection to db
  connection.connect()
  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error)
      else {
        connection.end()
        return resolve(results)
      }
    })
  })
}

module.exports = (on, config) => {
  on('task', { downloadFile }); //Cypress file Download
  on('file:preprocessor', selectTestsWithGrep(config)); //Adding Tags to Tests
  on('task', { queryDb: query => { return queryTestDb(query, config) }, }); //For running sql query
  require('cypress-grep/src/plugin')(config); return config //For cypress-grep to add tags to test
}

//For Cucumber Integration
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const nodePolyfills = require('@esbuild-plugins/node-modules-polyfill').NodeModulesPolyfillPlugin;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
module.exports = async (on, config) => {
  await addCucumberPreprocessorPlugin(on, config); // to allow json to be produced
  // To use esBuild for the bundler when preprocessing
  on(
    'file:preprocessor',
    createBundler({
      plugins: [nodePolyfills(), createEsbuildPlugin(config)],
    }),
  );
  return config;
}