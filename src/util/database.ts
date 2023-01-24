import { PrismaClient } from "@prisma/client/edge"

export const prisma=new PrismaClient({
    datasources:{
      db:{
        url: process.env.DATABASE_URL
      }
    }
})

export async function getjj() {
  const result=await prisma.job.findMany({})
  return result;
}