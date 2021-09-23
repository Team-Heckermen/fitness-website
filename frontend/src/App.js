import React, { useState, useEffect } from "react";
import "./App.css";
import Sign_in from "./components/sign_in";
import { Sign_up } from "./components/sign_up";
import { DiscussionDisplay } from "./components/discussion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./Layout/Layout";

import { Provider } from "react-redux";
import store from "./store";

// dummy data
var posts = [
  ["date", "post 1 heading", "post 1 content", "author"],
  ["date", "post 2 heading", "post 2 content", "author"],
  ["date", "post 3 heading", "post 3 content", "author"],
  ["date", "post 4 heading", "post 4 content", "author"],
];

function App() {
  // close navbar when screen size is bigger than 768 px width
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 925 && isOpen) {
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
      <Provider store={store}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/"></Route>
              <Route exact path="/discussion">
                <DiscussionDisplay posts={posts} />
              </Route>
              <Route exact path="/sign_in" component={Sign_in} />
              <Route exact path="/sign_up" component={Sign_up} />
              <Route exact path="/reset-password"></Route>
              <Route exact path="/password/reset/confirm/:uid/:token"></Route>
              <Route exact path="/activate/:uid/:token"></Route>
            </Switch>
          </Layout>
        </Router>
      </Provider>
    </>
  );
}

export default App;
