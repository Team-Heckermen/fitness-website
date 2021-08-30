import React from "react";
import logo from "../assets/images/logo.png";
import search from "../assets/images/search_icon.svg";
// import userimg from "../assets/images/default_user_img.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar(props) {
  const is_logged_in = false;
  var button_style=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline bg-gray-800 text-gray-400 hover:text-white font-medium text-lg py-2 px-4 lg:-ml-2 mx-6"
  var home = (
  <li>
    <Link
      to="/"
      className={button_style}
    >
      Home
    </Link>
  </li>);

  var discussion = 
  <li>
    <Link
      to="/discussion"
      className={button_style}
    >
      Discussions
    </Link>
  </li>

  var settings = 
  <li>
    <Link
      to="/settings"
      className={button_style}
    >
      Settings
    </Link>
  </li>

  if (is_logged_in == true) {
    var sign_in;
    var sign_up = (
      <li className="absolute right-0">
        <Link
          to="/profile"
          className={button_style}
        >
          Profile
        </Link>
      </li>
    );
  }
  else {
    var sign_in = (
      <li className="absolute right-24">
        <Link
          to="/sign_in"
          className={button_style}
        >
          Sign in
        </Link>
      </li>
    );
    var sign_up = (
      <li className="absolute right-0">
        <Link
          to="/sign_up"
          className={button_style}
        >
          Sign up
        </Link>
      </li>
    );
  }
  return (
    <Router>
      <header className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1">
        <nav className="bg-gray-800 h-auto w-screen content-start">
          <ul className="flow-root md:flex items-center text-base text-blue-600 pt-4 md:pt-0 w-screen space-x-3">
              <img
                src={logo}
                height="5%"
                width="5%"
                className="mr-10 ml-4 py-2"
              />
              {home}
              {discussion}
              {settings}
              {sign_in}
              {sign_up}
              
              <div class="p-2 ml-20">
                <div class="bg-white flex items-center rounded-full shadow-xl">
                  <input class="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search" />
                  <div class="p-2 py-0">
                    <button class="bg-gray-800 text-white rounded-full p-1 hover:bg-gray-900 focus:outline-none w-6 h-6 flex items-center justify-center">
                      <img src={search} height="100%" width="100%"/>
                    </button>
                  </div>
                </div>
              </div>
            {/* <img src={userimg} className="inline-block mr-4 absolute right-0" height="4%" width="4%"/> */}
          </ul>
        </nav>
      </header>
    </Router>
  );
}
