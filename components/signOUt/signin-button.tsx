import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

interface Props {
  provider: {
    name: string;
    callbackUrl: string;
  };
  icon: React.ReactNode;
  title: string;
}

export const SigninButton = ({ provider, icon, title }: Props) => {
  return (
    <Button
      variant={"outline"}
      className=" flex items-center  gap-2"
      onClick={() =>
        signIn(provider?.name, { callbackUrl: provider.callbackUrl })
      }
    >
      {icon}
      <span>{title}</span>
    </Button>
  );
};
