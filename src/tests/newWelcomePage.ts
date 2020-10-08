import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../pages/gondola_test_site/HomeGondola";
import thankyouPage from "../pages/gondola_test_site/newWelcomePage/thankyouPage";
import registerPage from "../pages/gondola_test_site/register/registerPage";
import downloadPage from "../pages/gondola_test_site/newWelcomePage/downloadPage";
import { datatest } from "../data/datatest";
import { Account } from "../data/Account";
import understandingGondolaPage from "../pages/gondola_test_site/newWelcomePage/understandingGondolaPage";
import  loginPage  from "../pages/gondola_test_site/login/loginPage";
import remindPage from "../pages/gondola_test_site/Active account/remindPage";
import tempMailPage from "../pages/gondola_test_site/templateEmail/tempMailPage";
import installPage from "../pages/gondola_test_site/newWelcomePage/installPage";

TestModule("New welcome page");
/**
* Testcase 01: Check Thank you displayed correctly
*
* 1. Navigate to gondolatest.com
* 2. Register account
* 3. check GUI Thank You Page
* 4. Open install Gondola page
*
*/
 TestCase("Testcase 01: Check GUI thank you page displayed correctly", async () => {
  
   let acc:Account = await registerPage.getRandomaccount();
     await homeGondolaPage.navigateTo();
     await homeGondolaPage.signup();
     await registerPage.InputInfoUser(acc);
     await thankyouPage.verifyNotificationBar();
     await thankyouPage.checkGUI();
     await thankyouPage.checkUsernameonHeader(acc.firstName+" "+acc.lastname);
     await gondola.report(acc.firstName+" "+acc.lastname+": "+acc.emailaddress);
 
 });
/**
* Testcase 02: Verify open links on thank you page
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
  await loginPage.login(datatest.username_active,datatest.password_active);
  //await thankyouPage.verifyNotificationBarnonExisted();
  await downloadPage.openLink(downloadPage.btFreeDownload);
  await gondola.switchBrowserTab("next");
  await installPage.checkInstallPage();
  await gondola.closeCurrentTab();
 // await thankyouPage.openLink(thankyouPage.lnkUnderstandingGondola);
  //understandingGondolaPage.checkUnderstandingGondolaPage();
});
/**
* Testcase 03: Verify open links on thank you page
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
  await loginPage.login(datatest.username_inactive,datatest.password_inactive);
  await thankyouPage.verifyNotificationBar();
  await thankyouPage.openLink(thankyouPage.lnkDownload);
  await remindPage.checkGUI(datatest.textContent);
});

/**
* Testcase 04: Check Thank you displayed correctly
*
* 1. Navigate to gondolatest.com
* 2. Register new account
* 3.
*
*/
TestCase("Testcase 04: Check welcome page displayed correctly", async () => {
    
    let acc:Account = await tempMailPage.getRandomEmail();
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
    await downloadPage.checkDownloadPage();
    //await thankyouPage.verifyNotificationBarnonExisted();

});