const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, // Enable video recording
  videosFolder: "cypress/videos",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/*.spec.js",
  },
});
