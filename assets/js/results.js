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
const bookDescription = $('.description');
const bookRating = $('.rating');
const bookPrice = $('.price');
const bookLink = $('#store');

// Function retrieves data for specific user input
$(document).ready(function getBookInfo() {
  // Gets ISBN from localStorage
  let isbn = localStorage.getItem('ISBN');
  resultsAPI = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;

  fetch(resultsAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      $(bookTitle)[0].textContent = data.items[0].volumeInfo.title;
      $(bookCover)[0].src = data.items[0].volumeInfo.imageLinks.thumbnail;
      $(bookAuthor)[0].textContent = data.items[0].volumeInfo.authors[0];
      $(bookDescription)[0].textContent = data.items[0].volumeInfo.description;
      $(bookRating)[0].textContent =
        'Rating: ' + data.items[0].volumeInfo.averageRating + '/5';
      $(bookPrice)[0].textContent =
        '$' + data.items[0].saleInfo.listPrice.amount;
      $(bookLink)[0].href = data.items[0].saleInfo.buyLink;
    });
});
