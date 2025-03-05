const readline = require("readline-sync");
const AddressBook = require("./AddressBook");
const Contact = require("./contact");

let myAddressBook = new AddressBook();

while (true) {
    console.log("\n Address Book Menu:");
    console.log("1️ Add Contact");
    console.log("2️ Display Contacts");
    console.log("3️ Delete Contact");
    console.log("4️ Count Contacts");
    console.log("5️ Exit");

    let choice = readline.questionInt("Enter your choice: ");

    switch (choice) {
        case 1:
            try {
                let firstName = readline.question("Enter First Name: ");
                let lastName = readline.question("Enter Last Name: ");
                let address = readline.question("Enter Address: ");
                let city = readline.question("Enter City: ");
                let state = readline.question("Enter State: ");
                let zip = readline.question("Enter Zip Code: ");
                let phoneNumber = readline.question("Enter Phone Number: ");
                let email = readline.question("Enter Email: ");

                let newContact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
                myAddressBook.addContact(newContact);
            } catch (error) {
                console.log("Error: " + error.message);
            }
            break;

        case 2:
            myAddressBook.displayContacts();
            break;

        case 3:
            let deleteFirstName = readline.question("Enter First Name to Delete: ");
            let deleteLastName = readline.question("Enter Last Name to Delete: ");
            myAddressBook.deleteContact(deleteFirstName, deleteLastName);
            break;

        case 4:
            console.log(" Total Contacts:", myAddressBook.getContactCount());
            break;

        case 5:
            console.log(" Exiting Address Book...");
            process.exit();

        default:
            console.log(" Invalid choice, please try again.");
    }
}
