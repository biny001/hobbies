import React from "react";
import { Flame } from "lucide-react";
import { History } from "lucide-react";
import { Activity } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import type { Session } from "next-auth";
interface Props {
  data?: Session;
  icon: React.ReactNode;
  title: string;
}

const Streak = ({ data, icon, title }: Props) => {
  return (
    <Card className="w-full flex flex-col  ">
      <CardHeader className="  flex-grow-0 flex flex-row h-10   items-center  justify-between">
        <div className="text-lg pt-1 font-medium">{title}</div>
        {icon}
      </CardHeader>
      <CardContent className=" flex-1  flex-grow ">
        <h2 className=" font-bold text-xl">0</h2>
        <p className=" text-xs   text-muted-foreground">All time</p>
      </CardContent>
    </Card>
  );
};

export default Streak;
