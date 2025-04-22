import React, { useState } from "react";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const handleActive = (path) => {
    setActive(path);
  };

  const getLinkClass = (path) => {
    const baseClass =
      "text-lg font-semibold px-4 py-2 border rounded-lg ml-2";
    const activeClass = "border-[#23BE0A] text-[#23BE0A]";
    const inactiveClass = "border-transparent hover:border-[#23BE0A] hover:text-[#23BE0A]";
    return `${baseClass} ${active === path ? activeClass : inactiveClass}`;
  };

  return (
    <div className="navbar bg-base-100">
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul className="text-center menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-44 p-2 shadow">
            <Link to="/" onClick={() => handleActive("/")}>
              <li className={`${getLinkClass("/")} mb-2`}>Home</li>
            </Link>
            <Link to="/listedBooks" onClick={() => handleActive("/listedBooks")}>
              <li className={`${getLinkClass("/listedBooks")} mb-2`}>Listed Books</li>
            </Link>
            <Link to="/pagesToRead" onClick={() => handleActive("/pagesToRead")}>
              <li className={getLinkClass("/pagesToRead")}>Pages to Read</li>
            </Link>
          </ul>
        </div>
        <a className="font-bold text-xl ml-2">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Link to="/" onClick={() => handleActive("/")}>
            <li className={getLinkClass("/")}>Home</li>
          </Link>
          <Link to="/listedBooks" onClick={() => handleActive("/listedBooks")}>
            <li className={getLinkClass("/listedBooks")}>Listed Books</li>
          </Link>
          <Link to="/pagesToRead" onClick={() => handleActive("/pagesToRead")}>
            <li className={getLinkClass("/pagesToRead")}>Pages to Read</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn mr-2 btn-success text-white font-semibold p-3">Sign In</button>
        <button className="btn btn-accent text-white font-semibold p-3">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
