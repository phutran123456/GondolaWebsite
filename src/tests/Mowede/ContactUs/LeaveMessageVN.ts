import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import  leaveMessagePageVN from "../../../pages/Mowede/ContactVN/leaveMessagePageVN";
import { datatest } from "../../../data/POM/datatestPOM";
import { name } from "../../../data/TestArchitect/name";
import { email } from "../../../data/TestArchitect/email";
import { comment } from "../../../data/TestArchitect/comment";
import { phone } from "../../../data/Mowede/phone";
import { valueItem } from "../../../data/Mowede/valueItem";


TestModule("Manage field Name on become a Partner page");

/**
* Testcase 02: Verify display error message with empty fields
*
* 1. Navigate to https://stage1.mowede.com/vi/contact-us/leave-a-message
* 2. Click link "Send Message"
* 3. Verify display error message with empty fields
*/
TestCase("Testcase 02: Verify display error message with empty required fields", async () => {
    await leaveMessagePageVN.navigateTo();
    await leaveMessagePageVN.clickorOpenLink(leaveMessagePageVN.btSendMessage);
    await leaveMessagePageVN.checkErrorMessage(leaveMessagePageVN.txtErrorFirstName, name.errorMessageEmptyTenVN);
    await leaveMessagePageVN.checkErrorMessage(leaveMessagePageVN.txtErrorLastName, name.errorMessageEmptyHoVN);
    await leaveMessagePageVN.checkErrorMessage(leaveMessagePageVN.txtErrorEmail, email.errorMessageEmptyEmailVN);
    await leaveMessagePageVN.checkErrorMessage(leaveMessagePageVN.txtErrorSelectService, valueItem.errorMessageEmptyVN);
    await leaveMessagePageVN.checkErrorMessage(leaveMessagePageVN.txtErrorPhone, phone.errorMessageEmptyVN);
    await leaveMessagePageVN.checkErrorMessage(leaveMessagePageVN.txtErrorComment, datatest.errorMessageEmptyCommentVN);
    
});



/*
* Testcase 06: Verify error message with space character between name, host value email on Work Email
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Input string "activated gondola@gmail.com" on Work Email and press Enter
* 3. Input string "activated.gondola@g mail.com" on Work Email and press Enter
*/
TestCase("Testcase 06: Verify error message with space character between name, host value on Email", async () => {
    await leaveMessagePageVN.navigateTo();
    await leaveMessagePageVN.checkInvalidEmailFormat(email.spaceNameEmail, email.errorMessageInvalidEmailVN);
    await leaveMessagePageVN.checkInvalidEmailFormat(email.spaceDomainEmail, email.errorMessageInvalidEmailVN);
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
    await leaveMessagePageVN.navigateTo();
    await leaveMessagePageVN.checkInvalidEmailFormat(email.InvalidSign, email.errorMessageInvalidEmailVN);
    await leaveMessagePageVN.enterValidFormat(leaveMessagePageVN.txtEmail, email.validEmail);
    await leaveMessagePageVN.checkInvalidEmailFormat(email.invalidDomain, email.errorMessageInvalidEmailVN);
    await leaveMessagePageVN.enterValidFormat(leaveMessagePageVN.txtEmail, email.validEmail);
    await leaveMessagePageVN.checkInvalidEmailFormat(email.invalidCoparatorDomain, email.errorMessageInvalidCoparatorDomainVN);
    await leaveMessagePageVN.enterValidFormat(leaveMessagePageVN.txtEmail, email.validEmail);
    await leaveMessagePageVN.checkInvalidEmailFormat(email.invalidName, email.errorMessageInvalidEmailVN);
    await leaveMessagePageVN.enterValidFormat(leaveMessagePageVN.txtEmail, email.validEmail);
    await leaveMessagePageVN.checkInvalidEmailFormat(email.invalidEmail, email.errorMessageInvalidEmailVN);
    await leaveMessagePageVN.enterValidFormat(leaveMessagePageVN.txtEmail, email.validEmail);
    await leaveMessagePageVN.checkInvalidEmailFormat(email.invalidMissedSign, email.errorMessageInvalidEmailVN);
    await leaveMessagePageVN.enterValidFormat(leaveMessagePageVN.txtEmail, email.validEmail);
    await leaveMessagePageVN.checkInvalidEmailFormat(email.invalidMissedHost, email.errorMessageInvalidEmailVN);
});

/**
* Testcase 09: Verify input special character on Name field
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. input special character on name "Test #.,{}'" and press Enter
*/
TestCase("Testcase 09: Verify input special character on Name field", async () => {
    await leaveMessagePageVN.navigateTo();
    await leaveMessagePageVN.invalidFormatName(leaveMessagePageVN.txtFirstName,name.specialonName,leaveMessagePageVN.txtErrorFirstName,name.errorMessageSpecialVN);
    await leaveMessagePageVN.invalidFormatName(leaveMessagePageVN.txtLastName,name.specialonName,leaveMessagePageVN.txtErrorLastName,name.errorMessageSpecialVN);
});
/**
* Testcase 10: Verify to display error message on phone filed
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input number phone with special character and Press Enter "(+44)-7911.1234"
*/
TestCase("Testcase 10: Verify to display error message with special character on number phone", async () => {
    await leaveMessagePageVN.navigateTo();
    await leaveMessagePageVN.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhoneVN);
    await leaveMessagePageVN.enterValidFormat(leaveMessagePageVN.txtPhone,phone.NumberValid);
    await gondola.checkControlNotExist(leaveMessagePageVN.txtErrorPhone);
    await leaveMessagePageVN.invalidFormatPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhoneVN);
    await leaveMessagePageVN.enterValidFormat(leaveMessagePageVN.txtPhone,phone.NumberValid);
    await leaveMessagePageVN.invalidFormatPhone(phone.PhoneInvalid,phone.errorMessageInvalidNumberPhoneVN);
    await leaveMessagePageVN.enterValidFormat(leaveMessagePageVN.txtPhone,phone.NumberValid);
    await gondola.checkControlNotExist(leaveMessagePageVN.txtErrorPhone);
    await leaveMessagePageVN.invalidFormatPhone(phone.PhonewithShortNumber,phone.errorMessageShortNumberPhoneVN);
});
/**
* Testcase 11: Verify select one item on Select Services field
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Open dropdown menu to select item by click on Select Services field
* 3. Select item "Select all" on Select Services field
*/
TestCase("Testcase 11: Verify select one item on Select Services field", async () => {
    await leaveMessagePageVN.navigateTo();
    await leaveMessagePageVN.selectItemonSelectService(leaveMessagePageVN.chbSelectAll,valueItem.ItemAllVN);
}); 
/**
* Testcase 12: Verify select multi items on Select Services field
*
* 1. Navigate to https://stage1.mowede.com/contact-us/leave-a-message
* 2. Open dropdown menu to select item by click on Select Services field
* 3. Select multi item on Select Services field
*/
TestCase("Testcase 12: Verify select multi items on Select Services field", async () => {
   await leaveMessagePageVN.navigateTo();
   await leaveMessagePageVN.selectItemonSelectService(leaveMessagePageVN.chbSelectProductVN,valueItem.ItemProductVN);
   await leaveMessagePageVN.selectItemonSelectService(leaveMessagePageVN.chbSelectApplicationVN,valueItem.MultiItemVN);
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
   await leaveMessagePageVN.navigateTo();
   await leaveMessagePageVN.selectItemonSelectService(leaveMessagePageVN.chbSelectAll,valueItem.ItemAllVN);
   await leaveMessagePageVN.unselectItemonServices(leaveMessagePageVN.chbSelectAll,valueItem.ItemAllVN);
   await leaveMessagePageVN.selectItemonSelectService(leaveMessagePageVN.chbSelectProductVN,valueItem.ItemProductVN);
   await leaveMessagePageVN.selectItemonSelectService(leaveMessagePageVN.chbSelectApplicationVN,valueItem.MultiItemVN);
   await leaveMessagePageVN.unselectItemonServices(leaveMessagePageVN.chbSelectApplicationVN,valueItem.ItemApplicationVN);
});
