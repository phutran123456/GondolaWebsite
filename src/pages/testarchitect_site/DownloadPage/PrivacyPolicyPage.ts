import { action, gondola, locator, page,KeyCode } from "@logigear/gondola";
@page
export class PrivacyPolicyPage {
   
    @locator
    public txttitle ="//div[@class='container-fluid']/h1";
}    
export default new PrivacyPolicyPage();