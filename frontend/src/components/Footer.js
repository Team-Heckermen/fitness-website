import React from "react";
import search from "../assets/images/search_icon.svg";
// import userimg from "../assets/images/default_user_img.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Footer(props) {
  return (
      <>
        <div className="absolute inset-x-0 bottom-0 py-3 text-sm text-white bg-gray-800">
            <p className="w-screen text-center">
                &copy; 2021 Healthify. All rights reserved.
            </p>
        </div>
      </>
  );
}
