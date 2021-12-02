import React from "react";
import DarkMessage from "../assets/images/dark-mode/403page.png";
import LightMessage from "../assets/images/light-mode/403page.png";

export const error_403 = () => {
  if(true)
  {
    var Message = DarkMessage;
  }
  else
  {
    var Message = LightMessage;
  }

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
      <img src={Message} width={width} className="mx-auto" />
    </div>
  );
};
