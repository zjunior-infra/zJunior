import { PrismaClient } from "@prisma/client/edge"

export const prisma=new PrismaClient({
    datasources:{
      db:{
        url: env.DATABASE_URL
      }
    }
})

export async function getjj() {
  const result=await prisma.job.findMany({})
  return result;
}

export async function auth(prvToken : any) {
  const Token=prvToken.value;
  const result=await prisma.lister.findFirst({
    where:{
      token: Token
    }
  })
  return result;
}