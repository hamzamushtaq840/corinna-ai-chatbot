import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

let client: PrismaClient;

try {
  client = globalThis.prisma || new PrismaClient();
  if (process.env.NODE_ENV !== "production") globalThis.prisma = client;
} catch (error) {
  console.error("Failed to initialize Prisma Client:", error);
  throw error;
}

export { client };
