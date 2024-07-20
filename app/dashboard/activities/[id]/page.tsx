import { HeatMap } from "@/components/Activities/heat-map";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col  space-y-4">
      <div className=" flex items-center justify-between">
        <h1 className=" text-3xl font-bold">Coding</h1>
        <Button variant="outline">Add Activity</Button>
      </div>
      <div className=" w-full">
        <HeatMap />
      </div>
    </div>
  );
};

export default page;
