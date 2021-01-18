import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import downloadPage from "../../../pages/testarchitect_site/DownloadPage/downloadPage";
import { comment } from "../../../data/TestArchitect/comment";

TestModule("Manage field Name on Download page");
/**
* Testcase 01: Verify input multi line on field Comment
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input multi line on field Comment and press Enter 
*/
TestCase("Testcase 01: Verify input multi line on field Comment", async () => {
     await downloadPage.navigateTo();
     await downloadPage.enterTextonCommentField(comment.line1 + "\n" + comment.line2 + "\n" + comment.line3+ "\n" + comment.line4);
     await downloadPage.checkValueonField(downloadPage.txtComment,comment.line1);
     await downloadPage.checkValueonField(downloadPage.txtComment,comment.line2);
     await downloadPage.checkValueonField(downloadPage.txtComment,comment.line3);
     await downloadPage.checkValueonField(downloadPage.txtComment,comment.line4);
});
/**
* Testcase 02: Verify auto trim space character on first and last string on Comment field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input "     Test are easily       " and press Enter 
*/
TestCase("Testcase 02: Verify auto trim space character on first and last string on Comment field", async () => {
    await downloadPage.navigateTo();
    await downloadPage.enterTextonCommentField(comment.linewithspace);
    await downloadPage.checkValueNotSpaceonField(downloadPage.txtComment,comment.linewithspace);
    
});
/**
* Testcase 03: Verify maxlength 500 characters on Comment field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input long tring and press Enter 
*/
TestCase("Testcase 03: Verify maxlength 500 characters on Comment field", async () => {
    await downloadPage.navigateTo();
    await downloadPage.enterTextonCommentField(comment.longstring);
    await downloadPage.checkValueonField(downloadPage.txtComment,comment.longstringdisplayed);
    
});