import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/auth";

const Sign_up = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { username, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(username, email, password, re_password);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  if (accountCreated) {
    return <Redirect to="/sign_in" />;
  }
  return (
    <>
    <title>YourHealthPal-Sign up</title>
      <div className="flex">
        <div className="sign-in-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <form className="px-8 py-6" onSubmit={(e) => onSubmit(e)}>
            <label className="block font-semibold">Username</label>
            <input
              type="text"
              placeholder="johndoe"
              className="sign-in-input"
              name="username"
              value={username}
              onChange={(e) => onChange(e)}
              required
            />
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
              minLength="7"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <label className="block mt-3 font-semibold">Confirm Password</label>
            <input
              type="password"
              placeholder="password123"
              className="sign-in-input"
              minLength="7"
              name="re_password"
              value={re_password}
              onChange={(e) => onChange(e)}
              required
            />
            <div className="flex justify-between items-baseline">
              <button className="primary-btn">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Sign_up);
