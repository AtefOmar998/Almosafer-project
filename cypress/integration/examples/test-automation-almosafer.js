/// <reference types="cypress" />

describe("Almosafer Final Project", () => {
    it("Verify Header Elements", () => {
      cy.visit("https://www.almosafer.com/en");
  
      // Test case 1: Verify that the language is ENGLISH
      cy.get('[data-testid="Header__LanguageSwitch"]').should('contain', 'العربية');
  
      // Test case 2: Verify that the currency is SAR
      cy.get('[data-testid="Header__CurrencySelector"]').should('contain', 'SAR');
  
      // Test case 3: Verify that the contact number is correct
      cy.get('.sc-cjHlYL').should('contain', '966554400000');
  
      // Test case 4: Verify that "Qitaf logo" is displayed in the footer
      cy.get('.sc-ekulBa').should('be.visible');
    });
  
    it("Verify Search Tab and Default Flight Date", () => {
      cy.visit("https://www.almosafer.com/en");
  
      // Test case 5: Verify that the "Flights" tab is selected by default
      cy.get('[aria-selected="true"]').should('be.visible').and('contain', 'Flights');
  
      // Test case 6: Verify that the flight departure date is set to today + 1 by default
      let today = new Date(); 
      let tomorrow = new Date();
      tomorrow.setDate(today.getDate() + 1);
      let tomorrowDay = tomorrow.getDate().toString(); // Get the day of the month as a string

      cy.get('[data-testid="FlightSearchBox__FromDateButton"] > .sc-dXfzlN').should('contain', tomorrowDay); 

      // Test case 7: Verify that the flight return date is set to today + 2 by default
      let aftertommorow = new Date();
      aftertommorow.setDate(today.getDate() + 2);
      let aftertommorowDay = aftertommorow.getDate().toString(); // Get the day of the month as a string

      cy.get('[data-testid="FlightSearchBox__ToDateButton"] > .sc-dXfzlN').should('contain', aftertommorowDay);
    });


// Test case 8: Randomly change language from EN to AR and vice versa
it("Randomly change language from EN to AR and vice versa", () => {
    let websites = ["https://www.almosafer.com/en", "https://www.almosafer.com/ar"]; // Add array of websites to visit
    let randomIndex = Math.floor(Math.random() * websites.length); // Take a randor number of the tall of the array
    let randomWebsite = websites[randomIndex]; // Ranodmly select a website from the array

    cy.visit(randomWebsite);

    cy.url().then((url)=> { // This to take the url and add it to the "Then" function to check the language
        
        if (url.includes('ar')) {
            cy.get('[data-testid="Header__LanguageSwitch"]').should('contain', 'English');
            
        }else if (url.includes('en')) {
            cy.get('[data-testid="Header__LanguageSwitch"]').should('contain','العربية');
        
        }
    })
  });


// Test case 9: Randomly change language from EN to AR for the website and hotels and vice versa
  it("Randomly change between the locations in hotels tab", () => {
    let websites = ["https://www.almosafer.com/en", "https://www.almosafer.com/ar"]; // Add array of websites to visit
    let randomIndex = Math.floor(Math.random() * websites.length); // Take a randor number of the tall of the array

    let hotelsEN = ["Riyadh", "Jeddah", "Dubai"]; // Add array of hotels to visit
    let randomindexhotelsEN = Math.floor(Math.random() * hotelsEN.length); // Take a randor number of the tall of the array


    let hotelsAR = ["الرياض", "جدة", "دبي"]; // Add array of hotels to visit
    let randomindexhotelsAR = Math.floor(Math.random() * hotelsAR.length); // Take a randor number of the tall of the array

    let randomhotelsEN = hotelsEN[randomindexhotelsEN]; // Ranodmly select a hotel from the array
    let randomhotelsAR = hotelsAR[randomindexhotelsAR]; // Ranodmly select a hotel from the array
    let randomWebsite = websites[randomIndex]; // Ranodmly select a website from the array
   

    cy.visit(randomWebsite);
    cy.get('#uncontrolled-tab-example-tab-hotels').click(); 

    cy.url().then((url)=> { // This to take the url and add it to the "Then" function to check the language
        
        if (url.includes('ar')) {
            cy.get('[data-testid="AutoCompleteInput"]').type(randomhotelsAR); // Type the hotel name in Arabic
            
        }else if (url.includes('en')) {
            cy.get('[data-testid="AutoCompleteInput"]').type(randomhotelsEN); // Type the hotel name in Arabic
        
        }
    })
  });

  // Test case 10: Randomly change language from EN to AR for the website and hotels and vice versa
  it("Randomly change between the locations in hotels tab & Randomly change the selction rooms", () => {
    let websites = ["https://www.almosafer.com/en", "https://www.almosafer.com/ar"]; // Add array of websites to visit
    let randomIndex = Math.floor(Math.random() * websites.length); // Take a randor number of the tall of the array

    let hotelsEN = ["Riyadh", "Jeddah", "Dubai"]; // Add array of hotels to visit
    let randomindexhotelsEN = Math.floor(Math.random() * hotelsEN.length); // Take a randor number of the tall of the array


    let hotelsAR = ["الرياض", "جدة", "دبي"]; // Add array of hotels to visit
    let randomindexhotelsAR = Math.floor(Math.random() * hotelsAR.length); // Take a randor number of the tall of the array

    let Roomoptions = ["A", "B"]; // Define the available options
    let randomOption = Roomoptions[Math.floor(Math.random() * Roomoptions.length)]; // Randomly pick one option
    

    let randomhotelsEN = hotelsEN[randomindexhotelsEN]; // Ranodmly select a hotel from the array
    let randomhotelsAR = hotelsAR[randomindexhotelsAR]; // Ranodmly select a hotel from the array
    let randomWebsite = websites[randomIndex]; // Ranodmly select a website from the array
  

    cy.visit(randomWebsite);
    cy.get('#uncontrolled-tab-example-tab-hotels').click(); 

    cy.url().then((url)=> { // This to take the url and add it to the "Then" function to check the language
        
        if (url.includes('ar')) {
            cy.get('[data-testid="AutoCompleteInput"]').type(randomhotelsAR); // Type the hotel name in Arabic
            cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]') .select(randomOption); // Select the random option
            
        }else if (url.includes('en')) {
            cy.get('[data-testid="AutoCompleteInput"]').type(randomhotelsEN); // Type the hotel name in Arabic
            cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]') .select(randomOption); // Select the random option
        
        }

        // Test case 11: Click on search hotels button 
        cy.get('[data-testid="HotelSearchBox__SearchButton"]').click(); 
    })
  });


});