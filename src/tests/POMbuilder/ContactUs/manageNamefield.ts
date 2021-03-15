import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import { name } from "../../../data/TestArchitect/name";
import contactUsPage from "../../../pages/POM/contactUsPage";
import { Account} from "../../../data/Gondola/Account";
TestModule("Manage field first name and last name on page");
/**
* Testcase 01: Verify input unicode, uppercase, lowscase and number string on Name field
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. click link Sign Up
* 2. input Unicode string on field name  " Khánh らが 123" and press Enter
*/
TestCase("Testcase 01: Verify input unicode, uppercase, lowscase and number string on Name field", async () => {
    await contactUsPage.navigateTo();
    

    await contactUsPage.enterValidFormat(contactUsPage.txtFirstName,name.UnicodeName);
    await contactUsPage.checkValueonField(contactUsPage.txtFirstName,name.UnicodeName);
    await contactUsPage.enterValidFormat(contactUsPage.txtLastName,name.UnicodeName);
    await contactUsPage.checkValueonField(contactUsPage.txtLastName,name.UnicodeName);

});
/**
* Testcase 02: Verify input special character on Name field
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. click link Sign Up
* 4. input special character on name "Test #.,{}'" and press Enter
*/
TestCase("Testcase 02: Verify input special character on Name field", async () => {
    await contactUsPage.navigateTo();
    await contactUsPage.invalidFormatName(contactUsPage.txtFirstName,name.specialonName,contactUsPage.txtErrorFirstName,name.errorMessageSpecialEmail);
    await contactUsPage.invalidFormatName(contactUsPage.txtLastName,name.specialonName,contactUsPage.txtErrorLastName,name.errorMessageSpecialEmail);
});
/**
* Testcase 03: Verify string with maxlength over 100 characters
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. click link Sign Up
* 4. Input string exceed 100 characters "Our codeless automation tool allows you to rapidly scale and maintain tests saving you valuable time Test are easily viewed in spreadsheet like editor"
*/
TestCase("Testcase 03: Verify input special character on Name field", async () => {
    await contactUsPage.navigateTo();
    
    await contactUsPage.enterValidFormat(contactUsPage.txtFirstName,name.longName);
    await contactUsPage.checkValueonField(contactUsPage.txtFirstName,name.longNameDisplay);
    await contactUsPage.enterValidFormat(contactUsPage.txtLastName,name.longName);
    await contactUsPage.checkValueonField(contactUsPage.txtLastName,name.longNameDisplay);
});