import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center mt-8 mb-16 bg-gray-100 p-12 rounded-lg gap-14 ">
      <div className="w-[55%]">
        <h1 className="text-5xl font-bold mb-10 leading-16">Books to freshen up your bookshelf</h1>
        <button className="btn btn-success font-bold text-white">View The List</button>
      </div>
      <div className="w-[45%]">
        <img
          src="https://i.ibb.co.com/W4XwxYXt/books.webp"
          className="w-full rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;
