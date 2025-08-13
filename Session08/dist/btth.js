// B1: tao lop Book
class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
// B2: tao lop thu vien Library
class Library {
    constructor() {
        // tao mang chua cac quyen sach trong thu vien
        this.books = [];
        // 5. lay tat ca sach trong thu vien
        // findBookByTitleOrAuthor(searchTerm :string) : 
    }
    // dinh nghia cac phuong thuc
    // 1. them sach vao thu vien
    addBook(book) {
        this.books.push(book);
    }
    // 2. tim sach theo id (neu co tra ve sach, neu khong co tra ve undefined)
    getBookById(id) {
        return this.books.find(item => item.id === id);
    }
    // 3. xoa sach khoi thu vien theo id
    removeBookById(id) {
        let index = this.books.findIndex(item => item.id === id);
        if (index == -1) {
            console.log("khong co sach trong thu vien");
        }
        else {
            let confirmDelete = confirm(`ban co muon xoa sach :${this.books[index].name}khong?`);
            if (confirmDelete) {
                this.books.splice(index, 1);
            }
        }
    }
    // 4. cap nhat thong tin sach
    updateBook(id, new_Book) {
        const bookIndex = this.books.findIndex(item => item.id === id);
        if (bookIndex == -1) {
            console.log("khong co sach trong thu vien");
        }
        else {
            let confirmUpdate = confirm(`ban co muon cap nhat sach :${this.books[bookIndex].name}khong?`);
            if (confirmUpdate) {
                this.books[bookIndex] = new_Book;
                console.log("cap nhat thanh cong");
            }
        }
    }
}
// b3: viet cac ham trien khai ung dung
