class customer2{
    private _firstName: string;
    private _lastName: string;

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    /**
     * Creates a new customer instance.
     * 
     * @param theFirst - The first name of the customer.
     * @param theLast - The last name of the customer.
     */
    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set firtsName(value: string){
        this._firstName = value;
    }


}

//creation an instance
let myCustomer2 = new customer2("Martin", "Dixon");

/* Utilisation direct san constructor
myCustomer.firstName = "Martin";
myCustomer.lastName = "Dixon";
*/
console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);