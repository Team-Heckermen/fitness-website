import React from "react";
import search from "../assets/images/search_icon.svg";
// import userimg from "../assets/images/default_user_img.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Sign_in = (props) => {
  return (
    <>
      <div className="flex">
        <div class="sign-in-container">
          <div class="h-2 bg-blue-400 rounded-t-md"></div>
          <div class="px-8 py-6">
            <label class="block font-semibold">Email</label>
            <input
              type="text"
              placeholder="example@email.com"
              class="sign-in-input"
            />
            <label class="block mt-3 font-semibold">Password</label>
            <input
              type="password"
              placeholder="password123"
              class="sign-in-input"
            />
            <div class="flex justify-between items-baseline">
              <button class="primary-btn">Login</button>
              <Link to="/forgot-password" class="text-sm hover:bg-blue-300 ">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
