

enum BookStatus {
    DOSTEPNA,
    WYPOZYCZONA,
    ZGUBIONA,
}

class Book {
    public title: string;
    public author: string;
    public year: number;
    public status: BookStatus;
  
    public constructor(title: string, author: string, year: number, status: BookStatus) {
      this.title = title;
      this.author = author;
      this.year = year;
      this.status = status;
    }

    public init(title: string, author: string, year: number, status: BookStatus): void {
      this.title = title;
      this.author = author;
      this.year = year;
      this.status = status;
    }

}

class Library{
    public books: Book[];
    
    public constructor() {
        this.books = [];
    }

    public init(books: Book[]): void {
        this.books = books;
    }

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public borrowBook(title: string): void {
        let book: Book | undefined = undefined;
        for (const b of this.books) {
            if (b.title === title) {
                book = b;
                break;
            }
        }
        if (book) {
            book.status = BookStatus.WYPOZYCZONA;
        }
    }

    public returnBook(title: string): void {
        let book: Book | undefined = undefined;
        for (const b of this.books) {
            if (b.title === title) {
                book = b;
                break;
            }
        }
        if (book) {
            book.status = BookStatus.DOSTEPNA;
        }
    }

    public findBooksByAuthor(author: string): Book[] {
        const result: Book[] = this.books.filter((book: Book) => book.author === author);
        return result;
    }

    public findBooksByStatus(status: BookStatus): Book[] {
        const result: Book[] = this.books.filter((book: Book) => book.status === status);
        return result;
    }

}
    
