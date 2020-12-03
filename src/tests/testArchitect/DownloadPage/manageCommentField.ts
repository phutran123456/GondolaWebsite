import { TestCase, TestModule, gondola, KeyCode } from "gondolajs";
import downloadPage from "../../../pages/testarchitect_site/downloadPage";
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
     await downloadPage.enterTextonCommentField(comment.line1);
     await downloadPage.enterTextonCommentField(comment.line2);
     await downloadPage.enterTextonCommentField(comment.line3);
     await downloadPage.checkValueonField(downloadPage.txtComment,comment.line1);
     await downloadPage.checkValueonField(downloadPage.txtComment,comment.line2);
     await downloadPage.checkValueonField(downloadPage.txtComment,comment.line3);
});
/**
* Testcase 02: Verify auto trim space character on first and last string on Comment field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input "     Test are easily       " and press Enter 
*/
TestCase("Testcase 02: Verify auto trim space character on first and last string on Comment field", async () => {
    await downloadPage.navigateTo();
    await downloadPage.enterTextonCommentField(comment.linewithspacedisplayed);
    await downloadPage.checkValueonField(downloadPage.txtComment,comment.linewithspacedisplayed);
    
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