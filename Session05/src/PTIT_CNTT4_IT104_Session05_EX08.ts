class Bokk {
    private title: string;
    private author: string;
    private id: number;

    constructor(title: string, author: string, id: number) {
        this.title = title;
        this.author = author;
        this.id = id;
    }

    public getInfo(): string {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}`;
    }

    public updateInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }

    public getID(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public setInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }
}

class Libraryyy {
    private books: Bokk[];

    constructor() {
        this.books = [];
    }

    public addBook(book: Bokk): void {
        this.books.push(book);
    }

    public showBook(): void {
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.getInfo()}`);
        });
    }

    public updateBookById(id: number, newTitle: string, newAuthor: string): void {
        const bok = this.books.find(b => b.getID() === id);
        if (bok) {
            bok.updateInfo(newTitle, newAuthor);
            console.log(`Sách có ID ${id} đã được cập nhật`);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }

    public findBookByTitle(title: string): void {
        const foundBooks = this.books.filter(b => b.getTitle().toLowerCase().includes(title.toLowerCase()));

        if (foundBooks.length > 0) {
            console.log("Các sách tìm thấy:");
            foundBooks.forEach(book => {
                console.log(`${book.getID()}: ${book.getTitle()}, ${book.getAuthor()}`);
            });
        } else {
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