/// <reference types="cypress" />

// Test Case 1 : Verify that the user can register succesfully 
describe("Test Register almosafer", () => {
    it.skip("Register", () => {
        
        let name = ["Ali", "Mohammed", "Sara", "Fatima"]; // to add a random names 
        let randomName = Math.floor(Math.random() * name.length);

    
        let email = ["@yahoo.com", "@gmail.com", "@hotmail.com"]; // to add a random email
        let randomEmail = Math.floor(Math.random() * email.length);

        let passwords = ["Password123!", "SecurePass456@", "MyPass789#", "Test@1234"]; // to add a random password 
        let randomPasswordIndex = Math.floor(Math.random() * passwords.length); 

        let fullname= name[randomName];

        // Generate a random email address and all the names should be in lowercase and Math.random to change the number when we need to register with a new email
        let fullemail = fullname.toLowerCase() + Math.floor(Math.random() * 1000) + email[randomEmail]; 
        let randomPassword = passwords[randomPasswordIndex]; 


      cy.visit("https://www.almosafer.com/en");
      cy.get('.alm-desktop-mro3c9 > .MuiButtonBase-root').click();
      cy.get('.MuiBox-root > .MuiLink-root > .MuiTypography-root').click();
      cy.get('[data-testid="tab-tab-1"]').click();
      cy.wait(4000);

      cy.get('#InputField_email').type(fullemail); 
      cy.get('#InputField_password').type(randomPassword);
      cy.wait(2000);
      cy.get('#mui-10').click();

    });


    // Test Case 2 : Verify that the user can Login succesfully 
  describe("login", () => {
  it("Login", () => {
     
    cy.visit("https://www.almosafer.com/en");
    cy.get('.alm-desktop-mro3c9 > .MuiButtonBase-root').click();
    cy.get('[data-testid="tab-tab-1"]').click();
    cy.get('#InputField_email').type("sara543@hotmail.com")
    cy.get('#InputField_password').type("Test@1234");
    cy.get("button[id='mui-7'] span[class='MuiTypography-root MuiTypography-heading3SemBld __ds__comp undefined alm-desktop-1g883oz']").click();
    cy.wait(2000);
    cy.get('.alm-desktop-1xkmn3d > .MuiButtonBase-root').should('contain', 'My account');

   
  });
});

});