import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  // Load user from localStorage when app starts
  useEffect(() => {
    const storedUser = localStorage.getItem("user"); // ✅ consistent key

    if (storedUser) {
      setAuthUser(JSON.parse(storedUser));
      console.log("User loaded from localStorage:", JSON.parse(storedUser));
    }
    else {
      console.log("No user found in localStorage");
    }
  }, []);

 

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
