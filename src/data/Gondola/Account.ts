export class Account {
    firstName: string="";
    emailaddress: string="";
    lastname: string="";
    password : string="";
    titlename : string="";
    company : string="";
    country : string="";
    state : string="";
    phone : string="";

    constructor(firstName: string,emailaddress: string) {
     this.firstName=firstName;
     this.emailaddress=emailaddress;
     
     this.setDefaultValues();
     
    }
    public setDefaultValues() {
        this.password = "#Fex123%Test";
        this.lastname = "please ignore";
        this.titlename = "logigeartest";
        this.company ="logigear";
        this.country ="Vietnam";
        this.state = "Ho Chi Minh";
        this.phone = "0909999990";
    }

    
}