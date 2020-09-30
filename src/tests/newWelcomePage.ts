import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../pages/gondola_test_site/HomeGondola";
import thankyouPage from "../pages/gondola_test_site/newWelcomePage/thankyouPage";
import registerPage from "../pages/gondola_test_site/registerPage";
import downloadPage from "../pages/gondola_test_site/newWelcomePage/downloadPage";
import { datatest } from "../data/datatest";
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
  let count = await Math.floor(Math.random() * 10000) + 1;
  let emailaddress = await datatest.email + count + "@temp.com";
  let firstName = datatest.firstname + count;
  await gondola.report("firstname: " + firstName);
  await gondola.report("email: " + emailaddress);
  await thankyouPage.navigateTo();
  await homeGondolaPage.signup();
  await registerPage.InputInfoUser(firstName, datatest.lastname, emailaddress, datatest.password, datatest.password);
  await registerPage.InputOneLastStep(datatest.titlename, datatest.company, datatest.country, datatest.state, datatest.phone);
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

TestCase("Testcase 03: random thank you page ", async () => {
  let count = await Math.floor(Math.random() * 10000) + 1;
  let emailaddress = await datatest.email + count + "@temp.com";
  let firstname = datatest.firstname + count;
  await gondola.report("firstname: " + firstname);
  await gondola.report("email: " + emailaddress);

});
