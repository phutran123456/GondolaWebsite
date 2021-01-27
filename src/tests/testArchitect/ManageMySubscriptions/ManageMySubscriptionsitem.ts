import { TestCase, TestModule, gondola } from "@logigear/gondola";
import homeGondolaPage from "../../../pages/gondola_test_site/HomeGondola";
import login from "../../../pages/testarchitect_site/Login/loginPage";
import { datatestTAsite } from "../../../data/TestArchitect/datatestTAsite";
import { email } from "../../../data/TestArchitect/email";
import { password } from "../../../data/TestArchitect/password";
import thankyouPage from "./../../../pages/testarchitect_site/thankyouPage/thankyouPage";
import manageMySubscriptionsPage from "../../../pages/gondola_test_site/thankyouPage/manageMySubscriptionsPAge";
import welcomePage from "../../../pages/gondola_test_site/thankyouPage/welcomePage";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
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
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.inactivateemail, password.passwordValid);
    await homeTA.checkMenuItemNoExistonAccount(datatestTAsite.menuitemManageMySubscriptions);
    
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
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.login(email.validEmail, password.passwordValid);;
    await homeTA.checkMenuItemExistonAccount(datatestTAsite.menuitemManageMySubscriptions);
    await homeTA.clickorOpenLink(homeTA.lnkManageMySubcriptions);
    await gondola.switchBrowserTab("next");
    await manageMySubscriptionsPage.contentPage();
});
