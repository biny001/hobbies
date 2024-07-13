import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <section className="  lg:pt-5 flex flex-col w-full gap-5 justify-center  lg:flex lg:flex-row items-center lg:justify-between">
      <div className=" flex flex-col space-y-1 lg:pl-2">
        <h1 className="text-3xl text-center lg:text-start lg:text-4xl  ">
          Dashboard
        </h1>
        <p className="text-sm  text-center lg:text-start lg:text-lg text-muted-foreground ">
          Monitor your progress.
        </p>
      </div>
      <Button
        variant={"outline"}
        className=" w-[250px]  flex  justify-start  text-muted-foreground "
      >
        Pick a date
      </Button>
    </section>
  );
};

export default Header;
