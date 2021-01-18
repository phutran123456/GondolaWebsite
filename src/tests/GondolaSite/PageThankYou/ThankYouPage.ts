import { TestCase, TestModule, gondola } from "@logigear/gondola";
import homeGondolaPage from "../../../pages/gondola_test_site/HomeGondola";
import thankyouPage from "../../../pages/gondola_test_site/thankyouPage/thankyouPage";
import registerPage from "../../../pages/gondola_test_site/register/registerPage";
import welcomePage from "../../../pages/gondola_test_site/thankyouPage/welcomePage";
import { datatest } from "../../../data/Gondola/datatest";
import { Account } from "../../../data/Gondola/Account";
import understandingGondolaPage from "../../../pages/gondola_test_site/thankyouPage/understandingGondolaPage";
import loginPage from "../../../pages/gondola_test_site/login/loginPage";
import remindPage from "../../../pages/gondola_test_site/Active account/remindPage";
import tempMailPage from "../../../pages/gondola_test_site/templateEmail/tempMailPage";
import installPage from "../../../pages/gondola_test_site/thankyouPage/installPage";
import contactSupportPage from "../../../pages/gondola_test_site/thankyouPage/contactSupportPage";
import contactSalePage  from "../../../pages/gondola_test_site/thankyouPage/contactSalePage";
import downloadPage  from "../../../pages/gondola_test_site/Download/downloadPage";

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
    await thankyouPage.checkUsernameonHeader(acc.firstName+acc.lastname);
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
* Testcase 02: Verify Install Gondola page displayed correctly with active account
*
* 1. Navigate to gondolatest.com
* 2. Register new account
* 3. Active account
* 4. check welcome page with download button
* 5. click button Free Download
* 6. check Install Gondola page is dislayed
*/
TestCase("Testcase 02: Verify Install Gondola page displayed correctly with active account", async () => {
  
    // let acc:Account= await tempMailPage.getRandomEmail();
   //  await gondola.openNewTab();
   //  await homeGondolaPage.navigateTo();
   //  await homeGondolaPage.signup();
   //  await registerPage.InputInfoUser(acc);
   //  await thankyouPage.verifyNotificationBar();
   //  await thankyouPage.checkGUI();
   //  await thankyouPage.checkUsernameonHeader(acc.firstName+" "+acc.lastname);
   //  await gondola.report(acc.firstName+" "+acc.lastname+": "+acc.emailaddress);
   //  await gondola.closeCurrentTab();
   //  await tempMailPage.openLink(tempMailPage.emailContentGondola);
   //  await tempMailPage.openLink(tempMailPage.activeLink);
   //await welcomePage.checkDownloadPage();
   //await welcomePage.openLink(welcomePage.btFreeDownload);
   //await gondola.switchBrowserTab("next");
   // await installPage.checkInstallPage();
   // await gondola.closeCurrentTab();

    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active,datatest.password_active);
    await gondola.waitForClickable(welcomePage.Account, 30);
    await gondola.moveMouse(welcomePage.Account, {x:8, y:5});
    await welcomePage.openLink(welcomePage.lnkFreeDownload);
    //await installPage.checkInstallPage();
    await downloadPage.checkContent();
   // await gondola.closeCurrentTab();

});

/**
* Testcase 03: Verify login page displayed when click Download on thank you page with no login
*
* 1. Navigate link home page
* 2. Register new account
* 3. click Download button
* 4. check remind page displayed
*/
TestCase("Testcase 03: Verify remind displayed when click Download on thank you page with inactive account", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    //await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.checkGUI();
    await thankyouPage.openLink(thankyouPage.lnkDownload);
    await downloadPage.checkContent();
    //await remindPage.checkGUI(datatest.textContent);
});

