import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../pages/gondola_test_site/HomeGondola";
import thankyouPage from "../pages/gondola_test_site/newWelcomePage/thankyouPage";
import { datatest } from "../data/datatest";
import  pricingPage  from "../pages/gondola_test_site/pricing/pricingPage";


TestModule("Change behavior and text of Free Sign Up button on Pricing page");
/**
* Testcase 01: Check GUI displayed correctly
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3. check "Free Sign Up" is displayed
*
*/
TestCase("Testcase 01: Check GUI Pricing page displayed correctly before login", async () => {
    await homeGondolaPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
    await pricingPage.checkGUIbeforeLogin();
  
});    
/**
* Testcase 02: Check Pricing page with login inactive account
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 2. login inaccount
* 3. click Pricing link on header
* 6. check "Free Download" is displayed on Pricing page
* 7. check Remind page is displayed
*/
TestCase("Testcase 02: Check login inactive account on Pricing page ", async () => {
    await homeGondolaPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
    await pricingPage.loginInactiveAccount(datatest.username_inactive,datatest.password_inactive);

}); 

/**
* Testcase 03: Check Pricing page with login active account
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3  login active account
* 4. check welcome page is displayed
* 5. click Pricing link on header
* 6. check "Free Download" is displayed
* 7. Install page is displayed
*/
TestCase("Testcase 03: Check login active account on Pricing page ", async () => {
    await homeGondolaPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
    await pricingPage.loginActiveAccount(datatest.username_active,datatest.password_active);
}); 
/**
* Testcase 04: Check Pricing page with register new account
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3  register new account
* 4. check "Thank you" page is displayed
* 5. click Pricing link on header
* 6. check "Free Download" is displayed
*
*/
TestCase("Testcase 04: Check register new account on Pricing page ", async () => {
    
    await homeGondolaPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
    await pricingPage.registerNewAccount();
}); 