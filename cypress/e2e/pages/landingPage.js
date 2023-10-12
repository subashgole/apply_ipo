///<reference types = 'cypress' />

export class LandingPage {
    DPDropdown = '.selection';
    DPLists = '.select2-results > ul > li'
    searchDPField = 'input[type="search"]' ;
    usernameField = '#username';
    passwordField = '#password';
    loginButton = 'button[type = "submit"]' ;

    navigateToSite () {
        cy.visit( "https://meroshare.cdsc.com.np/");
        cy.get(this.loginButton, {timeout: 60000}).should('be.visible')
        // cy.intercept('https://webbackend.cdsc.com.np/api/meroShare/capital/').as('loginPage')
        // cy.wait('@loginPage', {timeout: 60000})
    }
    loginToSite ( dpName, username, password) {
        cy.get( this.DPDropdown ).click();
        cy.get(this.searchDPField).type(dpName);
        cy.get(this.DPLists).click();
        cy.get(this.usernameField).type(username);
        cy.get(this.passwordField).type(password);
        cy.get(this.loginButton).click();
        cy.intercept('https://webbackend.cdsc.com.np/api/meroShare/showDashboard/').as('loggingIn')
        cy.wait('@loggingIn', {timeout: 60000})

    }
}