import React from "react";
import logo from "../assets/images/logo.svg";
// import userimg from "../assets/images/default_user_img.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Navbar(props) {
  const is_logged_in = false;
  var home = 
  <li>
    <Link
      to="/"
      className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline hover:text-white bg-gray-800 p-1 text-gray-400 font-medium text-lg py-2 px-4 mr-6"
    >
      Home
    </Link>
  </li>

  var home_open = 
  <li>
    <Link
      to="/"
      className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline hover:text-white bg-gray-800 p-1 text-gray-400 font-medium text-lg py-2 px-4 mr-6"
    >
      Home
    </Link>
  </li>

  var discussion = 
  <li>
    <Link
      to="/"
      className=" rounded-md my-2 inline-block hover:bg-gray-700 no-underline bg-gray-800 p-1 text-gray-400 hover:text-white font-medium text-lg py-2 px-4 lg:-ml-2 mx-6"
    >
      Discussions
    </Link>
  </li>

  var discussion_open = 
  <li>
    <Link
      to="/"
      className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline hover:text-white bg-gray-800 p-1 text-gray-400 font-medium text-lg py-2 px-4 mr-6"
    >
      Discissions
    </Link>
  </li>

  var settings = 
  <li>
    <Link
      to="/"
      className=" rounded-md my-2 inline-block hover:bg-gray-700 no-underline bg-gray-800 p-1 text-gray-400 hover:text-white font-medium text-lg py-2 px-4 lg:-ml-2 mx-6"
    >
      Settings
    </Link>
  </li>

  var settings_open =
  <li>
    <Link
    to="/"
    className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline hover:text-white bg-gray-800 p-1 text-gray-400 font-medium text-lg py-2 px-4 mr-6"
    >
      settings
    </Link>
  </li>

  if (is_logged_in == true) {
    var sign_in;
    var sign_in_open;
    var sign_up = (
      <li className="absolute right-0">
        <Link
          to="/"
          className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline bg-gray-800 p-1 text-gray-400 hover:text-white font-medium text-lg py-2 px-4 lg:-ml-2 mx-6"
        >
          Profile
        </Link>
      </li>
    );
    var sign_up_open = (
      <li className="absolute right-0">
        <Link
          to="/"
          className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline bg-gray-800 p-1 text-gray-400 hover:text-white font-medium text-lg py-2 px-4 lg:-ml-2 mx-6"
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
          to="/"
          className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline hover:text-white bg-gray-800 p-1 text-gray-400 font-medium text-lg py-2 px-4 lg:-ml-2 mx-6"
        >
          Sign in
        </Link>
      </li>
    );
    var sign_in_open = (
      <li className="absolute right-24">
        <Link
          to="/"
          className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline hover:text-white bg-gray-800 p-1 text-gray-400 font-medium text-lg py-2 px-4 lg:-ml-2 mx-6"
        >
          Sign in
        </Link>
      </li>
    );
    var sign_up = (
      <li className="absolute right-0">
        <Link
          to="/"
          className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline bg-gray-800 p-1 text-gray-400 hover:text-white font-medium text-lg py-2 px-4 lg:-ml-2 mx-6"
        >
          Sign up
        </Link>
      </li>
    );
    var sign_up_open = (
      <li className="absolute right-0">
        <Link
          to="/"
          className=" rounded-md my-2 hover:bg-gray-700 inline-block no-underline bg-gray-800 p-1 text-gray-400 hover:text-white font-medium text-lg py-2 px-4 lg:-ml-2 mx-6"
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
          <ul className="flow-root md:flex items-center text-base text-blue-600 pt-4 md:pt-0 w-screen">
            <Link to="/">
              <img
                src={logo}
                className="inline-block mr-4"
                height="5%"
                width="5%"
              />
            </Link>
            <Switch>
            <Route exact path="/">
              {home_open}
              {discussion}
              {settings}
              {sign_in}
              {sign_up}
            </Route>
            <Route exact path="/discussions">
              {home}
              {discussion_open}
              {settings}
              {sign_in}
              {sign_up}
            </Route>
            <Route exact path="/settings">
              {home}
              {discussion}
              {settings_open}
              {sign_in}
              {sign_up}
            </Route>
            <Route exact path="/sign_in">
              {home}
              {discussion}
              {settings}
              {sign_in_open}
              {sign_up}
            </Route>
            <Route exact path="/sign_up">
              {home}
              {discussion}
              {settings}
              {sign_in}
              {sign_up_open}
            </Route>
          </Switch>
            {/* <img src={userimg} className="inline-block mr-4 absolute right-0" height="4%" width="4%"/> */}
          </ul>
        </nav>
      </header>
    </Router>
  );
}
