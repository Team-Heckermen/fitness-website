import React from "react";
import message from "../assets/images/404page.gif";
const error_404 = () => {
  var { innerWidth: width, innerHeight: height } = window;
  var mheight = height - 130;
  height = (width/16)*9;
  if(height>mheight)
  {
    height = mheight;
    width = (height/9)*16;
  }
  return (
    <div>
      <title>YourHealthPal - page not found</title>
      <img src={message} width={width} className="mx-auto" />
    </div>
  );
};

export default error_404;
