import { action, gondola, locator, page } from "gondolajs";


@page
export class downloadPage {
    @locator
    public btInstall ="//button[@class='ms-Button ux-button install ms-Button--default root-39']";
    public btFreeDownload = "//div[@class='elementor-element elementor-element-8dec206 elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box']//a[.='Free Download']";
    public async checkDownloadPage(){
        
       // await gondola.waitForEnabled(this.btInstall,30)
        await gondola.waitForElement(this.btInstall,30);
        await gondola.checkControlExist(this.btInstall);
        
    }
    @action(" click link")
    public async openLink(link:any){
       // await gondola.waitForElement(this.lnk_WhyGondola);    
       // await gondola.click(this.lnk_WhyGondola);
        await gondola.waitForClickable(link,60);    
        await gondola.click(link);

    }
}
export default new downloadPage();