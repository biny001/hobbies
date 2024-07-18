"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { HexColorPicker } from "react-colorful";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const Content = ({ params }: { params: string }) => {
  const router = useRouter();
  const [color, setColor] = useState("#ff2323");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleClear = () => {
    setTitle("");
    setDescription("");
    setColor("#ff2323");
  };
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async () => {
    const data = {
      title: title,
      description: description,
      color: color,
      updatedAt: new Date().toISOString(),
    };

    const response = await fetch(`/api/activities`, {
      method: "PUT",
      body: JSON.stringify({ id: params, data }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    handleClear();
    if (response.ok) {
      router.push("/dashboard/activities/");
    }
  };

  return (
    <Card className=" h-max">
      <CardHeader>
        <CardTitle>New Activity</CardTitle>
      </CardHeader>
      <CardContent className=" space-y-6 ">
        {" "}
        <div className=" space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            placeholder="Type the title of the activity"
            id="title"
            className="lg:w-1/2  focus-visible:outline-red-700       "
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className=" space-y-2">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            className="lg:w-1/2 focus-visible:outline-red-700 "
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div>
          <HexColorPicker
            color={color}
            onChange={setColor}
          />
        </div>
        <Button
          onClick={handleSubmit}
          variant={"outline"}
        >
          Save changes
        </Button>
      </CardContent>
    </Card>
  );
};

export default Content;
