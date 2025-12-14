import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  influencerName: string;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [influencerName] = useState("Alex Creator");

  useEffect(() => {
    const stored = localStorage.getItem("infludeal_logged_in");
    if (stored === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    localStorage.setItem("infludeal_logged_in", "true");
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("infludeal_logged_in");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, influencerName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
