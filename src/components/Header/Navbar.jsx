import React from "react";

const Navbar = () => {
    const links = <>
        <li className="text-lg font-semibold  px-4 pb-2 pt-1  border-transparent border hover:border-[#23BE0A] hover:text-[#23BE0A] rounded-lg">Home</li>
        <li className="text-lg font-semibold  px-4 pb-2 pt-1  border-transparent border hover:border-[#23BE0A] hover:text-[#23BE0A] rounded-lg">Listed Books</li>
        <li className="text-lg font-semibold  px-4 pb-2 pt-1  border-transparent border hover:border-[#23BE0A] hover:text-[#23BE0A] rounded-lg">Pages to Read</li>
    </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="text-center menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-44 p-2 shadow"
            >
             {links}
            </ul>
          </div>
          <a className="font-bold text-xl ml-2">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn mr-2 btn-success font-bold p-3">
            Sign In
          </button>
          <button className="btn btn-accent font-bold p-3">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
