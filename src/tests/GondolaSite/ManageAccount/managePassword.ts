import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../../../pages/gondola_test_site/HomeGondola";
import loginPage from "../../../pages/gondola_test_site/login/loginPage";
import { datatest } from "../../../data/Gondola/datatest";
import thankyouPage from "../../../pages/gondola_test_site/thankyouPage/thankyouPage";
import remindPage from "../../../pages/gondola_test_site/Active account/remindPage";
import resendEmailPage from "../../../pages/gondola_test_site/Active account/resendEmailPage";
import registerPage from "../../../pages/gondola_test_site/register/registerPage";
import welcomePage from "../../../pages/gondola_test_site/thankyouPage/welcomePage";
import tempMailPage from "../../../pages/gondola_test_site/templateEmail/tempMailPage";
import { Account } from "../../../data/Gondola/Account";

TestModule("Manage password with register account");

/**
* Testcase 01 : Verify error message with empty on password field
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with empty password
* 3. Verify error message
*/
TestCase("Testcase 01: Verify to display error message on Register Page with login with empty password", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.createAccountwithErrorPassword(acc, datatest.passwordEmpty,datatest.errorMessageEmptyPassword);
});
/**
* Testcase 02 : Verify error message with input only number on password field
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with number password
* 3. Verify error message
*/
TestCase("Testcase 02: Verify to display error message on Register Page with only number on password", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.createAccountwithErrorPassword(acc, datatest.passwordNumber,datatest.errorMessagePassword);
});
/**
* Testcase 03 : Verify error message with input only letters on password field
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with string password
* 3. Verify error message
*/
TestCase("Testcase 03: Verify to display error message on Register Page with only letters on password", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.createAccountwithErrorPassword(acc, datatest.passwordString,datatest.errorMessagePassword);
});
/**
* Testcase 04 : Verify error message with input only special characters on password field
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with special password
* 3. Verify error message
*/
TestCase("Testcase 04: Verify to display error message on Register Page with only special characters on password", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.createAccountwithErrorPassword(acc, datatest.passwordSpecial,datatest.errorMessagePassword);
});
/**
* Testcase 05 : Verify error message with input short string on password field
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with short string on password field
* 3. Verify error message
*/
TestCase("Testcase 05: Verify to display error message on Register Page with only short string on password", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.createAccountwithErrorPassword(acc, datatest.passwordShort,datatest.errorMessageShortPassword);
});
/**
* Testcase 06 : Verify to display error message on Register Page with input spacekey on password field
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with spacekey on password field
* 3. Verify error message
*/
TestCase("Testcase 06:Verify to display error message on Register Page  with input mix of letters, numbers & symbols on password field", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.createAccountwithErrorPassword(acc, datatest.passwordSpaceKey,datatest.errorMessagePassword);
});
/**
* Testcase 07 : Verify input mix of letters, numbers & symbols on password field
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with mix of letters, numbers & symbols on password field
* 3. Verify register successfully
*/
TestCase("Testcase 07: Verify Register account successful with input mix of letters, numbers & symbols on password field", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.inputAccount(acc, datatest.passwordValid);
    await thankyouPage.checkGUI();
});