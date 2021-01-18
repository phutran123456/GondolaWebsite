import { KeyCode, TestCase, TestModule, gondola } from "@logigear/gondola";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../pages/testarchitect_site/Login/loginPage";
import { datatestTAsite } from "../../../data/TestArchitect/datatestTAsite";
import { email } from "../../../data/TestArchitect/email";
import { password } from "../../../data/TestArchitect/password";
import forgetPasswordPage from "../../../pages/testarchitect_site/Login/ForgetPasswordPage";
import signInPage from "../../../pages/testarchitect_site/Login/signInPage";

TestModule("Manage field on Login page");

/**
* Testcase 01: Verify GUI login on TA site
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click login button
*/
TestCase("Testcase 01: Verify GUI login on TA site", async () => {
    await homeTA.navigateTo();
await homeTA.clickorOpenLink(homeTA.menuLogin);
await login.checkGUI();
await login.clickorOpenLink(login.lnkForgotPassword);
    await forgetPasswordPage.checkGUI();
    await gondola.executeScript(function () {window.history.go(-1);});
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.checkGUI();
});
/**
* Testcase 02: Verify display error message with empty required fields
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click login button on header
* 3. click button Login
* 4. Verify error message with empty required fields
*/
TestCase("Testcase 02: Verify display error message with empty required fields ", async () => {
    await homeTA.navigateTo();
await homeTA.clickorOpenLink(homeTA.menuLogin);
await login.clickorOpenLink(login.btLogin);
await login.checkErrorMessage(login.txtErrorEmail,datatestTAsite.errorMessageEmpty);
await login.checkErrorMessage(login.txtErrorPassword,datatestTAsite.errorMessageEmpty);
});
/**
* Testcase 03: Verify display error message with no match email/password
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click login button on header
* 3. Input valid with no match email/password
* 4. Click login button
* 5. Verify error message with no match email/password
*/
TestCase("Testcase 03: Verify display error message with no match email/password ", async () => {
    await homeTA.navigateTo();
await homeTA.clickorOpenLink(homeTA.menuLogin);
await login.login(email.validEmail,password.passwordNumber);
await login.checkErrorMessage(login.txterrormessage,email.flashErrorMessage);
});
/**
* Testcase 04: Verify display error message with invalid email format
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click login button on header
* 3. Input invalid email format
* 4. Verify error message with invalid format email
*/
TestCase("Testcase 04: Verify display error message with invalid format email ", async () => {
    await homeTA.navigateTo();
await homeTA.clickorOpenLink(homeTA.menuLogin);
await login.checkInvalidEmailFormat(email.InvalidSign,email.errorMessageInvalidEmail);
    await gondola.enter(login.txtEmail, email.validEmail);
    await login.checkInvalidEmailFormat(email.invalidDomain,email.errorMessageInvalidEmail);
    await gondola.enter(login.txtEmail, email.validEmail);
    await login.checkInvalidEmailFormat(email.invalidName,email.errorMessageInvalidEmail);
    await gondola.enter(login.txtEmail, email.validEmail);
    await login.checkInvalidEmailFormat(email.invalidEmail,email.errorMessageInvalidEmail);
    await gondola.enter(login.txtEmail, email.validEmail);
    await login.checkInvalidEmailFormat(email.invalidMissedSign,email.errorMessageInvalidEmail);
    await gondola.enter(login.txtEmail, email.validEmail);
    await login.checkInvalidEmailFormat(email.invalidMissedHost,email.errorMessageInvalidEmail);
    await gondola.enter(login.txtEmail, email.validEmail);
    await login.checkInvalidEmailFormat(email.spaceNameEmail,email.errorMessageInvalidEmail);
    await gondola.enter(login.txtEmail, email.validEmail);
    await login.checkInvalidEmailFormat(email.spaceDomainEmail,email.errorMessageInvalidEmail);
    await gondola.enter(login.txtEmail, email.validEmail);
});
/**
* Testcase 05: Verify login successful with match email/password
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Input valid with match email/password
* 3. Click login button
* 4. Welcome page is displayed
*/
TestCase("Testcase 05: Verify login successful with match email/password", async () => {
    await homeTA.navigateTo();
await homeTA.clickorOpenLink(homeTA.menuLogin);
await login.login(email.validEmail,password.passwordValid);
});
