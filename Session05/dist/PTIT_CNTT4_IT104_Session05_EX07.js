class Bookk {
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
}
class Libraryy {
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
}
const book3 = new Bookk("Clean", "Robert", 1);
const book4 = new Bookk("Dark Night", "Erich", 2);
const myLibraryy = new Libraryy();
myLibraryy.addBook(book3);
myLibraryy.addBook(book4);
console.log("Danh sách ban đầu:");
myLibraryy.showBook();
myLibraryy.updateBookById(1, "Clean Architecture", "Martin");
console.log("\n Danh sách sau khi cập nhật:");
myLibraryy.showBook();
