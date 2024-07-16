import React from "react";
import { Plus } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Ellipsis } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";

const HobbyItem = () => {
  return (
    <Card className=" w-full h-[100px] rounded-sm    px-0 mx-0">
      <div className=" px-3 flex h-full items-center justify-between">
        <div className=" flex items-center  gap-3 px-1 ">
          <div
            id="color"
            className=" w-3 h-3 bg-white rounded-full"
          ></div>
          <div className=" flex  flex-col">
            <h3 className=" text-xl">Coding</h3>
            <p className=" text-xs   text-muted-foreground">Jul 8,2024</p>
          </div>
        </div>

        <div className=" flex    items-center space-x-2     ">
          <Button
            variant={"outline"}
            className="  w-8 h-8 px-2 py-2 flex items-center"
          >
            <Plus className=" h-5 w-5" />
          </Button>
          <Button
            variant={"outline"}
            className="  w-8 h-8 px-2 py-2 flex items-center"
          >
            <Ellipsis className=" h-5 w-5" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default HobbyItem;
