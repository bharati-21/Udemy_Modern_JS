class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
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

    clearFields () {
        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('isbn').value = "";
    }

    showAlert (message, className) {
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

    deleteBook (target) {
        if (target.classList.contains('delete')) {
            target.parentElement.parentElement.remove();
        }
    }
}

// Local Storage Class
class Store {
    static getBooksFromLocalStorage() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        }
        else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static removeBookFromLocalStorage(isbn) {
        if (isbn !== null) {
            
            console.log(isbn);
            const books = Store.getBooksFromLocalStorage();
            books.forEach((book, index) => {
                if (book.isbn === isbn) {
                    books.splice(index, 1);
                }
            });
            localStorage.setItem('books', JSON.stringify(books));
        }
    }

    static displayBooksFromStorage() {
        const books = Store.getBooksFromLocalStorage();
        const ui = new UI();
        books.forEach((book) => {
            ui.addBookToList(book);
        });
    }

    static addBookToLocalStorage(book) {
        const books = Store.getBooksFromLocalStorage();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBooksFromStorage());

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
        
        // Instantiate UI object
        const ui = new UI();
        // console.log(ui);
        
        // Validate
        if(title === '' || author === '' || isbn === '') {
            // Error alert
            ui.showAlert('Please fill in all the fields!', 'error');
        }
        else {
            // Add book to list
            ui.addBookToList(book);
            console.log(book);

            Store.addBookToLocalStorage(book);
            
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


        // Remove from local storage
        // Store.removeBookFromLocalStorage(e.target.parentElement.parentElement.children[2].textContent);

        if (e.target !== null && e.target.parentElement !== null && e.target.parentElement.previousElementSibling !== null) {
            Store.removeBookFromLocalStorage(e.target.parentElement.previousElementSibling.textContent);
            ui.showAlert('Book removed Successfully!', 'success');

        }
    });