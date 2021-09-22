import React from "react";
import logo from "../assets/images/logo.png";
import search from "../assets/images/search_icon.svg";
import userimg from "../assets/images/default_user_img.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Navbar = (props) => {
  var userstate = props.userstate;
  if (userstate) {
    var sign_in_button;
    var sign_up_button = (
      <Link className="p-4" to="/profile">
        <button className="navbar-btn">Profile</button>
      </Link>
    );
  } else {
    var sign_in_button = (
      <Link to="/sign_in" className="p-1">
        <button className="navbar-btn">Log In</button>
      </Link>
    );
    var sign_up_button = (
      <Link to="/sign_up" className="p-1 pr-1.5">
        <button className="navbar-btn">Sign Up</button>
      </Link>
    );
  }
  return (
    <div>
      <nav className="flex justify-between items-center h-16 text-black relative w-screen">
        {/* Logo, home, discussion and settings button */}
        <div className="flex">
          <Link to="/">
            <img src={logo} className="ml-4 py-2 w-11 mr-0" />
          </Link>
          <div className="pr-8 md:block hidden my-2 mx-5">
            <Link className="p-1" to="/">
              <button className="navbar-btn">Home</button>
            </Link>
            <Link className="p-1" to="/discussion">
              <button className="navbar-btn">Discussion</button>
            </Link>
            <Link className="p-1" to="/settings">
              <button className="navbar-btn">Settings</button>
            </Link>
          </div>
          {/* Search Bar */}
          <div className="bg-white flex items-center rounded-full my-auto mr-4 md:mr-0 ml-4 md:ml-0 w-2/3 h-2/3 md:h-auto md:w-auto border-gray-400 border-solid border-0.5">
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
          {sign_in_button}
          {sign_up_button}
        </div>
        {/* Button icon when the screen is small */}
        <div
          className="pr-4 cursor-pointer block md:hidden"
          onClick={props.toggle}
        >
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
      <hr className="w-95% mx-auto m-0 p-0 border-gray-500 mb-5" />
    </div>
  );
};
