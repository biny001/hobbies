"use client";
import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./Mode";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Nav = () => {
  const router = usePathname();
  const navigate = useRouter();
  const [hidden, sethidden] = useState<boolean | undefined>(false);

  useEffect(() => {
    if (router === "/signin") {
      sethidden(true);
      return;
    }

    sethidden(false);
  }, [router]);

  return (
    <div
      className={` flex items-center  justify-between h-[64px] mx-12 ${
        hidden ? "hidden" : ""
      }`}
    >
      <h1 className="  text-2xl font-bold    ">Hobbies</h1>
      <ul className="hidden lg:flex items-center text-muted-foreground gap-5">
        <Link
          href="/"
          className="hover:underline"
        >
          Home
        </Link>
        <Link
          href="/features"
          className="hover:underline"
        >
          Features
        </Link>
        <Link
          href="/pricing"
          className="hover:underline"
        >
          Pricing
        </Link>
        <Link
          href="/dashboard"
          className="hover:underline"
        >
          Dashboard
        </Link>
      </ul>

      <div className=" flex items-center gap-5">
        <ModeToggle />
        <Button
          className=" px-2"
          variant={"outline"}
          onClick={() => {
            navigate.push("/signin");
          }}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Nav;
