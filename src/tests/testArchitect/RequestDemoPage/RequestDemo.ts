import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import  RequestDemoPage from "../../../pages/testarchitect_site/RequestDemo/RequestDemoPage";
import { datatest } from "../../../data/POM/datatestPOM";
import { name } from "../../../data/TestArchitect/name";
import { email } from "../../../data/TestArchitect/email";
import { comment } from "../../../data/TestArchitect/comment";
import { phone } from "../../../data/TestArchitect/phone";
import { valueItem } from "../../../data/TestArchitect/valueItem";
import { datatestTAsite } from "../../../data/TestArchitect/datatestTAsite";


TestModule("Manage field Name on become a Partner page");
/**
* Testcase 01: Verify register become-a-partner successfully
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Input required field and click Send
* 3. Verify no display error message
*/
TestCase("Testcase 01: Verify register become-a-partner successfully", async () => {
    await RequestDemoPage.navigateTo();
    await RequestDemoPage.checkGUI();
    //await RequestDemoPage.sendMessage();
    
});
/**
* Testcase 02: Verify display error message with empty fields
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Click button "Request now"
* 3. Verify display error message with empty fields
*/
TestCase("Testcase 02: Verify display error message with empty required fields", async () => {
    await RequestDemoPage.navigateTo();
    await RequestDemoPage.clickorOpenLink(RequestDemoPage.btRequestNow);
    await RequestDemoPage.checkErrorMessage(RequestDemoPage.txtErrorFirstName, name.errorMessageEmpty);
    await RequestDemoPage.checkErrorMessage(RequestDemoPage.txtErrorLastName, name.errorMessageEmpty);
    await RequestDemoPage.checkErrorMessage(RequestDemoPage.txtErrorEmail, email.errorMessageEmptyEmail);
    await RequestDemoPage.checkErrorMessage(RequestDemoPage.txtErrorSelectBusiness, name.errorMessageEmpty);
    await RequestDemoPage.checkErrorMessage(RequestDemoPage.txtErrorPhone, name.errorMessageEmpty);
    await RequestDemoPage.checkErrorMessage(RequestDemoPage.txtErrorSelectTestingNeeds, name.errorMessageEmpty);
    await RequestDemoPage.checkErrorMessage(RequestDemoPage.txtErrorComment, name.errorMessageEmpty);
    
});

/**
* Testcase 03: Verify trim space character on first and end value of textbox field
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Enter space character on first and end value on field and press Enter
*/
TestCase("Testcase 03: Verify trim space character on first and end value of fields", async () => {
    await RequestDemoPage.navigateTo();
    
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtFirstName, name.spaceonName);
    await RequestDemoPage.checkValueNotSpaceonField(RequestDemoPage.txtFirstName, name.spaceonName);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtLastName, name.spaceonName);
    await RequestDemoPage.checkValueNotSpaceonField(RequestDemoPage.txtLastName, name.spaceonName);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtEmail, email.SpaceonEmail);
    await RequestDemoPage.checkValueNotSpaceonField(RequestDemoPage.txtEmail, email.SpaceonEmail);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtComment, comment.linewithspace);
    await RequestDemoPage.checkValueNotSpaceonField(RequestDemoPage.txtEmail, comment.linewithspace);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtPhone,phone.PhoneNumberSpace);
    await RequestDemoPage.checkValueNotSpaceonField(RequestDemoPage.txtPhone,phone.PhoneNumberSpace);
});
/**
* Testcase 04: Verify input multi line on field Comment
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Input multi line on field Comment and press Enter 
*/
TestCase("Testcase 04: Verify input multi line on field Comment", async () => {
    await RequestDemoPage.navigateTo();
    await RequestDemoPage.enterTextonCommentField(comment.line1 + "\n" + comment.line2 + "\n" + comment.line3+ "\n" + comment.line4);
    await RequestDemoPage.checkValueonField(RequestDemoPage.txtComment,comment.line1);
    await RequestDemoPage.checkValueonField(RequestDemoPage.txtComment,comment.line2);
    await RequestDemoPage.checkValueonField(RequestDemoPage.txtComment,comment.line3);
    await RequestDemoPage.checkValueonField(RequestDemoPage.txtComment,comment.line4);
});
/**
* Testcase 05: Verify maxlength characters on fields
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Input long tring and press Enter 
*/
TestCase("Testcase 05: Verify maxlength characters on Comment fields", async () => {
    await RequestDemoPage.navigateTo();
    await RequestDemoPage.enterTextonCommentField(comment.longstring);
    await RequestDemoPage.checkValueonField(RequestDemoPage.txtComment,comment.longstringdisplayed);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtFirstName,name.longName);
    await RequestDemoPage.checkErrorMessage(RequestDemoPage.txtErrorFirstName, name.errorMessageLongString);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtLastName,name.longName);
    await RequestDemoPage.checkErrorMessage(RequestDemoPage.txtErrorLastName,name.errorMessageLongString);
   
});
/*
* Testcase 06: Verify error message with space character between name, host value email on Work Email
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Input string "activated gondola@gmail.com" on Work Email and press Enter
* 3. Input string "activated.gondola@g mail.com" on Work Email and press Enter
*/
TestCase("Testcase 06: Verify error message with space character between name, host value on Email", async () => {
    await RequestDemoPage.navigateTo();
    await RequestDemoPage.checkInvalidEmailFormat(email.spaceNameEmail, email.errorMessageInvalidEmail);
    await RequestDemoPage.checkInvalidEmailFormat(email.spaceDomainEmail, email.errorMessageInvalidEmail);
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
    await RequestDemoPage.navigateTo();
    await RequestDemoPage.checkInvalidEmailFormat(email.InvalidSign, email.errorMessageInvalidEmail);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtEmail, email.validEmail);
    await RequestDemoPage.checkInvalidEmailFormat(email.invalidDomain, email.errorMessageInvalidEmail);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtEmail, email.validEmail);
    await RequestDemoPage.checkInvalidEmailFormat(email.invalidName, email.errorMessageInvalidEmail);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtEmail, email.validEmail);
    await RequestDemoPage.checkInvalidEmailFormat(email.invalidEmail, email.errorMessageInvalidEmail);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtEmail, email.validEmail);
    await RequestDemoPage.checkInvalidEmailFormat(email.invalidMissedSign, email.errorMessageInvalidEmail);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtEmail, email.validEmail);
    await RequestDemoPage.checkInvalidEmailFormat(email.invalidMissedHost, email.errorMessageInvalidEmail);
});
/**
* Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. input Unicode string on field name  " Khánh らが 123" and press Enter
*/
TestCase("Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field", async () => {
    await RequestDemoPage.navigateTo();
    

    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtFirstName,name.UnicodeName);
    await RequestDemoPage.checkValueonField(RequestDemoPage.txtFirstName,name.UnicodeName);
    await RequestDemoPage.enterValidFormat(RequestDemoPage.txtLastName,name.UnicodeName);
    await RequestDemoPage.checkValueonField(RequestDemoPage.txtLastName,name.UnicodeName);
   
});
/**
* Testcase 09: Verify input special character on Name field
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. input special character on name "Test #.,{}'" and press Enter
*/
TestCase("Testcase 09: Verify input special character on Name field", async () => {
    await RequestDemoPage.navigateTo();
    await RequestDemoPage.invalidFormat(RequestDemoPage.txtFirstName,name.specialonName,RequestDemoPage.txtErrorFirstName,name.errorMessageSpecialEmail);
    await RequestDemoPage.invalidFormat(RequestDemoPage.txtLastName,name.specialonName,RequestDemoPage.txtErrorLastName,name.errorMessageSpecialEmail);
});
/**
* Testcase 10: Verify to display error message on phone filed
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input number phone with special character and Press Enter "(+44)-7911.1234"
*/
TestCase("Testcase 10: Verify to display error message with special character on number phone", async () => {
    await RequestDemoPage.navigateTo();
    await RequestDemoPage.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
    await RequestDemoPage.invalidFormatPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhone);
    await RequestDemoPage.invalidFormatPhone(phone.PhonewithLongNumber,phone.errorMessageLongNumberPhone);
    await RequestDemoPage.invalidFormatPhone(phone.PhonewithShortNumber,phone.errorMessageShortNumberPhone);
});
/**
* Testcase 11: Verify select one item on Select field
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Open dropdown menu to select item by click on Select  field
* 3. Select item on Select field
*/
TestCase("Testcase 11: Verify select one item on Select field", async () => {
    await RequestDemoPage.navigateTo();
    await gondola.select(RequestDemoPage.cmbSelectBusiness,valueItem.ItemManage);
    await RequestDemoPage.checkValueonField(RequestDemoPage.cmbSelectBusiness,valueItem.ItemManage);
    await gondola.select(RequestDemoPage.cmbSelectBusiness,valueItem.ItemOther);
    await RequestDemoPage.checkValueonField(RequestDemoPage.cmbSelectBusiness,valueItem.ItemOther);
    await RequestDemoPage.selectItemonSelectTestingNeeds(RequestDemoPage.chbSelectAll,valueItem.ItemAll);
}); 
/**
* Testcase 12: Verify select multi items on Select Services field
*
* 1. Navigate to https://testarchitect.com/product/testarchitect-team-and-testarchitect-enterprise
* 2. Open dropdown menu to select item by click on Select Services field
* 3. Select multi item on Select Services field
*/
TestCase("Testcase 12: Verify select multi items on Select Services field", async () => {
   await RequestDemoPage.navigateTo();
   await RequestDemoPage.selectItemonSelectTestingNeeds(RequestDemoPage.chbSelectWebTesting,valueItem.ItemWebTesting);
   await RequestDemoPage.selectItemonSelectTestingNeeds(RequestDemoPage.chbSelectMobileTesting,valueItem.ItemMobileTesting);
   await RequestDemoPage.selectItemonSelectTestingNeeds(RequestDemoPage.chbSelectAPITesting,valueItem.ItemAPITesting);
   await RequestDemoPage.selectItemonSelectTestingNeeds(RequestDemoPage.chbSelectDesktopTesting,valueItem.MultiItem);
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
   await RequestDemoPage.navigateTo();
   await RequestDemoPage.selectItemonSelectTestingNeeds(RequestDemoPage.chbSelectAll,valueItem.ItemAll);
   await RequestDemoPage.unselectItemonTestingNeeds(RequestDemoPage.chbSelectAll,valueItem.ItemAll);
   await RequestDemoPage.selectItemonSelectTestingNeeds(RequestDemoPage.chbSelectWebTesting,valueItem.ItemWebTesting);
   await RequestDemoPage.selectItemonSelectTestingNeeds(RequestDemoPage.chbSelectMobileTesting,valueItem.ItemMobileTesting);
   await RequestDemoPage.unselectItemonTestingNeeds(RequestDemoPage.chbSelectMobileTesting,valueItem.ItemMobileTesting);
});
