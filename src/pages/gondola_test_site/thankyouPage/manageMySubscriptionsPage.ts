import { action, gondola, locator, page } from "gondolajs";
import { datatest } from "../../../data/datatest";
@page
export class manageMySubscriptionsPage {
    
    @locator
    public txtEmailAddress ="//div[@class='mb-2 f14 overflow-break']";

    
    @action ("content on manage My Subscriptions page")
    public async contentPage(){
       await gondola.waitForClickable(this.txtEmailAddress,30);
       let text = await (await gondola.getText(this.txtEmailAddress)).includes(datatest.username_active);
       gondola.checkEqual(text, true, "match text" + datatest.username_active);
       await gondola.checkControlExist(this.txtEmailAddress);
    }

}
export default new manageMySubscriptionsPage();