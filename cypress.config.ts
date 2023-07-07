import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "y76z2q",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },
});
