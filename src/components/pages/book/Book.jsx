import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
const Book = ({ book }) => {
  const { tags, image, bookName, author, category, rating } = book;
  return (
    <div className="p-4 border rounded-xl">
      <div className="bg-gray-100 flex justify-center items-center mx-auto p-3 rounded-lg">
        <img src={image} className="w-20 h-32" />
      </div>
      {tags.map((tag, index) => (
        <div key={index} className="badge badge-soft font-semibold badge-success mr-2 my-4">
          {tag}
        </div>
      ))}
      <h2 className="text-xl font-bold">{bookName}</h2>
      <p className="mt-4 font-semibold">
        <small>By: {author}</small>
      </p>

      <div className="mt-4 flex justify-between items-center">
        <p>
          <small>{category}</small>
        </p>
        <div className=" flex gap-2 items-center">
          <p>
            <small>{rating}</small>
          </p>
          <small>
            {" "}
            <FaRegStarHalfStroke className="mt-[.12rem]" />
          </small>
        </div>
      </div>
    </div>
  );
};

export default Book;
