import { toast } from 'react-toastify';
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
  const storedWishlistBooks = getStoredWishlistBooks();
  const storedBooks = getStoredReadBooks();
  if (storedBooks.includes(id)) {
    alert("This book is already in Readlist");
  } else if (storedWishlistBooks.includes(id)) {
    const newWishlist = storedWishlistBooks.filter((bookId) => bookId !== id);
    const dataOfWishlist = JSON.stringify(newWishlist);
    localStorage.setItem("wishList", dataOfWishlist);

    storedBooks.push(id);
    const dataOfReadlist = JSON.stringify(storedBooks);
    localStorage.setItem("readList", dataOfReadlist);
    toast("🦄 Congratulations! You Read This Book.")
  } else {
    storedBooks.push(id);
    const dataOfReadlist = JSON.stringify(storedBooks);
    localStorage.setItem("readList", dataOfReadlist);
     toast("🦄 Congratulations! You Read This Book.")
  }
};

const addWishlistBooksToLs = (id) => {
  const storedReadBooks = getStoredReadBooks();
  const storedBooks = getStoredWishlistBooks();
  if (storedBooks.includes(id)) {
    alert("This book is already in Wishlist");
  } else if (storedReadBooks.includes(id)) {
    alert("This book is already in Readlist");
  } else {
    storedBooks.push(id);
    const data = JSON.stringify(storedBooks);
    localStorage.setItem("wishList", data);
    toast("🦄 Congratulations! You Successfully Add This Book To Wishlist.")
  }
};
export {
  addWishlistBooksToLs,
  addReadBooksToLs,
  getStoredWishlistBooks,
  getStoredReadBooks,
};
