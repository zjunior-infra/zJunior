import { PrismaClient } from "@prisma/client/edge"
import type { IJob } from "./job.interface";

export const prisma=new PrismaClient({
    datasources:{
      db:{
        url: "prisma://aws-eu-central-1.prisma-data.com/?api_key=bvx0KupXi-9xOR1olnBofFh9c1Qm__NV5lnfre9Fzp7R8d_s62O_fLGOsYGGETXn"
      }
    }
})

export async function getJobs() {
  const result=await prisma.job.findMany();
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