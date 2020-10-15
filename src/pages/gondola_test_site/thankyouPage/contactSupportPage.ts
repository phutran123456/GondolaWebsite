import { action, gondola, locator, page } from "gondolajs";

@page
export class contactSupportPage {
    
    public txtBussinessEmail ="//input[@id='helpdesk_ticket_email']";
    @locator
    public cmbYouAre ="//select[@id='helpdesk_ticket_ticket_type']";
    @locator
    public btSubmit ="//input[@id='helpdesk_ticket_submit']";
    
    @action ("verify GUI Submit a Ticket")
    public async GUISubmitTicket(){
       await gondola.waitForElement(this.btSubmit,90);
       await gondola.checkControlExist(this.btSubmit);
       await gondola.checkControlExist(this.txtBussinessEmail);
       await gondola.checkControlExist(this.cmbYouAre);
    }
    
    
}
export default new contactSupportPage();