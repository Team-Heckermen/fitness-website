import React from "react";
import search from "../assets/images/search_icon.svg";
// import userimg from "../assets/images/default_user_img.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Sign_in(props) {
  return (
      <>
        <div className="w-1/2 inline-block">
            <form>
                <input
                    className="block py-3 px-5 mx-auto mt-16 text-center align-text-top w-1/2 h-15 rounded-full border-2 border-gray-800"
                    type="text" 
                    placeholder="Email"
                />
                <input
                    className="block py-3 px-5 mx-auto mt-16 text-center align-text-top w-1/2 h-15 rounded-full border-2 border-gray-800"
                    type="password" 
                    placeholder="password"
                />
                <input
                    className="block py-3 px-5 mx-auto mt-16 text-center align-text-top w-1/4 h-15 rounded-full text-white   bg-gray-800"
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
