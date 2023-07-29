const getTheTitles = function(books) {
    const bookTitles = [];
    let bookTitlesIndex = 0;
    for (let i = 0; i < books.length; i++) {
        bookTitles[bookTitlesIndex++] = books[i].title;
    }
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
