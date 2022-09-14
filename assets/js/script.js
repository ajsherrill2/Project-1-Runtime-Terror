// Main Variables
// Homepage
const bookFormEl = $('#book-form');
const inputEl = $('#input-text');
const searchBtn = $('#search-button');
const bioBlockEL = $('.bio-block');
const bestSellersList = $('.best-sellers-list');
const cardItem = $('.card');
// Results page & Best-Sellers list
const resultsPanel = $('.results');
const bookTitle = $('.title');
const bookCover = $('.img');
const bookAuthor = $('.author');
const bookRating = $('.rating');
const bookPrice = $('.price');

// API Link
// api link - https://www.googleapis.com/books/v1/volumes?q=search+terms&key=[]



// Other Variables (to be used in a function later)
let apiUrl = ''; // put future api url here
let apiKey = ''; // put future api key here
$(resultsPanel).addClass('visible');
// $(bookTitle)[0].textContent = //input data path
// $(bookCover)[0].src = //input data path
// $(bookAuthor)[0].textContent = //input data path
// $(bookRating)[0].textContent = //input data path
// $(bookPrice)[0].textContent = //input data path

// Functions
// Function that catches relevant information on books searched
function formSubmitHandler() {
    let userSearch = $(inputEl)[0].value.replace(/\s/g, '+');
    let QueryUrl = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=AIzaSyAwwfPg0aHfuV0X2St7pVv4uc2RgHEQxCY`;
    console.log(QueryUrl);
    fetch(QueryUrl)
    .then(res => res.json()) 
    .then(function(data) {
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

function getBookInfo() {};
$(document).ready(function getBestSellers() {
    const cards = [...document.querySelectorAll('.card-item')];
        console.log(cards);

    Object.keys(cardItemArray).forEach(key =>  {
        const value = cardItemArray[key];
        console.log(value);
        var bestSellersQuery = `https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyAwwfPg0aHfuV0X2St7pVv4uc2RgHEQxCY`;
        fetch(bestSellersQuery)
        .then(res => res.json())       
        .then(function(data) {
            console.log(data);
        });
    });
});

const cardItemArray = {
    card1: 'B0176M3U10',
    card2: 'B084M1YJB8',
    card3: '9780316413039',
    card4: '9780547928227',
    card5: '9780735219090',
    card6: '9780765364876',
    card7: '9781982185824',
    card8: '9780765326355',
    card9: '9780593396599',
    card10: '9781594489501'
};


Object.keys(cardItemArray).forEach(key =>  {
    const value = cardItemArray[key];
    console.log(value);
});

// Event listeners
$(bookFormEl).on('submit', function (e) {
    e.preventDefault();

    formSubmitHandler();

    $("form")[0].reset();
});

$(cardItem).on('click', function () {
    let bestSellerSearch = this.$('h4');

    formSubmitHandler(bestSellerSearch);
});