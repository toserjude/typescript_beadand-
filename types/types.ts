/**
 * 1. Feladat: Álltsa be minél pontosabban az alábbi komplex objektumok típusát
 */
type Address = {
    zip: number,
    city: string,
    address: string,
    phone: string | null
}

type Customer = {
    firstname: string,
    lastname: string,
    age: number,
    addresses: Array<Address>,
    fullname:() => string,
    addNewAddress:(newAddress: Address) => void
}

let address1: Address = {
    zip: 3300,
    city: "Eger",
    address: "Fake Address street 5",
    phone: "+36301234567",
};
let address2: Address = {
    zip: 2660,
    city: "Balassagyarmat",
    address: "Another Fake Address 10",
    phone: null,
};
let address3: Address = {
    zip: 1007,
    city: "Budapest",
    address: "Yet Another Fake Address 7",
    phone: null,
};

let customer: Customer = {
    firstname: "John",
    lastname: "Doe",
    age: 32,
    addresses: [address1, address2],
    fullname() {
        return `${this.firstname} ${this.lastname}`;
    },
    addNewAddress(address) {
        this.addresses.push(address);
    }
};

customer.addNewAddress(address3);
console.log(customer.fullname());
console.log(customer);

