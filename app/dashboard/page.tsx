import Header from "@/components/Dashboard/header";
import { Button } from "@/components/ui/button";
import CardWrapper from "@/components/Dashboard/card-wrapper";
import React from "react";
import { Card } from "@/components/ui/card";
import HobbyItem from "@/components/Dashboard/hobbyItem";
import Streak from "@/components/Dashboard/Streak";
import { Flame } from "lucide-react";
import { History } from "lucide-react";
import { Activity } from "lucide-react";
import PracticeChart from "@/components/Dashboard/Charts/practice-chart";

const page = async () => {
  return (
    <div className=" flex flex-col  ">
      {/* //header */}
      <Header />
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 pt-10 ">
        <CardWrapper description="hobbies">
          <HobbyItem />
          <HobbyItem />
          <HobbyItem />
          <HobbyItem />
          <HobbyItem />
        </CardWrapper>
        <CardWrapper description="streak">
          <Streak
            title="Current Streak"
            icon={<Flame className=" h-5 w-5" />}
          />
          <Streak
            title="Longest Streak"
            icon={<Flame className=" h-5 w-5" />}
          />
          <Streak
            title="Total Logs"
            icon={<History className=" h-5 w-5" />}
          />
          <Streak
            title="Most Logged Activity"
            icon={<Activity className=" h-5 w-5" />}
          />
        </CardWrapper>
        <CardWrapper>
          <PracticeChart />
        </CardWrapper>

        <CardWrapper>
          <p>pie chart</p>
        </CardWrapper>
      </div>
    </div>
  );
};

export default page;
