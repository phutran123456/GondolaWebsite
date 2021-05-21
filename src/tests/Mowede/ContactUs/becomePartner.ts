import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import  becomePartnerPage from "../../../pages/Mowede/ContactUs/becomePartnerPage";
import { datatest } from "../../../data/POM/datatestPOM";
import { name } from "../../../data/TestArchitect/name";
import { email } from "../../../data/TestArchitect/email";
import { comment } from "../../../data/TestArchitect/comment";
import { phone } from "../../../data/TestArchitect/phone";

TestModule("Manage field Name on become a Partner page");
/**
* Testcase 01: Verify register become-a-partner successfully
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Input required field and click Send
* 3. Verify no display error message
*/
TestCase("Testcase 01: Verify register become-a-partner successfully", async () => {
    await becomePartnerPage.navigateTo();
    await becomePartnerPage.checkGUI();
    
});
/**
* Testcase 02: Verify display error message with empty fields
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Click link "Send Message"
* 3. Verify display error message with empty fields
*/
TestCase("Testcase 02: Verify display error message with empty required fields", async () => {
    await becomePartnerPage.navigateTo();
    await becomePartnerPage.clickorOpenLink(becomePartnerPage.btSendMessage);
    await becomePartnerPage.checkErrorMessage(becomePartnerPage.txtErrorFirstName, name.errorMessageEmpty);
    await becomePartnerPage.checkErrorMessage(becomePartnerPage.txtErrorLastName, name.errorMessageEmpty);
    await becomePartnerPage.checkErrorMessage(becomePartnerPage.txtErrorEmail, email.errorMessageEmptyEmail);
    await becomePartnerPage.checkErrorMessage(becomePartnerPage.cmbSelectService, name.errorMessageEmpty);
    await becomePartnerPage.checkErrorMessage(becomePartnerPage.txtPhone, name.errorMessageEmpty);
    await becomePartnerPage.checkErrorMessage(becomePartnerPage.txtErrorComment, name.errorMessageEmpty);
    
});

/**
* Testcase 03: Verify trim space character on first and end value of textbox field
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Enter space character on first and end value on field and press Enter
*/
TestCase("Testcase 03: Verify trim space character on first and end value of fields", async () => {
    await becomePartnerPage.navigateTo();
    
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtFirstName, name.spaceonName);
    await becomePartnerPage.checkValueNotSpaceonField(becomePartnerPage.txtFirstName, name.spaceonName);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtLastName, name.spaceonName);
    await becomePartnerPage.checkValueNotSpaceonField(becomePartnerPage.txtLastName, name.spaceonName);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtEmail, email.SpaceonEmail);
    await becomePartnerPage.checkValueNotSpaceonField(becomePartnerPage.txtEmail, email.SpaceonEmail);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtComment, comment.linewithspace);
    await becomePartnerPage.checkValueNotSpaceonField(becomePartnerPage.txtEmail, comment.linewithspace);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtPhone,phone.PhoneNumberSpace);
    await becomePartnerPage.checkValueNotSpaceonField(becomePartnerPage.txtPhone,phone.PhoneNumberSpace);
});
/**
* Testcase 04: Verify input multi line on field Comment
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Input multi line on field Comment and press Enter 
*/
TestCase("Testcase 04: Verify input multi line on field Comment", async () => {
    await becomePartnerPage.navigateTo();
    await becomePartnerPage.enterTextonCommentField(comment.line1 + "\n" + comment.line2 + "\n" + comment.line3+ "\n" + comment.line4);
    await becomePartnerPage.checkValueonField(becomePartnerPage.txtComment,comment.line1);
    await becomePartnerPage.checkValueonField(becomePartnerPage.txtComment,comment.line2);
    await becomePartnerPage.checkValueonField(becomePartnerPage.txtComment,comment.line3);
    await becomePartnerPage.checkValueonField(becomePartnerPage.txtComment,comment.line4);
});
/**
* Testcase 05: Verify maxlength characters on fields
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Input long tring and press Enter 
*/
TestCase("Testcase 05: Verify maxlength characters on Comment fields", async () => {
    await becomePartnerPage.navigateTo();
    await becomePartnerPage.enterTextonCommentField(comment.longstring);
    await becomePartnerPage.checkValueonField(becomePartnerPage.txtComment,comment.longstringdisplayed);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtFirstName,name.longName);
    await becomePartnerPage.checkValueonField(becomePartnerPage.txtFirstName,name.longNameDisplay);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtLastName,name.longName);
    await becomePartnerPage.checkValueonField(becomePartnerPage.txtLastName,name.longNameDisplay);
});
/*
* Testcase 06: Verify error message with space character between name, host value email on Work Email
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Input string "activated gondola@gmail.com" on Work Email and press Enter
* 3. Input string "activated.gondola@g mail.com" on Work Email and press Enter
*/
TestCase("Testcase 06: Verify error message with space character between name, host value on Email", async () => {
    await becomePartnerPage.navigateTo();
    await becomePartnerPage.checkInvalidEmailFormat(email.spaceNameEmail, email.errorMessageInvalidEmail);
    await becomePartnerPage.checkInvalidEmailFormat(email.spaceDomainEmail, email.errorMessageInvalidEmail);
});
/**
* Testcase 03: Verify error message with invalid format email on Work Email
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Input invalid format email "testlogigear#logigear.com" on Work Email and press Enter
* 3. Input valid address email "testlogigear@logigear.com" on Work Email and press Enter
* 4. Repeat step 2 and step 3 with invalid format email "testlogigear@"
* 5. Repeat step 2 and step 3 with invalid format email "@testlogigear.com"
* 6. Repeat step 2 and step 3 with invalid format email "testlogigear.com"
* 7. Repeat step 2 and step 3 with invalid format email "logigear@.com"
*/
TestCase("Testcase 07: Verify error message with invalid format Email", async () => {
    await becomePartnerPage.navigateTo();
    await becomePartnerPage.checkInvalidEmailFormat(email.InvalidSign, email.errorMessageInvalidEmail);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtEmail, email.validEmail);
    await becomePartnerPage.checkInvalidEmailFormat(email.invalidDomain, email.errorMessageInvalidEmail);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtEmail, email.validEmail);
    await becomePartnerPage.checkInvalidEmailFormat(email.invalidName, email.errorMessageInvalidEmail);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtEmail, email.validEmail);
    await becomePartnerPage.checkInvalidEmailFormat(email.invalidEmail, email.errorMessageInvalidEmail);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtEmail, email.validEmail);
    await becomePartnerPage.checkInvalidEmailFormat(email.invalidMissedSign, email.errorMessageInvalidEmail);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtEmail, email.validEmail);
    await becomePartnerPage.checkInvalidEmailFormat(email.invalidMissedHost, email.errorMessageInvalidEmail);
});
/**
* Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Click Login on header
* 3. click link Sign Up
* 2. input Unicode string on field name  " Khánh らが 123" and press Enter
*/
TestCase("Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field", async () => {
    await becomePartnerPage.navigateTo();
    

    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtFirstName,name.UnicodeName);
    await becomePartnerPage.checkValueonField(becomePartnerPage.txtFirstName,name.UnicodeName);
    await becomePartnerPage.enterValidFormat(becomePartnerPage.txtLastName,name.UnicodeName);
    await becomePartnerPage.checkValueonField(becomePartnerPage.txtLastName,name.UnicodeName);

});
/**
* Testcase 09: Verify input special character on Name field
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. click link Sign Up
* 4. input special character on name "Test #.,{}'" and press Enter
*/
TestCase("Testcase 09: Verify input special character on Name field", async () => {
    await becomePartnerPage.navigateTo();
    await becomePartnerPage.invalidFormatName(becomePartnerPage.txtFirstName,name.specialonName,becomePartnerPage.txtErrorFirstName,name.errorMessageSpecialEmail);
    await becomePartnerPage.invalidFormatName(becomePartnerPage.txtLastName,name.specialonName,becomePartnerPage.txtErrorLastName,name.errorMessageSpecialEmail);
});
/**
* Testcase 10: Verify to display error message on phone filed
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input number phone with special character and Press Enter "(+44)-7911.1234"
*/
TestCase("Testcase 01: Verify to display error message on Download Page with special character on number phone", async () => {
    await becomePartnerPage.navigateTo();
    await becomePartnerPage.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
    await becomePartnerPage.invalidFormatPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhone);
    await becomePartnerPage.invalidFormatPhone(phone.PhoneInvalid,phone.errorMessageInvalidNumberPhone);
    await becomePartnerPage.invalidFormatPhone(phone.PhonewithShortNumber,phone.errorMessageShortNumberPhone);
});
