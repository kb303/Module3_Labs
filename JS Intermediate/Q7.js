const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getBookTitle(bookId) {
  const book = books.find((b) => b.id === bookId);
  if (book) {
    return book.title;
  } else {
    return "Book not found";
  }
}

function getOldBooks() {
  const oldBooks = books.filter((b) => b.year < 1950);
  return oldBooks;
}

function addGenre() {
  const genre = books.map((b) => {
    b.genre = "Classic";
    return b;
  });
  return genre;
}

function getTitles(authorInitial) {
  const titles = books
    .filter((b) => b.author.startsWith(authorInitial))
    .map((b) => b.title);
  return titles;
}

//Write a function latestBook() that uses find and forEach to get the book with the most recent publication date.
function latestBook() {
  let latest = 0;
  books.forEach((book) => {
    if (book.year > latest) {
      latest = book.year;
    }
  });
  return latest;
}

console.log(latestBook());
