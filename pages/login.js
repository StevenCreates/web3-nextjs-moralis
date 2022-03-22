import React from "react";
import PropTypes from "prop-types";
import { useMoralis } from "react-moralis";

export default function Login() {
  const {
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
    authError,
  } = useMoralis();

  return (
    <div>
      Login
      <button onClick={authenticate} className="button button-login">
        Login
      </button>
      <button className="button button-logout">Logout</button>
      <div>
        {isAuthenticated ? (
          <div>
            <span>account: {account}</span>
          </div>
        ) : (
          <div>Not Logged In</div>
        )}
      </div>
      <style jsx>{`
        .button {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          whitespace: nowrap;
          fontsize: 12px;
          position: relative;
          padding: 0px 12px;
          margin: 0;
          width: auto;
          height: 30px;
          transition: all 6ms easing;
        }
        .button.button-login {
          background: #1e293b;
          color: #ffffff;
        }
        .button.button-logout {
          color: #1e293b;
        }
      `}</style>
    </div>
  );
}
