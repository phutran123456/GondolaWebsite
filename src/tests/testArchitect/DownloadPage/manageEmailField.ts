import { TestCase, TestModule, gondola } from "gondolajs";
import downloadPage from "../../../pages/testarchitect_site/downloadPage";
import { email } from "../../../data/TestArchitect/email";

TestModule("Manage field Email on Download page");
/**
* Testcase 01: Verify display error message with empty field Work Email
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Click Submit
*/
TestCase("Testcase 01: Verify display error message with empty field Work Email", async () => {
     await downloadPage.navigateTo();
     await downloadPage.clickorOpenLink(downloadPage.bt_Submit);
     await downloadPage.checkErrorMessage(downloadPage.txtErrorMessageEmail,email.errorMessageEmptyEmail);
});
/**
* Testcase 02: Verify trim space character on first and end value of Work Email field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Enter "   activated.gondola@gmail.com   " on Work Email field and press Enter
*/
TestCase("Testcase 02: Verify trim space character on first and end value of Work Email field", async () => {
     await downloadPage.navigateTo();
     await downloadPage.enterValidFormat(downloadPage.txtWorkEmail,email.SpaceonEmail,downloadPage.txtOKMessageEmail);
     await downloadPage.checkValueonField(downloadPage.txtWorkEmail,email.SpaceonEmailDisplay);
});
/**
* Testcase 03: Verify error message with space character between name, host value email on Work Email
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input string "activated gondola@gmail.com" on Work Email and press Enter 
* 3. Input string "activated.gondola@g mail.com" on Work Email and press Enter 
*/
TestCase("Testcase 03: Verify error message with space character between name, host value email on Work Email", async () => {
     await downloadPage.navigateTo();
     await downloadPage.invalidFormatEmail(email.spaceNameEmail,email.errorMessageInvalidEmail);
     await downloadPage.invalidFormatEmail(email.spaceDomainEmail,email.errorMessageInvalidEmail);
});
/**
* Testcase 04: Verify error message with invalid format email on Work Email
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input invalid format email "testlogigear#logigear.com" on Work Email and press Enter  
* 3. Input valid address email "testlogigear@logigear.com" on Work Email and press Enter
* 4. Repeat step 2 and step 3 with invalid format email "testlogigear@"
* 5. Repeat step 2 and step 3 with invalid format email "@testlogigear.com" 
* 6. Repeat step 2 and step 3 with invalid format email "testlogigear.com"  
* 7. Repeat step 2 and step 3 with invalid format email "logigear@.com"   
*/
TestCase("Testcase 04: Verify error message with invalid format email on Work Email", async () => {
     await downloadPage.navigateTo();
     await downloadPage.invalidFormatEmail(email.InvalidSign,email.errorMessageInvalidEmail);
     await downloadPage.enterValidFormat(downloadPage.txtWorkEmail,email.validEmail,downloadPage.txtOKMessageEmail);
     await downloadPage.invalidFormatEmail(email.invalidDomain,email.errorMessageInvalidEmail);
     await downloadPage.enterValidFormat(downloadPage.txtWorkEmail,email.validEmail,downloadPage.txtOKMessageEmail);
     await downloadPage.invalidFormatEmail(email.invalidName,email.errorMessageInvalidEmail);
     await downloadPage.enterValidFormat(downloadPage.txtWorkEmail,email.validEmail,downloadPage.txtOKMessageEmail);
     await downloadPage.invalidFormatEmail(email.invalidEmail,email.errorMessageInvalidEmail);
     await downloadPage.enterValidFormat(downloadPage.txtWorkEmail,email.validEmail,downloadPage.txtOKMessageEmail);
     await downloadPage.invalidFormatEmail(email.invalidMissedSign,email.errorMessageInvalidEmail);
     await downloadPage.enterValidFormat(downloadPage.txtWorkEmail,email.validEmail,downloadPage.txtOKMessageEmail);
     await downloadPage.invalidFormatEmail(email.invalidMissedHost,email.errorMessageInvalidEmail);
     
});