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
$(resultsPanel).addClass('visible');
$(bookTitle)[0].textContent = //input data path
$(bookCover)[0].src = //input data path
$(bookAuthor)[0].textContent = //input data path
$(bookRating)[0].textContent = //input data path
$(bookPrice)[0].textContent = //input data path

// Functions
function formSubmitHandler(results) {
    let userSearch = $(inputEl)[0].value.trim() || results;
};

function getBookInfo() {};
function getBestSellers() {};

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


