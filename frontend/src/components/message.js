import React, { useState, useEffect } from "react";
import cross from "../assets/images/cross.svg";
import { connect } from "react-redux";
var message = "";
const TopMessage = ({
  resetRequestSent,
  resetConfirmSuccess,
  signinSuccess,
  signupSuccess,
  wrongLoginCredentials,
  logoutSuccess,
  activationSuccess,
}) => {
  const [Open, setOpen] = useState(false);
  const [Rrs, setRrs] = useState(true);
  const [loginIncorrect, setLoginIncorrect] = useState(true);
  const [passwordResetSuccess, setPasswordResetSuccess] = useState(true);
  const [Sis, setSis] = useState(true);
  const [Sus, setSus] = useState(true);
  const [Ls, setLs] = useState(true);
  const [As, setAs] = useState(true);

  const setopentrue = (open) => {
    if (open != true) {
      setOpen(true);
    }
  };
  const toggle = () => {
    message = "";
    setOpen(false);
  };

  if (resetRequestSent && Rrs) {
    message = "A message has been sent to you by email with instructions on how to reset your password.";
    setRrs(false);
    setopentrue(Open);
  }

  if (resetConfirmSuccess && passwordResetSuccess) {
    message = "Your password has been changed successfully.";
    setPasswordResetSuccess(false);
    setopentrue(Open);
  } else if (resetConfirmSuccess === false && passwordResetSuccess) {
    message =
      "There is some error either in the link or the password you entered. Try again";
    setPasswordResetSuccess(false);
    setopentrue(Open);
  }

  if (activationSuccess && As) {
    message = "Your email address has been verified. Kindly sign in.";
    setAs(false);
    setopentrue(Open);
  }
  if (signinSuccess && Sis) {
    message = "Signed in successfully. Welcome back!";
    setSis(false);
    setopentrue(Open);
  }
  if (signupSuccess && Sus) {
    message = "An email has been sent to you for verifing your email address.";
    setSus(false);
    setopentrue(Open);
  }

  if (wrongLoginCredentials && loginIncorrect) {
    message = "The email or password you entered are incorrect.";
    setLoginIncorrect(false);
    setopentrue(Open);
  }
  if (logoutSuccess && Ls) {
    message = "Logged out successfully. See you later!";
    setLs(false);
    setopentrue(Open);
  }

  if (message != "") {
    return (
      <div className={Open ? "message-box inset-x-5%" : "hidden"}>
        <p className="py-3 text-sm ml-3 text-white w-80%">{message}</p>
        <img
          src={cross}
          className="absolute right-4 top-3 md:top-4 md:w-3%"
          onClick={toggle}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

const mapStateToProps = (state) => ({
  resetRequestSent: state.auth.resetRequestSent,
  resetConfirmSuccess: state.auth.resetConfirmSuccess,
  wrongLoginCredentials: state.auth.wrongLoginCredentials,
  signinSuccess: state.auth.signinSuccess,
  signupSuccess: state.auth.signupSuccess,
  logoutSuccess: state.auth.logoutSuccess,
  activationSuccess: state.auth.activationSuccess,
});
export default connect(mapStateToProps, null)(TopMessage);
