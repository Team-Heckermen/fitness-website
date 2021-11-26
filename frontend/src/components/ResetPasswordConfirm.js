import React, { useState } from "react";
import { connect } from "react-redux";
import { reset_password_confirm } from "../actions/auth";

const ResetPasswordConfirm = ({
  match,
  reset_password_confirm,
  resetConfirmSuccess,
}) => {
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

  if (resetConfirmSuccess) {
    return (
      <>
        <div className="sign-in-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <div className="flex justify-between items-baseline">
            <p className="inset-x-auto mx-auto my-4 px-8">
              Password changed successfully! You can close this tab now.
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="flex">
        <title>YourHealthPal - Reset password</title>
        <div className="sign-in-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <form className="px-8 py-6" onSubmit={(e) => onSubmit(e)}>
            <label className="block font-semibold">Password</label>
            <input
              type="password"
              placeholder="password123"
              className="sign-in-input"
              name="new_password"
              value={new_password}
              onChange={(e) => onChange(e)}
              minLength="7"
              required
            />
            <label className="block mt-3 font-semibold">Confirm Password</label>
            <input
              type="password"
              placeholder="password123"
              className="sign-in-input"
              name="re_new_password"
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
    );
  }
};

const mapStateToProps = (state) => ({
  resetConfirmSuccess: state.auth.resetConfirmSuccess,
});

export default connect(mapStateToProps, { reset_password_confirm })(
  ResetPasswordConfirm
);
