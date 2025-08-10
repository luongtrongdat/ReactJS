class Bokk {
    constructor(title, author, id) {
        this.title = title;
        this.author = author;
        this.id = id;
    }
    getInfo() {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}`;
    }
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
    getID() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    setInfo(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Libraryyy {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBook() {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }
    updateBookById(id, newTitle, newAuthor) {
        const bok = this.books.find(b => b.getID() === id);
        if (bok) {
            bok.updateInfo(newTitle, newAuthor);
            console.log(`Sách có ID ${id} đã được cập nhật`);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }
    findBookByTitle(title) {
        const foundBooks = this.books.filter(b => b.getTitle().toLowerCase().includes(title.toLowerCase()));
        if (foundBooks.length > 0) {
            console.log("Các sách tìm thấy:");
            foundBooks.forEach(book => {
                console.log(`${book.getID()}: ${book.getTitle()}, ${book.getAuthor()}`);
            });
        }
        else {
            console.log(`Không tìm thấy sách có tên "${title}"`);
        }
    }
}
const book5 = new Bokk("Clean", "Robert", 1);
const book6 = new Bokk("Dark Night", "Erich", 2);
const myLibraryyy = new Libraryyy();
myLibraryyy.addBook(book5);
myLibraryyy.addBook(book6);
console.log("Danh sách ban đầu:");
myLibraryyy.showBook();
myLibraryyy.updateBookById(1, "Clean Architecture", "Martin");
console.log("\n Danh sách sau khi cập nhật:");
myLibraryyy.showBook();
myLibraryyy.findBookByTitle("Clean");
