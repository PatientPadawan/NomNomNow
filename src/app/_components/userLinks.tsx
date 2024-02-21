"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

type Props = {
  session: boolean;
};

const UserLinks = ({ session }: Props) => {
  return (
    <div>
      {!session ? (
        <Link href="/login">Login</Link>
      ) : (
        <div>
          <Link href="/menu">Orders</Link>
          <span className="ml-4 cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </div>
      )}
    </div>
  );
};

export default UserLinks;
