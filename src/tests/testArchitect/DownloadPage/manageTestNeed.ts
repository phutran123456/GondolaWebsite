import { TestCase, TestModule, gondola } from "gondolajs";
import downloadPage from "../../../pages/testarchitect_site/DownloadPage/downloadPage";
import { valueItem } from "../../../data/TestArchitect/valueItem";

TestModule("Manage field Testing Need on Download page");
/**
* Testcase 01: Verify display error message with empty field Testing Need
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Click Submit
*/
TestCase("Testcase 01: Verify display error message with empty field Testing Need", async () => {
     await downloadPage.navigateTo();
     await downloadPage.clickorOpenLink(downloadPage.bt_Submit);
     await downloadPage.checkErrorMessage(downloadPage.txtErrorMessageTestingNeeds,valueItem.errorMessageEmpty);
});
/**
* Testcase 02: Verify select one item on Testing Need field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Open dropdown menu to select item by click on Testing Need field
* 3. Select item "Select all" on Testing Need field
*/
TestCase("Testcase 02: Verify select one item on Testing Need field", async () => {
     await downloadPage.navigateTo();
     await downloadPage.selectItemonTestingNeeds(downloadPage.chbSelectAll,valueItem.ItemAll);
});
/**
* Testcase 03: Verify select multi items on Testing Need field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Open dropdown menu to select item by click on Testing Need field
* 3. Select multi item on Testing Need field
*/
TestCase("Testcase 03: Verify select multi items on Testing Need field", async () => {
    await downloadPage.navigateTo();
    await downloadPage.selectItemonTestingNeeds(downloadPage.chbSelectWebTesting,valueItem.ItemWebTesting);
    await downloadPage.selectItemonTestingNeeds(downloadPage.chbSelectMobileTesting,valueItem.ItemMobileTesting);
});
/**
* Testcase 04: Verify unselect item on Testing Need field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Open dropdown menu to select item by click on Testing Need field
* 3. Select item "Select all" on Testing Need field
* 4. Unselected item "Select all" on Testing Need field 
* 5. Select multi item "Web Testing, Mobile Testing" on Testing Need field
* 6. Unselected item "Web Testing" on Testing Need field 
*/
TestCase("Testcase 04: Verify select multi items on Testing Need field", async () => {
    await downloadPage.navigateTo();
    await downloadPage.selectItemonTestingNeeds(downloadPage.chbSelectAll,valueItem.ItemAll);
    await downloadPage.unselectItemonTestingNeeds(downloadPage.chbSelectAll,valueItem.ItemAll);
    await downloadPage.selectItemonTestingNeeds(downloadPage.chbSelectWebTesting,valueItem.ItemWebTesting);
    await downloadPage.selectItemonTestingNeeds(downloadPage.chbSelectMobileTesting,valueItem.ItemMobileTesting);
    await downloadPage.unselectItemonTestingNeeds(downloadPage.chbSelectWebTesting,valueItem.ItemWebTesting);
});