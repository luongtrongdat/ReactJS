class Book{
    private title:string;
    private author:string;
    constructor (title:string,author:string){
        this.title = title;
        this.author = author;
    }
    public getInfo(): string {
        return `Title: ${this.title}, Author: ${this.author}`;
    }
}
class Library {
    private books:Book[];
        constructor() {
        this.books = []; 
    }
    public addBook(book:Book):void{
        this.books.push(book);
    }
    public showBook():void{
        this.books.forEach((book,index) => {
            console.log(`${index + 1}.${book.getInfo()} `);
            
        });
    }
}
const book1 = new Book ("Clean","RObert");
const book2 = new Book("Dark night","Erich");

const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);

myLibrary.showBook();