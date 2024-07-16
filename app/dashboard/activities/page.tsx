"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import CardWrapper from "@/components/Dashboard/card-wrapper";
import HobbyItem from "@/components/Dashboard/hobbyItem";
import { Loader2 } from "lucide-react";
import AddActivity from "@/components/Dashboard/add-activity";

const page = () => {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 p-4">
      <div className=" flex-col md:flex-row flex items-center justify-between w-full gap-6">
        <div className=" items-center md:items-start flex flex-col  justify-center ">
          <h1 className=" text-xl md:text-2xl">Manage Activities</h1>
          <p className=" text-muted-foreground text-sm">
            manage your account activities
          </p>
        </div>{" "}
        <AddActivity />
      </div>

      <div className=" flex flex-col w-full mt-8 ">
        <HobbyItem />
      </div>
    </div>
  );
};

export default page;
