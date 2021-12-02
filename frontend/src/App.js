import React, { useState, useEffect } from "react";
import "./App.css";
import Sign_in from "./components/sign_in";
import Sign_up from "./components/sign_up";
import { Footer } from "./components/Footer";
import ResetPassword from "./components/ResetPassword";
import ResetPasswordConfirm from "./components/ResetPasswordConfirm";
import Activate from "./components/Activate";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Provider } from "react-redux";
import store from "./store";
import error_404 from "./components/error_404";
import TopMessage from "./components/message";
import { Account } from "./components/account";


function App() {
  if(true)
  {
    var body_style = ""
  }
  else{
  }

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
          <div className="bg-custom flex flex-col justify-between min-h-screen ">
            <TopMessage/>
            <Layout>
              <link rel="icon" href="assets/images/logo.png" />
              <Switch>
                {/* Normal Pages */}
                <Route exact path="/" >
                  <title>Venplore</title>
                </Route>
                <Route exact path="/sign_in" component={Sign_in} />
                <Route exact path="/sign_up" component={Sign_up} />
                <Route exact path="/profile" component={Account}/>
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
                <Route component={error_404} />
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
