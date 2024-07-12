"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import { signIn } from "next-auth/react";
import { SigninButton } from "@/components/signOUt/signin-button";

const SignInPage = () => {
  return (
    <div className=" flex flex-col gap-3 text-center w-[400px]">
      <h1 className=" text-2xl font-bold">Sign In</h1>
      <p className=" text-muted-foreground text-sm">Sign in to your account</p>

      <SigninButton
        icon={<FaGoogle className=" w-4 h-4" />}
        provider={{ name: "google", callbackUrl: "/dashboard" }}
        title="Continue with Google"
      />

      <SigninButton
        icon={<FaGithub className=" w-4 h-4" />}
        provider={{ name: "github", callbackUrl: "/dashboard" }}
        title="Continue with Github"
      />
    </div>
  );
};

export default SignInPage;
