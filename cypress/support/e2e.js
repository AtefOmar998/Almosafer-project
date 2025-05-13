// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'


//There is an error in Almosafer website that is related to the "track" function.
// This error is not related to the test case and should not fail the test.
// This code will ignore that error and allow the test to continue running.
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore errors related to 'track'
    if (err.message.includes("Cannot read properties of undefined (reading 'track')")) {
      return false; // Prevent Cypress from failing the test
    }
    // Let other errors fail the test
  });