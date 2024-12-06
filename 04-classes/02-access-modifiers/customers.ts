class customer{
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast
    }
}

//creation an instance
let myCustomer = new customer("Martin", "Dixon");

/* Utilisation direct san constructor
myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";
*/
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);