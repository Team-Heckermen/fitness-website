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
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="flex">
        <div className="sign-in-container">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <div className="flex justify-between items-baseline">
            <button
              className="primary-btn"
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
