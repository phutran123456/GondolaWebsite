import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../../pages/gondola_test_site/HomeGondola";
import loginPage from "../../pages/gondola_test_site/login/loginPage";
import { datatest } from "../../data/datatest";
import thankyouPage from "../../pages/gondola_test_site/thankyouPage/thankyouPage";
import manageMySubscriptionsPage from "../../pages/gondola_test_site/thankyouPage/manageMySubscriptionsPAge";
import welcomePage from "../../pages/gondola_test_site/thankyouPage/welcomePage";
import changePasswordPage from "../../pages/gondola_test_site/thankyouPage/changePasswordPage";
import tempMailPage from "../../pages/gondola_test_site/templateEmail/tempMailPage";
import { Account } from "../../data/Account";
import registerPage from "../../pages/gondola_test_site/register/registerPage";

TestModule("Verify Change Password page ");
/**
* Testcase 01 : Verify error message is displayed with change empty value password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Click on menu "Change Password"
* 4. Verify error message with change new empty password
*/
TestCase("Testcase 01: Verify error message is displayed with change empty value password", async () => {
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordEmpty,changePasswordPage.labelError,datatest.errorMessageEmptyPassword);
});
/**
* Testcase 02 : Verify error message is displayed with change only number for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. register new account
* 3. Click on menu "Change Password"
* 4. Verify error message with change only number for new password
*/
TestCase("Testcase 02: Verify error message is displayed with change empty value password", async () => {
    
    let acc:Account= await tempMailPage.getRandomEmail();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.checkGUI();
    await thankyouPage.checkUsernameonHeader(acc.firstName+" "+acc.lastname);
    await gondola.closeCurrentTab();
    await tempMailPage.openLink(tempMailPage.emailContentGondola);
    await tempMailPage.openLink(tempMailPage.activeLink);
    await welcomePage.checkDownloadPage();

    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordNumber,changePasswordPage.errormessage,datatest.errorMessagePassword);
});
/**
* Testcase 03 : Verify error message is displayed with change short string for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. login inactivate account
* 3. Click on menu "Change Password"
* 4. Verify error message with change short string for new password
*/
TestCase("Testcase 03: Verify error message is displayed with change short string for new password", async () => {
    
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_inactive, datatest.password_inactive);
    await thankyouPage.closeNotificationBar();
    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordShort,changePasswordPage.errormessage,datatest.errorMessageShortPassword);
});
/**
* Testcase 04 : Verify error message is displayed with change only string value for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Click on menu "Change Password"
* 4. Verify error message with change only string value for new password
*/
TestCase("Testcase 04: Verify error message is displayed with change only string value for new password", async () => {
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordString,changePasswordPage.errormessage,datatest.errorMessagePassword);
});
/**
* Testcase 05 : Verify error message is displayed with change only special string value for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Click on menu "Change Password"
* 4. Verify error message with change only special string value for new password
*/
TestCase("Testcase 05: Verify error message is displayed with change only string value for new password", async () => {
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordSpecial,changePasswordPage.errormessage,datatest.errorMessagePassword);
});
/**
* Testcase 06 : Verify error message is displayed with same value for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Click on menu "Change Password"
* 4. Verify error message with change same value for new password
*/
TestCase("Testcase 06: Verify error message is displayed with change only string value for new password", async () => {
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordValid,changePasswordPage.errormessage,datatest.errorMessageSamePassword);
});
/**
* Testcase 07 : Verify updated successfully with valid value for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Click on menu "Change Password"
* 4. Verify updated successfully with valid value for new password
*/
TestCase("Testcase 07: Verify updated successfully with valid value for new password", async () => {
    let acc:Account= await tempMailPage.getRandomEmail();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.checkGUI();
    await thankyouPage.checkUsernameonHeader(acc.firstName+" "+acc.lastname);
    await gondola.closeCurrentTab();
    await tempMailPage.openLink(tempMailPage.emailContentGondola);
    await tempMailPage.openLink(tempMailPage.activeLink);
    await welcomePage.checkDownloadPage();
    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeValidPassWord(datatest.passwordValidChanges);
});