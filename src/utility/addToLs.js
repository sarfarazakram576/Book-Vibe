const getStoredReadBooks = () => {
  const storedBooksStr = localStorage.getItem("readList");

  if (storedBooksStr) {
    const storedBooks = JSON.parse(storedBooksStr);
    return storedBooks;
  }

  return [];
};
const getStoredWishlistBooks = () => {
  const storedBooksStr = localStorage.getItem("wishList");

  if (storedBooksStr) {
    const storedBooks = JSON.parse(storedBooksStr);
    return storedBooks;
  }

  return [];
};

const addReadBooksToLs = (id) => {
  const storedBooks = getStoredReadBooks();
  if (storedBooks.includes(id)) {
    alert("This book is already in Readlist");
  } else {
    storedBooks.push(id);
    const data = JSON.stringify(storedBooks);
    localStorage.setItem("readList", data);
  }
};

const addWishlistBooksToLs = (id) => {
  const storedBooks = getStoredWishlistBooks();
  if (storedBooks.includes(id)) {
    alert("This book is already in Wishlist");
  } else {
    storedBooks.push(id);
    const data = JSON.stringify(storedBooks);
    localStorage.setItem("wishList", data);
  }
};

export {
  addWishlistBooksToLs,
  addReadBooksToLs,
  getStoredWishlistBooks,
  getStoredReadBooks,
};
