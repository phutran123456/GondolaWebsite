import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import  BecomePartnerPage from "../../../../pages/testarchitect_site/Company/BecomePartner/BecomePartnerPage";
import { datatest } from "../../../../data/POM/datatestPOM";
import { name } from "../../../../data/TestArchitect/name";
import { email } from "../../../../data/TestArchitect/email";
import { comment } from "../../../../data/TestArchitect/comment";
import { phone } from "../../../../data/TestArchitect/phone";
import { valueItem } from "../../../../data/TestArchitect/valueItem";
import { datatestTAsite } from "../../../../data/TestArchitect/datatestTAsite";


TestModule("Manage field Name on page");
/**
* Testcase 01: Verify register become-a-partner successfully
*
* 1. Navigate to https://stage1.testarchitect.com/company/partners/become-a-partner
* 2. Input required field and click Send
* 3. Verify display thank you page
*/
TestCase("Testcase 01: Verify register become-a-partner successfully", async () => {
    await BecomePartnerPage.navigateTo();
    await BecomePartnerPage.checkGUI();
    await BecomePartnerPage.inputfields();
    
});
/**
* Testcase 02: Verify display error message with empty fields
*
* 1. Navigate to https://stage1.testarchitect.com/company/partners/become-a-partner
* 2.  Verify display error message with empty fields
*/
TestCase("Testcase 02: Verify display error message with empty required fields", async () => {
    await BecomePartnerPage.navigateTo();
    await BecomePartnerPage.clickorOpenLink(BecomePartnerPage.btSubmit);
    await BecomePartnerPage.checkErrorMessage(BecomePartnerPage.txtErrorFirstName, name.errorMessageEmpty);
    await BecomePartnerPage.checkErrorMessage(BecomePartnerPage.txtErrorLastName, name.errorMessageEmpty);
    await BecomePartnerPage.checkErrorMessage(BecomePartnerPage.txtErrorEmail, email.errorMessageEmptyEmail);
    await BecomePartnerPage.checkErrorMessage(BecomePartnerPage.txtErrorSelectBusiness, name.errorMessageEmpty);
    await BecomePartnerPage.checkErrorMessage(BecomePartnerPage.txtErrorPhone, name.errorMessageEmpty);
   
   
});

/**
* Testcase 03: Verify trim space character on first and end value of textbox field
*
* 1. Navigate to https://stage1.testarchitect.com/company/partners/become-a-partner
* 2. Enter space character on first and end value on field and press Enter
*/
TestCase("Testcase 03: Verify trim space character on first and end value of fields", async () => {
    await BecomePartnerPage.navigateTo();
    
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtFirstName, name.spaceonName);
    await BecomePartnerPage.checkValueNotSpaceonField(BecomePartnerPage.txtFirstName, name.spaceonName);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtLastName, name.spaceonName);
    await BecomePartnerPage.checkValueNotSpaceonField(BecomePartnerPage.txtLastName, name.spaceonName);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtEmail, email.SpaceonEmail);
   // await BecomePartnerPage.clickorOpenLink(BecomePartnerPage.txtFirstName);
    await BecomePartnerPage.checkValueNotSpaceonField(BecomePartnerPage.txtEmail, email.SpaceonEmail);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtComment,comment.linewithspace);
    await BecomePartnerPage.clickorOpenLink(BecomePartnerPage.txtEmail);
    await BecomePartnerPage.checkValueNotSpaceonField(BecomePartnerPage.txtComment, comment.linewithspace);
    
});
/**
* Testcase 04: Verify input multi line on field Comment
*
* 1. Navigate to https://stage1.testarchitect.com/company/partners/become-a-partner
* 2. Input multi line on field Comment and press Enter 
*/
TestCase("Testcase 04: Verify input multi line on field Comment", async () => {
    await BecomePartnerPage.navigateTo();
    await BecomePartnerPage.enterTextonCommentField(comment.line1 + "\n" + comment.line2 + "\n" + comment.line3+ "\n" + comment.line4);
    await BecomePartnerPage.checkValueonField(BecomePartnerPage.txtComment,comment.line1);
    await BecomePartnerPage.checkValueonField(BecomePartnerPage.txtComment,comment.line2);
    await BecomePartnerPage.checkValueonField(BecomePartnerPage.txtComment,comment.line3);
    await BecomePartnerPage.checkValueonField(BecomePartnerPage.txtComment,comment.line4);
});
/**
* Testcase 05: Verify maxlength characters on fields
*
* 1. Navigate to https://stage1.testarchitect.com/company/partners/become-a-partner
* 2. Input long tring and press Enter 
*/
TestCase("Testcase 05: Verify maxlength characters on Comment fields", async () => {
    await BecomePartnerPage.navigateTo();
    await BecomePartnerPage.enterTextonCommentField(comment.longstring);
    await BecomePartnerPage.checkValueonField(BecomePartnerPage.txtComment,comment.longstringdisplayed);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtFirstName,name.longName);
    await BecomePartnerPage.checkValueonField(BecomePartnerPage.txtFirstName, name.longNameDisplay);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtLastName,name.longName);
    await BecomePartnerPage.checkValueonField(BecomePartnerPage.txtLastName,name.longNameDisplay);
   
});
/*
* Testcase 06: Verify error message with space character between name, host value email on Work Email
*
* 1. Navigate to https://stage1.testarchitect.com/company/partners/become-a-partner
* 2. Input string "activated gondola@gmail.com" on Work Email and press Enter
* 3. Input string "activated.gondola@g mail.com" on Work Email and press Enter
*/
TestCase("Testcase 06: Verify error message with space character between name, host value on Email", async () => {
    await BecomePartnerPage.navigateTo();
    await BecomePartnerPage.checkInvalidEmailFormat(email.spaceNameEmail, email.errorMessageInvalidEmail);
    await BecomePartnerPage.checkInvalidEmailFormat(email.spaceDomainEmail, email.errorMessageInvalidEmail);
});
/**
* Testcase 07: Verify error message with invalid format email on Work Email
*
* 1. Navigate to https://stage1.testarchitect.com/company/partners/become-a-partner
* 2. Input invalid format email "testlogigear#logigear.com" on Work Email and press Enter
* 3. Input valid address email "testlogigear@logigear.com" on Work Email and press Enter
* 4. Repeat step 2 and step 3 with invalid format email "testlogigear@"
* 5. Repeat step 2 and step 3 with invalid format email "@testlogigear.com"
* 6. Repeat step 2 and step 3 with invalid format email "testlogigear.com"
* 7. Repeat step 2 and step 3 with invalid format email "logigear@.com"
*/
TestCase("Testcase 07: Verify error message with invalid format Email", async () => {
    await BecomePartnerPage.navigateTo();
    await BecomePartnerPage.checkInvalidEmailFormat(email.InvalidSign, email.errorMessageInvalidEmail);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtEmail, email.validEmail);
    await BecomePartnerPage.checkInvalidEmailFormat(email.invalidDomain, email.errorMessageInvalidEmail);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtEmail, email.validEmail);
    await BecomePartnerPage.checkInvalidEmailFormat(email.invalidName, email.errorMessageInvalidEmail);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtEmail, email.validEmail);
    await BecomePartnerPage.checkInvalidEmailFormat(email.invalidEmail, email.errorMessageInvalidEmail);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtEmail, email.validEmail);
    await BecomePartnerPage.checkInvalidEmailFormat(email.invalidMissedSign, email.errorMessageInvalidEmail);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtEmail, email.validEmail);
    await BecomePartnerPage.checkInvalidEmailFormat(email.invalidMissedHost, email.errorMessageInvalidEmail);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtEmail, email.validEmail);
    await BecomePartnerPage.checkInvalidEmailFormat(email.invalidMissedDotCom, email.errorMessageInvalidEmail);
});
/**
* Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field
*
* 1. Navigate to https://stage1.testarchitect.com/company/partners/become-a-partner
* 2. input Unicode string on field name  " Khánh らが 123" and press Enter
*/
TestCase("Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field", async () => {
    await BecomePartnerPage.navigateTo();
    

    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtFirstName,name.UnicodeName);
    await BecomePartnerPage.checkValueonField(BecomePartnerPage.txtFirstName,name.UnicodeName);
    await BecomePartnerPage.enterValidFormat(BecomePartnerPage.txtLastName,name.UnicodeName);
    await BecomePartnerPage.checkValueonField(BecomePartnerPage.txtLastName,name.UnicodeName);
   
});
/**
* Testcase 09: Verify input special character on Name field
*
* 1. Navigate to https://stage1.testarchitect.com/company/partners/become-a-partner
* 2. input special character on name "Test #.,{}'" and press Enter
*/
TestCase("Testcase 09: Verify input special character on Name field", async () => {
    await BecomePartnerPage.navigateTo();
    await BecomePartnerPage.invalidFormat(BecomePartnerPage.txtFirstName,name.specialonName,BecomePartnerPage.txtErrorFirstName,name.errorMessageSpecialEmail);
    await BecomePartnerPage.invalidFormat(BecomePartnerPage.txtLastName,name.specialonName,BecomePartnerPage.txtErrorLastName,name.errorMessageSpecialEmail);
});
/**
* Testcase 10: Verify to display error message on phone filed
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input number phone with special character and Press Enter "(+44)-7911.1234"
*/
TestCase("Testcase 10: Verify to display error message with special character on number phone", async () => {
    await BecomePartnerPage.navigateTo();
    await BecomePartnerPage.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
    await BecomePartnerPage.inputPhonewithItemPlag(BecomePartnerPage.cbxFlagJPPhone,phone.CodeJP,phone.PhoneJP);
    await BecomePartnerPage.invalidFormatPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhone);
    await BecomePartnerPage.inputPhonewithItemPlag(BecomePartnerPage.cbxFlagVNPhone,phone.CodeVN,phone.PhoneVN);
    await BecomePartnerPage.invalidFormatPhone(phone.PhonewithLongNumber,phone.errorMessageInvalidNumberPhone);
    await BecomePartnerPage.inputPhonewithItemPlag(BecomePartnerPage.cbxFlagUSPhone,phone.CodeUS,phone.PhoneUS);
    await BecomePartnerPage.invalidFormatPhone(phone.PhonewithShortNumber,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 11: Verify select one item on Select field
*
* 1. Navigate to https://stage1.testarchitect.com/company/partners/become-a-partner
* 2. Select item on Select field
*/
TestCase("Testcase 11: Verify select one item on Select field", async () => {
    await BecomePartnerPage.navigateTo();
    await gondola.select(BecomePartnerPage.cmbSelectBusiness,valueItem.ItemManage);
    await BecomePartnerPage.checkValueonField(BecomePartnerPage.cmbSelectBusiness,valueItem.ItemManage);
    await gondola.select(BecomePartnerPage.cmbSelectBusiness,valueItem.ItemOther);
    await BecomePartnerPage.checkValueonField(BecomePartnerPage.cmbSelectBusiness,valueItem.ItemOther);
}); 

