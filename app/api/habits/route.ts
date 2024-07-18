import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const user = await prisma.user.findUnique({
    where: {
      email: "biny01amin@gmail.com",
    },
  });

  return;
}

export async function POST(request: Request) {
  const habits = [
    {
      title: "playing soccer",
      description: "Practice soccer for at least 1 hour each day",
      userId: "123",
      streak: 0,
      highestStreak: 0,
      createdAt: "2024-07-14T09:05:43.237Z",
      updatedAt: "2024-07-14T09:05:43.237Z",
    },
    {
      title: "evening Exercise",
      description: "Exercise every morning for 30 minutes",
      userId: "123",
      streak: 0,
      highestStreak: 0,
      createdAt: "2024-07-14T09:05:43.237Z",
      updatedAt: "2024-07-14T09:05:43.237Z",
    },
    {
      title: "Reading manga",
      description: "Read at least 20 pages of a book every day",
      userId: "123",
      streak: 0,
      highestStreak: 0,
      createdAt: "2024-07-14T09:05:43.237Z",
      updatedAt: "2024-07-14T09:05:43.237Z",
    },
  ];

  const records = await prisma.habit.createManyAndReturn({
    data: habits,
  });

  return Response.json(records, { status: 201 });
}

export async function PUT(request: Request) {}
