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

// Functions
// Function that catches relevant information on books searched
function formSubmitHandler() {
    let userSearch = $(inputEl)[0].value.replace(/\s/g, '+');
    let QueryUrl = `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=AIzaSyBQjnQbzAE1tdE-zUjqjMcAkeuR_B5X53s`;
    return fetch(QueryUrl)
    .then(res => res.json())
    .then(function(data) {
        console.log(data)
        let bookISBN = data.items[0].volumeInfo.industryIdentifiers[0];
    return bookISBN;     
})};

// Please comment the below function out when testing!
$(document).ready(function getBestSellers() {
    Object.keys(cardItemArray).forEach((key, index) =>  {
        const value = cardItemArray[key];
        var bestSellersQuery = `https://www.googleapis.com/books/v1/volumes?q=${value}&key=AIzaSyBQjnQbzAE1tdE-zUjqjMcAkeuR_B5X53s`;
        fetch(bestSellersQuery)
        .then(res => res.json())       
        .then(function(data) {
            console.log(data)
            $(".img")[index].src = data.items[0].volumeInfo.imageLinks.thumbnail;
            $(".title")[index].textContent = data.items[0].volumeInfo.title;
            $(".author")[index].textContent = data.items[0].volumeInfo.authors[0];
            $(".rating")[index].textContent = data.items[0].volumeInfo.averageRating + '/5';
        });
    });
});

const cardItemArray = {
    card1: '978-0143127741',
    card2: '9781429992800',
    card3: '9780316413237',
    card4: '0544115554',
    card5: '9781488096785',
    card6: '978-1250754738',
    card7: '978-1982185824',
    card8: '9781538724743',
    card9: '9780525657750',
    card10: '9781101010907'
};

Object.keys(cardItemArray).forEach(key =>  {
    const value = cardItemArray[key];

});

// Event listeners
$(bookFormEl).on('submit', function (e) {
    e.preventDefault();


    formSubmitHandler().then(function (data) {
        window.location.replace(`./results.html?isbn=${data.identifier}`);
        console.log(data);
    });    
});

$(cardItem).on('click', function () {
    let bestSellerSearch = this.$('h4');

    formSubmitHandler(bestSellerSearch);
});

