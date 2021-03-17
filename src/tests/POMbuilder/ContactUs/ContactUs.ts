import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import contactUsPage from "../../../pages/POM/contactUsPage";
import thankyouPage from "../../../pages/POM/thankyouPage";
import homePOMPage from "../../../pages/POM/homePOMPage";
import { datatest } from "../../../data/POM/datatestPOM";
import { name } from "../../../data/TestArchitect/name";
import { email } from "../../../data/TestArchitect/email";
TestModule("Manage field Name on Contact Us page");
/**
* Testcase 01: Verify contact us successfully
*
* 1. Navigate to https://stage1.testarchitect.com/pombuilder/contact.html
* 2. Input required field and click Send
* 3. Verify thank you page
*/
TestCase("Testcase 01: Verify contact us successfully", async () => {
    await contactUsPage.navigateTo();
    await contactUsPage.enterValidFormat(contactUsPage.txtFirstName,datatest.validFirstName);
    await contactUsPage.enterValidFormat(contactUsPage.txtLastName,datatest.validLastName);
    await contactUsPage.enterValidFormat(contactUsPage.txtEmail,datatest.validEmail);
    await contactUsPage.enterValidFormat(contactUsPage.txtComment,datatest.comment);
    await contactUsPage.clickorOpenLink(contactUsPage.btSend);
    await thankyouPage.checkGUI(thankyouPage.summary,datatest.content);
    await thankyouPage.clickorOpenLink(thankyouPage.btBacktoHomepage);
    await homePOMPage.checkGUI(homePOMPage.title,datatest.header);
});
/**
* Testcase 02: Verify display error message with empty fields
*
* 1. Navigate to https://stage1.testarchitect.com/pombuilder/contact.html
* 2. Click link "Send"
* 3. Verify display error message with empty fields
*/
TestCase("Testcase 02: Verify display error message with empty required fields", async () => {
    await contactUsPage.navigateTo();
    await contactUsPage.clickorOpenLink(contactUsPage.btSend);
    await contactUsPage.checkErrorMessage(contactUsPage.txtErrorFirstName, name.errorMessageEmpty);
    await contactUsPage.checkErrorMessage(contactUsPage.txtErrorLastName, name.errorMessageEmpty);
    await contactUsPage.checkErrorMessage(contactUsPage.txtErrorEmail, email.errorMessageEmptyEmail);
    await contactUsPage.checkErrorMessage(contactUsPage.txtErrorComment, name.errorMessageEmpty);
   
});
/**
* Testcase 03: Verify trim space character on first and end value of textbox field
*
* 1. Navigate to https://stage1.testarchitect.com/pombuilder/contact.html
* 2. Enter space character on first and end value on field and press Enter
*/
TestCase("Testcase 03: Verify trim space character on first and end value of fields", async () => {
    await contactUsPage.navigateTo();
    
    await contactUsPage.enterValidFormat(contactUsPage.txtFirstName, name.spaceonName);
    await contactUsPage.checkValueNotSpaceonField(contactUsPage.txtFirstName, name.spaceonName);
    await contactUsPage.enterValidFormat(contactUsPage.txtLastName, name.spaceonName);
    await contactUsPage.checkValueNotSpaceonField(contactUsPage.txtLastName, name.spaceonName);
    await contactUsPage.enterValidFormat(contactUsPage.txtEmail, email.SpaceonEmail);
    await contactUsPage.checkValueNotSpaceonField(contactUsPage.txtEmail, email.SpaceonEmail);

});