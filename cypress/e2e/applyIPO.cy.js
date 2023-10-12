///<reference types = 'cypress' />

import { LandingPage } from "./pages/landingPage";
import { creds } from "./credentials";
import { Dashboard } from "./pages/dashboardPage";
import { MyASBA } from "./pages/myASBAPage";

const landingPage = new LandingPage();
const dashboardPage = new Dashboard();
const myASBAPage = new MyASBA();

describe("Apply IPO", () => {
  // const { dpName, username, pass, crn, kitta, pin, companyName} = creds ;
  const companyName = 'MIRMIRE'
  it("Apply IPO Successfully", () => {
    cy.fixture("all.json").then((data) => {
      landingPage.navigateToSite();
      // cy.wait(5000);

      data.forEach((userData) => {
        landingPage.loginToSite(
          userData.dp_name,
          userData.username,
          userData.password
        );
        cy.wait(1200)
        //Uncomment below code while applying IPO

        dashboardPage.navigateToMyASBA();
        myASBAPage.selectCompany(companyName);
        myASBAPage.fillForm(userData.needed_kitta, userData.crn, userData.tpin);
        cy.wait(1000);
        myASBAPage.logOut();
      });

    });
  });
});
