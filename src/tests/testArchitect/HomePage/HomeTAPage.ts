import { TestCase, TestModule, gondola } from "gondolajs";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
import { valueItem } from "../../../data/TestArchitect/valueItem";

TestModule("Manage field Testing Need on Download page");
/**
* Testcase 01: Verify display error message with empty field Testing Need
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Click Submit
*/
TestCase("Testcase 01: Verify display error message with empty field Testing Need", async () => {
     await homeTA.navigateTo();
     await homeTA.clickorOpenLink(homeTA.Product);
     await homeTA.clickorOpenLink(homeTA.menuLogin);
     
    // await downloadPage.checkErrorMessage(downloadPage.txtErrorMessageTestingNeeds,valueItem.errorMessageEmpty);
});