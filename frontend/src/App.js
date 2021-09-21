import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sign_in } from "./components/sign_in";
import { Sign_up } from "./components/sign_up";
import { DiscussionDisplay } from "./components/discussion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dropdown } from "./components/Dropdown";

// dummy data
var posts = [
  ["date", "post 1 heading", "post 1 content", "author"],
  ["date", "post 2 heading", "post 2 content", "author"],
  ["date", "post 3 heading", "post 3 content", "author"],
  ["date", "post 4 heading", "post 4 content", "author"],
];
var userstate = false;

function App() {
  // variable to track if navbar is open or not
  const [isOpen, setIsOpen] = useState(false);

  // function to open or close navbar
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // close navbar when screen size is bigger than 768 px width
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <>
      <Router>
        <Navbar toggle={toggle} userstate={userstate} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/"></Route>

          <Route exact path="/discussion">
            <DiscussionDisplay posts={posts} />
          </Route>

          <Route exact path="/sign_in">
            <Sign_in />
          </Route>

          <Route exact path="/sign_up">
            <Sign_up />
          </Route>
        </Switch>
        <div className="h-10"></div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
