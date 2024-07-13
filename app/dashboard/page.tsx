import Header from "@/components/Dashboard/header";
import { Button } from "@/components/ui/button";
import CardWrapper from "@/components/Dashboard/card-wrapper";
import React from "react";
import { Card } from "@/components/ui/card";

const page = async () => {
  return (
    <div className=" flex flex-col  ">
      {/* //header */}
      <Header />
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 pt-10 ">
        <CardWrapper description="hobbies">
          <p>items</p>
          <p>items</p>
        </CardWrapper>
        <CardWrapper>
          <p>streak</p>
        </CardWrapper>
        <CardWrapper>
          <p>chart</p>
        </CardWrapper>
        <CardWrapper>
          <p>pie chart</p>
        </CardWrapper>
      </div>
    </div>
  );
};

export default page;
