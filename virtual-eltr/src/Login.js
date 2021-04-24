import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <div className ="imgimg">
      <section className="login">
      <div className="loginContainer">
        <label>Username</label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <lable>Password</lable>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <Link to="/auth">
              <>
                <button onClick={handleLogin}>Sign in</button>
                <p>
                  <Link to="/Signup">
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign up
                    </span>
                  </Link>
                  Don't have an account?
                </p>
              </>
            </Link>
          ) : (
            <Link to="/Signup">
              <>
                <button onClick={handleSignup}>Sign up</button>
                <Link to="/Login">
                  <p>
                    Have an account?
                    <span onClick={() => setHasAccount(!hasAccount)}>
                      Sign in
                    </span>
                  </p>
                </Link>
              </>
            </Link>
          )}
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default Login;
