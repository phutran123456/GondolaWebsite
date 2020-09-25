"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
const loginPage_1 = __importDefault(require("../pages/gondola_test_site/loginPage"));
const datatest_1 = require("../data/datatest");
const thankyouPage_1 = __importDefault(require("../pages/gondola_test_site/thankyouPage"));
gondolajs_1.TestModule("Check notification bar displayed after logging in without activite account");
/**
* Testcase 01: Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login account without active
* 3. Click 'why gondola?' button
* 4. Verify notification bar displayed in page.
* 5. Click 'Features' button
* 6. Verify notification bar displayed in page.
* 7. Click 'Blog' button
* 8. Verify notification bar displayed in page.
*/
gondolajs_1.TestCase("Testcase 01: Check notification bar displayed correctly when clicking on link 'why gondola?'", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    const handles = await gondolajs_1.gondola.getAllWindowHandles();
    await gondolajs_1.gondola.switchToWindow(handles[0]);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderWhyGondola);
    await thankyouPage_1.default.verifyNotificationBar();
    await thankyouPage_1.default.closeNotificationBar();
});
//# sourceMappingURL=showNotificationbar.js.map