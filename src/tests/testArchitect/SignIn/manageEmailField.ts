import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../pages/testarchitect_site/Login/loginPage";
import { email } from "../../../data/TestArchitect/email";
import { password } from "../../../data/TestArchitect/password";
import signInPage from "../../../pages/testarchitect_site/Login/signInPage";
import { Account} from "../../../data/Gondola/Account";

TestModule("Manage field Email on page");
/**
* Testcase 01: Verify display error message with existed Email
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. click link Sign Up
* 4. input existed address email
*/
TestCase("Testcase 01: Verify display error message with empty field Email", async () => {
     let acc:Account= await signInPage.getRandomaccount();
     await homeTA.navigateTo();
     await homeTA.clickorOpenLink(homeTA.menuLogin);
     await login.clickorOpenLink(login.lnkSignUp);
     await signInPage.createAccountwithExistedEmail(acc, email.validEmail,email.ExistedEmailErrorMessage);
});
/**
* Testcase 02: Verify trim space character on first and end value of Work Email field
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Click link Sign Up
* 4. Enter "   activated.gondola@gmail.com   " on Work Email field and press Enter
*/
//TestCase("Testcase 02: Verify trim space character on first and end value of Email field", async () => {
//     await homeTA.navigateTo();
//     await homeTA.clickorOpenLink(homeTA.menuLogin);
//     await login.clickorOpenLink(login.lnkSignUp);
//     await signInPage.enterValidFormat(signInPage.txtEmail,email.SpaceonEmail);
//     await signInPage.checkValueNotSpaceonField(signInPage.txtEmail,email.SpaceonEmail);
//});
/**
* Testcase 03: Verify error message with space character between name, host value email on Work Email
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Click link Sign Up
* 4. Input string "activated gondola@gmail.com" on Work Email and press Enter 
* 5. Input string "activated.gondola@g mail.com" on Work Email and press Enter 
*/
TestCase("Testcase 03: Verify error message with space character between name, host value on Email", async () => {
     await homeTA.navigateTo();
     await homeTA.clickorOpenLink(homeTA.menuLogin);
     await login.clickorOpenLink(login.lnkSignUp);
     await signInPage.invalidFormatEmail(email.spaceNameEmail,email.errorMessageInvalidEmail);
     await signInPage.invalidFormatEmail(email.spaceDomainEmail,email.errorMessageInvalidEmail);
});
/**
* Testcase 04: Verify error message with invalid format email on Work Email
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Click link Sign Up
* 4. Input invalid format email "testlogigear#logigear.com" on Work Email and press Enter  
* 5. Input valid address email "testlogigear@logigear.com" on Work Email and press Enter
* 6. Repeat step 2 and step 3 with invalid format email "testlogigear@"
* 7. Repeat step 2 and step 3 with invalid format email "@testlogigear.com" 
* 8. Repeat step 2 and step 3 with invalid format email "testlogigear.com"  
* 9. Repeat step 2 and step 3 with invalid format email "logigear@.com"   
*/
TestCase("Testcase 04: Verify error message with invalid format Email", async () => {
     await homeTA.navigateTo();
     await homeTA.clickorOpenLink(homeTA.menuLogin);
     await login.clickorOpenLink(login.lnkSignUp);
     await signInPage.invalidFormatEmail(email.InvalidSign,email.errorMessageInvalidEmail);
     await signInPage.enterValidFormat(signInPage.txtEmail,email.validEmail);
     await signInPage.invalidFormatEmail(email.invalidDomain,email.errorMessageInvalidEmail);
     await signInPage.enterValidFormat(signInPage.txtEmail,email.validEmail);
     await signInPage.invalidFormatEmail(email.invalidName,email.errorMessageInvalidEmail);
     await signInPage.enterValidFormat(signInPage.txtEmail,email.validEmail);
     await signInPage.invalidFormatEmail(email.invalidEmail,email.errorMessageInvalidEmail);
     await signInPage.enterValidFormat(signInPage.txtEmail,email.validEmail);
     await signInPage.invalidFormatEmail(email.invalidMissedSign,email.errorMessageInvalidEmail);
     await signInPage.enterValidFormat(signInPage.txtEmail,email.validEmail);
     await signInPage.invalidFormatEmail(email.invalidMissedHost,email.errorMessageInvalidEmail);
     
});