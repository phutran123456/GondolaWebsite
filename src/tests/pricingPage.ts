import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../pages/gondola_test_site/HomeGondola";
import thankyouPage from "../pages/gondola_test_site/thankyouPage/thankyouPage";
import { datatest } from "../data/datatest";
import  pricingPage  from "../pages/gondola_test_site/pricing/pricingPage";
import remindPage from "../pages/gondola_test_site/Active account/remindPage";
import resendEmailPage from "../pages/gondola_test_site/Active account/resendEmailPage";

TestModule("Change behavior and text of Free Sign Up button on Pricing page");
/**
* Testcase 01: Verify GUI displayed correctly
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3. check "Free Sign Up" is displayed
*
*/
TestCase("Testcase 01: Verify GUI Pricing page displayed correctly before login", async () => {
    await homeGondolaPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
    await pricingPage.checkGUIbeforeLogin();
  
});    
/**
* Testcase 02: Verify login inactive account on Pricing page
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 2. login inaccount
* 3. click Pricing link on header
* 6. check "Free Download" is displayed on Pricing page
* 7. check Remind page is displayed
*/
TestCase("Testcase 02: Verify login inactive account on Pricing page ", async () => {
    await homeGondolaPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
    await pricingPage.loginInactiveAccount(datatest.username_inactive,datatest.password_inactive);
    await remindPage.openPage(remindPage.lnkHere);
    await resendEmailPage.checkMaximumNumberResendActive();
}); 

/**
* Testcase 03: Verify Pricing page with login active account
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3  login active account
* 4. click Pricing link on header
* 5. check "Free Download" is displayed
* 6. click FreeDownload button
* 7. Install page is displayed
* 
*/
TestCase("Testcase 03: Verify login active account on Pricing page ", async () => {
    await homeGondolaPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
    await pricingPage.loginActiveAccount(datatest.username_active,datatest.password_active);
}); 
/**
* Testcase 04:  Verify register new account on Pricing page 
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3  register new account
* 4. check "Thank you" page is displayed
* 5. click Pricing link on header
* 6. check "Free Download" is displayed
*
*/
TestCase("Testcase 04: Verify register new account on Pricing page ", async () => {
    
    await homeGondolaPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
    await pricingPage.registerNewAccount();
}); 