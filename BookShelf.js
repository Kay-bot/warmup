// Create a Book constructor that has two properties :Title & Author
// and two methods:
// A method named getTitle that returns: "Title: " + the instance title.
// A method named getAuthor that returns: "Author: " + the instance author.
// Pride and Prejudice - Jane Austen (PP)
// Hamlet - William Shakespeare (H)
// War and Peace - Leo Tolstoy (WP)
// Name the new object instances PP, H, and WP, respectively.

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    getTitle() {
        return `Title: ${this.title}`;
    }

    getAuthor() {
        return `Author: ${this.author}`
    }
}

const PP = new Book('Pride and Prejudice', 'Jane Austen');
const H = new Book('Hamlet', 'William Shakespeare');
const WP = new Book('War and Peace', 'Leo Tolstoy');