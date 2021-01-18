import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../pages/testarchitect_site/Login/loginPage";
import { name } from "../../../data/TestArchitect/name";
import signInPage from "../../../pages/testarchitect_site/Login/signInPage";
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
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);

    await signInPage.enterValidFormat(signInPage.txtFirstName,name.UnicodeName);
    await signInPage.checkValueonField(signInPage.txtFirstName,name.UnicodeName);
    await signInPage.enterValidFormat(signInPage.txtLastName,name.UnicodeName);
    await signInPage.checkValueonField(signInPage.txtLastName,name.UnicodeName);

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
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.invalidFormatName(signInPage.txtFirstName,name.specialonName,signInPage.txtErrorFirstName,name.errorMessageSpecialEmail);
    await signInPage.invalidFormatName(signInPage.txtLastName,name.specialonName,signInPage.txtErrorLastName,name.errorMessageSpecialEmail);
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
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.enterValidFormat(signInPage.txtFirstName,name.longName);
    await signInPage.checkValueonField(signInPage.txtFirstName,name.longNameDisplay);
    await signInPage.enterValidFormat(signInPage.txtLastName,name.longName);
    await signInPage.checkValueonField(signInPage.txtLastName,name.longNameDisplay);
});