import { action, gondola, locator, page } from "@logigear/gondola";


@page
export class understandingGondolaPage {
    @locator
    public txttitle ="//h1[@id='understanding-gondola']";
    
    @action ("check Understanding page")
    public async checkUnderstandingGondolaPage(){
        await gondola.waitForElement(this.txttitle,30);
        await gondola.checkControlExist(this.txttitle);
        
    }
}
export default new understandingGondolaPage();