import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../pages/gondola_test_site/HomeGondola";
import thankyouPage from "../pages/gondola_test_site/thankyouPage";
import registerPage from "../pages/gondola_test_site/registerPage";
import downloadPage from "../pages/gondola_test_site/downloadPage";
import { datatest } from "../data/datatest";
import understandingGondolaPage from "../pages/gondola_test_site/understandingGondolaPage";
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
    await thankyouPage.navigateTo();
  //  await homeGondolaPage.signup();
  //  await registerPage.infoUser(datatest.firstname, datatest.lastname, datatest.username_nonactive, datatest.password_nonactive, datatest.password_nonactive);
  //  await registerPage.onelaststep(datatest.titlename, datatest.company, datatest.country, datatest.state,datatest.phone);
    await thankyouPage.checkGUI();
    await thankyouPage.checkUsernameonHeader();

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