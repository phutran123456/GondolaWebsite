import { TestCase, TestModule, gondola, KeyCode } from "@logigear/gondola";
import contactUsPage from "../../../pages/POM/contactUsPage";
import { comment } from "../../../data/TestArchitect/comment";

TestModule("Manage field Name on Download page");
/**
* Testcase 01: Verify input multi line on field Comment
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input multi line on field Comment and press Enter 
*/
TestCase("Testcase 01: Verify input multi line on field Comment", async () => {
     await contactUsPage.navigateTo();
     await contactUsPage.enterTextonCommentField(comment.line1 + "\n" + comment.line2 + "\n" + comment.line3+ "\n" + comment.line4);
     await contactUsPage.checkValueonField(contactUsPage.txtComment,comment.line1);
     await contactUsPage.checkValueonField(contactUsPage.txtComment,comment.line2);
     await contactUsPage.checkValueonField(contactUsPage.txtComment,comment.line3);
     await contactUsPage.checkValueonField(contactUsPage.txtComment,comment.line4);
});
/**
* Testcase 02: Verify auto trim space character on first and last string on Comment field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input "     Test are easily       " and press Enter 
*/
TestCase("Testcase 02: Verify auto trim space character on first and last string on Comment field", async () => {
    await contactUsPage.navigateTo();
    await contactUsPage.enterTextonCommentField(comment.linewithspace);
    await contactUsPage.checkValueNotSpaceonField(contactUsPage.txtComment,comment.linewithspace);
    
});
/**
* Testcase 03: Verify maxlength 500 characters on Comment field
*
* 1. Navigate to https://stage1.testarchitect.com/new-free-download
* 2. Input long tring and press Enter 
*/
TestCase("Testcase 03: Verify maxlength 500 characters on Comment field", async () => {
    await contactUsPage.navigateTo();
    await contactUsPage.enterTextonCommentField(comment.longstring);
    await contactUsPage.checkValueonField(contactUsPage.txtComment,comment.longstringdisplayed);
    
});