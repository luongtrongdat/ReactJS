class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBook() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}.${book.getInfo()} `);
        });
    }
}
const book1 = new Book("Clean", "RObert");
const book2 = new Book("Dark night", "Erich");
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.showBook();
