import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooksList from "../../ReadBooksList/ReadBooksList";
import WishlistBooksList from "../../wishlistBooksList/WishlistBooksList";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router";
import {
  getStoredReadBooks,
  getStoredWishlistBooks,
} from "../../../utility/addToLs";
const ListedBooks = () => {
  const [sort, setSort] = useState("");
  const books = useLoaderData();
  const [readlist, setReadlist] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    document.title = "Book Vibe | Listed Books";
    const storedReadlistBooks = getStoredReadBooks();
    const readlist = storedReadlistBooks.map((id) =>
      books.find((book) => book.bookId === id)
    );
    setReadlist(readlist);

    const storedWishlistBooks = getStoredWishlistBooks();
    const wishlist = storedWishlistBooks.map((id) =>
      books.find((book) => book.bookId === id)
    );
    setWishlist(wishlist);
  }, [books]);

  const handleSort = (type) => {
    setSort(type);

    if (type === "Ratings") {
      const readlistSortedByRatings = [...readlist].sort(
        (a, b) => b.rating - a.rating
      );
      setReadlist(readlistSortedByRatings);

      const wishlistSortedByRatings = [...wishlist].sort(
        (a, b) => b.rating - a.rating
      );
      setWishlist(wishlistSortedByRatings);
    }
    if (type === "Pages") {
      const readlistSortedByPages = [...readlist].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadlist(readlistSortedByPages);

      const wishlistSortedByPages = [...wishlist].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setWishlist(wishlistSortedByPages);
    }
    if (type === "Publish year") {
      const readlistSortedByPublishYear = [...readlist].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setReadlist(readlistSortedByPublishYear);

      const wishlistSortedByPublishYear = [...wishlist].sort(
        (a, b) => a.yearOfPublishing - b.yearOfPublishing
      );
      setWishlist(wishlistSortedByPublishYear);
    }
  };
  return (
    <div>
      <div className="bg-gray-100 py-8 rounded-2xl mt-2 mb-8">
        <h1 className="font-bold text-4xl text-center">Books</h1>
      </div>

      <div className="flex justify-center mb-28">
        <div className="dropdown dropdown-bottom dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-success m-1">
            Sort By {sort ? `: ${sort}` : <IoIosArrowDown />}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("Ratings")}>Ratings</a>
            </li>
            <li>
              <a onClick={() => handleSort("Pages")}>Number of pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("Publish year")}>Publish year</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {readlist.map((book) => (
            <ReadBooksList book={book} key={book.bookId}></ReadBooksList>
          ))}
        </TabPanel>
        <TabPanel>
          {wishlist.map((book) => (
            <WishlistBooksList
              book={book}
              key={book.bookId}
            ></WishlistBooksList>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
