"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const layout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useRouter();
  return (
    <div className="  h-screen  flex  flex-col items-center justify-center">
      <Button
        onClick={() => navigate.push("/")}
        variant={"ghost"}
        className=" absolute top-10 left-14 w-max  flex items-center  px-2   pl-0"
      >
        <MdKeyboardArrowLeft className=" h-5 w-5" />
        <p>back</p>
      </Button>
      {children}
    </div>
  );
};

export default layout;
