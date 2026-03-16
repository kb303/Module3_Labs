const phoneBookABC = new Map(); //an empty map to begin with
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

const phoneBookDEF = new Map();
phoneBookDEF.set("Diane", "0451111111");
phoneBookDEF.set("Edith", "0451112111");
phoneBookDEF.set("Fiona", "0451113111");

phoneBookABC.set("Caroline", "0451111111");

function printPhoneBook(contacts) {
  contacts.forEach((phoneNumber, name) => {
    console.log(`Name: ${name} Phone: ${phoneNumber}`);
  });
}
printPhoneBook(phoneBookABC);

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
phoneBook.forEach((phone, name) => {
  console.log(name);
});
