import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signedUpUser, setSignedUpUser] = useState(null);

  useEffect(() => {
    // Get user data from Local Storage
    const storedUser = localStorage.getItem("signedUpUser");
    if (storedUser) {
      setSignedUpUser(JSON.parse(storedUser));
    }
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="p-3 flex justify-between items-center shadow-xl bg-white">
      {/* NavBar Part1 Logo */}
      <Link className="text-3xl font-extrabold" to="/">
        TechTrove
      </Link>

      {/* NavBar Part2 */}
      <div className="hidden sm:flex gap-10 items-center">
        <Link className="text-base md:text-lg font-semibold hover:border-b-1 hover:border-gray-300" to="/">
          Home
        </Link>
        <Link className="text-base md:text-lg font-semibold hover:border-b-1 hover:border-gray-300" to="/blogs">
          Blogs
        </Link>
        <Link className="text-base md:text-lg font-semibold hover:border-b-1 hover:border-gray-300" to="/about">
          About
        </Link>
      </div>

      {/* NavBar Part3 (SignUp or User Name) */}
      <div className="hidden sm:flex gap-6 items-center">
        <Link className="text-base md:text-lg font-semibold hover:border-b-1 hover:border-gray-300 flex items-center gap-2" to="/createblog">
          <i className="ri-pencil-line"></i>
          <span>Write</span>
        </Link>

        {/* Show Username if Signed Up, Otherwise Show "SignUp" */}
        {signedUpUser ? (
          <div className="flex items-center gap-2 font-semibold text-lg border border-gray-300 px-2 py-0.5 rounded-md hover:bg-gray-200">
                <Link to="/signup" onClick={closeMenu}>
                    <i className="ri-user-line"></i>
                    <span> {signedUpUser.username}</span>
                </Link>
          </div>
        ) : (
          <Link className="text-base md:text-lg font-semibold hover:border-b-1 hover:border-gray-300" to="/signup">
            SignUp
          </Link>
        )}
      </div>

      {/* Menu Button for Mobile */}
      <button className="p-2 sm:hidden" onClick={handleMenu}>
        <i className="ri-menu-line font-semibold text-xl text-gray-500"></i>
      </button>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} fixed bg-white inset-0 p-3 z-10`}>
        {/* Navbar in Mobile Screen */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link className="text-3xl font-extrabold" to="/">
            TechTrove
          </Link>

          {/* Close Button */}
          <button className="p-2 lg:hidden" onClick={handleMenu}>
            <i className="ri-close-large-line font-semibold text-xl text-gray-500"></i>
          </button>
        </div>

        {/* Mobile Links */}
        <div className="mt-5 flex flex-col gap-5">
          <Link className="text-base md:text-lg font-semibold p-3 hover:border-1 hover:border-gray-200 rounded-md" to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link className="text-base md:text-lg font-semibold p-3 hover:border-1 hover:border-gray-200 rounded-md" to="/blogs" onClick={closeMenu}>
            Blogs
          </Link>
          <Link className="text-base md:text-lg font-semibold p-3 hover:border-1 hover:border-gray-200 rounded-md" to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link className="text-base md:text-lg font-semibold flex items-center gap-1 p-3 hover:border-1 hover:border-gray-200 rounded-md" to="/createblog" onClick={closeMenu}>
            <i className="ri-pencil-line"></i>
            <span>Write</span>
          </Link>

          {/* Show Username or SignUp */}
          {signedUpUser ? (
            <div className="flex items-center gap-2 font-semibold text-lg p-3">
                <Link to="/signup" onClick={closeMenu}>
                    <i className="ri-user-line text-gray-600"></i>
                    <span> {signedUpUser.username}</span>
                </Link>
            </div>
          ) : (
            <Link className="text-base md:text-lg font-semibold p-3 hover:border-1 hover:border-gray-200 rounded-md" to="/signup" onClick={closeMenu}>
              SignUp
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
