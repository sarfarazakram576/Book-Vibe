import React from "react";
import Book from "../book/Book";

const Books = ({books}) => {

  return (
<div className="mb-16">
    <h1 className="text-center font-bold text-4xl mb-10">Books</h1>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
{
    books.map(book => <Book key={book.bookId} book={book}></Book>)
}
    </div>
</div>
);
};

export default Books;
