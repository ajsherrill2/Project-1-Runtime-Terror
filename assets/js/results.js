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

// Gets the ISBN of search input 
const url = new URL(getCurrentUrl());
const isbn = url.searchParams.get('isbn');

function getCurrentUrl() {
    return window.location.href;
}

// function
$(document).ready(function getBookInfo() {
    resultsAPI = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`

    fetch(resultsAPI).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)
        
        
    })
});


