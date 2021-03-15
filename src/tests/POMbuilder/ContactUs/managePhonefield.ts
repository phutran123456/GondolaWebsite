import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import contactUsPage from "../../../pages/POM/contactUsPage";

import { phone } from "../../../data/TestArchitect/phone";
TestModule("Manage field Phone on page");
/**
** Testcase 01: Verify to display error message with wrong format on number phone
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. click link Sign Up
* 4. input number phone with special character "(+44)-7911.1234"
* 5. input number phone with letters "re3456789&:"
* 6. input number phone with invalid format  "44 +79111234"
*/
TestCase("Testcase 01: Verify display error message with empty field Phone", async () => {
    await contactUsPage.navigateTo();
    await contactUsPage.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
   // await signInPage.enterValidFormat(signInPage.txtPhone,phone.NumberValid);
    await contactUsPage.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
  //  await signInPage.enterValidFormat(signInPage.txtPhone,phone.NumberValid);
    await contactUsPage.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
});
/**
** Testcase 02: Verify to display error message with number phone with < 10 characters
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. click link Sign Up
* 4. input number phone with < 10 characters
*/
TestCase("Testcase 02: Verify display error message with short string on field Phone", async () => {
    await contactUsPage.navigateTo();
    await contactUsPage.invalidFormatPhone(phone.PhonewithShortNumber,phone.errorMessageShortNumberPhone);
});
