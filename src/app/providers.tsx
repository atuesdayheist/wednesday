"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./user/provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <UserProvider>{children}</UserProvider>
    </GoogleOAuthProvider>
  );
}
