import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import detailJobApplyPage from "../../../pages/Mowede/Careers/DetailJobApplyPage";
import { datatest } from "../../../data/POM/datatestPOM";
import { name } from "../../../data/TestArchitect/name";
import { email } from "../../../data/TestArchitect/email";
import { comment } from "../../../data/TestArchitect/comment";
import { phone } from "../../../data/Mowede/phone";
import { valueItem } from "../../../data/Mowede/valueItem";

TestModule("Manage field Name on become a Partner page");
/**
* Testcase 01: Verify register become-a-partner successfully
*
* 1. Navigate to https://stage1.mowede.com/careers
* 2. Open detail of job
* 3. Input required field and click Send
* 4. Verify no display error message
*/
TestCase("Testcase 01: Verify register become-a-partner successfully", async () => {
    await detailJobApplyPage.navigateTo();
    await detailJobApplyPage.checkGUI();
    await detailJobApplyPage.inputInfo();
    
});
/**
* Testcase 02: Verify display error message with empty fields
*
* 1. Navigate to https://stage1.mowede.com/careers
* 2. Open detail of job
* 3. Click link "Send Message"
* 4. Verify display error message with empty fields
*/
TestCase("Testcase 02: Verify display error message with empty required fields", async () => {
    await detailJobApplyPage.navigateTo();
    await detailJobApplyPage.clickorOpenLink(detailJobApplyPage.btApply);
    await detailJobApplyPage.checkErrorMessage(detailJobApplyPage.txtErrorFirstName, name.errorMessageEmpty);
    await detailJobApplyPage.checkErrorMessage(detailJobApplyPage.txtErrorLastName, name.errorMessageEmpty);
    await detailJobApplyPage.checkErrorMessage(detailJobApplyPage.txtErrorEmail, email.errorMessageEmptyEmail);
    await detailJobApplyPage.checkErrorMessage(detailJobApplyPage.txtErrorPhone, name.errorMessageEmpty);
    await detailJobApplyPage.checkErrorMessage(detailJobApplyPage.txtErrorComment, name.errorMessageEmpty);
    
});

/**
* Testcase 03: Verify trim space character on first and end value of textbox field
*
* 1. Navigate to https://stage1.mowede.com/careers
* 2. Open detail of job
* 3. Enter space character on first and end value on field and press Enter
*/
TestCase("Testcase 03: Verify trim space character on first and end value of fields", async () => {
    await detailJobApplyPage.navigateTo();
    
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtFirstName, name.spaceonName);
    await detailJobApplyPage.checkValueNotSpaceonField(detailJobApplyPage.txtFirstName, name.spaceonName);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtLastName, name.spaceonName);
    await detailJobApplyPage.checkValueNotSpaceonField(detailJobApplyPage.txtLastName, name.spaceonName);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtEmail, email.SpaceonEmail);
    await detailJobApplyPage.checkValueNotSpaceonField(detailJobApplyPage.txtEmail, email.SpaceonEmail);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtComment, comment.linewithspace);
    await detailJobApplyPage.checkValueNotSpaceonField(detailJobApplyPage.txtEmail, comment.linewithspace);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtPhone,phone.PhoneNumberSpace);
    await detailJobApplyPage.checkValueNotSpaceonField(detailJobApplyPage.txtPhone,phone.PhoneNumberSpace);
});
/**
* Testcase 04: Verify input multi line on field Comment
*
* 1. Navigate to https://stage1.mowede.com/careers
* 2. Open detail of job
* 3. Input multi line on field Comment and press Enter 
*/
TestCase("Testcase 04: Verify input multi line on field Comment", async () => {
    await detailJobApplyPage.navigateTo();
    await detailJobApplyPage.enterTextonCommentField(comment.line1 + "\n" + comment.line2 + "\n" + comment.line3+ "\n" + comment.line4);
    await detailJobApplyPage.checkValueonField(detailJobApplyPage.txtComment,comment.line1);
    await detailJobApplyPage.checkValueonField(detailJobApplyPage.txtComment,comment.line2);
    await detailJobApplyPage.checkValueonField(detailJobApplyPage.txtComment,comment.line3);
    await detailJobApplyPage.checkValueonField(detailJobApplyPage.txtComment,comment.line4);
});
/**
* Testcase 05: Verify maxlength characters on fields
*
* 1. Navigate to https://stage1.mowede.com/careers
* 2. Open detail of job
* 3. Input long tring and press Enter 
*/
TestCase("Testcase 05: Verify maxlength characters on Comment fields", async () => {
    await detailJobApplyPage.navigateTo();
    await detailJobApplyPage.enterTextonCommentField(comment.longstring);
    await detailJobApplyPage.checkValueonField(detailJobApplyPage.txtComment,comment.longstring);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtFirstName,name.longName);
    await detailJobApplyPage.checkErrorMessage(detailJobApplyPage.txtErrorFirstName, name.errorMessageLongString);
    
   // await detailJobApplyPage.checkValueonField(detailJobApplyPage.txtFirstName,name.longNameDisplay);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtLastName,name.longName);
    await detailJobApplyPage.checkErrorMessage(detailJobApplyPage.txtErrorLastName, name.errorMessageLongString);
   // await detailJobApplyPage.checkValueonField(detailJobApplyPage.txtLastName,name.longNameDisplay);
});
/*
* Testcase 06: Verify error message with space character between name, host value email on Work Email
*
* 1. Navigate to https://stage1.mowede.com/careers
* 2. Open detail of job
* 3. Input string "activated gondola@gmail.com" on Work Email and press Enter
* 4. Input string "activated.gondola@g mail.com" on Work Email and press Enter
*/
TestCase("Testcase 06: Verify error message with space character between name, host value on Email", async () => {
    await detailJobApplyPage.navigateTo();
    await detailJobApplyPage.checkInvalidEmailFormat(email.spaceNameEmail, email.errorMessageInvalidEmail);
    await detailJobApplyPage.checkInvalidEmailFormat(email.spaceDomainEmail, email.errorMessageInvalidEmail);
});
/**
* Testcase 07: Verify error message with invalid format email on Work Email
*
* 1. Navigate to https://stage1.mowede.com/careers
* 2. Open detail of job
* 3. Input invalid format email "testlogigear#logigear.com" on Work Email and press Enter
* 4. Input valid address email "testlogigear@logigear.com" on Work Email and press Enter
* 5. Repeat step 2 and step 3 with invalid format email "testlogigear@"
* 6. Repeat step 2 and step 3 with invalid format email "@testlogigear.com"
* 7. Repeat step 2 and step 3 with invalid format email "testlogigear.com"
* 8. Repeat step 2 and step 3 with invalid format email "logigear@.com"
*/
TestCase("Testcase 07: Verify error message with invalid format Email", async () => {
    await detailJobApplyPage.navigateTo();
    await detailJobApplyPage.checkInvalidEmailFormat(email.InvalidSign, email.errorMessageInvalidEmail);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtEmail, email.validEmail);
    await detailJobApplyPage.checkInvalidEmailFormat(email.invalidDomain, email.errorMessageInvalidEmail);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtEmail, email.validEmail);
    await detailJobApplyPage.checkInvalidEmailFormat(email.invalidCoparatorDomain, email.errorMessageInvalidCoparatorDomain);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtEmail, email.validEmail);
    await detailJobApplyPage.checkInvalidEmailFormat(email.invalidName, email.errorMessageInvalidEmail);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtEmail, email.validEmail);
    await detailJobApplyPage.checkInvalidEmailFormat(email.invalidEmail, email.errorMessageInvalidEmail);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtEmail, email.validEmail);
    await detailJobApplyPage.checkInvalidEmailFormat(email.invalidMissedSign, email.errorMessageInvalidEmail);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtEmail, email.validEmail);
    await detailJobApplyPage.checkInvalidEmailFormat(email.invalidMissedHost, email.errorMessageInvalidEmail);
});
/**
* Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field
*
* 1. Navigate to https://stage1.mowede.com/careers
* 2. Open detail of job
* 3. input Unicode string on field name  " Khánh らが 123" and press Enter
*/
TestCase("Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field", async () => {
    await detailJobApplyPage.navigateTo();
    

    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtFirstName,name.UnicodeName);
    await detailJobApplyPage.checkValueonField(detailJobApplyPage.txtFirstName,name.UnicodeName);
    await detailJobApplyPage.enterValidFormat(detailJobApplyPage.txtLastName,name.UnicodeName);
    await detailJobApplyPage.checkValueonField(detailJobApplyPage.txtLastName,name.UnicodeName);

});
/**
* Testcase 09: Verify input special character on Name field
*
* 1. Navigate to https://stage1.mowede.com/careers
* 2. Open detail of job
* 3. input special character on name "Test #.,{}'" and press Enter
*/
TestCase("Testcase 09: Verify input special character on Name field", async () => {
    await detailJobApplyPage.navigateTo();
    await detailJobApplyPage.invalidFormatName(detailJobApplyPage.txtFirstName,name.specialonName,detailJobApplyPage.txtErrorFirstName,name.errorMessageSpecialEmail);
    await detailJobApplyPage.invalidFormatName(detailJobApplyPage.txtLastName,name.specialonName,detailJobApplyPage.txtErrorLastName,name.errorMessageSpecialEmail);
});
/**
* Testcase 10: Verify to display error message on phone filed
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Open detail of job
* 3. input number phone with special character and Press Enter "(+44)-7911.1234"
*/
TestCase("Testcase 10: Verify to display error message with special character on number phone", async () => {
    await detailJobApplyPage.navigateTo();
    await detailJobApplyPage.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
    await detailJobApplyPage.inputPhonewithItemPlag(detailJobApplyPage.cbxFlagJPPhone,phone.CodeJP,phone.PhoneJP);
    await detailJobApplyPage.invalidFormatPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhone);
    await detailJobApplyPage.inputPhonewithItemPlag(detailJobApplyPage.cbxFlagVNPhone,phone.CodeVN,phone.PhoneVN);
    await detailJobApplyPage.invalidFormatPhone(phone.PhonewithLongNumber,phone.errorMessageInvalidNumberPhone);
    await detailJobApplyPage.inputPhonewithItemPlag(detailJobApplyPage.cbxFlagUSPhone,phone.CodeUS,phone.PhoneUS);
    await detailJobApplyPage.invalidFormatPhone(phone.PhonewithShortNumber,phone.errorMessageInvalidNumberPhone);
});

