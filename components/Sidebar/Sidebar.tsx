"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import { Activity } from "lucide-react";
import { Settings } from "lucide-react";
import { Boxes } from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const currentPath = usePathname();

  const isActive = ({ path }: any) => currentPath.toString() === path;
  return (
    <div className=" hidden lg:flex flex-col h-screen flex-grow-0 px-4 pt-6    w-[200px] ">
      <ul className=" flex flex-col gap-1 ">
        <Button
          variant="ghost"
          className={`hover:bg-primary-foreground ${
            isActive("/dashboard") ? "bg-primary-foreground" : ""
          }`}
        >
          <Link
            href="/dashboard"
            className="w-full text-start flex items-center"
          >
            <Boxes className="mr-2 h-4 w-4" />
            Dashboard
          </Link>
        </Button>
        <Button
          variant="ghost"
          className={`hover:bg-primary-foreground ${
            isActive("/dashboard/activities") ? "bg-primary-foreground" : ""
          }`}
        >
          <Link
            href="/dashboard/activities"
            className="w-full text-start flex items-center"
          >
            <Activity className="mr-2 h-4 w-4" />
            Activities
          </Link>
        </Button>
        <Button
          variant="ghost"
          className={`hover:bg-primary-foreground ${
            isActive("/dashboard/settings") ? "bg-primary-foreground" : ""
          }`}
        >
          <Link
            href="/dashboard/settings"
            className="w-full text-start flex items-center"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Link>
        </Button>
      </ul>
    </div>
  );
};

export default Sidebar;
