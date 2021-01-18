import { TestCase, TestModule, gondola } from "@logigear/gondola";
import homeGondolaPage from "../../../pages/gondola_test_site/HomeGondola";
import { Account } from "../../../data/Gondola/Account";
import registerPage from "../../../pages/gondola_test_site/register/registerPage";
import { phone } from "../../../data/Gondola/phone";
import welcomePage from "../../../pages/gondola_test_site/thankyouPage/welcomePage";
import thankyouPage from "../../../pages/gondola_test_site/thankyouPage/thankyouPage";

TestModule("Manage phone on register account page");

/**
* Testcase 01 : Verify error message with empty on password field
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with <10 characters on number phone
* 3. Verify error message
*/
TestCase("Testcase 01: Verify to display error message on Register Page with <10 characters on number phone", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.createAccountwithErrorPhone(acc, phone.PhonewithShortNumber,phone.errorMessageShortNumberPhone);
});
/**
* Testcase 02 : Verify to display error message on Register Page with special character on number phone
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with  input number phone with special character and Press Enter
* 3. Verify error message
*/
TestCase("Testcase 02: Verify to display error message on Register Page with special character on number phone", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.createAccountwithErrorPhone(acc, phone.PhonewithSpecial,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 03 : Verify to display error message on Register Page with letters on number phone
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with input number phone with letters and Press Enter
* 3. Verify error message
*/
TestCase("Testcase 03: Verify to display error message on Register Page with letters on number phone", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.createAccountwithErrorPhone(acc, phone.PhonewithString,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 04 : Verify to display error message on Register Page with invalid format on number phone
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with input number phone with invalid format and Press Enter
* 3. Verify error message
*/
TestCase("Testcase 04: Verify to display error message on Register Page with invalid format on number phone", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.createAccountwithErrorPhone(acc, phone.PhoneInvalid,phone.errorMessageInvalidNumberPhone);
});
/**
* Testcase 05 : Verify Register account successful with input mix of leading ‘+’ all characters should be numeric on phone field
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account with input number phone with invalid format and Press Enter
* 3. Verify error message
*/
TestCase("Testcase 05: Verify Register account successful with input mix of leading ‘+’ all characters should be numeric on phone field", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.createAccountwithValidPhone(acc,phone.PhoneNumberValid);
    await thankyouPage.checkGUI();
});