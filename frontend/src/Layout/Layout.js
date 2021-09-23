import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { connect } from "react-redux";
import { Dropdown } from "../components/Dropdown";
import { checkAuthenticated, load_user } from "../actions/auth";

const Layout = ({ checkAuthenticated, load_user, children }) => {
  // variable to track if navbar is open or not
  const [isOpen, setIsOpen] = useState(false);

  // function to open or close navbar
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    checkAuthenticated();
    load_user();
    const hideMenu = () => {
      if (window.innerWidth > 925 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, []);

  return (
    <div>
      <Navbar toggle={toggle} /> {children}
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {children}
      <div className="h-10"></div>
      <Footer />
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
