"use client";

import { signOut } from "next-auth/react";

const page = () => {
  return <button onClick={() => signOut()}>Logout</button>;
};

export default page;
