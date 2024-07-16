import { PrismaClient } from "@prisma/client";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { permanentRedirect } from "next/navigation";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  // Create a promise that resolves after 3 seconds
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // Await the delay
  await delay(3000);

  // Return the response after the delay
  return new Response(JSON.stringify({ message: "Hello" }), {
    headers: { "Content-Type": "application/json" },
  });
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
      updatedAt: new Date(),
    },
  });
  console.log(habit, "This is my habit");

  //   redirect(`/dashboard/activities/${habit.id}/settings`);
  return Response.json({ habitId: habit.id }, { status: 201 });
}

export async function PUT(request: Request) {
  console.log(request.body);

  return new Response(null, {
    status: 200,
  });
}
