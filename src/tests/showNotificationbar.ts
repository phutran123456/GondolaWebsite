import { TestCase, TestModule, gondola } from "gondolajs";
import HomeGondola from "../pages/gondola_test_site/HomeGondola";
import Login from "../pages/gondola_test_site/loginPage";
import { datatest }  from "../data/datatest";
import thankyouPage from "../pages/gondola_test_site/thankyouPage";

TestModule("Check notification bar displayed after logging in without activite account");
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
TestCase("Testcase 01: Check notification bar displayed correctly when clicking on link 'why gondola?'", async () => {
    await thankyouPage.navigateTo();
    await thankyouPage.openLink(thankyouPage.lnkHeaderLogIn);
    const handles = await gondola.getAllWindowHandles();
    await gondola.switchToWindow(handles[0]);
    await Login.login(datatest.username_nonactive,datatest.password_nonactive);
    await thankyouPage.openLink(thankyouPage.lnkHeaderWhyGondola);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();

});
