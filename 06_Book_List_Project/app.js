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

UI.prototype.showAlert = function (message, className) {
    const form = document.getElementById('book-form');
    const container = document.querySelector('.container');
    const alert = document.createElement('div');
    alert.className = `${className} alert`;
    alert.appendChild(document.createTextNode(message));
    container.insertBefore(alert, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.deleteBook = function (target) {
    if (target.classList.contains('delete')) {
        target.parentElement.parentElement.remove();
    }
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

        // Validate
        if(title === '' || author === '' || isbn === '') {
            // Error alert
            ui.showAlert('Please fill in all the fields!', 'error');
        }
        else {
            // Add book to list
            ui.addBookToList(book);
            
            // clear fields
            ui.clearFields();

            ui.showAlert('Book added successfully!', 'success');
        }

    }
);

document.querySelector('#book-list').addEventListener('click',
    function deleteBook(e) {
        e.preventDefault();
        const ui = new UI();
        ui.deleteBook(e.target);

        ui.showAlert('Book removed Successfully!', 'success');
    });