import { TestCase, TestModule, gondola } from "gondolajs";
import downloadPage from "../../../pages/testarchitect_site/downloadPage";
import { name } from "../../../data/TestArchitect/name";

TestModule("Manage field Name on Download page");
/**
* Testcase 01: Verify display error message with empty field name
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Click Submit
*/
TestCase("Testcase 01: Verify display error message with empty field name", async () => {
     await downloadPage.navigateTo();
     await downloadPage.clickorOpenLink(downloadPage.bt_Submit);
     await downloadPage.checkErrorMessage(downloadPage.txtErrorMessageFirstName,name.errorMessageEmpty);
     await downloadPage.checkErrorMessage(downloadPage.txtErrorMessageLastName,name.errorMessageEmpty);
});
/**
* Testcase 02: Verify trim space character on value of Name field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input "   test   logigear    " on Name field and press Enter
*/
TestCase("Testcase 02: Verify trim space character on value of Name field", async () => {
     await downloadPage.navigateTo();
     await downloadPage.enterValidFormat(downloadPage.txtFirstName,name.spaceonName,downloadPage.txtOKMessageFisrtName);
     await downloadPage.checkValueNotSpaceonField(downloadPage.txtFirstName,name.spaceonName);
     await downloadPage.enterValidFormat(downloadPage.txtLastName,name.spaceonName,downloadPage.txtOKMessageLastName);
     await downloadPage.checkValueNotSpaceonField(downloadPage.txtLastName,name.spaceonName);
});
/**
* Testcase 03: Verify input unicode, uppercase, lowscase and number string on Name field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input Unicode string on field name  " Khánh らが 123" and press Enter
*/
TestCase("Testcase 03: Verify input unicode, uppercase, lowscase and number string on Name field", async () => {
     await downloadPage.navigateTo();
     await downloadPage.enterValidFormat(downloadPage.txtFirstName,name.UnicodeName,downloadPage.txtOKMessageFisrtName);
     await downloadPage.checkValueonField(downloadPage.txtFirstName,name.UnicodeName);
     await downloadPage.enterValidFormat(downloadPage.txtLastName,name.UnicodeName,downloadPage.txtOKMessageLastName);
     await downloadPage.checkValueonField(downloadPage.txtLastName,name.UnicodeName);

});
/**
* Testcase 04: Verify input special character on Name field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. input special character on name "Test #.,{}'" and press Enter
*/
TestCase("Testcase 04: Verify input special character on Name field", async () => {
     await downloadPage.navigateTo();
     await downloadPage.invalidFormatFirstName(name.specialonName,name.errorMessageSpecialEmail);
     await downloadPage.invalidFormatLastName(name.specialonName,name.errorMessageSpecialEmail);
});
/**
* Testcase 05: Verify string with maxlength over 100 characters
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input string exceed 100 characters "Our codeless automation tool allows you to rapidly scale and maintain tests saving you valuable time Test are easily viewed in spreadsheet like editor"
*/
TestCase("Testcase 05: Verify input special character on Name field", async () => {
     await downloadPage.navigateTo();
     await downloadPage.enterValidFormat(downloadPage.txtFirstName,name.longName,downloadPage.txtOKMessageFisrtName);
     await downloadPage.checkValueonField(downloadPage.txtFirstName,name.longNameDisplay);
     await downloadPage.enterValidFormat(downloadPage.txtLastName,name.longName,downloadPage.txtOKMessageLastName);
     await downloadPage.checkValueonField(downloadPage.txtLastName,name.longNameDisplay);
});