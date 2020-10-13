import { TestCase, TestModule, gondola } from "gondolajs";
import homeGondolaPage from "../pages/gondola_test_site/HomeGondola";
import loginPage from "../pages/gondola_test_site/login/loginPage";
import { datatest } from "../data/datatest";
import thankyouPage from "../pages/gondola_test_site/thankyouPage/thankyouPage";
import manageMySubscriptionsPage from "../pages/gondola_test_site/thankyouPage/manageMySubscriptionsPAge";
import welcomePage from "../pages/gondola_test_site/thankyouPage/welcomePage";
TestModule("Verify context menu “Manage My Subscriptions”");

/**
* Testcase 01 : Verify Context menu Manage My Subscriptions on menu Account is hidden when login with inactive account
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. Handle notification bar displayed in page.
* 4. Click on menu "My Account"
* 5. Verify context menu “Manage My Subscriptions” will be hidden
*/
TestCase("Testcase 01: Verify Context menu Manage My Subscriptions on menu Account is hidden when login with inactive account", async () => {
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_inactive, datatest.password_inactive);
    await welcomePage.verifyNotificationBar();
    await welcomePage.closeNotificationBar();
    await welcomePage.checkMenuItemNoExistonAccount(datatest.menuitem);
});
/**
* Testcase 02 : Verify context menu “Manage My Subscriptions” is displayed  when clicking on active account link
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login active account
* 3. Handle notification bar displayed in page.
* 4. Click on menu "My Account"
* 5. Verify context menu “Manage My Subscriptions” will be display
*/
TestCase("Testcase 02: Verify context menu Manage My Subscriptions is displayed  when clicking on active account link", async () => {
    await homeGondolaPage.navigateTo();
    await homeGondolaPage.login();
    await loginPage.login(datatest.username_active, datatest.password_active);
    await welcomePage.checkMenuItemExistonAccount(datatest.menuitem);
    await welcomePage.openLink(welcomePage.lnkManageMySubcriptions);
    await gondola.switchBrowserTab("next");
    await manageMySubscriptionsPage.contentPage();
});
