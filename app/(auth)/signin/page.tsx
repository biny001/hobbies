"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import { signIn } from "next-auth/react";

const SignInPage = () => {
  return (
    <div className=" flex flex-col gap-3 text-center w-[400px]">
      <h1 className=" text-2xl font-bold">Sign In</h1>
      <p className=" text-muted-foreground text-sm">Sign in to your account</p>
      <Button
        variant={"outline"}
        className=" flex items-center gap-2"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <FaGoogle className=" w-4 h-4" />
        Continue with Google
      </Button>
      <Button
        variant={"outline"}
        className=" flex items-center  gap-2"
      >
        {" "}
        <FaGithub className=" w-4 h-4" />
        Continue with Github
      </Button>
    </div>
  );
};

export default SignInPage;
