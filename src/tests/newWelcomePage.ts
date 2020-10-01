import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../pages/gondola_test_site/HomeGondola";
import thankyouPage from "../pages/gondola_test_site/newWelcomePage/thankyouPage";
import registerPage from "../pages/gondola_test_site/register/registerPage";
import downloadPage from "../pages/gondola_test_site/newWelcomePage/downloadPage";
import { datatest } from "../data/datatest";
import { Account } from "../data/Account";
import understandingGondolaPage from "../pages/gondola_test_site/newWelcomePage/understandingGondolaPage";

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
  await thankyouPage.navigateTo();
  await homeGondolaPage.signup();
  await registerPage.InputInfoUser(acc);
  await thankyouPage.checkGUI();
  await thankyouPage.checkUsernameonHeader(acc.firstName+" "+acc.lastname);

});
/**
* Testcase 02: Verify open links on thank you page
*
* 1. Navigate to gondolatest.com
* 2. Login inactive account
* 3. Open link download
* 4. Open link Understanding Gondola page
*
*/
TestCase("Testcase 02: Verify open links on thank you page ", async () => {
  await thankyouPage.navigateTo();
  await thankyouPage.openDownloadPage();
  await gondola.switchBrowserTab("next");
  await downloadPage.checkDownloadPage();
  await gondola.closeCurrentTab();
  await thankyouPage.openLink(thankyouPage.lnkUnderstandingGondola);
  await understandingGondolaPage.checkUnderstandingGondolaPage();
});


