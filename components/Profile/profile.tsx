"use client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { Activity } from "lucide-react";
import { Settings } from "lucide-react";
import { Boxes } from "lucide-react";
import { LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Profile = () => {
  const { data: session } = useSession();
  const imageUrl = session?.user?.image || "";
  console.log(imageUrl, "imageUrl");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="  rounded-full">
          <Image
            src={imageUrl}
            alt="user"
            width={35}
            height={35}
            className="rounded-full"
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className=" w-48 "
      >
        <DropdownMenuLabel>
          <p>{session?.user?.name}</p>

          <p className="text-xs  text-muted-foreground ">
            {session?.user?.email}
          </p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link
              href="/dashboard"
              className=" flex items-center"
            >
              <Boxes className="mr-1 h-5 w-5" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/activities"
              className=" flex items-center"
            >
              <Activity className="mr-1 h-5 w-5" />
              Activities
            </Link>{" "}
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/dashboard"
              className=" flex items-center"
            >
              <Settings className="mr-1 h-5 w-5" />
              Settings
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              signOut();
            }}
            className=" hover:cursor-pointer   hover:bg-muted"
          >
            <LogOut className="mr-2 h-5 w-5" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Profile;
