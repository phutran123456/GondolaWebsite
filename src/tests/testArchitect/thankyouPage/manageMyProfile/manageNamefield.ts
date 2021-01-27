import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import homeTA from "../../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../../pages/testarchitect_site/Login/loginPage";
import { email } from "../../../../data/TestArchitect/email";
import { password } from "../../../../data/TestArchitect/password";
import { datatestTAsite } from "../../../../data/TestArchitect/datatestTAsite";
import { name } from "../../../../data/TestArchitect/name";
import manageMyAccountPage from "../../../../pages/testarchitect_site/thankyouPage/manageMyAccountPage";

TestModule("Manage field first name and last name on page");
/**
* Testcase 01: Verify input unicode, uppercase, lowscase and number string on Name field
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header and input valid username/password
* 3. Open Manage Profile page by select menu item
* 2. input Unicode string on field name  " Khánh らが 123" and press Enter
*/
TestCase("Testcase 01: Verify input unicode, uppercase, lowscase and number string on Name field", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkManageProfile);

    await manageMyAccountPage.enterValidFormat(manageMyAccountPage.txtFirstName,name.UnicodeName);
    await manageMyAccountPage.checkValueonField(manageMyAccountPage.txtFirstName,name.UnicodeName);
    await manageMyAccountPage.enterValidFormat(manageMyAccountPage.txtLastName,name.UnicodeName);
    await manageMyAccountPage.checkValueonField(manageMyAccountPage.txtLastName,name.UnicodeName);

});
/**
* Testcase 02: Verify input special character or Empty on Name field
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header and input valid username/password
* 3. Open Manage Profile page by select menu item
* 4. input special character on name "Test #.,{}'" or empty and press Enter
*/
TestCase("Testcase 02: Verify input special character on Name field", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkManageProfile);

    await manageMyAccountPage.invalidFormatName(manageMyAccountPage.txtFirstName,name.specialonName,manageMyAccountPage.txtErrorFirstName,name.errorMessageSpecialEmail);
    await manageMyAccountPage.invalidFormatName(manageMyAccountPage.txtLastName,name.specialonName,manageMyAccountPage.txtErrorLastName,name.errorMessageSpecialEmail);
    await manageMyAccountPage.invalidFormatName(manageMyAccountPage.txtFirstName,name.Empty,manageMyAccountPage.txtErrorFirstName,name.errorMessageEmpty);
    await manageMyAccountPage.invalidFormatName(manageMyAccountPage.txtLastName,name.Empty,manageMyAccountPage.txtErrorLastName,name.errorMessageEmpty);
});
/**
* Testcase 03: Verify string with maxlength over 100 characters
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header and input valid username/password
* 3. Open Manage Profile page by select menu item
* 4. Input string exceed 100 characters "Our codeless automation tool allows you to rapidly scale and maintain tests saving you valuable time Test are easily viewed in spreadsheet like editor"
*/
TestCase("Testcase 03: Verify input special character on Name field", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuChangePassword);
    await homeTA.clickorOpenLink(homeTA.lnkManageProfile);
    
    await manageMyAccountPage.enterValidFormat(manageMyAccountPage.txtFirstName,name.longName);
    await manageMyAccountPage.checkValueonField(manageMyAccountPage.txtFirstName,name.longNameDisplay);
    await manageMyAccountPage.enterValidFormat(manageMyAccountPage.txtLastName,name.longName);
    await manageMyAccountPage.checkValueonField(manageMyAccountPage.txtLastName,name.longNameDisplay);
});