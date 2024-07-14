import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

interface Props {
  children: React.ReactNode;
  description?: string;
}

const CardWrapper = ({ children, description }: Props) => {
  if (description === "hobbies")
    return (
      <ScrollArea className="h-[260px] rounded-md border  ">
        {children}
      </ScrollArea>
    );

  if (description === "streak")
    return <div className=" h-[260px] grid grid-cols-2  gap-3">{children}</div>;

  return (
    <Card className="h-[260px]  ">
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardWrapper;
