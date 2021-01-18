import { TestCase, TestModule, gondola } from "@logigear/gondola";
import homeGondolaPage from "../../../pages/gondola_test_site/HomeGondola";
import loginPage from "../../../pages/gondola_test_site/login/loginPage";
import { phone } from "../../../data/Gondola/phone";
import { datatest } from "../../../data/Gondola/datatest";
import thankyouPage from "../../../pages/gondola_test_site/thankyouPage/thankyouPage";
import manageMyAccountPage from "../../../pages/gondola_test_site/thankyouPage/manageMyAccountPage";
import welcomePage from "../../../pages/gondola_test_site/thankyouPage/welcomePage";
import { Account } from "../../../data/Gondola/Account";
import registerPage from "../../../pages/gondola_test_site/register/registerPage";
TestModule("Verify manage format phone number on Manage My Account page ");
/**
* Testcase 01 : Verify to display error message on Manage My Account Page with edit special character on number phone
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 4. Verify error message with input special character on number phone and Press Enter
*/
TestCase("Testcase 01: Verify to display error message on Manage My Account Page with edit special character on number phone", async () => {
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.checkMenuItemExistonAccount(datatest.menuManageMyProfile);
    await welcomePage.openLink(welcomePage.lnkManageMyProfile);
    await manageMyAccountPage.updateNumberPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 02 : Verify to display error message on My Manage Account Page with letters on number phone
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 4. Verify error message with input number phone with letters and Press Enter 
*/
TestCase("Testcase 02: Verify to display error message on My Manage Account Page with letters on number phone", async () => {
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.checkMenuItemExistonAccount(datatest.menuManageMyProfile);
    await welcomePage.openLink(welcomePage.lnkManageMyProfile);
    await manageMyAccountPage.updateNumberPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 03 : Verify to display error message on My manage Account Page with invalid format on number phone
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 4. Verify error message with input number phone with invalid format and Press Enter  
*/
TestCase("Testcase 03: Verify to display error message on My manage Account Page with invalid format on number phone", async () => {
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.checkMenuItemExistonAccount(datatest.menuManageMyProfile);
    await welcomePage.openLink(welcomePage.lnkManageMyProfile);
    await manageMyAccountPage.updateNumberPhone(phone.PhoneInvalid,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 04 : Verify to display error message on My manage Account Page with <10 characters on number phone
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 4. Verify error message with input number phone with < 10 characters and Press Enter 
*/
TestCase("Testcase 04: Verify to display error message on My manage Account Page with <10 characters on number phone", async () => {
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.checkMenuItemExistonAccount(datatest.menuManageMyProfile);
    await welcomePage.openLink(welcomePage.lnkManageMyProfile);
    await manageMyAccountPage.updateNumberPhone(phone.PhonewithShortNumber,phone.errorMessageShortNumberPhone);
});
/**
* Testcase 05 : Verify update account successful with input mix of leading ‘+’ all characters should be numeric on phone field
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Register new account
* 3. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 4. input mix of leading ‘+’ all characters should be numeric on phone field  
* 5. Click Save Changes button
* 6. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 7. Check new number phone
*/
TestCase("Testcase 05: Verify update account successful with input mix of leading ‘+’ all characters should be numeric on phone field", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.checkGUI();
    await thankyouPage.checkMenuItemExistonAccount(datatest.menuManageMyProfile);
    await thankyouPage.openLink(thankyouPage.lnkManageMyProfile);
    await manageMyAccountPage.updateNumberPhoneSuccess(phone.PhoneNumberValid);
    await gondola.wait(10);
    await thankyouPage.checkMenuItemExistonAccount(datatest.menuManageMyProfile);
    await thankyouPage.openLink(thankyouPage.lnkManageMyProfile);
    await manageMyAccountPage.checkNumberPhoneSuccess(phone.NumberValid);
});