"use strict";
var address1 = {
    zip: 3300,
    city: "Eger",
    address: "Fake Address street 5",
    phone: "+36301234567",
};
var address2 = {
    zip: 2660,
    city: "Balassagyarmat",
    address: "Another Fake Address 10",
    phone: null,
};
var address3 = {
    zip: 1007,
    city: "Budapest",
    address: "Yet Another Fake Address 7",
    phone: null,
};
var customer = {
    firstname: "John",
    lastname: "Doe",
    age: 32,
    addresses: [address1, address2],
    fullname: function () {
        return this.firstname + " " + this.lastname;
    },
    addNewAddress: function (address) {
        this.addresses.push(address);
    }
};
customer.addNewAddress(address3);
console.log(customer.fullname());
console.log(customer);
