import { TestCase, TestModule, gondola } from "gondolajs";
import HomeGondola from "../pages/gondola_test_site/HomeGondola";
import Login from "../pages/gondola_test_site/loginPage";
import { datatest }  from "../data/datatest";
import thankyouPage from "../pages/gondola_test_site/thankyouPage";
TestModule("Check context menu “Manage My Subscriptions” after logging in without activite account and vice versa.");
/**
* Testcase 01 : Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account 
* 3. Handle notification bar displayed in page. 
* 4. Click on menu "My Account"
* 5. Verify context menu “Manage My Subscriptions” will be hidden 
*/
TestCase("Testcase 01: Check context menu “Manage My Subscriptions” is hidden correctly when clicking on menu Account", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    await Login.login(datatest.username_nonactive,datatest.password_nonactive);

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
TestCase("Testcase 02: Check context menu “Manage My Subscriptions” is displayed correctly when clicking on menu Account", async () => {
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