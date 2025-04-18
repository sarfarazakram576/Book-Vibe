import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const books = useLoaderData();
  const book = books.find((book) => book.bookId === parseInt(id));
  const {
    image,
    tags,
    category,
    bookName,
    author,
    review,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div className="flex gap-12 mt-16 items-center">
      <div className="w-[48%] p-12 rounded-xl flex justify-center bg-gray-100">
        <img src={image} alt="" className="w-[90%]" />
      </div>
      <div className="w-[48%]">
        <h1 className="font-semibold text-lg md:text-4xl lg:text-5xl mb-4 md:mb-6 lg:mb-8">
          {bookName}
        </h1>
        <p className="mb-2">By: {author}</p>
        <p className="mb-2 py-2 border-y border-gray-400">{category}</p>
        <p className="mb-2">
          <span className="font-semibold">Review:</span> <small>{review}</small>
        </p>
        <p className="mb-2 pb-2 border-b border-gray-400">
          <span className="mr-4 font-semibold">Tag</span>{" "}
          {tags.map((tag, index) => (
            <div
              key={index}
              className="badge badge-soft font-semibold badge-success mr-2 my-4"
            >
              #{tag}
            </div>
          ))}
        </p>
        <div className="flex gap-8 mb-6">
          <div className="text-[#13131370] font-semibold">
            <p>
              <small>Number of Pages:</small>
            </p>
            <p>
              <small>Publisher:</small>
            </p>
            <p>
              <small>Year of Publishing:</small>
            </p>
            <p>
              <small>Rating:</small>
            </p>
          </div>

          <div className="font-semibold">
            <p>
              <small>{totalPages}</small>
            </p>
            <p>
              <small>{publisher}</small>
            </p>
            <p>
              <small>{yearOfPublishing}</small>
            </p>
            <p>
              <small>{rating}</small>
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-2">
            <button className="btn border-2 font-semibold">Read</button>
            <button className="btn btn-accent text-white font-semibold">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
