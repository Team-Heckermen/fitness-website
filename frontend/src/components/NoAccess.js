import React from "react";
import message from "../assets/images/403page.gif";
export const NoAccess = () => {
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
