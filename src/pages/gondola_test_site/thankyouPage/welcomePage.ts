import { action, gondola, locator, page } from "gondolajs";


@page
export class downloadPage {
   
    @locator
    public btFreeDownload = "//div[@class='elementor-element elementor-element-8dec206 elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box']//a[.='Free Download']";
    
    @action(" check Install Gondola page")
    public async checkDownloadPage(){
        
        await gondola.waitForElement(this.btFreeDownload,30);
        await gondola.checkControlExist(this.btFreeDownload);
        
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