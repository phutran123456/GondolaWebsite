import { action, gondola, locator, page,KeyCode } from "gondolajs";
import { datatest } from "../../../data/Gondola/datatest";
import thankyouPage from "../../gondola_test_site/thankyouPage/thankyouPage";

@page
export class cookieNitificationBar {
    @locator
    public cookies ="#cookie-law-info-bar";
    @locator
    public btAcceptCookies = "#cookie_action_close_header";
    @locator
    public btDeclineCookies = "#cookie_action_close_header_reject";
    @locator
    public lnkFindOutMore = "#CONSTANT_OPEN_URL";
    @locator
    public txtmessage ="//div[@id='cookie-law-info-bar']//div[@class='cli-bar-message']";
    @action(" check content Cookies")
    public async checkCookies(value: any){

        await gondola.waitForElement(this.cookies,30);
        await gondola.checkControlExist(this.btAcceptCookies);
        await gondola.checkControlExist(this.btDeclineCookies);
        await gondola.checkControlExist(this.lnkFindOutMore);
        let text = (await gondola.getText(this.txtmessage)).includes(value);
        //let txt = await gondola.get(this.txtmessage);
        await gondola.report("string: "+text);
        await gondola.checkEqual(text, true, "matches found: "+datatest.contentMessageCookie);

    }
    @action("click on button of cookies")
   public async clickButtononCookies(control:any) {
      await gondola.waitForClickable(control, 30);  
      await gondola.click(control);
   }
   @action(" cookies is displayed  after clicking Decline")
   public async displayedCookies(link:any) {
    await gondola.waitForClickable(this.btDeclineCookies, 30);  
    await this.clickButtononCookies(this.btDeclineCookies);
    await thankyouPage.openLink(link);
    await this.checkCookies(datatest.contentMessageCookie);
   }
   @action(" cookies is displayed  after clicking Decline")
   public async displayedCookieswithRefesh(link:any) {
    await gondola.waitForClickable(this.btDeclineCookies, 30); 
    await thankyouPage.openLink(link);
    await gondola.waitForClickable(this.btDeclineCookies, 30); 
    await this.checkCookies(datatest.contentMessageCookie);
    await gondola.pressKey([KeyCode.Control,"F5"]); 
    await gondola.waitForClickable(this.btDeclineCookies, 30); 
    await this.checkCookies(datatest.contentMessageCookie);
   }
   @action(" cookies is notdisplayed  after clicking Decline")
   public async noDisplayedCookies(link:any) {  
    await thankyouPage.openLink(link);
    await gondola.checkControlNotExist(this.cookies);
    await gondola.pressKey([KeyCode.Control,"F5"]); 
    await gondola.checkControlExist(thankyouPage.header);
    await gondola.checkControlNotExist(this.cookies);
   }
   @action("clear cookies")
  // public async getCookies(): Promise<any> {
    public async DeleteCookies() {
    //  return (await (gondola as any).grabCookie());  
    let cookies = await (gondola as any).grabCookie("text");
    await(gondola as any).clearCookie(cookies);
   }
}    
export default new cookieNitificationBar();