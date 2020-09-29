import { TestCase, TestModule, gondola } from "gondolajs";
import HomeGondola from "../pages/gondola_test_site/HomeGondola";
import Login from "../pages/gondola_test_site/loginPage";
import { datatest }  from "../data/datatest";
import thankyouPage from "../pages/gondola_test_site/thankyouPage";
import pricePage from "../pages/gondola_test_site/pricingPage";
import contactSalePage from "../pages/gondola_test_site/contactsales";

TestModule("Check notification bar displayed after logging in without activite account");
/**
* Testcase: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. Click 'why gondola?' on header 
* 4. Verify notification bar displayed in page.
* 5. Click 'Features' on header 
* 6. Verify notification bar displayed in page.
* 7. Click 'Blog' on header 
* 8. Verify notification bar displayed in page.
* 9. Click 'About Us' on header 
* 10. Verify notification bar displayed in page.
* 11. Click 'Download' button 
* 12. Verify notification bar displayed in page.
* 13. Click 'Pricing' link 
* 14. Verify notification bar displayed in page.
* 15. Click 'Contact Us' link 
* 16. Verify notification bar displayed in page.
*/
TestCase("Testcase 01: Check notification bar displayed correctly when clicking on link 'why gondola?'", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
    await thankyouPage.openLink(thankyouPage.lnkHeaderWhyGondola);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();

});
TestCase("Testcase 02: Check notification bar displayed correctly when clicking on link 'Features'", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
    await thankyouPage.openLink(thankyouPage.lnkHeaderFeatures);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
TestCase("Testcase 03: Check notification bar displayed correctly when clicking on link 'Blog'", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
    await thankyouPage.openLink(thankyouPage.lnkHeaderBlog);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
TestCase("Testcase 04: Check notification bar displayed correctly when clicking on link 'About us'", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
    await thankyouPage.openLink(thankyouPage.lnkHeaderAboutUs);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
TestCase("Testcase 05: Check notification bar displayed correctly when clicking on Download", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
    await thankyouPage.openLink(thankyouPage.lnkDownload);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
TestCase("Testcase 06: Check notification bar displayed correctly when clicking on Pricing", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
    await thankyouPage.openLink(thankyouPage.lnkPricing);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
TestCase("Testcase 07: Check notification bar displayed correctly when clicking on Contact Us", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
    await thankyouPage.openLink(thankyouPage.lnkContactUs);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase: Check notification bar displayed correctly
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
    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
    await thankyouPage.checkGUI();
    await thankyouPage.closeNotificationBar();
    await thankyouPage.openLink(thankyouPage.lnkHeaderPricing);
    await thankyouPage.closeNotificationBar();
    await pricePage.openLink(pricePage.btContactSale);
    await contactSalePage.verifyNotificationBar();
    await contactSalePage.closeNotificationBar();
});
