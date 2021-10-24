import React, { useState, useEffect } from "react";
import "./App.css";
import Sign_in from "./components/sign_in";
import Sign_up from "./components/sign_up";
import { Footer } from "./components/Footer";
import ResetPassword from "./components/ResetPassword";
import ResetPasswordConfirm from "./components/ResetPasswordConfirm";
import Activate from "./components/Activate";
import { DiscussionDisplay } from "./components/discussion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Provider } from "react-redux";
import store from "./store";
import PageNotFound from "./components/PageNotFound";

// dummy data
var posts = [
  ["date", "post 1 heading", "post 1 content", "author"],
  ["date", "post 2 heading", "post 2 content", "author"],
  ["date", "post 3 heading", "post 3 content", "author"],
  ["date", "post 4 heading", "post 4 content", "author"],
];

function App() {
  // variable to track if navbar is open or not
  const [isOpen, setIsOpen] = useState(false);

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
          <div className="flex flex-col justify-between min-h-screen ">
            <Layout>
              <link rel="icon" href="assets/images/logo.png" />
              <Switch>
                {/* Normal Pages */}
                <Route exact path="/" >
                  <title>YourHealthPal</title>
                </Route>
                <Route exact path="/discussion">
                  <DiscussionDisplay posts={posts} />
                </Route>
                <Route exact path="/sign_in" component={Sign_in} />
                <Route exact path="/sign_up" component={Sign_up} />
                <Route exact path="/settings" />
                <Route exact path="/reset-password" component={ResetPassword} />
                <Route
                  exact
                  path="/password/reset/confirm/:uid/:token"
                  component={ResetPasswordConfirm}
                />
                <Route
                  exact
                  path="/activate/:uid/:token"
                  component={Activate}
                />
                {/* Error Pages */}
                <Route component={PageNotFound} />
              </Switch>
            </Layout>
            <Footer />
          </div>
        </Router>
      </Provider>
    </>
  );
}

export default App;
