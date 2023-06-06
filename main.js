let books =[];
const bookName = document.getElementById('title');
const authorName = document.getElementById('author');
const btnAdd = document.getElementById('addBtn');

function addBook(){
    let book = { "bookName": bookName.value, "authorName": authorName.value };
    books.push(book);
    localStorage.setItem("books",JSON.stringify(books));
}
//‌Book List
books.forEach(book =>{
    let bookdiv = document.createElement("div");
    let bookList = document.createElement("p");
    bookList.textContent= book.bookName;
    let authorList = document.createElement("p");
    authorList.textContent= book.authorName;
    let btnRemove = document.createElement("button");
    btnRemove.textContent = "Remove";
    btnRemove.setAttribute('onClick', "removeBook()");
})