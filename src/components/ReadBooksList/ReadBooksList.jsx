import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { Link } from "react-router";

const ReadBooksList = ({ book }) => {
  const {
    bookId,
    image,
    tags,
    category,
    bookName,
    author,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 border-2 border-gray-100 shadow-sm rounded-xl p-4 my-4">
      <div className="w-[100%] md:w-[23%] p-8 md:p-4 rounded-xl flex justify-center bg-gray-100">
        <img src={image} alt="" className="w-[20%]  md:w-[50%]" />
      </div>
      <div>
        <h1 className="font-semibold text-xl  mb-2">{bookName}</h1>
        <p className="mb-2">By: {author}</p>
        <div className="mb-2 md:flex gap-6 items-center">
          <div>
            <span className="mr-2 font-semibold">Tag</span>{" "}
            {tags.map((tag, index) => (
              <div
                key={index}
                className="badge badge-soft font-semibold badge-success mr-2"
              >
                #{tag}
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center">
            <IoLocationOutline />
            <p>
              <small>Year of Publishing: {yearOfPublishing}</small>
            </p>
          </div>
        </div>
        <div className="md:flex gap-8 items-center text-gray-500 mb-2">
          <p className="flex gap-2 items-center">
            <FaUserFriends /> <small>Publisher: {publisher}</small>
          </p>
          <p className="flex gap-2 items-center">
            <HiOutlineDocumentText /> <small>Page {totalPages}</small>
          </p>
        </div>
        <hr className="border-0 h-4 border-t-2 border-gray-300" />

        <div className="md:flex gap-4">
          <button className="btn btn-soft btn-info rounded-3xl block mb-2">
            Category: {category}
          </button>
          <button className="btn btn-soft btn-warning rounded-3xl block mb-2">
            Rating: {rating}
          </button>
          <Link to={`/bookDetails/${bookId}`}>
            <button className="btn btn-success rounded-3xl block mb-2">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBooksList;
