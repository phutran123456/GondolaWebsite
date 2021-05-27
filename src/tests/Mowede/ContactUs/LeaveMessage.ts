import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import  leaveMessagePage from "../../../pages/Mowede/ContactUs/leaveMessagePage";
import { datatest } from "../../../data/POM/datatestPOM";
import { name } from "../../../data/TestArchitect/name";
import { email } from "../../../data/TestArchitect/email";
import { comment } from "../../../data/TestArchitect/comment";
import { phone } from "../../../data/TestArchitect/phone";
import { valueItem } from "../../../data/Mowede/valueItem";
import LeaveMessagePage from "../../../pages/Mowede/ContactUs/leaveMessagePage";

TestModule("Manage field Name on become a Partner page");
/**
* Testcase 01: Verify register become-a-partner successfully
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Input required field and click Send
* 3. Verify no display error message
*/
TestCase("Testcase 01: Verify register become-a-partner successfully", async () => {
    await leaveMessagePage.navigateTo();
    await leaveMessagePage.checkGUI();
    await leaveMessagePage.sendMessage();
    
});
/**
* Testcase 02: Verify display error message with empty fields
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Click link "Send Message"
* 3. Verify display error message with empty fields
*/
TestCase("Testcase 02: Verify display error message with empty required fields", async () => {
    await leaveMessagePage.navigateTo();
    await leaveMessagePage.clickorOpenLink(leaveMessagePage.btSendMessage);
    await leaveMessagePage.checkErrorMessage(leaveMessagePage.txtErrorFirstName, name.errorMessageEmpty);
    await leaveMessagePage.checkErrorMessage(leaveMessagePage.txtErrorLastName, name.errorMessageEmpty);
    await leaveMessagePage.checkErrorMessage(leaveMessagePage.txtErrorEmail, email.errorMessageEmptyEmail);
    await leaveMessagePage.checkErrorMessage(leaveMessagePage.txtErrorSelectService, name.errorMessageEmpty);
    await leaveMessagePage.checkErrorMessage(leaveMessagePage.txtErrorPhone, name.errorMessageEmpty);
    await leaveMessagePage.checkErrorMessage(leaveMessagePage.txtErrorComment, name.errorMessageEmpty);
    
});

/**
* Testcase 03: Verify trim space character on first and end value of textbox field
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Enter space character on first and end value on field and press Enter
*/
TestCase("Testcase 03: Verify trim space character on first and end value of fields", async () => {
    await leaveMessagePage.navigateTo();
    
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtFirstName, name.spaceonName);
    await leaveMessagePage.checkValueNotSpaceonField(leaveMessagePage.txtFirstName, name.spaceonName);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtLastName, name.spaceonName);
    await leaveMessagePage.checkValueNotSpaceonField(leaveMessagePage.txtLastName, name.spaceonName);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtEmail, email.SpaceonEmail);
    await leaveMessagePage.checkValueNotSpaceonField(leaveMessagePage.txtEmail, email.SpaceonEmail);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtComment, comment.linewithspace);
    await leaveMessagePage.checkValueNotSpaceonField(leaveMessagePage.txtEmail, comment.linewithspace);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtPhone,phone.PhoneNumberSpace);
    await leaveMessagePage.checkValueNotSpaceonField(leaveMessagePage.txtPhone,phone.PhoneNumberSpace);
});
/**
* Testcase 04: Verify input multi line on field Comment
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Input multi line on field Comment and press Enter 
*/
TestCase("Testcase 04: Verify input multi line on field Comment", async () => {
    await leaveMessagePage.navigateTo();
    await leaveMessagePage.enterTextonCommentField(comment.line1 + "\n" + comment.line2 + "\n" + comment.line3+ "\n" + comment.line4);
    await leaveMessagePage.checkValueonField(leaveMessagePage.txtComment,comment.line1);
    await leaveMessagePage.checkValueonField(leaveMessagePage.txtComment,comment.line2);
    await leaveMessagePage.checkValueonField(leaveMessagePage.txtComment,comment.line3);
    await leaveMessagePage.checkValueonField(leaveMessagePage.txtComment,comment.line4);
});
/**
* Testcase 05: Verify maxlength characters on fields
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Input long tring and press Enter 
*/
TestCase("Testcase 05: Verify maxlength characters on Comment fields", async () => {
    await leaveMessagePage.navigateTo();
    await leaveMessagePage.enterTextonCommentField(comment.longstring);
    await leaveMessagePage.checkValueonField(leaveMessagePage.txtComment,comment.longstringdisplayed);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtFirstName,name.longName);
    await leaveMessagePage.checkErrorMessage(LeaveMessagePage.txtErrorFirstName, name.errorMessageLongString);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtLastName,name.longName);
    await leaveMessagePage.checkErrorMessage(leaveMessagePage.txtErrorLastName,name.errorMessageLongString);
});
/*
* Testcase 06: Verify error message with space character between name, host value email on Work Email
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Input string "activated gondola@gmail.com" on Work Email and press Enter
* 3. Input string "activated.gondola@g mail.com" on Work Email and press Enter
*/
TestCase("Testcase 06: Verify error message with space character between name, host value on Email", async () => {
    await leaveMessagePage.navigateTo();
    await leaveMessagePage.checkInvalidEmailFormat(email.spaceNameEmail, email.errorMessageInvalidEmail);
    await leaveMessagePage.checkInvalidEmailFormat(email.spaceDomainEmail, email.errorMessageInvalidEmail);
});
/**
* Testcase 07: Verify error message with invalid format email on Work Email
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Input invalid format email "testlogigear#logigear.com" on Work Email and press Enter
* 3. Input valid address email "testlogigear@logigear.com" on Work Email and press Enter
* 4. Repeat step 2 and step 3 with invalid format email "testlogigear@"
* 5. Repeat step 2 and step 3 with invalid format email "@testlogigear.com"
* 6. Repeat step 2 and step 3 with invalid format email "testlogigear.com"
* 7. Repeat step 2 and step 3 with invalid format email "logigear@.com"
*/
TestCase("Testcase 07: Verify error message with invalid format Email", async () => {
    await leaveMessagePage.navigateTo();
    await leaveMessagePage.checkInvalidEmailFormat(email.InvalidSign, email.errorMessageInvalidEmail);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtEmail, email.validEmail);
    await leaveMessagePage.checkInvalidEmailFormat(email.invalidDomain, email.errorMessageInvalidEmail);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtEmail, email.validEmail);
    await leaveMessagePage.checkInvalidEmailFormat(email.invalidName, email.errorMessageInvalidEmail);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtEmail, email.validEmail);
    await leaveMessagePage.checkInvalidEmailFormat(email.invalidEmail, email.errorMessageInvalidEmail);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtEmail, email.validEmail);
    await leaveMessagePage.checkInvalidEmailFormat(email.invalidMissedSign, email.errorMessageInvalidEmail);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtEmail, email.validEmail);
    await leaveMessagePage.checkInvalidEmailFormat(email.invalidMissedHost, email.errorMessageInvalidEmail);
});
/**
* Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. input Unicode string on field name  " Khánh らが 123" and press Enter
*/
TestCase("Testcase 08: Verify input unicode, uppercase, lowscase and number string on Name field", async () => {
    await leaveMessagePage.navigateTo();
    

    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtFirstName,name.UnicodeName);
    await leaveMessagePage.checkValueonField(leaveMessagePage.txtFirstName,name.UnicodeName);
    await leaveMessagePage.enterValidFormat(leaveMessagePage.txtLastName,name.UnicodeName);
    await leaveMessagePage.checkValueonField(leaveMessagePage.txtLastName,name.UnicodeName);

});
/**
* Testcase 09: Verify input special character on Name field
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. input special character on name "Test #.,{}'" and press Enter
*/
TestCase("Testcase 09: Verify input special character on Name field", async () => {
    await leaveMessagePage.navigateTo();
    await leaveMessagePage.invalidFormatName(leaveMessagePage.txtFirstName,name.specialonName,leaveMessagePage.txtErrorFirstName,name.errorMessageSpecialEmail);
    await leaveMessagePage.invalidFormatName(leaveMessagePage.txtLastName,name.specialonName,leaveMessagePage.txtErrorLastName,name.errorMessageSpecialEmail);
});
/**
* Testcase 10: Verify to display error message on phone filed
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input number phone with special character and Press Enter "(+44)-7911.1234"
*/
TestCase("Testcase 10: Verify to display error message with special character on number phone", async () => {
    await leaveMessagePage.navigateTo();
    await leaveMessagePage.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
    await leaveMessagePage.invalidFormatPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhone);
    await leaveMessagePage.invalidFormatPhone(phone.PhoneInvalid,phone.errorMessageInvalidNumberPhone);
    await leaveMessagePage.invalidFormatPhone(phone.PhonewithShortNumber,phone.errorMessageShortNumberPhone);
});
/**
* Testcase 11: Verify select one item on Select Services field
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Open dropdown menu to select item by click on Select Services field
* 3. Select item "Select all" on Select Services field
*/
TestCase("Testcase 11: Verify select one item on Select Services field", async () => {
    await leaveMessagePage.navigateTo();
    await leaveMessagePage.selectItemonSelectService(leaveMessagePage.chbSelectAll,valueItem.ItemAll);
}); 
/**
* Testcase 12: Verify select multi items on Select Services field
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Open dropdown menu to select item by click on Select Services field
* 3. Select multi item on Select Services field
*/
TestCase("Testcase 12: Verify select multi items on Select Services field", async () => {
   await leaveMessagePage.navigateTo();
   await leaveMessagePage.selectItemonSelectService(leaveMessagePage.chbSelectApplicationMaintenanceandModernization,valueItem.ItemApplicationMaintenanceandModernization);
   await leaveMessagePage.selectItemonSelectService(leaveMessagePage.chbSelectMobile,valueItem.MultiItem);
});
/**
* Testcase 13: Verify unselect item on Select Services field
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Open dropdown menu to select item by click on Select Services field
* 3. Select item "Select all" on Select Services
* 4. Unselected item "Select all" on Select Services
* 5. Select multi item "Web Testing, Mobile Testing" on Select Services field
* 6. Unselected item "Web Testing" on Select Services field 
*/
TestCase("Testcase 13: Verify select multi items on Select Services field", async () => {
   await leaveMessagePage.navigateTo();
   await leaveMessagePage.selectItemonSelectService(leaveMessagePage.chbSelectAll,valueItem.ItemAll);
   await leaveMessagePage.unselectItemonServices(leaveMessagePage.chbSelectAll,valueItem.ItemAll);
   await leaveMessagePage.selectItemonSelectService(leaveMessagePage.chbSelectApplicationMaintenanceandModernization,valueItem.ItemApplicationMaintenanceandModernization);
   await leaveMessagePage.selectItemonSelectService(leaveMessagePage.chbSelectMobile,valueItem.MultiItem);
   await leaveMessagePage.unselectItemonServices(leaveMessagePage.chbSelectMobile,valueItem.ItemMobile);
});
