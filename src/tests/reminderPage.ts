import { TestCase, TestModule, gondola } from "gondolajs";
import HomeGondola from "../pages/gondola_test_site/HomeGondola";
import Login from "../pages/gondola_test_site/loginPage";
import { datatest }  from "../data/datatest";
import thankyouPage from "../pages/gondola_test_site/thankyouPage";
import reminderPage from "../pages/gondola_test_site/remindPage";
TestModule("Reminder Page after login without active account");
/**
* Testcase 01 : Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login account without active
* 3. Verify GUI Reminder page
*/
TestCase("Testcase 01: Check GUI Reminder Page after login without active account", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
    await gondola.checkControlExist(thankyouPage.btActiveNotify);
    await thankyouPage.openLink(thankyouPage.btActiveNotify);
    await reminderPage.checkGUI(datatest.textContent);
});
/**
* Testcase 02 : Check The maximum number of clicks on the button “Re-Send” is 3 times per day
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login account without active
* 3. click 
*/
//TestCase("Testcase 02: Check maximum number of clicks on the button “Re-Send” is 3 times per day", async () => {
//    await thankyouPage.navigateTo();
//    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
//    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
    
//});