import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref , onValue ,push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-f6f18-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const dataBase = getDatabase(app);
const booksInDB = ref(dataBase, "books")
const bookList = document.querySelector('#book-list');
const inputField = document.querySelector('#input-field');
const addButton = document.querySelector('#add-button');
const inputForm = document.querySelector('#add-btn-field');


onValue(booksInDB, function(snapshot) {
    bookList.innerHTML = '';
    // console.log(snapshot.val())
    // console.log(Object.keys(snapshot.val()))
    // console.log(Object.values(snapshot.val()))
    let booksArray = Object.values(snapshot.val()) ;

    for(let i=0; i<booksArray.length; i++ ) {
        let currentBook = booksArray[i];
        console.log(currentBook);
        let newbook = document.createElement('p');
        bookList.appendChild(newbook);
        newbook.innerHTML = currentBook;

    }
}
)

addButton.addEventListener('click', function() {
    let newBookTitle = inputField.value;
    if (newBookTitle !== "") {
        push(booksInDB, newBookTitle);
        inputField.value = ''; 
    } else {
        alert('Please enter a book title.');
    }
});





