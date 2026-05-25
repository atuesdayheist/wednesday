"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import { User, UserContextType } from "./types";

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [picture, setPicture] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("auth");

    if (stored) {
      const parsed = JSON.parse(stored);

      setUsername(parsed.user.name);
      setEmail(parsed.user.email);
      setPicture(parsed.user.picture);
    }

    setLoading(false);
  }, []);

  const setAuth = (user: User) => {
    setUsername(user.name);
    setEmail(user.email);
    setPicture(user.picture);

    localStorage.setItem("auth", JSON.stringify({ user }));
  };

  const logout = () => {
    setUsername(null);
    setEmail(null);
    setPicture(null);
  };

  return (
    <UserContext.Provider
      value={{
        username,
        email,
        picture,
        loading,
        setAuth,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
}
