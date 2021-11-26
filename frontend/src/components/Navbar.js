import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import search from "../assets/images/search_icon.svg";
import userimg from "../assets/images/default_user_img.svg";
import { TopMessage } from "./message";
import { logout } from "../actions/auth";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
const Navbar = ({ toggle, logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const guestLinks = () => (
    <>
      <Link to="/sign_in" className="p-1">
        <button className="underline-btn">Log In</button>
      </Link>
      <Link to="/sign_up" className="p-1 mr-4">
        <button className="underline-btn">Sign Up</button>
      </Link>
    </>
  );

  const authLinks = () => (
    <>
      <Link className="navbar-link" to="/profile">
        <button className="underline-btn">Profile</button>
      </Link>
      <Link className="navbar-link mr-4" to="/" onClick={logoutHandler}>
        <button className="underline-btn">Logout</button>
      </Link>
    </>
  );

  const logoutHandler = () => {
    logout();
    setRedirect(true);
  };
  return (
    <div>
      <nav className="flex justify-between items-center text-black relative">
        {/* Logo, home, discussion and settings button */}
        <div className="flex items-center">
          <Link to="/" className="ml-3">
            <img src={logo} className="ml-4 w-11 mr-0" />
          </Link>
          <div className="pr-8 md:block hidden mx-5">
            <Link className="navbar-link" to="/">
              <button className="underline-btn">Home</button>
            </Link>
            <Link className="navbar-link" to="/settings">
              <button className="underline-btn">Settings</button>
            </Link>
          </div>
          {/* Search Bar */}
          <div className="search_bar">
            <input
              className="navbar-search-input"
              id="search"
              type="text"
              placeholder="Search"
            />
            <div className="p-2 py-0">
              <button className="navbar-search-btn">
                <img src={search} height="100%" width="100%" />
              </button>
            </div>
          </div>
        </div>
        <div className="pr-3 md:block hidden">
          {isAuthenticated ? authLinks() : guestLinks()}
        </div>
        {/* Button icon when the screen is small */}
        <div className="mr-8 cursor-pointer block md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </nav>
      <hr className="w-95% mx-auto m-0 p-0 border-gray-700" />
      {redirect ? <Redirect to="/" /> : <></>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
