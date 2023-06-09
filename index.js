const addNewBookLink = document.getElementById('add-new-book-link');
const bookListLink = document.getElementById('book-list-link');
const contactLink = document.getElementById('contact-link');
const bookListSection = document.getElementById('book-list');
const addNewBookSection = document.getElementById('form');
const contactSection = document.getElementById('contact');

// Add Date by Luxon
const today = Luxon.DateTime.local();
document.getElementById('date').innerHTML = today;
// hide book list and contact sections by default
bookListSection.style.display = 'none';
contactSection.style.display = 'none';

addNewBookLink.addEventListener('click', (e) => {
  e.preventDefault();
  addNewBookSection.style.display = 'block';
  bookListSection.style.display = 'none';
  contactSection.style.display = 'none';
});

bookListLink.addEventListener('click', (e) => {
  e.preventDefault();
  addNewBookSection.style.display = 'none';
  bookListSection.style.display = 'block';
  contactSection.style.display = 'none';
});

contactLink.addEventListener('click', (e) => {
  e.preventDefault();
  addNewBookSection.style.display = 'none';
  bookListSection.style.display = 'none';
  contactSection.style.display = 'block';
});

class AwesomeBook {
  constructor() {
    this.addBookBtn = document.querySelector('.addbutton');
    this.bookList = document.querySelector('#book-list');
    this.books = [];
    this.titleElement = document.getElementById('bookname');
    this.authorElement = document.getElementById('authorname');
    this.displayBooks();
    this.addEventListeners();
    }

  displayBooks() {
    const storedBooks = localStorage.getItem('books');
    this.books = storedBooks ? JSON.parse(storedBooks) : [];

    let listOfBooks = '';
    this.books.forEach((book, index) => {
      listOfBooks += `<div >
            <span class='name-of-book'>${book.title}</span>${'&nbsp;'.repeat(10)}
            <span class='author-of-book'>${book.author}</span>${'&nbsp;'.repeat(10)}
            <button type="button" class="remove-button" id="${index}">Remove</button>
            <hr>
            </div>`;
    });
    this.bookList.innerHTML = listOfBooks;

    this.addRemoveEventListeners();
  }

  clearFields() {
    this.titleElement.value = '';
    this.authorElement.value = '';
  }

  addBook(title, author) {
    this.books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(this.books));
    this.clearFields();
    this.displayBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  addEventListeners() {
    this.addBookBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const title = document.getElementById('bookname').value;
      const author = document.getElementById('authorname').value;
      if (title && author !== '') {
        this.addBook(title, author);
      }
    });
  }

  addRemoveEventListeners() {
    const removeBtns = document.querySelectorAll('.remove-button');
    removeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const index = parseInt(e.target.id, 10);
        this.removeBook(index);
      });
    });
  }
}

const bookManager = new AwesomeBook();
bookManager.clearFields();
