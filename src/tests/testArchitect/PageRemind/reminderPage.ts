import { TestCase, TestModule, gondola } from "@logigear/gondola";
import homeGondolaPage from "../../../pages/gondola_test_site/HomeGondola";
import { datatest } from "../../../data/Gondola/datatest";
import remindPage from "../../../pages/testarchitect_site/Active account/remindPage";
import resendEmailPage from "../../../pages/testarchitect_site/Active account/resendEmailPage";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../pages/testarchitect_site/Login/loginPage";
import { Account } from "../../../data/Gondola/Account";
import signInPage from "../../../pages/testarchitect_site/Login/signInPage";
import thankyouPage from "../../../pages/testarchitect_site/thankyouPage/thankyouPage";
TestModule("Reminder Page after login without active account");

/**
* Testcase 01 : Verify GUI Reminder Page after login without active account
*
* 1. Navigate to 'https://stage1.testarchitect.com/'
* 2. Register new account
* 3. Click on Active button on notification bar
* 4. Verify GUI Reminder page
*/
TestCase("Testcase 01: Verify GUI Reminder Page after login without active account", async () => {
    let account: Account = await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
    await thankyouPage.verifyNotificationBar();

    await thankyouPage.openLink(thankyouPage.btActiveNotify);
    await remindPage.checkGUI(datatest.textContent);
    await remindPage.openPage(remindPage.lnkHere);
    await resendEmailPage.checkGUI();
});
/**
* Testcase 02 : Verify The maximum number of clicks on the button “Re-Send” is 3 times per day
*
* 1. Navigate to 'https://stage1.testarchitect.com/'
* 2. Register new account
* 3. Click on Active button on notification bar
* 4. click "here" link
* 5. Check maximum number for enter email and clicks on the button “Re-Send” is 3 times per day
*/
TestCase("Testcase 02: Verify maximum number of clicks on the button Re-Send is 3 times per day", async () => {
    let account: Account = await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.openLink(thankyouPage.btActiveNotify);
    await remindPage.openPage(remindPage.lnkHere);
    await resendEmailPage.checkMaximumNumberResendActive();
});
