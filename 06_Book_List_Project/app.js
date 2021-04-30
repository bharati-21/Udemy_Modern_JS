// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() { }

// Add book to the list
UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');

    // Create an element
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

// Clear Fields
UI.prototype.clearFields = function () {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";
}

// Event Listener
document.getElementById('book-form').addEventListener('submit',
    function (e) {
        e.preventDefault();

        // Get form values
        const title = document.getElementById('title').value,
            author = document.getElementById('author').value,
            isbn = document.getElementById('isbn').value;

        // Instantiate Book
        const book = new Book(title, author, isbn);
        console.log(book);

        // Instantiate UI object
        const ui = new UI();

        // Add book to list
        ui.addBookToList(book);

        // clear fields
        ui.clearFields();
    }
);