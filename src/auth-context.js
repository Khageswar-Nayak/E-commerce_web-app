import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [isLoggedIn, setIsLoggedIn] = useState(!!initialToken);
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [isLoggedIn, token]);

  const loginHandler = (token) => {
    setToken(token);
    setIsLoggedIn(true);
    // localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    setIsLoggedIn(false);
    // localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
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
