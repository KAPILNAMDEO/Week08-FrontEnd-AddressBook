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

    // Get persons count by city
    getCountByCity(city) {
        let count = this.contacts.filter(contact => 
            contact.city.toLowerCase() === city.toLowerCase()
        ).reduce((total) => total + 1, 0);

        console.log(`\nNumber of persons in ${city}: ${count}`);
    }

    // Get persons count by state
    getCountByState(state) {
        let count = this.contacts.filter(contact => 
            contact.state.toLowerCase() === state.toLowerCase()
        ).reduce((total) => total + 1, 0);

        console.log(`\nNumber of persons in ${state}: ${count}`);
    }
}

module.exports = AddressBook;
