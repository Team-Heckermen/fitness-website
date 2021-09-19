import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const Sign_in = (props) => {
  return (
    <>
      <div className="flex">
        <div className="sign-in-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <div className="px-8 py-6">
            <label className="block font-semibold">Email</label>
            <input
              type="text"
              placeholder="example@email.com"
              className="sign-in-input"
            />
            <label className="block mt-3 font-semibold">Password</label>
            <input
              type="password"
              placeholder="password123"
              className="sign-in-input"
            />
            <div className="flex justify-between items-baseline">
              <button className="primary-btn">Login</button>
              <Link to="/forgot-password" className="text-sm hover:text-blue-500 ">
                Forgot password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
