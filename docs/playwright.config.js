const { defineConfig, devices } = require("@playwright/test");

const baseURL = "http://127.0.0.1:4000";

module.exports = defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL,
    // The test pages also set data-theme="light"
    colorScheme: "light",
  },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        // Tests that depend on a breakpoint set their own viewport
        viewport: { width: 1000, height: 660 },
      },
    },
  ],
  webServer: {
    command: `npm run bulma-sass && jekyll serve --host 127.0.0.1 --port 4000`,
    url: `${baseURL}/cyp/elements/button/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
