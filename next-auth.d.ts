// next-auth.d.ts

import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    role?: USER | ADMIN;
  }

  interface Session {
    user: User;
  }
}
