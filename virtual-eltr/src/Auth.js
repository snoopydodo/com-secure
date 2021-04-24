import React from "react";
import Page2 from "./Page2";
import Login from "./Login";
function Auth({
  user,
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignup,
  setHasAccount,
  emailError,
  passwordError,
  handleLogout,
  hasAccount,
}) {
  return (
user ? (
    <Page2 handleLogout={handleLogout} />
  ) : (
    <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      handleSignup={handleSignup}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
    />
  )

  )
  
}

export default Auth;

