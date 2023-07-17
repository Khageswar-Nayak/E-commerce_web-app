import React, { useRef } from "react";
import classes from "./Login.module.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../auth-context";

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const authCtx = useContext(AuthContext);

  console.log(authCtx.isLoggedIn);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAq9ScOSJjJOFyOu6K4bNi-y3NGUgPm6KA";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAq9ScOSJjJOFyOu6K4bNi-y3NGUgPm6KA";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            // console.log(data);
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // console.log(data.idToken);
        authCtx.login(data.idToken);
        navigate("/store");
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className={classes["form-container"]}>
      <form onSubmit={submitHandler}>
        <h2 className={classes["form-heading"]}>
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <label>Email Id:</label>
        <input type="email" ref={emailInputRef} />
        <label>Password:</label>
        <input type="number" ref={passwordInputRef} />
        <button className={classes["form-button"]}>Submit</button>
        <br />
        <button
          type="button"
          className={classes.button}
          onClick={switchAuthModeHandler}
        >
          {isLogin ? "Create new account" : "Login with existing account"}
        </button>
      </form>
    </div>
  );
};

export default Login;
