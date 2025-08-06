let firstName: string = "john";
let lastName: string = "doe";
const capitalize = (word: string): string => {
  if (word.length === 0) {
    return "";
  }
  const firstChar = word[0].toUpperCase();
  const rest = word.slice(1);
  return firstChar + rest;
};

firstName = capitalize(firstName);
lastName = capitalize(lastName);

const fullName: string = `${firstName} ${lastName}`;

console.log(fullName);