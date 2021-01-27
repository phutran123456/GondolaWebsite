import { TestCase, TestModule, gondola } from "@logigear/gondola";
import { phone } from "../../../../data/TestArchitect/phone";
import { email } from "../../../../data/TestArchitect/email";
import { password } from "../../../../data/TestArchitect/password";
import { datatestTAsite } from "../../../../data/TestArchitect/datatestTAsite";
import homeTA from "../../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../../pages/testarchitect_site/Login/loginPage";
import signInPage from "../../../../pages/testarchitect_site/Login/signInPage";
import thankyouPage from "../../../../pages/testarchitect_site/thankyouPage/thankyouPage";
import manageMyAccountPage from "../../../../pages/testarchitect_site/thankyouPage/manageMyAccountPage";
import { Account } from "../../../../data/Gondola/Account";
import registerPage from "../../../../pages/gondola_test_site/register/registerPage";
TestModule("Verify manage format phone number on Manage My Account page ");
/**
* Testcase 01 : Verify to display error message on Manage My Account Page with edit special character on number phone
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Login active account
* 3. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 4. Verify error message with input special character on number phone and Press Enter
*/
TestCase("Testcase 01: Verify to display error message on Manage My Account Page with edit special character on number phone", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkManageProfile);
    
    await manageMyAccountPage.updateNumberPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 02 : Verify to display error message on My Manage Account Page with letters on number phone
*
* 1. Navigate to 'https://stage1.testarchitect.com/'
* 2. Login active account
* 3. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 4. Verify error message with input number phone with letters and Press Enter 
*/
TestCase("Testcase 02: Verify to display error message on My Manage Account Page with letters on number phone", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkManageProfile);
    await manageMyAccountPage.updateNumberPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 03 : Verify to display error message on My manage Account Page with invalid format on number phone
*
* 1. Navigate to 'https://stage1.testarchitect.com/'
* 2. Login active account
* 3. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 4. Verify error message with input number phone with invalid format and Press Enter  
*/
TestCase("Testcase 03: Verify to display error message on My manage Account Page with invalid format on number phone", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkManageProfile);
    await manageMyAccountPage.updateNumberPhone(phone.PhoneInvalid,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 04 : Verify to display error message on My manage Account Page with <10 characters on number phone
*
* 1. Navigate to 'https://stage1.testarchitect.com/'
* 2. Login active account
* 3. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 4. Verify error message with input number phone with < 10 characters and Press Enter 
*/
TestCase("Testcase 04: Verify to display error message on My manage Account Page with <10 characters on number phone", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkManageProfile);
    await manageMyAccountPage.updateNumberPhone(phone.PhonewithShortNumber,phone.errorMessageShortNumberPhone);
});
/**
* Testcase 05 : Verify update account successful with input mix of leading ‘+’ all characters should be numeric on phone field
*
* 1. Navigate to 'https://stage1.testarchitect.com/'
* 2. Register new account
* 3. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 4. input mix of leading ‘+’ all characters should be numeric on phone field  
* 5. Click Save Changes button
* 6. Open "My manage Account"  by select context menu item "My Manage Profile" on Account name
* 7. Check new number phone
*/
TestCase("Testcase 05: Verify update account successful with input mix of leading ‘+’ all characters should be numeric on phone field", async () => {
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
    await thankyouPage.openLink(thankyouPage.lnkManageProfile);
    await manageMyAccountPage.updateNumberPhoneSuccess(phone.NumberValid);
    await gondola.wait(5);
    await gondola.moveMouse(thankyouPage.lnkAccount, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.lnkManageProfile);
    await manageMyAccountPage.checkNumberPhoneSuccess(phone.NumberValid);
});