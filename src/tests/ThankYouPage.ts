import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../pages/gondola_test_site/HomeGondola";
import thankyouPage from "../pages/gondola_test_site/thankyouPage/thankyouPage";
import registerPage from "../pages/gondola_test_site/register/registerPage";
import welcomePage from "../pages/gondola_test_site/thankyouPage/welcomePage";
import { datatest } from "../data/datatest";
import { Account } from "../data/Account";
import understandingGondolaPage from "../pages/gondola_test_site/thankyouPage/understandingGondolaPage";
import loginPage from "../pages/gondola_test_site/login/loginPage";
import remindPage from "../pages/gondola_test_site/Active account/remindPage";
import tempMailPage from "../pages/gondola_test_site/templateEmail/tempMailPage";
import installPage from "../pages/gondola_test_site/thankyouPage/installPage";
import contactSupportPage from "../pages/gondola_test_site/thankyouPage/contactSupportPage";
import contactSalePage  from "../pages/gondola_test_site/thankyouPage/contactSalePage";

TestModule("Thank you page");

/**
* Testcase 01: Verify GUI thank you page displayed correctly
*
* 1. Navigate to gondolatest.com
* 2. Register account
* 3. check GUI Thank You Page
* 4. Open contact Support Page
* 5. Open understanding Gondola page
* 6. Open contact Sale Page
*/
TestCase("Testcase 01: Verify GUI thank you page displayed correctly", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.checkGUI();
    await thankyouPage.checkUsernameonHeader(acc.firstName+" "+acc.lastname);
    await gondola.report(acc.firstName+" "+acc.lastname+": "+acc.emailaddress);
    await thankyouPage.openLink(thankyouPage.lnkContactSupport);
    await gondola.switchBrowserTab("next");
    await contactSupportPage.GUISubmitTicket();
    await gondola.closeCurrentTab();
    await thankyouPage.openLink(thankyouPage.lnkUnderstandingGondola);
    await understandingGondolaPage.checkUnderstandingGondolaPage();
    await gondola.executeScript(function () {window.history.go(-1);});
   await thankyouPage.openLink(thankyouPage.lnkContactUs);
   await contactSalePage.contentContactSalePage();
   
});
/**
* Testcase 02: Verify open links download on thank you page with active account
*
* 1. Navigate to gondolatest.com
* 2. Login active account
* 3. Open button download
* 4. Open Install Gondola page
*
*/
TestCase("Testcase 02: Verify open links download on thank you page with active account ", async () => {
    await homeGondolaPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.checkDownloadPage();
    await welcomePage.openLink(welcomePage.btFreeDownload);
    await gondola.switchBrowserTab("next");
    await installPage.checkInstallPage();
    await gondola.closeCurrentTab();
});
/**
* Testcase 03: Verify open links download on thank you page with inactive account
*
* 1. Navigate to gondolatest.com
* 2. Login inactive account
* 3. Open link download
* 4. remind Gondola page
*
*/
TestCase("Testcase 03: Verify open links download on thank you page with inactive account ", async () => {
    await homeGondolaPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await loginPage.login(datatest.username_inactive, datatest.password_inactive);
    await welcomePage.checkDownloadPage();
    await welcomePage.openLink(welcomePage.btFreeDownload);
    await remindPage.checkGUI(datatest.textContent);
});
/**
* Testcase 04: Verify welcome page displayed correctly
*
* 1. Navigate to gondolatest.com
* 2. Register new account
* 3. Active account
* 4. check welcome page with download button
*/
TestCase("Testcase 04: Verify welcome page displayed correctly", async () => {
    let acc:Account= await tempMailPage.getRandomEmail();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await tempMailPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.checkGUI();
    await thankyouPage.checkUsernameonHeader(acc.firstName+" "+acc.lastname);
    await gondola.report(acc.firstName+" "+acc.lastname+": "+acc.emailaddress);
    await gondola.switchBrowserTab("previous");
    await tempMailPage.openLink(tempMailPage.emailContentGondola);
    await tempMailPage.openLink(tempMailPage.activeLink);
    await welcomePage.checkDownloadPage();
});
/**
* Testcase 05: Verify login page displayed when click Download on thank you page with no login
*
* 1. Navigate link Thank You Page
* 2. click Download button
* 3. check login page displayed
*
*/
TestCase("Testcase 05: Verify login page displayed when click Download on thank you page with no login", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkDownload);
    await loginPage.checkGUI();
});
