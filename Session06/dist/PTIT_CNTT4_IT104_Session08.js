class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = [];
        this.status = status;
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
        console.log(`Đã thêm sách: ${book.title}`);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((b) => {
            console.log(`ID: ${b.id}, Title: ${b.title}, Author: ${b.author}, Stock: ${b.stock}, Status: ${b.status}`);
        });
    }
}
const library = new Library();
const book1 = new Book(1, "tâm lí", "Nguyễn Văn A", 5, "Có sẵn");
const book2 = new Book(2, "khoa học", "Trần Thị B", 3, "Có sẵn");
const book3 = new Book(3, "văn", "Lê Văn C", 2, "Có sẵn");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.showBooks();
