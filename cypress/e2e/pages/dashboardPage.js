///<reference types = 'cypress' />

export class Dashboard {
    hamburgerIcon = '.sidebar-minimizer'
    MyasbaNavLink = 'a[href = "#/asba"]'
    

    navigateToMyASBA() {
        cy.get(this.hamburgerIcon).click();
        cy.get(this.MyasbaNavLink).click();
    }
}