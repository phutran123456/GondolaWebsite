import { TestCase, TestModule, gondola } from "gondolajs";
import HomeGondola from "../pages/gondola_test_site/HomeGondola";
import Login from "../pages/gondola_test_site/login/loginPage";
import { datatest }  from "../data/datatest";
import thankyouPage from "../pages/gondola_test_site/newWelcomePage/thankyouPage";
TestModule("Check context menu “Manage My Subscriptions” status after login with inactive account and vice versa.");
/**
* Testcase 01 : Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account 
* 3. Handle notification bar displayed in page. 
* 4. Click on menu "My Account"
* 5. Verify context menu “Manage My Subscriptions” will be hidden 
*/
TestCase("Testcase 01: Context menu “Manage My Subscriptions” on menu Account is hidden when login with inactive account", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_inactive,datatest.password_inactive);

    //let text = await gondola.getPopupText();
    //if(text != undefined)
   // {
    //    await gondola.clickPopup("No thanks");
    //}
    await thankyouPage.closeNotificationBar();
    await thankyouPage.checkMenuItemNoExistonAccount(datatest.menuitem);
    

});
/**
* Testcase 02 : Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login active account
* 3. Handle notification bar displayed in page. 
* 4. Click on menu "My Account"
* 5. Verify context menu “Manage My Subscriptions” will be display
*/
TestCase("Testcase 02: Context menu “Manage My Subscriptions” on menu Account is displayed when login with activated account", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_active,datatest.password_active);
    //let text = await gondola.getPopupText();
    //if(text != undefined)
    //{
    //    await gondola.clickPopup("Never");
   // }
   
    await thankyouPage.checkMenuItemExistonAccount(datatest.menuitem);
    

});