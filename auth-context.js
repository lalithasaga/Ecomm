import React, { useState, useEffect } from 'react';

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    const expirationTime = new Date().getTime() + 300000; 
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime.toString());
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationTime = localStorage.getItem('expirationTime');
    if (storedToken && storedExpirationTime) {
      const remainingTime = calculateRemainingTime(storedExpirationTime);
      if (remainingTime > 0) {
        setToken(storedToken);
        const logoutTimer = setTimeout(logoutHandler, remainingTime);
        return () => {
          clearTimeout(logoutTimer);
        };
      } else {
        logoutHandler();
      }
    }
  }, []);

  const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjustedExpirationTime = parseInt(expirationTime);
    const remainingTime = adjustedExpirationTime - currentTime;
    return remainingTime;
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
