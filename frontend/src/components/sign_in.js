import React from "react";
import search from "../assets/images/search_icon.svg";
// import userimg from "../assets/images/default_user_img.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Sign_in(props) {
    var button_style="block py-3 px-5 mx-auto mt-16 text-center align-text-top w-1/2 rounded-full border-2 border-gray-800"
  return (
      <>
        <div className="w-1/2">
            <form className="space-y-15">
                <input
                    className={button_style}
                    type="text" 
                    placeholder="Email"
                />
                <input
                    className={button_style}
                    type="password" 
                    placeholder="password"
                />
                <input
                    className={button_style}
                    type="submit" 
                    placeholder="Submit"
                />                
            </form>
        </div>
        <div className="w-1/2 inline-block">
        </div>
      </>
  );
}
