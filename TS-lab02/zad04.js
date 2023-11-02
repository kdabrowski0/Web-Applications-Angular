var BookStatus;
(function (BookStatus) {
    BookStatus[BookStatus["DOSTEPNA"] = 0] = "DOSTEPNA";
    BookStatus[BookStatus["WYPOZYCZONA"] = 1] = "WYPOZYCZONA";
    BookStatus[BookStatus["ZGUBIONA"] = 2] = "ZGUBIONA";
})(BookStatus || (BookStatus = {}));
var Book = /** @class */ (function () {
    function Book(title, author, year, status) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status;
    }
    Book.prototype.init = function (title, author, year, status) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.status = status;
    };
    return Book;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.init = function (books) {
        this.books = books;
    };
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.borrowBook = function (title) {
        var book = undefined;
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.title === title) {
                book = b;
                break;
            }
        }
        if (book) {
            book.status = BookStatus.WYPOZYCZONA;
        }
    };
    Library.prototype.returnBook = function (title) {
        var book = undefined;
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.title === title) {
                book = b;
                break;
            }
        }
        if (book) {
            book.status = BookStatus.DOSTEPNA;
        }
    };
    Library.prototype.findBooksByAuthor = function (author) {
        var result = this.books.filter(function (book) { return book.author === author; });
        return result;
    };
    Library.prototype.findBooksByStatus = function (status) {
        var result = this.books.filter(function (book) { return book.status === status; });
        return result;
    };
    return Library;
}());
