import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../pages/testarchitect_site/Login/loginPage";
import { email } from "../../../data/TestArchitect/email";
import { password } from "../../../data/TestArchitect/password";
import signInPage from "../../../pages/testarchitect_site/Login/signInPage";
import { Account} from "../../../data/Gondola/Account";

TestModule("Manage field Password on page");
/**
* Testcase 01 : Verify error message with input wrong format on password field
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Click link Sign Up
* 4. input only number on password field
* 5. Verify error message
* 6. input only string on password field
* 7. Verify error message
* 8. input only special on password field
* 9. Verify error message
* 10. input spacekey on password field
* 11. Verify error message
*/
TestCase("Testcase 01: Verify to display error message on Register Page with wrong format on password", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.checkInvalidPasswordFormat(password.passwordNumber,password.errorMessagePassword);
    await signInPage.enterValidFormat(signInPage.txtPassword,password.passwordValid);
    await signInPage.checkInvalidPasswordFormat(password.passwordString,password.errorMessagePassword);
    await signInPage.enterValidFormat(signInPage.txtPassword,password.passwordValid);
    await signInPage.checkInvalidPasswordFormat(password.passwordSpecial,password.errorMessagePassword);
    await signInPage.enterValidFormat(signInPage.txtPassword,password.passwordValid);
    await signInPage.checkInvalidPasswordFormat(password.passwordSpaceKey,password.errorMessagePassword);
});
/**
* Testcase 02 : Verify error message with input short string on password field
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Click link Sign Up
* 4. input short string on password field
* 5. Verify error message
*/
TestCase("Testcase 02: Verify to display error message on Register Page with shprt string on password", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.checkInvalidPasswordFormat(password.passwordShort,password.errorMessageShortPassword);
});
/**
* Testcase 03 : Verify error message is displayed on confirmed password with not same value password 
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. Login active account
* 3. Click on menu "Change Password"
* 4. Verify error message with not  same value for  password
*/
TestCase("Testcase 03: Verify error message is displayed on confirmed password with not same value password", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.enterValidFormat(signInPage.txtPassword,password.passwordValid);
    await signInPage.inputInvalidRepeatPassWord(password.passwordShort,password.errorMessageConfirmedPassword);
});