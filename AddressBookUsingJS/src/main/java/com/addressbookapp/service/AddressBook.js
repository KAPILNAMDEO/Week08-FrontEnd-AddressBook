class AddressBook {
    constructor(name) {
        this.name = name;
        this.contacts = [];
    }

    addContact(contact) {
        if (this.contacts.some(c => c.firstName.toLowerCase() === contact.firstName.toLowerCase() &&
                                    c.lastName.toLowerCase() === contact.lastName.toLowerCase())) {
            console.log("Duplicate contact found. Cannot add.");
            return;
        }
        this.contacts.push(contact);
        console.log("Contact added successfully.");
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            console.log(`\nContacts in ${this.name} Address Book:`);
            this.contacts.forEach(contact => console.log(contact.toString()));
        }
    }

    /** 🔹 Sort contacts by City, State, or Zip */
    sortBy(attribute) {
        const validAttributes = ["city", "state", "zip"];
        if (!validAttributes.includes(attribute)) {
            console.log("Invalid sorting attribute. Choose from 'city', 'state', or 'zip'.");
            return;
        }

        this.contacts.sort((a, b) => a[attribute].toLowerCase().localeCompare(b[attribute].toLowerCase()));

        console.log(`\nSorted Contacts by ${attribute.charAt(0).toUpperCase() + attribute.slice(1)}:`);
        this.contacts.map(contact => contact.toString()).forEach(entry => console.log(entry));
    }
}

module.exports = AddressBook;
