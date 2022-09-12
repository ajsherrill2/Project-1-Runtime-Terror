// Variables for handling query searches
// const ApiKey = AIzaSyAwwfPg0aHfuV0X2St7pVv4uc2RgHEQxCY
const bookFormEl = $('#book-form');
const inputEl = $('#input-text');
const submitButton = $('#search-button');
// api link - https://www.googleapis.com/books/v1/volumes?q=search+terms&key=[]

// Submit event listener
$(bookFormEl).on('submit', function (event) {
    event.preventDefault();
    formSubmitHandler();
});

// Function that catches relevant information on books searched
function formSubmitHandler() {
    let userSearch = $(inputEl)[0].value.replace(/\s/g, '+');
    let QueryUrl = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=AIzaSyAwwfPg0aHfuV0X2St7pVv4uc2RgHEQxCY`;
    console.log(QueryUrl);
    fetch(QueryUrl)
    .then(res => res.json() 
)   .then(function(data) {
        console.log(data)
        let resultsLength = data.items.length;
        let bookTitle = data.items[0].volumeInfo.title;
        let bookAuthor = data.items[0].volumeInfo.authors[0];
        let bookDescription = data.items[0].volumeInfo.description;
        let bookCover = data.items[0].volumeInfo.imageLinks.thumbnail;
        let bookPrice = data.items[0].saleInfo.listPrice;
        let bookISBN = data.items[0].volumeInfo.industryIdentifiers[0];
        console.log(bookTitle);
        console.log(resultsLength);
        console.log(bookAuthor);
        console.log(bookDescription);
        console.log(bookCover);
        console.log(bookPrice);
        console.log(bookISBN);
})};

