import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../pages/gondola_test_site/HomeGondola";
import thankyouPage from "../pages/gondola_test_site/thankyouPage";
import { datatest } from "../data/datatest";

TestModule("Pricing page");
/**
* Testcase 01: Check GUI displayed correctly
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3. check "Free Sign Up" is displayed
* 4. Register new account
* 5. check "Thank you page" and notification bar are displayed
* 6. click Pricing link on header
* 7. check "Free Download" is displayed on Pricing page
* 7. logout
* 8. login active account
* 9. click Pricing link on header
* 10. check "Free Download" is displayed
*
*/
TestCase("Testcase 01: Check GUI Pricing page displayed correctly", async () => {

});    
/**
* Testcase 02: Check register on Pricing page
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3. check "Free Sign Up" is displayed
* 4. Register new account
* 5. check "Free Download" is displayed
* 6. check notification bar is displayed
* 7. check thank you page displayed
*
*/
TestCase("Testcase 02: Check register on Pricing page ", async () => {

}); 
/**
* Testcase 03: Check login inactive account on Pricing page
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3. Login inactive account
* 4. check thank you page displayed 
* 5. check notification bar is displayed
* 6. click Pricing link on header
* 7. check "Free Download" is displayed
*/
TestCase("Testcase 03: Check login inactive account on Pricing page ", async () => {

}); 
/**
* Testcase 04: Check login active account on Pricing page 
*
* 1. Navigate to gondolatest.com
* 2. click Pricing link on header
* 3. Login active account
* 4. click Pricing link on header
* 5. check "Free Download" is displayed
*
*/
TestCase("Testcase 04: Check login active account on Pricing page ", async () => {

}); 