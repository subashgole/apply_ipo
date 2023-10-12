///<reference types = 'cypress' />

export class MyASBA {
    companyName = '.company-name';
    currentIssueTab = '.page-title-wrapper > .nav > :nth-child(2)';
    applicationReportTab = '.page-title-wrapper > .nav > :nth-child(3)'
    companyLists = 'div[class = "company-list"]';
    reportButton = '.action-buttons > div >button'
    selectBankDropdown = '#selectBank';
    // requiredBankName = '1: 44'
    appliedKittaField = '#appliedKitta';
    crnField = '#crnNumber';
    disclaimerCheckbox = '#disclaimer';
    proceedButton = '.card-footer > button[type="submit"]';
    transactionPinField = '#transactionPIN';
    applyButton = '.confirm-page-btn > .btn-primary';
    toastMsg = '.toast-message';
    logOutButton = 'a[tooltip="Logout"]';

    selectCompany(company_name) {
        // cy.get(this.currentIssueTab).click();
        // cy.get(this.applicationReportTab).click();
        cy.get(this.companyLists, { timeout: 10000 })
            .each(($row) => {
                if ($row.text().includes(company_name)) {
                    $row.find(this.reportButton).trigger('click');
                }
            })
    }
    fillForm(total_kitta, crn_number, pin) {
        cy.wait(1500)
        cy.get(this.selectBankDropdown).select(1); //select nic asia bank with value '1: 44'(Select tag)
        // cy.get
        cy.get(this.appliedKittaField).type(total_kitta);
        cy.get(this.crnField).type(crn_number);
        cy.get(this.disclaimerCheckbox).click();
        cy.get(this.proceedButton).should('not.be.disabled').click();
        cy.get(this.transactionPinField).type(pin);
        cy.get(this.applyButton).click();
        cy.get(this.toastMsg, { timeout: 60000 })
            .invoke('text')
            .then((text) => {
                expect(text.trim()).contains('Share has been applied successfully', { matchCase: false })
            })
    }
    logOut() {
        cy.get(this.logOutButton).click();
    }
}