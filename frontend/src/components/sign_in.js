import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth.js";

const Sign_in = ({ login }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  // is the user authenticated?
  // redirect to hoeme page

  return (
    <>
      <div className="flex">
        <div className="sign-in-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
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
            <label className="block mt-3 font-semibold">Password</label>
            <input
              type="password"
              placeholder="password123"
              className="sign-in-input"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              minLength="7"
              required
            />
            <div className="flex justify-between items-baseline">
              <button className="primary-btn" type="submit">
                Login
              </button>
              <Link
                to="/reset-password"
                className="text-sm hover:text-blue-500 "
              >
                Forgot password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

// const mapStateToProps = (state) => ({
//   // isAuthenticated?
// });

export default connect(null, { login })(Sign_in);
