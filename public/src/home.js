function getTotalBooksCount(books) {
  let totalBooks = books.length
  return totalBooks
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = accounts.length
  return totalAccounts
}

function getBooksBorrowedCount(books) {
  let checkedOut = books.filter((book) => book.borrows[0].returned === false)
  const borrowedCount = checkedOut.length
  return borrowedCount
}

function getMostCommonGenres(books) {
  let startArray = []
  for (let i = 0; i < books.length; i++){
    let filterByGenre = books.filter((book) => book.genre === books[i].genre)
    let totalByGenre = filterByGenre.length
    let objectToPush = {name: books[i].genre, count: totalByGenre}
    startArray.push(objectToPush)
  }
  const unique = [...new Map(startArray.map(v => [v.name, v])).values()]
  let result = unique.sort((genreA, genreB) => genreB.count - genreA.count)
  if (result.length > 5) {result.length = 5}
  return result
}

function getMostPopularBooks(books) {
  let booksList = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
   });
  let sorted = booksList.sort((a, b) => (a.count < b.count ? 1 : -1));
  let result = sorted.slice(0, 5);
  return result
}

function getMostPopularAuthors(books, authors) {
  for (let i = 0; i < books.length; i ++) {
    let authorToAdd = authors.find((author) => author.id === books[i].authorId)
    function reduceNames(authorToAdd) {
        return authorToAdd.reduce(function(acc, current) {
        acc.push(current.name.first + " " + current.name.last);
        return acc;
        }, []);
    }
    books[i].author = authorToAdd
  }
  let booksList = books.map((book) => {
    return { name: book.author.name.first + " " + book.author.name.last , count: book.borrows.length };
   });
  let sorted = booksList.sort((a, b) => (a.count < b.count ? 1 : -1))
  let result = sorted.slice(0, 5);
  return result
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
