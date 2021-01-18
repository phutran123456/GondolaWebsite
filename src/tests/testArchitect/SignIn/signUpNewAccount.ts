import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../pages/testarchitect_site/Login/loginPage";
import { name } from "../../../data/TestArchitect/name";
import { email } from "../../../data/TestArchitect/email";
import { password } from "../../../data/TestArchitect/password";
import { phone } from "../../../data/TestArchitect/phone";
import signInPage from "../../../pages/testarchitect_site/Login/signInPage";
import { Account} from "../../../data/Gondola/Account";

TestModule("Check GUI on sign In page");
/**
* Testcase 01: Verify display error message with empty field Work Email
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Click link Sign Up
* 4. input required fields and click "Create Free Account" button
*/
TestCase("Testcase 01: Verify GUI Sign Up page", async () => {
     let acc:Account= await signInPage.getRandomaccount();
     await homeTA.navigateTo();
     await homeTA.clickorOpenLink(homeTA.menuLogin);
     await login.clickorOpenLink(login.lnkSignUp);
     await signInPage.checkGUI();
     await signInPage.checkGUILastStep(acc);
});
/**
* Testcase 02: Verify display error message with empty fields 
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Click link Sign Up
* 4.  click "Get Start" button
*/
TestCase("Testcase 02: Verify display error message with empty required fields", async () => {
    
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await gondola.wait(3);
    await signInPage.clickorOpenLink(signInPage.btGetStarted);
    await gondola.wait(3);
    await signInPage.checkErrorMessage(signInPage.txtErrorFirstName,name.errorMessageEmpty);
    await signInPage.checkErrorMessage(signInPage.txtErrorLastName,name.errorMessageEmpty);
    await signInPage.checkErrorMessage(signInPage.txtErrorEmail,email.errorMessageEmptyEmail);
    await signInPage.checkErrorMessage(signInPage.txtErrorPassword,password.errorMessageEmptyPassword);
    await signInPage.checkErrorMessage(signInPage.txtErrorPasswordRepeat,password.errorMessageEmptyPassword);
    
    
});
/**
* Testcase 03: Verify trim space character on first and end value of textbox field
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Click link Sign Up
* 4. Click "Get Start" button
* 2. Enter space character on first and end value on field and press Enter
*/
TestCase("Testcase 03: Verify trim space character on first and end value of fields", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.enterValidFormat(signInPage.txtFirstName,name.spaceonName);
    await signInPage.checkValueNotSpaceonField(signInPage.txtFirstName,name.spaceonName);
    await signInPage.enterValidFormat(signInPage.txtLastName,name.spaceonName);
    await signInPage.checkValueNotSpaceonField(signInPage.txtLastName,name.spaceonName);
    await signInPage.enterValidFormat(signInPage.txtEmail,email.SpaceonEmail);
    await signInPage.checkValueNotSpaceonField(signInPage.txtEmail,email.SpaceonEmail);
    await gondola.enter(signInPage.txtPassword, password.passwordValid);
    await gondola.enter(signInPage.txtPasswordRepeat, password.passwordValid);
    await gondola.click(signInPage.btGetStarted);
    await gondola.wait(5);
    await signInPage.enterValidwithSpace(signInPage.txtTitle,name.spaceonName,signInPage.cmbCountry);
    await signInPage.checkValueNotSpaceonField(signInPage.txtTitle,name.spaceonName);
    await signInPage.enterValidwithSpace(signInPage.txtCompany,name.spaceonName,signInPage.cmbCountry);
    await signInPage.checkValueNotSpaceonField(signInPage.txtCompany,name.spaceonName);
    await signInPage.enterValidwithSpace(signInPage.txtPhone,phone.PhoneNumberSpace,signInPage.cmbCountry);
    await signInPage.checkValueNotSpaceonField(signInPage.txtPhone,phone.NumberValid);
});
/**
* Testcase 04: Verify Register successful new account with display thanks you page
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Click link Sign Up
* 4. Click "Get Start" button
* 5. Enter required fields and click Create Free Account
* 6. Verify thanks you page is displayed
*/
TestCase("Testcase 04: Verify Register successful new account with display thanks you page", async () => {
    let acc:Account= await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(acc);
    //thanks you page is displayed
});