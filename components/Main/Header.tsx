import Link from "next/link";
import { Github } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className=" flex flex-col  space-y-4 items-center w-full lg:w-[900px] ">
      {" "}
      <Link
        href="https://github.com/biny001"
        target="_blank"
        rel="noopener noreferrer"
        className=" py-1 px-4  text-center rounded-full   bg-muted text-sm"
      >
        Free and open-source!
      </Link>
      <h1 className="  font-bold text-4xl lg:text-7xl ">Build your habits.</h1>
      <p className=" text-center  text-muted-foreground lg:text-xl">
        Monitor your activites,streaks,and progress with little effort.
        <br />
        Integrate statistics to your life!
      </p>
      <div className=" flex items-center gap-3">
        <Button className=" dark:bg-red-700   dark:hover:bg-red-600     text-neutral-100  ">
          Get Started
        </Button>
        <Button
          variant={"outline"}
          className=" flex items-center space-x-1"
        >
          <FaGithub className=" w-5 h-5" />

          <span>GitHub</span>
        </Button>
      </div>
    </div>
  );
};

export default Header;
