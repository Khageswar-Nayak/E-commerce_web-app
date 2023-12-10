import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  email: "",
  isLoggedIn: false,
  login: (data) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const emailId = localStorage.getItem("email");
  const [token, setToken] = useState(initialToken);
  const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);
  const [email, setEmail] = useState(emailId);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    }
  }, [isLoggedIn, token]);

  const loginHandler = (data) => {
    console.log("hii");
    setToken(data.idToken);
    setEmail(data.email);
    setIsLoggedIn(true);
    // localStorage.setItem("email", data.email);
  };

  const logoutHandler = () => {
    setToken(null);
    setIsLoggedIn(false);
    // localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    email: email,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  //   console.log(contextValue.token);

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
