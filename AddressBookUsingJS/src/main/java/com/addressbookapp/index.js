const readline = require("readline-sync");
const AddressBook = require("./AddressBook");
const Contact = require("./Contact");

let myAddressBook = new AddressBook("Personal");

while (true) {
    console.log("\nAddress Book Menu:");
    console.log("1. Add Contact");
    console.log("2. Display Contacts");
    console.log("3. Sort Contacts by Name");
    console.log("4. Sort Contacts by City");
    console.log("5. Sort Contacts by State");
    console.log("6. Sort Contacts by Zip");
    console.log("7. Exit");

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
            myAddressBook.sortBy("name");
            break;

        case 4:
            myAddressBook.sortBy("city");
            break;

        case 5:
            myAddressBook.sortBy("state");
            break;

        case 6:
            myAddressBook.sortBy("zip");
            break;

        case 7:
            console.log("Exiting...");
            process.exit();

        default:
            console.log("Invalid choice, please try again.");
    }
}
