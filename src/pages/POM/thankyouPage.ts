import { action, gondola, locator, page,KeyCode } from "@logigear/gondola";
@page
export class thankyouPage {
    @locator
    public title="//h2[contains(text(),'Thank you!')]";
    @locator
    public summary="//div[@class='header']/div/text()";
    @locator
    public btBacktoHomepage="//a[contains(text(),'Back to Homepage')]";

    @action(" click on control")
    public async clickorOpenLink(control: any) {
    await gondola.waitForClickable(control, 60);
    await gondola.click(control);
    }
    @action(" enter value on input control")
    public async checkGUI(control: any, content:any ){

        await gondola.waitForElement(control,30);
        await gondola.checkControlExist(this.title);
        await gondola.checkControlExist(this.btBacktoHomepage);
        let text = await (await gondola.getText(control)).includes(content);
        gondola.checkEqual(text, true, "match text" + content); 
         
    }
}    
export default new thankyouPage(); 