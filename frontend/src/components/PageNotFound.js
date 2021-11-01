import React from "react";
import message from "../assets/images/404page.gif";
const PageNotFound = () => {
  return (
    <div>
      <title>YourHealthPal - page not found</title>
      <img src={message} className=" max-w-4xl mx-auto" />
    </div>
  );
};

export default PageNotFound;
