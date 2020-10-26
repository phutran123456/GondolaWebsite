import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../../pages/gondola_test_site/HomeGondola";
import loginPage from "../../pages/gondola_test_site/login/loginPage";
import { datatest }  from "../../data/datatest";
import thankyouPage from "../../pages/gondola_test_site/thankyouPage/thankyouPage";
import pricingPage from "../../pages/gondola_test_site/pricing/pricingPage";
import contactSalePage from "../../pages/gondola_test_site/thankyouPage/contactSalePage";
import remindPage from "../../pages/gondola_test_site/Active account/remindPage";
import tempMailPage from "../../pages/gondola_test_site/templateEmail/tempMailPage";
import { Account } from "../../data/Account";
import  registerPage  from "../../pages/gondola_test_site/register/registerPage";

TestModule("notification bar displayed after logging in without activite account");
/**
* Testcase 01: Verify notification bar displayed correctly when clicking on link 'why gondola?'
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'why gondola?' on header 
* 4. Verify notification bar displayed in page.
*/
TestCase("Testcase 01: Verify notification bar displayed correctly when clicking on link 'why gondola?'", async () => {
   
    let acc:Account= await registerPage.getRandomaccount();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.openLink(thankyouPage.lnkHeaderWhyGondola);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();

});
/**
* Testcase 02: Verify notification bar displayed correctly when clicking on link 'Features'
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'Features' on header 
* 4. Verify notification bar displayed in Feature page.
*/
TestCase("Testcase 02: Verify notification bar displayed correctly when clicking on link 'Features'", async () => {
   
    let acc:Account= await registerPage.getRandomaccount();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.openLink(thankyouPage.lnkHeaderFeatures);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 03: Verify notification bar displayed correctly when clicking on link 'Blog'
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'Blog' on header 
* 4. Verify notification bar displayed in Blog page.
*/
TestCase("Testcase 03: Verify notification bar displayed correctly when clicking on link 'Blog'", async () => {
   
    let acc:Account= await registerPage.getRandomaccount();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.openLink(thankyouPage.lnkHeaderBlog);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 04: Verify notification bar displayed correctly when clicking on link 'About us'
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'About Us' on header 
* 4. Verify notification bar displayed in About Us page.
*/
TestCase("Testcase 04: Verify notification bar displayed correctly when clicking on link 'About us'", async () => {
    
    let acc:Account= await registerPage.getRandomaccount();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.openLink(thankyouPage.lnkHeaderAboutUs);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});

/**
* Testcase 05: Verify notification bar displayed correctly when clicking on Pricing
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'Pricing' on header 
* 4. Verify notification bar displayed in Pricing page.
*/
TestCase("Testcase 05: Verify notification bar displayed correctly when clicking on Pricing", async () => {
    
    let acc:Account= await registerPage.getRandomaccount();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.openLink(thankyouPage.lnkPricing);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 06: Verify notification bar displayed correctly when clicking on Contact Us
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'Contact Us' on header 
* 4. Verify notification bar displayed in Contact Us page.
*/
TestCase("Testcase 06: Verify notification bar displayed correctly when clicking on Contact Us", async () => {
   
    let acc:Account= await registerPage.getRandomaccount();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.openLink(thankyouPage.lnkContactUs);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 07: Verify notification bar displayed correctly when clicking on Contact Us of Pricing page
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Click on Pricing link on header
* 3. Register new account
* 4. Click 'Contact Sale' button on Pricing page
* 5. Verify notification bar displayed in page.
*/
TestCase("Testcase 07: Verify notification bar displayed correctly when clicking on Contact Us of Pricing page", async () => {
    let acc:Account= await registerPage.getRandomaccount();
    await gondola.openNewTab();
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.signup();
    await registerPage.InputInfoUser(acc);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
    await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
    await thankyouPage.closeNotificationBar();
    await pricingPage.openLink(pricingPage.btContactSale);
    await contactSalePage.verifyNotificationBar();
    await contactSalePage.closeNotificationBar();
});
