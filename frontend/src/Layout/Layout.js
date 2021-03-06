import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { Dropdown } from "../components/Dropdown";
import { checkAuthenticated, load_user } from "../actions/auth";

const Layout = (props) => {
  // variable to track if navbar is open or not
  const [isOpen, setIsOpen] = useState(false);

  // function to open or close navbar
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    props.checkAuthenticated();
    props.load_user();
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
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {props.children}
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
