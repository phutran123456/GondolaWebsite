import { TestCase, TestModule, gondola } from "gondolajs";
import downloadPage from "../../../pages/testarchitect_site/DownloadPage/downloadPage";
import { phone } from "../../../data/TestArchitect/phone";

TestModule("Manage field Phone on Download page");
/**
* Testcase 01: Verify to display error message on Download Page with special character on number phone
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input number phone with special character and Press Enter "(+44)-7911.1234"
*/
TestCase("Testcase 01: Verify to display error message on Download Page with special character on number phone", async () => {
     await downloadPage.navigateTo();
     await downloadPage.invalidFormatPhone(phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
     
});
/**
* Testcase 02: Verify to display error message on Download Page with letters on number phone
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2.  input number phone with letters "re3456789&:" and Press Enter 
*/
TestCase("Testcase 02: Verify to display error message on Download Page with letters on number phone", async () => {
    await downloadPage.navigateTo();
    await downloadPage.invalidFormatPhone(phone.PhonewithString,phone.errorMessageInvalidNumberPhone);
    
});
/**
* Testcase 03: Verify to display error message on Download Page with invalid format on number phone
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input number phone with invalid format  "44 +79111234" and Press Enter
*/
TestCase("Testcase 03: Verify to display error message on Download Page with invalid format on number phone", async () => {
    await downloadPage.navigateTo();
    await downloadPage.invalidFormatPhone(phone.PhoneInvalid,phone.errorMessageInvalidNumberPhone);
    
});
/**
* Testcase 04: Verify to display error message on Download Page with <10 characters on number phone
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input number phone with < 10 characters and Press Enter
*/
TestCase("Testcase 04: Verify to display error message on Download Page with <10 characters on number phone", async () => {
    await downloadPage.navigateTo();
    await downloadPage.invalidFormatPhone(phone.PhonewithShortNumber,phone.errorMessageShortNumberPhone);
    
});
/**
* Testcase 05: Verify not displayed error with input mix of leading ‘+’ all characters should be numeric on phone field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input mix of leading ‘+’ all characters should be numeric on phone field and Press Enter  
*/
TestCase("Testcase 05: Verify not displayed error with input mix of leading ‘+’ all characters should be numeric on phone field", async () => {
    await downloadPage.navigateTo();
    await downloadPage.enterValidFormat(downloadPage.txtPhone,phone.NumberValid,downloadPage.txtOKMessagePhone);
});
/**
* Testcase 06: Verify auto trim first and last with space character on number phone
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input number phone with "  +44 7911 1234  " and Press Enter 
*/
TestCase("Testcase 06: Verify auto trim first and last with space character on number phone", async () => {
    await downloadPage.navigateTo();
    await downloadPage.enterValidFormat(downloadPage.txtPhone,phone.PhoneNumberSpace,downloadPage.txtOKMessagePhone);
    await downloadPage.checkValueNotSpaceonField(downloadPage.txtPhone,phone.PhoneNumberSpace);
});