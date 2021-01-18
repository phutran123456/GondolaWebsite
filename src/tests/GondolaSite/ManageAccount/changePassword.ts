import { TestCase, TestModule, gondola } from "@logigear/gondola";
import homeGondolaPage from "../../../pages/gondola_test_site/HomeGondola";
import loginPage from "../../../pages/gondola_test_site/login/loginPage";
import { datatest } from "../../../data/Gondola/datatest";
import thankyouPage from "../../../pages/gondola_test_site/thankyouPage/thankyouPage";
import manageMySubscriptionsPage from "../../../pages/gondola_test_site/thankyouPage/manageMySubscriptionsPAge";
import welcomePage from "../../../pages/gondola_test_site/thankyouPage/welcomePage";
import changePasswordPage from "../../../pages/gondola_test_site/thankyouPage/changePasswordPage";
import tempMailPage from "../../../pages/gondola_test_site/templateEmail/tempMailPage";
import { Account } from "../../../data/Gondola/Account";
import registerPage from "../../../pages/gondola_test_site/register/registerPage";

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
    await welcomePage.checkMenuItemExistonAccount(datatest.menuChangePassword);
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
TestCase("Testcase 02: Verify error message is displayed with change only number value password", async () => {
    
    let acc:Account= await registerPage.getRandomaccount();
    //await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.checkGUI();
    //await thankyouPage.checkUsernameonHeader(acc.firstName+acc.lastname);
    //await gondola.closeCurrentTab();
    //await tempMailPage.openLink(tempMailPage.emailContentGondola);
    //await tempMailPage.openLink(tempMailPage.activeLink);
    //await welcomePage.checkDownloadPage();
    //await welcomePage.checkMenuItemExistonAccount(datatest.menuChangePassword);
    await gondola.moveMouse(thankyouPage.txtAccount, {x:8, y:5});
    await thankyouPage.openLink(thankyouPage.lnkChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordNumber,changePasswordPage.labelError,datatest.errorMessagePassword);
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
    await welcomePage.checkMenuItemExistonAccount(datatest.menuChangePassword);
    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordShort,changePasswordPage.labelError,datatest.errorMessageShortPassword);
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
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.checkMenuItemExistonAccount(datatest.menuChangePassword);
    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordString,changePasswordPage.labelError,datatest.errorMessagePassword);
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
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.checkMenuItemExistonAccount(datatest.menuChangePassword);
    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordSpecial,changePasswordPage.labelError,datatest.errorMessagePassword);
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
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.checkMenuItemExistonAccount(datatest.menuChangePassword);
    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordValid,changePasswordPage.errormessage,datatest.errorMessageSamePassword);
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
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.checkMenuItemExistonAccount(datatest.menuChangePassword);
    await welcomePage.openLink(welcomePage.lnkManageChangePassword);
    await changePasswordPage.changeInvalidPassWord(datatest.passwordSpaceKey,changePasswordPage.labelError,datatest.errorMessagePassword);
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
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.checkGUI();
    //await thankyouPage.checkUsernameonHeader(acc.firstName+" "+acc.lastname);
    //await gondola.closeCurrentTab();
    //await tempMailPage.openLink(tempMailPage.emailContentGondola);
    //await tempMailPage.openLink(tempMailPage.activeLink);
    //await welcomePage.checkDownloadPage();
    //await welcomePage.checkMenuItemExistonAccount(datatest.menuChangePassword);
    await gondola.moveMouse(thankyouPage.txtAccount, {x:8, y:5});
    await thankyouPage.openLink(thankyouPage.lnkChangePassword);
    await changePasswordPage.changeValidPassWord(datatest.passwordValidChanges);
});