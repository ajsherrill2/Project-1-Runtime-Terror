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


// Other Variables (to be used in a function later)
let apiUrl = ''; // put future api url here
let apiKey = ''; // put future api key here
// $(resultsPanel).addClass('visible');
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

function getBookInfo() {};

$(document).ready(function getBestSellers() {
    const cards = [...document.querySelectorAll('.card-item')];
        console.log(cards);

    Object.keys(cardItemArray).forEach((key, index) =>  {
        const value = cardItemArray[key];
        console.log(value);
        var bestSellersQuery = `https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyAwwfPg0aHfuV0X2St7pVv4uc2RgHEQxCY`;
        fetch(bestSellersQuery)
        .then(res => res.json())       
        .then(function(data) {
            console.log(data)
            $(".img")[index].src = data.items[0].volumeInfo.imageLinks.thumbnail;
            $(".title")[index].textContent = data.items[0].volumeInfo.title;
            $(".author")[index].textContent = data.items[0].volumeInfo.authors[0];
            $(".rating")[index].textContent = data.items[0].volumeInfo.averageRating;
            $(".price")[index].textContent = '$' + data.items[0].saleInfo.listPrice.amount;
        });

    });
});

const cardItemArray = {
    card1: '978-0143127741',
    card2: '9780553582017',
    card3: '978-0316413039',
    card4: '1439527261',
    card5: '9780735219113',
    card6: '978-1250754738',
    card7: '978-1982185824',
    card8: '978-0765365279',
    card9: '978-0593396599',
    card10: '978-1594489501'
};


Object.keys(cardItemArray).forEach(key =>  {
    const value = cardItemArray[key];
    console.log(value);
});
// Event listeners
$(bookFormEl).on('submit', function (e) {
    e.preventDefault();

    formSubmitHandler();
});

$(cardItem).on('click', function () {
    let bestSellerSearch = this.$('h4');

    formSubmitHandler(bestSellerSearch);
});

