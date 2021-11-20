import React from "react";
import { Link, Redirect } from "react-router-dom";

export const Settings = () => {
  var name = "name of user";
  var email = " email of the user";
  return (
    <>
    <title>YourHealthPal - Settings</title>
      <div className="flex">
        <div className="settings-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <form className="px-8 py-6">
            <label className="block font-semibold">Email</label>
            <input
             className="sign-in-input"
              type="email"
              placeholder={email}
              name="email"
            />
            <label className="block mt-3 font-semibold">Name</label>
            <input
             className="sign-in-input"
              type="text"
              placeholder={name}
              name="username"
            />
            <div className="flex justify-between items-baseline">
              <button className="primary-btn w-90% mx-auto" type="submit">
                update personal info
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
