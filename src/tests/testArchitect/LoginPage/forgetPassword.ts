import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../pages/testarchitect_site/Login/loginPage";
import { email } from "../../../data/TestArchitect/email";
import { password } from "../../../data/TestArchitect/password";
import forgetPasswordPage from "../../../pages/testarchitect_site/Login/ForgetPasswordPage";

TestModule("Manage field on Forget Password page");
/**
* Testcase 01: Verify GUI ForgetPassword page on TA site
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click login on header
* 3. Click link ForgetPassword 
*/
TestCase("Testcase 01: Verify GUI ForgetPassword on TA site", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkForgotPassword);
    await forgetPasswordPage.checkGUI();
    
});
/**
* Testcase 02: Verify display error message with empty required fields 
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click login on header
* 3. Click link ForgetPassword 
* 4. Click login button
* 5. Verify error message with empty required fields
*/
TestCase("Testcase 02: Verify display error message with empty required fields ", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkForgotPassword);
    await forgetPasswordPage.clickorOpenLink(forgetPasswordPage.btSubmit);
    await forgetPasswordPage.checkErrorMessage(forgetPasswordPage.txtErrorEmail,email.errorMessageEmptyEmail);
    
});
/**
* Testcase 03: Verify display error message with invalid email format
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click login on header
* 3. Click link ForgetPassword 
* 4. Input invalid email format
* 5. Verify error message with invalid format email
*/
TestCase("Testcase 03: Verify display error message with empty required fields ", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkForgotPassword);
    await forgetPasswordPage.checkInvalidEmailFormat(email.InvalidSign,email.errorMessageInvalidEmail);
    await gondola.enter(forgetPasswordPage.txtEmail,email.validEmail);
    await forgetPasswordPage.checkInvalidEmailFormat(email.invalidDomain,email.errorMessageInvalidEmail);
    await gondola.enter(forgetPasswordPage.txtEmail,email.validEmail);
    await forgetPasswordPage.checkInvalidEmailFormat(email.invalidName,email.errorMessageInvalidEmail);
    await gondola.enter(forgetPasswordPage.txtEmail,email.validEmail);
    await forgetPasswordPage.checkInvalidEmailFormat(email.invalidEmail,email.errorMessageInvalidEmail);
    await gondola.enter(forgetPasswordPage.txtEmail,email.validEmail); 
    await forgetPasswordPage.checkInvalidEmailFormat(email.invalidMissedSign,email.errorMessageInvalidEmail);
    await gondola.enter(forgetPasswordPage.txtEmail,email.validEmail); 
    await forgetPasswordPage.checkInvalidEmailFormat(email.invalidMissedHost,email.errorMessageInvalidEmail);
    await gondola.enter(forgetPasswordPage.txtEmail,email.validEmail); 
    await forgetPasswordPage.checkInvalidEmailFormat(email.spaceNameEmail,email.errorMessageInvalidEmail);
    await gondola.enter(forgetPasswordPage.txtEmail,email.validEmail); 
    await forgetPasswordPage.checkInvalidEmailFormat(email.spaceDomainEmail,email.errorMessageInvalidEmail);
   
});
/**
* Testcase 04: Verify send successful with valid email
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click login on header
* 3. Click link ForgetPassword 
* 2. Input valid with email
* 3. Click Submit button
* 4. Welcome page is displayed
*/
TestCase("Testcase 04: Verify send successful with valid email", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkForgotPassword);
    await gondola.enter(forgetPasswordPage.txtEmail,email.validEmail);
    await forgetPasswordPage.clickorOpenLink(forgetPasswordPage.btSubmit);
    //thank you page is displayed
});