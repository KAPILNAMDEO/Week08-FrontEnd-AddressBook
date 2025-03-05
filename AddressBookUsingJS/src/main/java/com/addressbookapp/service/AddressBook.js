class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        let duplicate = this.contacts.filter(c => 
            c.firstName.toLowerCase() === contact.firstName.toLowerCase() && 
            c.lastName.toLowerCase() === contact.lastName.toLowerCase()
        );

        if (duplicate.length > 0) {
            console.log("Contact already exists! Duplicate entries are not allowed.");
            return;
        }

        this.contacts.push(contact);
        console.log("Contact added successfully.");
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            console.log("\nAddress Book Contacts:");
            this.contacts.map(contact => console.log(contact.toString()));
        }
    }

    // View all persons in a given city
    viewPersonsByCity(city) {
        let results = this.contacts.filter(contact => 
            contact.city.toLowerCase() === city.toLowerCase()
        ).map(contact => contact.toString());

        if (results.length > 0) {
            console.log(`\nPeople in ${city}:`);
            results.forEach(person => console.log(person));
        } else {
            console.log(`No contacts found in ${city}.`);
        }
    }

    // View all persons in a given state
    viewPersonsByState(state) {
        let results = this.contacts.filter(contact => 
            contact.state.toLowerCase() === state.toLowerCase()
        ).map(contact => contact.toString());

        if (results.length > 0) {
            console.log(`\nPeople in ${state}:`);
            results.forEach(person => console.log(person));
        } else {
            console.log(`No contacts found in ${state}.`);
        }
    }
}

module.exports = AddressBook;
