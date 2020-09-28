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
gondolajs_1.TestModule("Reminder Page after login without active account");
/**
* Testcase 01 : Check notification bar displayed correctly
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login account without active
* 3. Verify GUI Reminder page
*/
gondolajs_1.TestCase("Testcase 01: Check GUI Reminder Page after login without active account", async () => {
    await thankyouPage_1.default.navigateTo();
    await thankyouPage_1.default.openLink(thankyouPage_1.default.lnkHeaderLogIn);
    await loginPage_1.default.login(datatest_1.datatest.username_nonactive, datatest_1.datatest.password_nonactive);
    await gondolajs_1.gondola.checkControlExist(thankyouPage_1.default.btActiveNotify);
    await thankyouPage_1.default.openLink(thankyouPage_1.default.btActiveNotify);
    await remindPage_1.default.checkGUI(datatest_1.datatest.textContent);
});
/**
* Testcase 02 : Check The maximum number of clicks on the button “Re-Send” is 3 times per day
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Login account without active
* 3. click
*/
//TestCase("Testcase 02: Check maximum number of clicks on the button “Re-Send” is 3 times per day", async () => {
//    await thankyouPage.navigateTo();
//    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
//    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
//});
//# sourceMappingURL=reminderPage.js.map