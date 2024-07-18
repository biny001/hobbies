"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const AddActivity = () => {
  const router = useRouter();
  const [activities, setActivities] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchActivities = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/activities", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setActivities(data);
      router.push(`/dashboard/activities/${data.habitId}/settings`);
    } catch (error) {
      console.error("Error fetching activities:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={fetchActivities}
      variant="outline"
      className="bg-red-600 flex items-center"
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          <p>Add activity</p>
        </>
      ) : (
        <>Add Activity</>
      )}
    </Button>
  );
};

export default AddActivity;
