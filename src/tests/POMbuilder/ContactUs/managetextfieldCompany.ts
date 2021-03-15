import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import contactUsPage from "../../../pages/POM/contactUsPage";
import { datatestTAsite } from "../../../data/TestArchitect/datatestTAsite";



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
TestCase("Testcase 01: Verify long string on field Company and Title", async () => {
    
    await contactUsPage.navigateTo();
    
    await contactUsPage.enterString(contactUsPage.txtCompany,datatestTAsite.longString,contactUsPage.txtComment);
    await contactUsPage.checkValueonField(contactUsPage.txtCompany,datatestTAsite.longStringDisplay100characters);
   // await signInPage.enterString(signInPage.txtTitle,datatestTAsite.longString,contactUsPage.txtComment);
    //await signInPage.checkValueonField(signInPage.txtTitle,datatestTAsite.longStringDisplay50characters);
   
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
TestCase("Testcase 02: Verify unicode string on field Company and Title", async () => {
   // let acc:Account= await signInPage.getRandomaccount();
    await contactUsPage.navigateTo();
   // await homeTA.clickorOpenLink(homeTA.menuLogin);
   // await login.clickorOpenLink(login.lnkSignUp);
   // await signInPage.checkGUILastStep(acc);
    await contactUsPage.enterString(contactUsPage.txtCompany,datatestTAsite.uniCodeString,contactUsPage.txtComment);
    await contactUsPage.checkValueonField(contactUsPage.txtCompany,datatestTAsite.uniCodeString);
   // await signInPage.enterString(signInPage.txtTitle,datatestTAsite.uniCodeString,signInPage.txtCompany);
   // await signInPage.checkValueonField(signInPage.txtTitle,datatestTAsite.uniCodeString);
   
});