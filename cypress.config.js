const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  chromeWebSecurity: false,
  retries: 1,
  reporter: '../node_modules/mochawesome/src/mochawesome.js',
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
  projectId: 'd5zibb',
  env: {
    db: {
      host: 'db4free.net',
      user: 'username',
      password: 'password',
      database: 'db_name',
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      require("@deploysentinel/cypress-recorder")(on, config)
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern:
      ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
  },
})
