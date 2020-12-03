import { action, gondola, locator, page,KeyCode } from "gondolajs";
@page
export class LicenseAgreementPage {
   
    @locator
    public txttitle ="//h4[@class='title']/strong/sup";
}    
export default new LicenseAgreementPage();