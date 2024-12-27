"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Check token on initial page load
  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  // Login method
  const login = (userToken) => {
    localStorage.setItem("authToken", userToken);
    setToken(userToken); // Update state immediately
  };

  // Logout method
  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null); // Clear state immediately
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
