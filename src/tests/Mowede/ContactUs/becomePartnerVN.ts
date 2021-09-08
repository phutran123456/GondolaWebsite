import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import  becomePartnerPageVN from "../../../pages/Mowede/ContactVN/becomePartnerVN";
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
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Click link "Send Message"
* 3. Verify display error message with empty fields
*/
TestCase("Testcase 02: Verify display error message with empty required fields", async () => {
    await becomePartnerPageVN.navigateTo();
    await becomePartnerPageVN.clickorOpenLink(becomePartnerPageVN.btSendMessage);
    await becomePartnerPageVN.checkErrorMessage(becomePartnerPageVN.txtErrorFirstName, name.errorMessageEmptyTenVN);
    await becomePartnerPageVN.checkErrorMessage(becomePartnerPageVN.txtErrorLastName, name.errorMessageEmptyHoVN);
    await becomePartnerPageVN.checkErrorMessage(becomePartnerPageVN.txtErrorEmail, email.errorMessageEmptyEmailVN);
    await becomePartnerPageVN.checkErrorMessage(becomePartnerPageVN.txtErrorSelectService, valueItem.errorMessageEmptyVN);
    await becomePartnerPageVN.checkErrorMessage(becomePartnerPageVN.txtErrorPhone, phone.errorMessageEmptyVN);
    await becomePartnerPageVN.checkErrorMessage(becomePartnerPageVN.txtErrorComment, datatest.errorMessageEmptyCommentVN);
    
});




/*
* Testcase 06: Verify error message with space character between name, host value email on Work Email
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Input string "activated gondola@gmail.com" on Work Email and press Enter
* 3. Input string "activated.gondola@g mail.com" on Work Email and press Enter
*/
TestCase("Testcase 06: Verify error message with space character between name, host value on Email", async () => {
    await becomePartnerPageVN.navigateTo();
    await becomePartnerPageVN.checkInvalidEmailFormat(email.spaceNameEmail, email.errorMessageInvalidEmailVN);
    await becomePartnerPageVN.checkInvalidEmailFormat(email.spaceDomainEmail, email.errorMessageInvalidEmailVN);
});
/**
* Testcase 07: Verify error message with invalid format email on Work Email
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
    await becomePartnerPageVN.navigateTo();
    await becomePartnerPageVN.checkInvalidEmailFormat(email.InvalidSign, email.errorMessageInvalidEmailVN);
    await becomePartnerPageVN.enterValidFormat(becomePartnerPageVN.txtEmail, email.validEmail);
    await becomePartnerPageVN.checkInvalidEmailFormat(email.invalidDomain, email.errorMessageInvalidEmailVN);
    await becomePartnerPageVN.enterValidFormat(becomePartnerPageVN.txtEmail, email.validEmail);
    await becomePartnerPageVN.checkInvalidEmailFormat(email.invalidCoparatorDomain, email.errorMessageInvalidCoparatorDomainVN);
    await becomePartnerPageVN.enterValidFormat(becomePartnerPageVN.txtEmail, email.validEmail);
    await becomePartnerPageVN.checkInvalidEmailFormat(email.invalidName, email.errorMessageInvalidEmailVN);
    await becomePartnerPageVN.enterValidFormat(becomePartnerPageVN.txtEmail, email.validEmail);
    await becomePartnerPageVN.checkInvalidEmailFormat(email.invalidEmail, email.errorMessageInvalidEmailVN);
    await becomePartnerPageVN.enterValidFormat(becomePartnerPageVN.txtEmail, email.validEmail);
    await becomePartnerPageVN.checkInvalidEmailFormat(email.invalidMissedSign, email.errorMessageInvalidEmailVN);
    await becomePartnerPageVN.enterValidFormat(becomePartnerPageVN.txtEmail, email.validEmail);
    await becomePartnerPageVN.checkInvalidEmailFormat(email.invalidMissedHost, email.errorMessageInvalidEmailVN);
});

/**
* Testcase 09: Verify input special character on Name field
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. input special character on name "Test #.,{}'" and press Enter
*/
TestCase("Testcase 09: Verify input special character on Name field", async () => {
    await becomePartnerPageVN.navigateTo();
    await becomePartnerPageVN.invalidFormatName(becomePartnerPageVN.txtFirstName,name.specialonName,becomePartnerPageVN.txtErrorFirstName,name.errorMessageSpecialVN);
    await becomePartnerPageVN.invalidFormatName(becomePartnerPageVN.txtLastName,name.specialonName,becomePartnerPageVN.txtErrorLastName,name.errorMessageSpecialVN);
});
/**
* Testcase 10: Verify to display error message on phone filed
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input number phone with special character and Press Enter "(+44)-7911.1234"
*/
TestCase("Testcase 10: Verify to display error message with special character on number phone", async () => {
    await becomePartnerPageVN.navigateTo();
    await becomePartnerPageVN.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhoneVN);
    await becomePartnerPageVN.enterValidFormat(becomePartnerPageVN.txtPhone,phone.NumberValid);
    await gondola.checkControlNotExist(becomePartnerPageVN.txtErrorPhone);
    await becomePartnerPageVN.invalidFormatPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhoneVN);
    await becomePartnerPageVN.enterValidFormat(becomePartnerPageVN.txtPhone,phone.NumberValid);
    await becomePartnerPageVN.invalidFormatPhone(phone.PhoneInvalid,phone.errorMessageInvalidNumberPhoneVN);
    await becomePartnerPageVN.enterValidFormat(becomePartnerPageVN.txtPhone,phone.NumberValid);
    await gondola.checkControlNotExist(becomePartnerPageVN.txtErrorPhone);
    await becomePartnerPageVN.invalidFormatPhone(phone.PhonewithShortNumber,phone.errorMessageShortNumberPhoneVN);
    

   // await becomePartnerPageVN.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
    //await becomePartnerPageVN.inputPhonewithItemPlag(becomePartnerPageVN.cbxFlagJPPhone,phone.CodeJP,phone.PhoneJP);
    //await becomePartnerPageVN.invalidFormatPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhone);
    //await becomePartnerPageVN.inputPhonewithItemPlag(becomePartnerPageVN.cbxFlagVNPhone,phone.CodeVN,phone.PhoneVN);
   // await becomePartnerPageVN.invalidFormatPhone(phone.PhonewithLongNumber,phone.errorMessageInvalidNumberPhone);
    //await becomePartnerPageVN.inputPhonewithItemPlag(becomePartnerPageVN.cbxFlagUSPhone,phone.CodeUS,phone.PhoneUS);
    //await becomePartnerPageVN.invalidFormatPhone(phone.PhonewithShortNumber,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 11: Verify select one item on Select Services field
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Open dropdown menu to select item by click on Select Services field
* 3. Select item "Select all" on Select Services field
*/
TestCase("Testcase 11: Verify select one item on Select Services field", async () => {
    await becomePartnerPageVN.navigateTo();
    await becomePartnerPageVN.selectItemonSelectService(becomePartnerPageVN.chbSelectAll,valueItem.ItemAllVN);
}); 
/**
* Testcase 12: Verify select multi items on Select Services field
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Open dropdown menu to select item by click on Select Services field
* 3. Select multi item on Select Services field
*/
TestCase("Testcase 12: Verify select multi items on Select Services field", async () => {
   await becomePartnerPageVN.navigateTo();
   await becomePartnerPageVN.selectItemonSelectService(becomePartnerPageVN.chbSelectProductVN,valueItem.ItemProductVN);
   await becomePartnerPageVN.selectItemonSelectService(becomePartnerPageVN.chbSelectApplicationVN,valueItem.MultiItemVN);
});
/**
* Testcase 13: Verify unselect item on Select Services field
*
* 1. Navigate to https://mowede.com/contact-us/become-a-partner
* 2. Open dropdown menu to select item by click on Select Services field
* 3. Select item "Select all" on Select Services
* 4. Unselected item "Select all" on Select Services
* 5. Select multi item "Web Testing, Mobile Testing" on Select Services field
* 6. Unselected item "Web Testing" on Select Services field 
*/
TestCase("Testcase 13: Verify select multi items on Select Services field", async () => {
   await becomePartnerPageVN.navigateTo();
   await becomePartnerPageVN.selectItemonSelectService(becomePartnerPageVN.chbSelectAll,valueItem.ItemAllVN);
   await becomePartnerPageVN.unselectItemonServices(becomePartnerPageVN.chbSelectAll,valueItem.ItemAllVN);
   await becomePartnerPageVN.selectItemonSelectService(becomePartnerPageVN.chbSelectProductVN,valueItem.ItemProductVN);
   await becomePartnerPageVN.selectItemonSelectService(becomePartnerPageVN.chbSelectApplicationVN,valueItem.MultiItemVN);
   await becomePartnerPageVN.unselectItemonServices(becomePartnerPageVN.chbSelectApplicationVN,valueItem.ItemApplicationVN);
});
