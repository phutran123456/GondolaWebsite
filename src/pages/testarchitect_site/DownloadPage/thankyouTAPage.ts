import { action, gondola, locator, page,KeyCode } from "@logigear/gondola";
@page
export class thankyouTAPage {
   
    @locator
    public txttitle ="//div[@class='mb2pb-text pos-left ta-thank-you']//span/strong";
}    
export default new thankyouTAPage();