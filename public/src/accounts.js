function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id)
  return result
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1)
  return result
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0
  for (let i = 0; i < books.length; i++) {
    let borrowCheck = books[i].borrows;
    const borrowByBook = borrowCheck.filter((borrower) => borrower.id === account.id);
    totalBorrows += borrowByBook.length
  }
  return totalBorrows
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = []
  const idCheck = account.id
  for (let i = 0; i < books.length; i++) {
    let borrowCheck = books[i].borrows;
    const borrowByBook = borrowCheck.filter((borrower) => borrower.id === idCheck);
    let stillCheckedOut = borrowByBook.filter((book) => book.returned === false);
    if (stillCheckedOut.length > 0) {
      result.push(books[i])
    }
  }
  for (let j = 0; j < result.length; j ++) {
    let authorCheck = result[j].authorId
    let authorToAdd = authors.find((author) => author.id === authorCheck)
    result[j].author = authorToAdd
  }
  return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
