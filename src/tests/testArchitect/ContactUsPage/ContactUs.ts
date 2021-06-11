import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import  ContactUsPage from "../../../pages/testarchitect_site/ContactUs/ContactUsPage";
import { datatest } from "../../../data/POM/datatestPOM";
import { name } from "../../../data/TestArchitect/name";
import { email } from "../../../data/TestArchitect/email";
import { comment } from "../../../data/TestArchitect/comment";
import { phone } from "../../../data/TestArchitect/phone";
import { valueItem } from "../../../data/TestArchitect/valueItem";
import { datatestTAsite } from "../../../data/TestArchitect/datatestTAsite";


TestModule("Manage field Name on page");
/**
* Testcase 01: Verify register become-a-partner successfully
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Input required field and click Send
* 3. Verify no display error message
*/
TestCase("Testcase 01: Verify register become-a-partner successfully", async () => {
    await ContactUsPage.navigateTo();
    await ContactUsPage.checkGUI();
    //await ContactUsPage.sendMessage();
    
});
/**
* Testcase 02: Verify display error message with empty fields
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Click button "Request now"
* 3. Verify display error message with empty fields
*/
TestCase("Testcase 02: Verify display error message with empty required fields", async () => {
    await ContactUsPage.navigateTo();
    await ContactUsPage.clickorOpenLink(ContactUsPage.btRequestNow);
    await ContactUsPage.checkErrorMessage(ContactUsPage.txtErrorFirstName, name.errorMessageEmpty);
    await ContactUsPage.checkErrorMessage(ContactUsPage.txtErrorLastName, name.errorMessageEmpty);
    await ContactUsPage.checkErrorMessage(ContactUsPage.txtErrorEmail, email.errorMessageEmptyEmail);
    await ContactUsPage.checkErrorMessage(ContactUsPage.txtErrorSelectBusiness, name.errorMessageEmpty);
    await ContactUsPage.checkErrorMessage(ContactUsPage.txtErrorPhone, name.errorMessageEmpty);
    await ContactUsPage.checkErrorMessage(ContactUsPage.txtErrorSelectTestingNeeds, name.errorMessageEmpty);
   
});

/**
* Testcase 03: Verify trim space character on first and end value of textbox field
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Enter space character on first and end value on field and press Enter
*/
TestCase("Testcase 03: Verify trim space character on first and end value of fields", async () => {
    await ContactUsPage.navigateTo();
    
    await ContactUsPage.enterValidFormat(ContactUsPage.txtFirstName, name.spaceonName);
    await ContactUsPage.checkValueNotSpaceonField(ContactUsPage.txtFirstName, name.spaceonName);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtLastName, name.spaceonName);
    await ContactUsPage.checkValueNotSpaceonField(ContactUsPage.txtLastName, name.spaceonName);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtEmail, email.SpaceonEmail);
    await ContactUsPage.clickorOpenLink(ContactUsPage.txtFirstName);
    await ContactUsPage.checkValueNotSpaceonField(ContactUsPage.txtEmail, email.SpaceonEmail);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtComment,comment.linewithspace);
    await ContactUsPage.clickorOpenLink(ContactUsPage.txtEmail);
    await ContactUsPage.checkValueNotSpaceonField(ContactUsPage.txtComment, comment.linewithspace);
    //await ContactUsPage.enterValidFormat(ContactUsPage.txtPhone,phone.PhoneNumberSpace);
    //await ContactUsPage.checkValueNotSpaceonField(ContactUsPage.txtPhone,phone.PhoneNumberSpace);
});
/**
* Testcase 04: Verify input multi line on field Comment
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Input multi line on field Comment and press Enter 
*/
TestCase("Testcase 04: Verify input multi line on field Comment", async () => {
    await ContactUsPage.navigateTo();
    await ContactUsPage.enterTextonCommentField(comment.line1 + "\n" + comment.line2 + "\n" + comment.line3+ "\n" + comment.line4);
    await ContactUsPage.checkValueonField(ContactUsPage.txtComment,comment.line1);
    await ContactUsPage.checkValueonField(ContactUsPage.txtComment,comment.line2);
    await ContactUsPage.checkValueonField(ContactUsPage.txtComment,comment.line3);
    await ContactUsPage.checkValueonField(ContactUsPage.txtComment,comment.line4);
});
/**
* Testcase 05: Verify maxlength characters on fields
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Input long tring and press Enter 
*/
TestCase("Testcase 05: Verify maxlength characters on Comment fields", async () => {
    await ContactUsPage.navigateTo();
    await ContactUsPage.enterTextonCommentField(comment.longstring);
    await ContactUsPage.checkValueonField(ContactUsPage.txtComment,comment.longstringdisplayed);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtFirstName,name.longName);
    await ContactUsPage.checkValueonField(ContactUsPage.txtFirstName, name.longNameDisplay);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtLastName,name.longName);
    await ContactUsPage.checkValueonField(ContactUsPage.txtLastName,name.longNameDisplay);
   
});
/*
* Testcase 06: Verify error message with space character between name, host value email on Work Email
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Input string "activated gondola@gmail.com" on Work Email and press Enter
* 3. Input string "activated.gondola@g mail.com" on Work Email and press Enter
*/
TestCase("Testcase 06: Verify error message with space character between name, host value on Email", async () => {
    await ContactUsPage.navigateTo();
    await ContactUsPage.checkInvalidEmailFormat(email.spaceNameEmail, email.errorMessageInvalidEmail);
    await ContactUsPage.checkInvalidEmailFormat(email.spaceDomainEmail, email.errorMessageInvalidEmail);
});
/**
* Testcase 07: Verify error message with invalid format email on Work Email
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Input invalid format email "testlogigear#logigear.com" on Work Email and press Enter
* 3. Input valid address email "testlogigear@logigear.com" on Work Email and press Enter
* 4. Repeat step 2 and step 3 with invalid format email "testlogigear@"
* 5. Repeat step 2 and step 3 with invalid format email "@testlogigear.com"
* 6. Repeat step 2 and step 3 with invalid format email "testlogigear.com"
* 7. Repeat step 2 and step 3 with invalid format email "logigear@.com"
*/
TestCase("Testcase 07: Verify error message with invalid format Email", async () => {
    await ContactUsPage.navigateTo();
    await ContactUsPage.checkInvalidEmailFormat(email.InvalidSign, email.errorMessageInvalidEmail);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtEmail, email.validEmail);
    await ContactUsPage.checkInvalidEmailFormat(email.invalidDomain, email.errorMessageInvalidEmail);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtEmail, email.validEmail);
    await ContactUsPage.checkInvalidEmailFormat(email.invalidName, email.errorMessageInvalidEmail);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtEmail, email.validEmail);
    await ContactUsPage.checkInvalidEmailFormat(email.invalidEmail, email.errorMessageInvalidEmail);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtEmail, email.validEmail);
    await ContactUsPage.checkInvalidEmailFormat(email.invalidMissedSign, email.errorMessageInvalidEmail);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtEmail, email.validEmail);
    await ContactUsPage.checkInvalidEmailFormat(email.invalidMissedHost, email.errorMessageInvalidEmail);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtEmail, email.validEmail);
    await ContactUsPage.checkInvalidEmailFormat(email.invalidMissedDotCom, email.errorMessageInvalidEmail);
});
/**
* Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. input Unicode string on field name  " Khánh らが 123" and press Enter
*/
TestCase("Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field", async () => {
    await ContactUsPage.navigateTo();
    

    await ContactUsPage.enterValidFormat(ContactUsPage.txtFirstName,name.UnicodeName);
    await ContactUsPage.checkValueonField(ContactUsPage.txtFirstName,name.UnicodeName);
    await ContactUsPage.enterValidFormat(ContactUsPage.txtLastName,name.UnicodeName);
    await ContactUsPage.checkValueonField(ContactUsPage.txtLastName,name.UnicodeName);
   
});
/**
* Testcase 09: Verify input special character on Name field
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. input special character on name "Test #.,{}'" and press Enter
*/
TestCase("Testcase 09: Verify input special character on Name field", async () => {
    await ContactUsPage.navigateTo();
    await ContactUsPage.invalidFormat(ContactUsPage.txtFirstName,name.specialonName,ContactUsPage.txtErrorFirstName,name.errorMessageSpecialEmail);
    await ContactUsPage.invalidFormat(ContactUsPage.txtLastName,name.specialonName,ContactUsPage.txtErrorLastName,name.errorMessageSpecialEmail);
});
/**
* Testcase 10: Verify to display error message on phone filed
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input number phone with special character and Press Enter "(+44)-7911.1234"
*/
TestCase("Testcase 10: Verify to display error message with special character on number phone", async () => {
    await ContactUsPage.navigateTo();
    await ContactUsPage.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
    await ContactUsPage.inputPhonewithItemPlag(ContactUsPage.cbxFlagJPPhone,phone.CodeJP,phone.PhoneJP);
    await ContactUsPage.invalidFormatPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhone);
    await ContactUsPage.inputPhonewithItemPlag(ContactUsPage.cbxFlagVNPhone,phone.CodeVN,phone.PhoneVN);
    await ContactUsPage.invalidFormatPhone(phone.PhonewithLongNumber,phone.errorMessageInvalidNumberPhone);
    await ContactUsPage.inputPhonewithItemPlag(ContactUsPage.cbxFlagUSPhone,phone.CodeUS,phone.PhoneUS);
    await ContactUsPage.invalidFormatPhone(phone.PhonewithShortNumber,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 11: Verify select one item on Select field
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Open dropdown menu to select item by click on Select  field
* 3. Select item on Select field
*/
TestCase("Testcase 11: Verify select one item on Select field", async () => {
    await ContactUsPage.navigateTo();
    await gondola.select(ContactUsPage.cmbSelectBusiness,valueItem.ItemManage);
    await ContactUsPage.checkValueonField(ContactUsPage.cmbSelectBusiness,valueItem.ItemManage);
    await gondola.select(ContactUsPage.cmbSelectBusiness,valueItem.ItemOther);
    await ContactUsPage.checkValueonField(ContactUsPage.cmbSelectBusiness,valueItem.ItemOther);
    await ContactUsPage.selectItemonSelectTestingNeeds(ContactUsPage.chbSelectAll,valueItem.ItemAll);
}); 
/**
* Testcase 12: Verify select multi items on Select Services field
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Open dropdown menu to select item by click on Select Services field
* 3. Select multi item on Select Services field
*/
TestCase("Testcase 12: Verify select multi items on Select Services field", async () => {
   await ContactUsPage.navigateTo();
   await ContactUsPage.selectItemonSelectTestingNeeds(ContactUsPage.chbSelectWebTesting,valueItem.ItemWebTesting);
   await ContactUsPage.selectItemonSelectTestingNeeds(ContactUsPage.chbSelectMobileTesting,valueItem.ItemMobileTesting);
   await ContactUsPage.selectItemonSelectTestingNeeds(ContactUsPage.chbSelectAPITesting,valueItem.ItemAPITesting);
   await ContactUsPage.selectItemonSelectTestingNeeds(ContactUsPage.chbSelectDesktopTesting,valueItem.MultiItem);
});
/**
* Testcase 13: Verify unselect item on Select Services field
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Open dropdown menu to select item by click on Select Services field
* 3. Select item "Select all" on Select Services
* 4. Unselected item "Select all" on Select Services
* 5. Select multi item "Web Testing, Mobile Testing" on Select Services field
* 6. Unselected item "Web Testing" on Select Services field 
*/
TestCase("Testcase 13: Verify select multi items on Select Services field", async () => {
   await ContactUsPage.navigateTo();
   await ContactUsPage.selectItemonSelectTestingNeeds(ContactUsPage.chbSelectAll,valueItem.ItemAll);
   await ContactUsPage.unselectItemonTestingNeeds(ContactUsPage.chbSelectAll,valueItem.ItemAll);
   await ContactUsPage.selectItemonSelectTestingNeeds(ContactUsPage.chbSelectWebTesting,valueItem.ItemWebTesting);
   await ContactUsPage.selectItemonSelectTestingNeeds(ContactUsPage.chbSelectMobileTesting,valueItem.ItemMobileTesting);
   await ContactUsPage.unselectItemonTestingNeeds(ContactUsPage.chbSelectMobileTesting,valueItem.ItemMobileTesting);
});
