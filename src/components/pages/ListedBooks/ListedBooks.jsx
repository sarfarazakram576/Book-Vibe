import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadBooksList from "../../ReadBooksList/ReadBooksList";
import WishlistBooksList from "../../wishlistBooksList/WishlistBooksList";
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router";
import { getStoredReadBooks, getStoredWishlistBooks } from "../../../utility/addToLs";
const ListedBooks = () => {
  const books = useLoaderData();
  const [readlist, setReadlist] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const storedReadlistBooks = getStoredReadBooks();
    const readlist = books.filter((book) => storedReadlistBooks.includes(book.bookId));
    setReadlist(readlist)


    const storedWishlistBooks = getStoredWishlistBooks();
    const wishlist = books.filter((book) => storedWishlistBooks.includes(book.bookId));
    setWishlist(wishlist)
  }, [books]);

  return (
    <div>
      <div className="bg-gray-100 py-8 rounded-2xl mt-2 mb-8">
        <h1 className="font-bold text-4xl text-center">Books</h1>
      </div>

<div className="flex justify-center mb-28">
<div className="dropdown dropdown-bottom dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-success m-1">Sort By <IoIosArrowDown/></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Ratings</a></li>
    <li><a>Number of pages</a></li>
    <li><a>Publisher year</a></li>
  </ul>

      </div>
</div>

      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
       {  
        readlist.map(book=> <ReadBooksList book={book} key={book.bookId}></ReadBooksList>)
        }
        </TabPanel>
        <TabPanel>
        {  
        wishlist.map(book=> <WishlistBooksList book={book} key={book.bookId}></WishlistBooksList>)
        }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
