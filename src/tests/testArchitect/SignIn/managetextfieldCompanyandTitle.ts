import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../pages/testarchitect_site/Login/loginPage";
import { datatestTAsite } from "../../../data/TestArchitect/datatestTAsite";
import { password } from "../../../data/TestArchitect/password";
import signInPage from "../../../pages/testarchitect_site/Login/signInPage";
import { Account} from "../../../data/Gondola/Account";

TestModule("Manage text field on page");
/**
** Testcase 01: Verify to input long string on textbox field Company and Title
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. click link Sign Up
* 4. input long tring
*
*/
TestCase("Testcase 01: Verify long string on field Phone", async () => {
    let acc:Account= await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.checkGUILastStep(acc);
    await signInPage.enterString(signInPage.txtCompany,datatestTAsite.longString,signInPage.txtTitle);
    await signInPage.checkValueonField(signInPage.txtCompany,datatestTAsite.longStringDisplay100characters);
    await signInPage.enterString(signInPage.txtTitle,datatestTAsite.longString,signInPage.txtCompany);
    await signInPage.checkValueonField(signInPage.txtTitle,datatestTAsite.longStringDisplay50characters);
   
});
/**
** Testcase 02: Verify to input unicode string on textbox field Company and Title
*
* 1. Navigate to https://stage1.testarchitect.com/
* 2. Click Login on header
* 3. click link Sign Up
* 4. input unicode
*
*/
TestCase("Testcase 02: Verify long string on field Phone", async () => {
    let acc:Account= await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.checkGUILastStep(acc);
    await signInPage.enterString(signInPage.txtCompany,datatestTAsite.uniCodeString,signInPage.txtTitle);
    await signInPage.checkValueonField(signInPage.txtCompany,datatestTAsite.uniCodeString);
    await signInPage.enterString(signInPage.txtTitle,datatestTAsite.uniCodeString,signInPage.txtCompany);
    await signInPage.checkValueonField(signInPage.txtTitle,datatestTAsite.uniCodeString);
   
});