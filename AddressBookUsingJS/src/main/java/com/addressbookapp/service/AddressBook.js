class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        // Check if the contact with the same name already exists
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

    findContactByName(firstName, lastName) {
        return this.contacts.find(contact => 
            contact.firstName.toLowerCase() === firstName.toLowerCase() && 
            contact.lastName.toLowerCase() === lastName.toLowerCase()
        );
    }

    deleteContact(firstName, lastName) {
        let index = this.contacts.findIndex(contact => 
            contact.firstName.toLowerCase() === firstName.toLowerCase() && 
            contact.lastName.toLowerCase() === lastName.toLowerCase()
        );

        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log("Contact deleted successfully.");
        } else {
            console.log("Contact not found.");
        }
    }

    getContactCount() {
        return this.contacts.reduce(count => count + 1, 0);
    }

    // Search contacts by city
    searchByCity(city) {
        let results = this.contacts.filter(contact => 
            contact.city.toLowerCase() === city.toLowerCase()
        );

        if (results.length > 0) {
            console.log(`\nPeople in ${city}:`);
            results.map(contact => console.log(contact.toString()));
        } else {
            console.log(`No contacts found in ${city}.`);
        }
    }

    // Search contacts by state
    searchByState(state) {
        let results = this.contacts.filter(contact => 
            contact.state.toLowerCase() === state.toLowerCase()
        );

        if (results.length > 0) {
            conso
