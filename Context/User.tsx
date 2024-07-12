"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

import { getSession } from "next-auth/react";

interface Session {
  user: {
    name: string;
    email: string;
  };
  accessToken: string;
}

interface SessionContextProps {
  session: Session | null;
  setSession: (session: Session | null) => void;
}

export const SessionContext = createContext<SessionContextProps | undefined>(
  undefined
);

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    // const fetchsession = async () => {
    //   const sessionData = await getSession();
    //   setSession(sessionData);
    // };
    // fetchsession();
  });

  return (
    <SessionContext.Provider
      value={{ session, setSession }}
    ></SessionContext.Provider>
  );
};
