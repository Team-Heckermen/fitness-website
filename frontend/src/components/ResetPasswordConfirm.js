import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password_confirm } from "../actions/auth.js";

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
  const [formData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const { new_password, re_new_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    const uid = match.params.uid;
    const token = match.params.token;

    reset_password_confirm(uid, token, new_password, re_new_password);
  };

  // is the user authenticated? yes then redirect to homepage
  if (match) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="flex">
        <div className="sign-in-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <form className="px-8 py-6" onSubmit={(e) => onSubmit(e)}>
            <label className="block mt-3 font-semibold">New Password</label>
            <input
              type="password"
              placeholder="password123"
              className="sign-in-input"
              name="new-password"
              value={new_password}
              onChange={(e) => onChange(e)}
              minLength="7"
              required
            />
            <label className="block mt-3 font-semibold">
              Confirm New Password
            </label>
            <input
              type="password"
              placeholder="password123"
              className="sign-in-input"
              name="confirm-new-password"
              value={re_new_password}
              onChange={(e) => onChange(e)}
              minLength="7"
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

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
