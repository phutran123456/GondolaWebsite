import { TestCase, TestModule, gondola } from "gondolajs";
import HomeGondola from "../pages/gondola_test_site/HomeGondola";
import Login from "../pages/gondola_test_site/login/loginPage";
import { datatest }  from "../data/datatest";
import thankyouPage from "../pages/gondola_test_site/newWelcomePage/thankyouPage";
import reminderPage from "../pages/gondola_test_site/Active account/remindPage";
import resendEmailPage from "../pages/gondola_test_site/Active account/resendEmailPage";

TestModule("Reminder Page after login without active account");
/**
* Testcase 01 : Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account 
* 3. Click on Active button on notification bar
* 4. Verify GUI Reminder page
*/
TestCase("Testcase 01: Check GUI Reminder Page after login without active account", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_inactive,datatest.password_inactive);
    await thankyouPage.openLink(thankyouPage.btActiveNotify);
    await reminderPage.checkGUI(datatest.textContent);
    await reminderPage.openPage(reminderPage.lnkHere);
    await resendEmailPage.checkGUI();


});
/**
* Testcase 02 : Check The maximum number of clicks on the button “Re-Send” is 3 times per day
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account 
* 3. click "here" link
* 4. Check maximum number of clicks on the button “Re-Send” is 3 times per day
*/
TestCase("Testcase 02: Check maximum number of clicks on the button “Re-Send” is 3 times per day", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_inactive,datatest.password_inactive);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.openLink(thankyouPage.btActiveNotify);
    
    await reminderPage.openPage(reminderPage.lnkHere);
    await resendEmailPage.checkMaximumNumberResendActive();
    
    
});