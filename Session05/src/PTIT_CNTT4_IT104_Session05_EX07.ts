class Bookk {
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
}

class Libraryy {
    private books: Bookk[];

    constructor() {
        this.books = [];
    }

    public addBook(book: Bookk): void {
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