"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

type Props = {
  color: string;
  provider: string;
};

type ColorMap = {
  [key: string]: string;
};

const LoginButton = ({ color, provider }: Props) => {
  const colorVariants: ColorMap = {
    blue: `ring-blue-200`,
    orange: `ring-orange-200`,
  };
  return (
    <button
      className={`flex gap-4 rounded-md p-4 ring-1 ${colorVariants[color]}`}
      onClick={() => signIn(provider)}
    >
      <Image
        src={`/${provider}.png`}
        alt={`${provider} logo`}
        width={20}
        height={20}
        className="object-contain"
      />
      <span>{`Sign in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}</span>
    </button>
  );
};

export default LoginButton;
