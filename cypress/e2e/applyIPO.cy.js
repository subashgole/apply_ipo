///<reference types = 'cypress' />

import { LandingPage } from "./pages/landingPage";
import { creds } from "./credentials";
import { Dashboard } from "./pages/dashboardPage";
import { MyASBA } from "./pages/myASBAPage";
import { companyy } from "./pages/companyName";

const landingPage = new LandingPage();
const dashboardPage = new Dashboard();
const myASBAPage = new MyASBA();

describe("Apply IPO", () => {
  const applyingCompany = companyy;

  it("Apply IPO Successfully", () => {
    cy.fixture("personal.json").then((data) => {
      landingPage.navigateToSite();
      data.forEach((userData) => {
        landingPage.loginToSite(
          userData.dp_name,
          userData.username,
          userData.password
        );
        cy.wait(1200)

        dashboardPage.navigateToMyASBA();
        myASBAPage.selectCompany(applyingCompany);
        myASBAPage.fillForm(userData.needed_kitta, userData.crn, userData.tpin);
        cy.wait(1000);
        myASBAPage.logOut();
      });

    });
  });
});
