import { TestCase, TestModule, gondola } from "@logigear/gondola";
import homeTA from "../../../pages/testarchitect_site/HomePageTA/HomeTA";
import login from "../../../pages/testarchitect_site/Login/loginPage";
import { Account } from "../../../data/Gondola/Account";
import signInPage from "../../../pages/testarchitect_site/Login/signInPage";
import thankyouPage from "../../../pages/testarchitect_site/thankyouPage/thankyouPage";


TestModule("notification bar displayed after logging in without activite account");
/**
* Testcase 01: Verify notification bar displayed correctly when clicking on link 'why TestArchitect?'
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'why TestArchitect' on Product 
* 4. Verify notification bar displayed in page.
*/
TestCase("Testcase 01: Verify notification bar displayed correctly when clicking on link 'why TestArchitect?'", async () => {
    let account: Account = await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
    await thankyouPage.verifyNotificationBar();
    await gondola.wait(3);
    await gondola.moveMouse(thankyouPage.Product, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.menuProductWhyTestArchitect);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();

});
/**
* Testcase 02: Verify notification bar displayed correctly when clicking on link 'Training & Coaching'
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'Training & Coaching' on Product 
* 4. Verify notification bar displayed in Feature page.
*/
TestCase("Testcase 02: Verify notification bar displayed correctly when clicking on link 'Training & Coaching'", async () => {
   
    let account: Account = await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
    await thankyouPage.verifyNotificationBar();
    await gondola.wait(3);
    await gondola.moveMouse(thankyouPage.Product, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.menuProductTrainingCoaching);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 03: Verify notification bar displayed correctly when clicking on link 'DataSheets'
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'DataSheets' on Resources 
* 4. Verify notification bar displayed in Blog page.
*/
TestCase("Testcase 03: Verify notification bar displayed correctly when clicking on link 'DataSheets'", async () => {
   
    let account: Account = await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
    await thankyouPage.verifyNotificationBar();
    await gondola.wait(3);
    await gondola.moveMouse(thankyouPage.Resources, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.menuResourcesDataSheets);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 04: Verify notification bar displayed correctly when clicking on link 'InforGraphics'
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'InforGraphics' on Resources 
* 4. Verify notification bar displayed in About Us page.
*/
TestCase("Testcase 04: Verify notification bar displayed correctly when clicking on link 'InforGraphics'", async () => {
    
    let account: Account = await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
    await thankyouPage.verifyNotificationBar();
    await gondola.wait(3);
    await gondola.moveMouse(thankyouPage.Resources, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.menuResourcesInforGraphics);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});

/**
* Testcase 05: Verify notification bar displayed correctly when clicking on Best Practices
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'Best Practices' on Support 
* 4. Verify notification bar displayed in Pricing page.
*/
TestCase("Testcase 05: Verify notification bar displayed correctly when clicking on Best Practices", async () => {
    
    let account: Account = await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
    await thankyouPage.verifyNotificationBar();
    await gondola.wait(3);
    await gondola.moveMouse(thankyouPage.Support, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.menuSupportBestPractices);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 06: Verify notification bar displayed correctly when clicking on Release Notes
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Register new account
* 3. Click 'Release Notes' on Support 
* 4. Verify notification bar displayed in Contact Us page.
*/
TestCase("Testcase 06: Verify notification bar displayed correctly when clicking on Release Notes", async () => {
   
    let account: Account = await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
    await thankyouPage.verifyNotificationBar();
    await gondola.wait(3);
    await gondola.moveMouse(thankyouPage.Support, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.menuSupportReleaseNotes);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
});
/**
* Testcase 07: Verify notification bar displayed correctly when clicking on Feature Support Platforms
*
* 1. Navigate to 'https://gondolatest.com/en/welcome/'
* 2. Click on Pricing link on header
* 3. Register new account
* 4. Click 'About Logigear' on Company 
* 5. Verify notification bar displayed in page.
* 6. Close notification bar
* 7. Click 'Feature Support Platforms' on Product 
* 8. Verify notification bar displayed in page.
*/
TestCase("Testcase 07: Verify notification bar displayed correctly when clicking on Feature Support Platforms", async () => {
    let account: Account = await signInPage.getRandomaccount();
    await homeTA.navigateTo();
    await homeTA.clickorOpenLink(homeTA.menuLogin);
    await login.clickorOpenLink(login.lnkSignUp);
    await signInPage.inputAccount(account);
    //check GUI thank you page
    await gondola.wait(5);
    await thankyouPage.checkItemThankYouPage();
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
    await gondola.moveMouse(thankyouPage.Company, { x: 8, y: 5 });
    await thankyouPage.openLink(thankyouPage.menuCompanyAboutLogigear);
    await thankyouPage.verifyNotificationBar();
    await thankyouPage.closeNotificationBar();
    await gondola.moveMouse(thankyouPage.Product, { x: 8, y: 5 });   
    await thankyouPage.openLink(thankyouPage.menuProductFeatureSupportPlatforms);
    await thankyouPage.verifyNotificationBar();
});
