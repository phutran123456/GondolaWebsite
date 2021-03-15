import { KeyCode, TestCase, TestModule, gondola } from "@logigear/gondola";
import contactUsPage from "../../../pages/POM/contactUsPage";
import { email } from "../../../data/TestArchitect/email";
TestModule("Manage field Email on page");


/**
* Testcase 01: Verify trim space character on first and end value of Work Email field
*
* 1. Navigate to https://stage1.testarchitect.com/pombuilder/contact.html
* 2. Enter "   activated.gondola@gmail.com   " on Work Email field and press Enter
*/
TestCase("Testcase 01: Verify trim space character on first and end value of Email field", async () => {
     await contactUsPage.navigateTo();
     //await homeTA.clickorOpenLink(homeTA.menuLogin);
    // await login.clickorOpenLink(login.lnkSignUp);
     await contactUsPage.enterValidFormat(contactUsPage.txtEmail,email.SpaceonEmail);
     await contactUsPage.checkValueNotSpaceonField(contactUsPage.txtEmail,email.SpaceonEmail);
});
/*
* Testcase 02: Verify error message with space character between name, host value email on Work Email
*
* 1. Navigate to https://stage1.testarchitect.com/pombuilder/contact.html
* 2. Input string "activated gondola@gmail.com" on Work Email and press Enter
* 3. Input string "activated.gondola@g mail.com" on Work Email and press Enter
*/
TestCase("Testcase 02: Verify error message with space character between name, host value on Email", async () => {
    await contactUsPage.navigateTo();
    await contactUsPage.checkInvalidEmailFormat(email.spaceNameEmail, email.errorMessageInvalidEmail);
    await contactUsPage.checkInvalidEmailFormat(email.spaceDomainEmail, email.errorMessageInvalidEmail);
});
/**
* Testcase 03: Verify error message with invalid format email on Work Email
*
* 1. Navigate to https://stage1.testarchitect.com/pombuilder/contact.html
* 2. Input invalid format email "testlogigear#logigear.com" on Work Email and press Enter
* 3. Input valid address email "testlogigear@logigear.com" on Work Email and press Enter
* 4. Repeat step 2 and step 3 with invalid format email "testlogigear@"
* 5. Repeat step 2 and step 3 with invalid format email "@testlogigear.com"
* 6. Repeat step 2 and step 3 with invalid format email "testlogigear.com"
* 7. Repeat step 2 and step 3 with invalid format email "logigear@.com"
*/
TestCase("Testcase 03: Verify error message with invalid format Email", async () => {
    await contactUsPage.navigateTo();
    await contactUsPage.checkInvalidEmailFormat(email.InvalidSign, email.errorMessageInvalidEmail);
    await contactUsPage.enterValidFormat(contactUsPage.txtEmail, email.validEmail);
    await contactUsPage.checkInvalidEmailFormat(email.invalidDomain, email.errorMessageInvalidEmail);
    await contactUsPage.enterValidFormat(contactUsPage.txtEmail, email.validEmail);
    await contactUsPage.checkInvalidEmailFormat(email.invalidName, email.errorMessageInvalidEmail);
    await contactUsPage.enterValidFormat(contactUsPage.txtEmail, email.validEmail);
    await contactUsPage.checkInvalidEmailFormat(email.invalidEmail, email.errorMessageInvalidEmail);
    await contactUsPage.enterValidFormat(contactUsPage.txtEmail, email.validEmail);
    await contactUsPage.checkInvalidEmailFormat(email.invalidMissedSign, email.errorMessageInvalidEmail);
    await contactUsPage.enterValidFormat(contactUsPage.txtEmail, email.validEmail);
    await contactUsPage.checkInvalidEmailFormat(email.invalidMissedHost, email.errorMessageInvalidEmail);
});
