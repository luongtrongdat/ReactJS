let phoneBooks = [];

const addContact = (name, phone, email) => {
    phoneBooks.push({ name, phone, email });
    return phoneBooks;
};

const displayContacts = () => {
    return phoneBooks.map(contact => `Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`).join('\n');
};
addContact("Dat", "0982653124", "dat@gmail.com");
console.log(displayContacts());