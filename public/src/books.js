function findAuthorById(authors, id) {
  let authorCheck = authors.find((author) => author.id === id)
  return authorCheck
}

function findBookById(books, id) {
  let bookCheck = books.find((book) => book.id === id)
  return bookCheck
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  let checkedOut = books.filter((book) => book.borrows[0].returned === false)
  let returned = books.filter((book) => book.borrows[0].returned === true)
  result.push(checkedOut)
  result.push(returned)
  return result
}

function getBorrowersForBook(book, accounts) {
  let result = []
  let borrowCheck = book.borrows
  for (let i = 0; i < borrowCheck.length; i ++) {
    let idCheck = borrowCheck[i].id
    let accountToPush = accounts.find((account) => account.id === idCheck)
    accountToPush.returned = borrowCheck[i].returned
    result.push(accountToPush)
  }
  if (result.length > 10) {result.length = 10}
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
