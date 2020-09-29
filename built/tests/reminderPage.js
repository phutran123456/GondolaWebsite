"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
const loginPage_1 = __importDefault(require("../pages/gondola_test_site/loginPage"));
const datatest_1 = require("../data/datatest");
const thankyouPage_1 = __importDefault(require("../pages/gondola_test_site/thankyouPage"));
const remindPage_1 = __importDefault(require("../pages/gondola_test_site/remindPage"));
const resendEmailPage_1 = __importDefault(require("../pages/gondola_test_site/resendEmailPage"));
gondolajs_1.TestModule("Reminder Page after login without active account");
/**
* Testcase 01 : Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. Click on Active button on notification bar
* 4. Verify GUI Reminder page
*/
gondolajs_1.TestCase("Testcase 01: Check GUI Reminder Page after login without active account", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.openLink(thankyouPage_1.default.btActiveNotify);
    await remindPage_1.default.checkGUI(datatest_1.datatest.textContent);
    await remindPage_1.default.openPage(remindPage_1.default.lnkHere);
    await resendEmailPage_1.default.checkGUI();
});
/**
* Testcase 02 : Check The maximum number of clicks on the button “Re-Send” is 3 times per day
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login inactive account
* 3. click "here" link
* 4. Check maximum number of clicks on the button “Re-Send” is 3 times per day
*/
gondolajs_1.TestCase("Testcase 02: Check maximum number of clicks on the button “Re-Send” is 3 times per day", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await thankyouPage_1.default.verifyNotificationBar();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.btActiveNotify);
    await remindPage_1.default.openPage(remindPage_1.default.lnkHere);
    await resendEmailPage_1.default.checkMaximumNumberResendActive();
});
//# sourceMappingURL=reminderPage.js.map