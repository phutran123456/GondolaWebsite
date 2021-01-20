import { KeyCode, TestCase, TestModule, gondola } from "@logigear/gondola";
import { Account } from "../../../data/Gondola/Account";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../pages/testarchitect_site/Login/loginPage";
import { datatestTAsite } from "../../../data/TestArchitect/datatestTAsite";
import { email } from "../../../data/TestArchitect/email";
import { password } from "../../../data/TestArchitect/password";
import signInPage from "../../../pages/testarchitect_site/Login/signInPage";
import changePasswordPage from "../../../pages/testarchitect_site/thankyouPage/changePasswordPage";
import registerPage from "./../../../pages/gondola_test_site/register/registerPage";
import homeGondolaPage from "./../../../pages/gondola_test_site/HomeGondola";
import thankyouPage from "./../../../pages/testarchitect_site/thankyouPage/thankyouPage";
import loginPage from "./../../../pages/gondola_test_site/login/loginPage";
import welcomePage from "./../../../pages/gondola_test_site/thankyouPage/welcomePage";
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
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkChangePassword);
    await changePasswordPage.changeInvalidPassWord(password.passwordEmpty, changePasswordPage.labelError, password.errorMessageEmptyPassword);
});
/**
* Testcase 02 : Verify error message is displayed with change only number for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. register new account
* 3. Click on menu "Change Password"
* 4. Verify error message with change only number for new password
*/
TestCase("Testcase 02: Verify error message is displayed with change only number value password", async () => {
    let account: Account = await registerPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
    // await thankyouPage.verifyNotificationBar();
    await gondola.moveMouse(thankyouPage.lnkAccount, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.lnkChangePassword);
    await changePasswordPage.changeInvalidPassWord(password.passwordNumber, changePasswordPage.labelError, password.errorMessagePassword);
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
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkChangePassword);
    await changePasswordPage.changeInvalidPassWord(password.passwordShort, changePasswordPage.labelError, password.errorMessageShortPassword);
});
/**
* Testcase 04 : Verify error message is displayed with change only letters value for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Click on menu "Change Password"
* 4. Verify error message with change only letter value for new password
*/
TestCase("Testcase 04: Verify error message is displayed with change only letters value for new password", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkChangePassword);
    await changePasswordPage.changeInvalidPassWord(password.passwordString, changePasswordPage.labelError, password.errorMessagePassword);
});
/**
* Testcase 05 : Verify error message is displayed with change only special string value for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Click on menu "Change Password"
* 4. Verify error message with change only special string value for new password
*/
TestCase("Testcase 05: Verify error message is displayed with change only special string for new password", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkChangePassword);
    await changePasswordPage.changeInvalidPassWord(password.passwordSpecial, changePasswordPage.labelError, password.errorMessagePassword);
});
/**
* Testcase 06 : Verify error message is displayed with same value password for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Click on menu "Change Password"
* 4. Verify error message with change same value for new password
*/
TestCase("Testcase 06: Verify error message is displayed with same value password for new password", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkChangePassword);
    await changePasswordPage.changeInvalidPassWord(password.passwordValid, changePasswordPage.errormessage, password.errorMessageSamePassword);
});
/**
* Testcase 07 : Verify error message is displayed with input spacekey in value for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Click on menu "Change Password"
* 4. Verify error message with space character in value for new password
*/
TestCase("Testcase 07: Verify error message is displayed with input spacekey in value for new password", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkChangePassword);
    await changePasswordPage.changeInvalidPassWord(password.passwordSpaceKey, changePasswordPage.labelError, password.errorMessagePassword);
});
/**
* Testcase 08 : Verify updated successfully with valid value for new password
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Register new account
* 3. Click on menu "Change Password"
* 4. Verify updated successfully with valid value for new password
*/
TestCase("Testcase 08: Verify updated successfully with valid value for new password", async () => {
    let account: Account = await registerPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
    // await thankyouPage.verifyNotificationBar();
    await gondola.moveMouse(thankyouPage.lnkAccount, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.lnkChangePassword);
    await changePasswordPage.changeValidPassWord(password.passwordValidChanges);
});
