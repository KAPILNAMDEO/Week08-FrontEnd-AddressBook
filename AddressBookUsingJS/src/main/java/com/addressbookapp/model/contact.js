class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    toString() {
        return ` ${this.firstName} ${this.lastName},  ${this.city}, ${this.state}, ${this.zip}, ${this.phoneNumber},  ${this.email}`;
    }
}

module.exports = Contact;
