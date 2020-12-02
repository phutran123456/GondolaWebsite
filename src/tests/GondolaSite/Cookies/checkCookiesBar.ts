
import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../../../pages/gondola_test_site/HomeGondola";
import cookiesNotifacationBar from "../../../pages/gondola_test_site/cookies/cookieNotificationBar";
import { datatest } from "../../../data/Gondola/datatest";
import thankyouPage from "../../../pages/gondola_test_site/thankyouPage/thankyouPage";
TestModule("Verify cookies bar ");

/**
* Testcase 01 : Verify cookies bar is displayed
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. check cookies notification bar
*
*/
TestCase("Testcase 01: Verify cookies is displayed ", async () => {
    await cookiesNotifacationBar.DeleteCookies();
    await homeGondolaPage.navigateTo();
    await cookiesNotifacationBar.checkCookies(datatest.contentMessageCookie);
});
/**
* Testcase 02 : Verify cookies bar still is displayed when click Decline button
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. check cookies notification bar when click Decline button
*
*/
TestCase("Testcase 02: Verify cookies is displayed when click Decline button", async () => {
    await cookiesNotifacationBar.DeleteCookies();
    await homeGondolaPage.navigateTo();
    await cookiesNotifacationBar.checkCookies(datatest.contentMessageCookie);
    await cookiesNotifacationBar.displayedCookies(thankyouPage.lnkHeaderFeatures);
    await cookiesNotifacationBar.displayedCookies(thankyouPage.lnkHeaderPricing);
    await cookiesNotifacationBar.displayedCookies(thankyouPage.lnkHeaderAboutUs);
    await cookiesNotifacationBar.displayedCookies(thankyouPage.lnkContactUs);
   
});
/**
* Testcase 03 : Verify cookies is displayed with refresh page after clicking Decline button on Cookie
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. check cookies notification bar with refresh page
*
*/
TestCase("Testcase 03: Verify cookies is displayed with refresh page after clicking Decline button on Cookie ", async () => {
    await cookiesNotifacationBar.DeleteCookies();
    await homeGondolaPage.navigateTo();
    await cookiesNotifacationBar.checkCookies(datatest.contentMessageCookie);
    await cookiesNotifacationBar.displayedCookieswithRefesh(thankyouPage.lnkHeaderFeatures);
    await cookiesNotifacationBar.displayedCookieswithRefesh(thankyouPage.lnkHeaderPricing);
    await cookiesNotifacationBar.displayedCookieswithRefesh(thankyouPage.lnkHeaderAboutUs);
    await cookiesNotifacationBar.displayedCookieswithRefesh(thankyouPage.lnkContactUs);
});
/**
* Testcase 04 : Verify cookies bar is not displayed after clicking Accept button on Cookie
*
* 1. Navigate to 'https://stage1.gondolatest.com/en/'
* 2. check cookies notification bar is not displayed after clicking Accept button on Cookie
*
*/
TestCase("Testcase 04: Verify cookies is not displayed ", async () => {
    await cookiesNotifacationBar.DeleteCookies();
    await homeGondolaPage.navigateTo();
    await cookiesNotifacationBar.checkCookies(datatest.contentMessageCookie);
    await cookiesNotifacationBar.clickButtononCookies(cookiesNotifacationBar.btAcceptCookies);
    await cookiesNotifacationBar.noDisplayedCookies(thankyouPage.lnkHeaderFeatures);
    await cookiesNotifacationBar.noDisplayedCookies(thankyouPage.lnkHeaderPricing);
    await cookiesNotifacationBar.noDisplayedCookies(thankyouPage.lnkHeaderAboutUs);
    await cookiesNotifacationBar.noDisplayedCookies(thankyouPage.lnkContactUs);

});