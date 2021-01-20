import { KeyCode, TestCase, TestModule, gondola } from "@logigear/gondola";
import homeTA from "../../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../../pages/testarchitect_site/Login/loginPage";
import { name } from "../../../../data/TestArchitect/name";
import { email } from "../../../../data/TestArchitect/email";
import { password } from "../../../../data/TestArchitect/password";
import { phone } from "../../../../data/TestArchitect/phone";
import { datatestTAsite } from "../../../../data/TestArchitect/datatestTAsite";
import manageMyAccountPage from "../../../../pages/testarchitect_site/thankyouPage/manageMyAccountPage";
import { Account } from "../../../../data/Gondola/Account";
import signInPage from "../../../../pages/testarchitect_site/Login/signInPage";
import thankyouPage from "../../../../pages/testarchitect_site/thankyouPage/thankyouPage";
TestModule("Check GUI on sign In page");

/**
* Testcase 01: Verify GUI Manage Profile page
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Input valid username/ password
* 4. Open Manage Profile page by select menu item
* 5. check items on Manage Profile page
*/
TestCase("Testcase 01: Verify GUI Manage Profile page", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuManageMyProfile);
    await homeTA.clickorOpenLink(homeTA.lnkManageProfile);
    await manageMyAccountPage.checkGUI();
   
});

/**
* Testcase 02: Verify trim space character on first and end value of textbox field
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Input valid username/ password
* 4. Open Manage Profile page by select menu item
* 2. Enter space character on first and end value on field and press Enter
*/
TestCase("Testcase 02: Verify trim space character on first and end value of fields", async () => {
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuManageMyProfile);
    await homeTA.clickorOpenLink(homeTA.lnkManageProfile);
    await manageMyAccountPage.enterValidFormat(manageMyAccountPage.txtFirstName, name.spaceonName);
    await manageMyAccountPage.checkValueNotSpaceonField(manageMyAccountPage.txtFirstName, name.spaceonName);
    await manageMyAccountPage.enterValidFormat(manageMyAccountPage.txtLastName, name.spaceonName);
    await manageMyAccountPage.checkValueNotSpaceonField(manageMyAccountPage.txtLastName, name.spaceonName);
    
    
    await manageMyAccountPage.enterValidwithSpace(manageMyAccountPage.txtTitle, name.spaceonName, signInPage.cmbCountry);
    await manageMyAccountPage.checkValueNotSpaceonField(manageMyAccountPage.txtTitle, name.spaceonName);
    await manageMyAccountPage.enterValidwithSpace(manageMyAccountPage.txtCompany, name.spaceonName, signInPage.cmbCountry);
    await manageMyAccountPage.checkValueNotSpaceonField(manageMyAccountPage.txtCompany, name.spaceonName);
    await manageMyAccountPage.enterValidwithSpace(manageMyAccountPage.txtPhone, phone.PhoneNumberSpace, signInPage.cmbCountry);
    await manageMyAccountPage.checkValueNotSpaceonField(manageMyAccountPage.txtPhone, phone.NumberValid);
});
/**
* Testcase 03: Verify update infor successful new account with display thanks you page
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. Input valid username/ password
* 4. Open Manage Profile page by select menu item
* 5. Update value on field phone and click Save Changes button
* 6. Open Manage Profile page and check new value on Phone field
*/
TestCase("Testcase 03: Verify update infor successful on Manage Profile page", async () => {
    
    let account: Account = await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
  //  await thankyouPage.checkUsernameonHeader(account.firstName + account.lastname);
    await gondola.moveMouse(thankyouPage.lnkAccount, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.lnkManageProfile);
    await manageMyAccountPage.updateNumberPhoneSuccess(phone.NumberValid);
    await gondola.wait(10);
    await gondola.moveMouse(thankyouPage.lnkAccount, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.lnkManageProfile);
    await manageMyAccountPage.checkNumberPhoneSuccess(phone.NumberValid);
});
