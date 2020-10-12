import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../pages/gondola_test_site/HomeGondola";
import loginPage from "../pages/gondola_test_site/login/loginPage";
import { datatest } from "../data/datatest";
import thankyouPage from "../pages/gondola_test_site/thankyouPage/thankyouPage";
import remindPage from "../pages/gondola_test_site/Active account/remindPage";
import resendEmailPage from "../pages/gondola_test_site/Active account/resendEmailPage";
import registerPage from "../pages/gondola_test_site/register/registerPage";
import welcomePage from "../pages/gondola_test_site/thankyouPage/welcomePage";
import tempMailPage from "../pages/gondola_test_site/templateEmail/tempMailPage";
import { Account } from "../data/Account";
TestModule("Reminder Page after login without active account");

/**
* Testcase 01 : Verify GUI Reminder Page after login without active account
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click on Active button on notification bar
* 4. Verify GUI Reminder page
*/
TestCase("Testcase 01: Verify GUI Reminder Page after login without active account", async () => {
    let acc:Account= await tempMailPage.getRandomEmail();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await tempMailPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.openLink(thankyouPage.btActiveNotify);
    await remindPage.checkGUI(datatest.textContent);
    await remindPage.openPage(remindPage.lnkHere);
    await resendEmailPage.checkGUI();
});
/**
* Testcase 02 : Verify The maximum number of clicks on the button “Re-Send” is 3 times per day
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3.Click on Active button on notification bar
* 4. click "here" link
* 5. Check maximum number for enter email and clicks on the button “Re-Send” is 3 times per day
*/
TestCase("Testcase 02: Verify maximum number of clicks on the button Re-Send is 3 times per day", async () => {
    let acc:Account= await tempMailPage.getRandomEmail();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await tempMailPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.openLink(thankyouPage.btActiveNotify);
    await remindPage.openPage(remindPage.lnkHere);
    await resendEmailPage.checkMaximumNumberResendActive();
});
