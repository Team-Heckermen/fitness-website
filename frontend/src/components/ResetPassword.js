import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../actions/auth.js";
import { TopMessage } from "./message.js";

const ResetPassword = ({ reset_password }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  };

  // is the user authenticated? yes then redirect to homepage
  if (requestSent) {
    return( 
      <>
        <TopMessage message="An email has been sent to you for changing your password." />
        <Redirect to="/sign_in" />
      </>
    );
  }

  return (
    <>
    <title>YourHealthPal - Reset password</title>
      <div className="flex">
        <div className="sign-in-container">
          <div className="h-2 bg-blue-400 rounded-t-md" />
          <form className="px-8 py-6" onSubmit={(e) => onSubmit(e)}>
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="sign-in-input"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="flex justify-between items-baseline">
              <button className="primary-btn" type="submit">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default connect(null, { reset_password })(ResetPassword);
