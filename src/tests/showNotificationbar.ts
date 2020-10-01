import { TestCase, TestModule, gondola } from "gondolajs";
import HomeGondola from "../pages/gondola_test_site/HomeGondola";
import Login from "../pages/gondola_test_site/login/loginPage";
import { datatest }  from "../data/datatest";
import thankyouPage from "../pages/gondola_test_site/newWelcomePage/thankyouPage";
import pricePage from "../pages/gondola_test_site/pricing/pricingPage";
import contactSalePage from "../pages/gondola_test_site/newWelcomePage/contactsales";

TestModule("Check notification bar displayed after logging in without activite account");
/**
* Testcase 01: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. Click 'why gondola?' on header 
* 4. Verify notification bar displayed in page.
*/
TestCase("Testcase 01: Check notification bar displayed correctly when clicking on link 'why gondola?'", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_inactive,datatest.password_inactive);
    await thankyouPage.openLink(thankyouPage.lnkHeaderWhyGondola);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();

});
/**
* Testcase 02: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. Click 'Features' on header 
* 4. Verify notification bar displayed in Feature page.
*/
TestCase("Testcase 02: Check notification bar displayed correctly when clicking on link 'Features'", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_inactive,datatest.password_inactive);
    await thankyouPage.openLink(thankyouPage.lnkHeaderFeatures);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 03: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. Click 'Blog' on header 
* 4. Verify notification bar displayed in Blog page.
*/
TestCase("Testcase 03: Check notification bar displayed correctly when clicking on link 'Blog'", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_inactive,datatest.password_inactive);
    await thankyouPage.openLink(thankyouPage.lnkHeaderBlog);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 04: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. Click 'About Us' on header 
* 4. Verify notification bar displayed in About Us page.
*/
TestCase("Testcase 04: Check notification bar displayed correctly when clicking on link 'About us'", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_inactive,datatest.password_inactive);
    await thankyouPage.openLink(thankyouPage.lnkHeaderAboutUs);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 05: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. Click 'Download' on header 
* 4. Verify notification bar displayed in Download Us page.
*/
TestCase("Testcase 05: Check notification bar displayed correctly when clicking on Download", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_inactive,datatest.password_inactive);
    await thankyouPage.openLink(thankyouPage.lnkDownload);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 06: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. Click 'Pricing' on header 
* 4. Verify notification bar displayed in Pricing page.
*/
TestCase("Testcase 06: Check notification bar displayed correctly when clicking on Pricing", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_inactive,datatest.password_inactive);
    await thankyouPage.openLink(thankyouPage.lnkPricing);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 07: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. Click 'Contact Us' on header 
* 4. Verify notification bar displayed in Contact Us page.
*/
TestCase("Testcase 07: Check notification bar displayed correctly when clicking on Contact Us", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_inactive,datatest.password_inactive);
    await thankyouPage.openLink(thankyouPage.lnkContactUs);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 08: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Click on Pricing link on header
* 3. Login inactive account
* 4. Click 'Contact Sale' button on Pricing page
* 5. Verify notification bar displayed in page.
*/
TestCase("Testcase 08: Check notification bar displayed correctly when clicking on Contact Us of Pricing page", async () => {
    await thankyouPage.navigateTo();
    await pricePage.openLink(pricePage.lnkHeaderLogIn);
    await Login.login(datatest.username_inactive,datatest.password_inactive);
    await thankyouPage.checkGUI();
    await thankyouPage.closeNotificationBar();
    await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
    await thankyouPage.closeNotificationBar();
    await pricePage.openLink(pricePage.btContactSale);
    await contactSalePage.verifyNotificationBar();
    await contactSalePage.closeNotificationBar();
});
