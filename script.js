const table = document.querySelector('tbody');
const newBookBtn = document.getElementById('new-book');
const form = document.querySelector('form');
let library = [];

class book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function displayBook(){
    const newBook = new book(
        form.elements['title'].value,
        form.elements['author'].value,
        form.elements['page'].value,
        form.elements['read'].value
    );

    if (newBook.title === '') return alert('Please enter a book');

    library.push(newBook);

    const html = `
    <tr>
        <td>${newBook.title}</td>
        <td>${newBook.author}</td>
        <td>${newBook.pages}</td>
        <td><button class='read-button'>${newBook.read}</button></td>
        <td><button class='delete-button'>delete</button></td>
    </tr>`
    table.innerHTML += html;
}

function deleteBook(currentIndex){
    library.splice(currentIndex, currentIndex+1);
    table.deleteRow(currentIndex);
    console.log(currentIndex);
}

function changeStatus(currentIndex){
    if (library[currentIndex].read === 'read'){
        library[currentIndex].read === 'not read';
    }else{
        library[currentIndex].read === 'read';
    }
    console.log(library)
}

table.addEventListener('click', (e) => {
    const currentTarget = e.target.parentNode.parentNode;
    if (e.target.innerHTML = 'delete'){
        deleteBook(findIndex(library, currentTarget.title));
    }
    if (e.target.classList.contains('read-button')){
        changeStatus(findIndex(library, currentTarget.title));
        displayBook();
        console.log(library);
    }
});

function findIndex(library, title){
    if (library.length === 0 || library === null) return;
    for (lBook of library){
        if (lBook.title === title){
            return parseInt(library.indexOf(lBook));
        }
    }
}

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    displayBook();
});


