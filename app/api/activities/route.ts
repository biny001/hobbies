import { PrismaClient } from "@prisma/client";

import { auth } from "@/auth";
import { revalidateTag } from "next/cache";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  // Create a promise that resolves after 3 seconds
  const activities = await prisma.habit.findMany();

  // Return the response after the delay
  return Response.json(activities, { status: 200 });
}

export async function POST(request: Request) {
  // Create a promise that resolves after 3 seconds
  const session = await auth();

  if (typeof session?.user?.email != "string")
    return new Response(null, { status: 401 });

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
  });

  if (!user) return new Response(null, { status: 401 });
  const habit = await prisma.habit.create({
    data: {
      title: "",
      userId: user.id,
      color: "#ff2323",
      updatedAt: new Date(),
    },
  });
  // console.log(habit, "This is my habit");

  //   redirect(`/dashboard/activities/${habit.id}/settings`);
  return Response.json({ habitId: habit.id }, { status: 201 });
}

export async function PUT(request: Request) {
  console.log("here is the put request");
  const body = await request.json();

  const habit = await prisma.habit.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.data.title,
      description: body.data.description,
      color: body.data.color,
      updatedAt: new Date(),
    },
  });

  console.log(habit, "This is my habit");

  revalidateTag("activities");

  return new Response(null, {
    status: 200,
  });
}
