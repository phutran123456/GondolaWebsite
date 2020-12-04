import { TestCase, TestModule, gondola, KeyCode } from "gondolajs";
import downloadPage from "../../../pages/testarchitect_site/downloadPage";
import { name } from "../../../data/TestArchitect/name";
import { email } from "../../../data/TestArchitect/email";
import { valueItem } from "../../../data/TestArchitect/valueItem";
import { datatestTAsite } from "../../../data/TestArchitect/datatestTAsite";
import LicenseAgreementPage from "../../../pages/testarchitect_site/LicenseAgreementPage";
import PrivacyPolicyPage from "../../../pages/testarchitect_site/PrivacyPolicyPage";
import  thankyouPage  from "../../../pages/testarchitect_site/thankyouTAPage";

TestModule("Manage field Name on Download page");
/**
* Testcase 01: Verify error message is displayed below checkbox "I Agree" when click submit button without tick on checkbox "I Agree"
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input required fields 
* 3. Untick checkbox "I Agree" and click Submit download Request
*/
TestCase("Testcase 01: Verify error message is displayed below checkbox I Agree when click submit button without tick on checkbox I Agree", async () => {
     await downloadPage.navigateTo();
     await downloadPage.enterValidFormat(downloadPage.txtFirstName,name.validFirstName,downloadPage.txtOKMessageFisrtName);
     await downloadPage.enterValidFormat(downloadPage.txtLastName,name.validLastName,downloadPage.txtOKMessageFisrtName);
     await downloadPage.enterValidFormat(downloadPage.txtWorkEmail,email.validEmail,downloadPage.txtOKMessageEmail);
     await downloadPage.selectItemonTestingNeeds(downloadPage.chbSelectAll,valueItem.ItemAll);
     await gondola.click(downloadPage.bt_Submit);
     let text = await (await gondola.getText(downloadPage.txtErrorMessageAccept)).includes(datatestTAsite.errorMessageEmpty);
     gondola.checkEqual(text, true, "match text" + datatestTAsite.errorMessageEmpty);

});
/**
* Testcase 02: Verify open New page when click on link "TestArchitect's End User
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. click link "TestArchitect's End User" on checkbox "I Agree"
* 3. click link "Privacy Policy" on checkbox "I Agree" 
*/
TestCase("Testcase 02: Verify open New page when click on link TestArchitect's End User", async () => {
    await downloadPage.navigateTo();
    await downloadPage.openLinkonAgree(downloadPage.lnkLicenseAgreement,LicenseAgreementPage.txttitle);
    await downloadPage.openLinkonAgree(downloadPage.lnkPrivacyPolicy,PrivacyPolicyPage.txttitle);
});
/**
* Testcase 03: Verify email to send User's email "
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input required fields 
* 3. Tick checkbox "I Agree" and click Submit download Request
*/
TestCase("Testcase 03: Verify email to send User's email", async () => {
    await downloadPage.navigateTo();
    await downloadPage.enterValidFormat(downloadPage.txtFirstName,name.validFirstName,downloadPage.txtOKMessageFisrtName);
    await downloadPage.enterValidFormat(downloadPage.txtLastName,name.validLastName,downloadPage.txtOKMessageFisrtName);
    await downloadPage.enterValidFormat(downloadPage.txtWorkEmail,email.validEmail,downloadPage.txtOKMessageEmail);
    await downloadPage.selectItemonTestingNeeds(downloadPage.chbSelectAll,valueItem.ItemAll);
    await downloadPage.clickorOpenLink(downloadPage.chbAccept);
    await gondola.click(downloadPage.bt_Submit);
    await gondola.waitForClickable(thankyouPage.txttitle,30);
    await gondola.checkControlExist(thankyouPage.txttitle);
    

});