import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-between items-center mt-8 mb-16 bg-gray-100 py-12 px-4 md:p-8 lg:p-12 rounded-lg gap-6 ">
      <div className="md:w-[55%] w-[50%]">
        <h1 className=" md:text-2xl mb-4 lg:text-5xl font-bold md:mb-10 lg:leading-16">Books to freshen up your bookshelf</h1>
        <button className="btn btn-success font-semibold text-white">View The List</button>
      </div>
      <div className="md:w-[44%] w-[49%]">
        <img
          src="https://i.ibb.co.com/W4XwxYXt/books.webp"
          className="w-full rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;
