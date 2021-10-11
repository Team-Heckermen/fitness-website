import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../actions/auth";

const Activate = ({ verify, match }) => {
  const [verified, setVerified] = useState(false);

  const verify_account = (e) => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return (
      <>
        <div className="sign-in-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <div className="flex justify-between items-baseline">
            <p className="inset-x-auto mx-auto px-2 my-4">You are verified. You can close this tab now.</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
    <title>YourHealthPal-activate account</title>
      <div className="flex">
        <div className="sign-in-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <div className="flex justify-between items-baseline">
            <button
              className="inset-x-auto mx-auto primary-btn"
              type="button"
              onClick={verify_account}
            >
              Verify Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { verify })(Activate);
