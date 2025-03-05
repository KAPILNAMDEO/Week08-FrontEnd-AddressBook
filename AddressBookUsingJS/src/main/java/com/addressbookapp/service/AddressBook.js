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

    /** 🔹 Sort contacts alphabetically by full name */
    sortContactsByName() {
        this.contacts.sort((a, b) => {
            let nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
            let nameB = `${b.firstName} ${b.lastName}`.toLowerCase();
            return nameA.localeCompare(nameB);
        });

        console.log("\nSorted Contacts by Name:");
        this.contacts.map(contact => contact.toString()).forEach(entry => console.log(entry));
    }
}

module.exports = AddressBook;
