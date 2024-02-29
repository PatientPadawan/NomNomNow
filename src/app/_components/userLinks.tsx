"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { useCartStore } from "../utils/store";

type Props = {
  session: boolean;
};

const UserLinks = ({ session }: Props) => {
  const handleSignOut = () => {
    useCartStore.persist.clearStorage();
    signOut();
  };

  return (
    <div>
      {!session ? (
        <Link href="/login">Login</Link>
      ) : (
        <div>
          <Link href="/orders">Orders</Link>
          <span className="ml-4 cursor-pointer" onClick={() => handleSignOut()}>
            Logout
          </span>
        </div>
      )}
    </div>
  );
};

export default UserLinks;
