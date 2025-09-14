import React, { createContext, useState, useEffect, ReactNode } from "react";
import { User } from "firebase/auth";
import { auth } from "./config/Firebase";

// Define what values your context will provide
export interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  isAuthenticated: boolean;
  signin: () => void;
  signout: () => void;
}

// Create context with default (undefined so we enforce provider usage)
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define props for provider
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signin = () => setIsAuthenticated(true);
  const signout = () => setIsAuthenticated(false);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const token = await currentUser.getIdTokenResult();
        if (token.claims.admin) {
          setIsAdmin(true);
        }
        setUser(currentUser);
        setIsAuthenticated(true);
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAdmin, isAuthenticated, signin, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
