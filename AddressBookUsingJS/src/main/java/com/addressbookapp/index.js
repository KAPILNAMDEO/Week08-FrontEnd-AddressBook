const readline = require("readline-sync");
const AddressBook = require("./AddressBook");
const Contact = require("./contact");

let myAddressBook = new AddressBook();

while (true) {
    console.log("\nAddress Book Menu:");
    console.log("1. Add Contact");
    console.log("2. Display Contacts");
    console.log("3. View Persons by City");
    console.log("4. View Persons by State");
    console.log("5. Get Count by City");
    console.log("6. Get Count by State");
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
            let city = readline.question("Enter City to View Persons: ");
            myAddressBook.viewPersonsByCity(city);
            break;

        case 4:
            let state = readline.question("Enter State to View Persons: ");
            myAddressBook.viewPersonsByState(state);
            break;

        case 5:
            let cityCount = readline.question("Enter City to Get Count: ");
            myAddressBook.getCountByCity(cityCount);
            break;

        case 6:
            let stateCount = readline.question("Enter State to Get Count: ");
            myAddressBook.getCountByState(stateCount);
            break;

        case 7:
            console.log("Exiting Address Book...");
            process.exit();

        default:
            console.log("Invalid choice, please try again.");
    }
}
git 