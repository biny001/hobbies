import HobbyItem from "@/components/Dashboard/hobbyItem";

import AddActivity from "@/components/Dashboard/add-activity";
import { Habit } from "@prisma/client";

const page = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/activities`,
    {
      next: { tags: ["activities"] },
    }
  );
  const activities = await response.json();
  console.log(activities, "This is my activities");
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
        {activities.map((activity: Habit) => {
          return (
            <HobbyItem
              activities={activity}
              key={activity?.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
