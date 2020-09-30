"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
const loginPage_1 = __importDefault(require("../pages/gondola_test_site/loginPage"));
const datatest_1 = require("../data/datatest");
const thankyouPage_1 = __importDefault(require("../pages/gondola_test_site/thankyouPage"));
gondolajs_1.TestModule("Check context menu “Manage My Subscriptions” status after login with inactive account and vice versa.");
/**
* Testcase 01 : Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login account without active
* 3. Handle notification bar displayed in page.
* 4. Click on menu "My Account"
* 5. Verify context menu “Manage My Subscriptions” will be hidden
*/
gondolajs_1.TestCase("Testcase 01: Context menu “Manage My Subscriptions” on menu Account is hidden when login with inactive account", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    //let text = await gondola.getPopupText();
    //if(text != undefined)
    // {
    //    await gondola.clickPopup("No thanks");
    //}
    await thankyouPage_1.default.closeNotificationBar();
    await thankyouPage_1.default.checkMenuItemNoExistonAccount(datatest_1.datatest.menuitem);
});
/**
* Testcase 02 : Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login account with active
* 3. Handle notification bar displayed in page.
* 4. Click on menu "My Account"
* 5. Verify context menu “Manage My Subscriptions” will be display
*/
gondolajs_1.TestCase("Testcase 02: Context menu “Manage My Subscriptions” on menu Account is displayed when login with activated account", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_active, datatest_1.datatest.password_active);
    //let text = await gondola.getPopupText();
    //if(text != undefined)
    //{
    //    await gondola.clickPopup("Never");
    // }
    await thankyouPage_1.default.checkMenuItemExistonAccount(datatest_1.datatest.menuitem);
});
//# sourceMappingURL=ManageMySubscriptionsitem.js.map