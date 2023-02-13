import { PrismaClient } from "@prisma/client/edge"
import { IJob } from "./job.interface";

export const prisma=new PrismaClient({
    datasources:{
      db:{
        url: "process.env.DATABASE_URL"
      }
    }
})


function formatJobs(jobs, {
  filterPriority= true,
  sortByDate=true
}={})
{   // add a close property to the job with true 
   const filteredJobs= jobs.reduce((acc,job)=>{
      const {deadline}=job;
      const date=new Date(deadline);
      const today=new Date(new Date());
      const closeDate=new Date(today.getFullYear(),today.getMonth(),today.getDate()+8);
      if(date<=closeDate){
        return [...acc, {...job, close:true}];
      }
      acc.push(job)
      return acc;
   }, [])
   // filter by priority
   if(sortByDate){
    filteredJobs.sort((a,b)=> new Date(a.deadline).getTime()-new Date(b.deadline).getTime());
   }
   return filteredJobs;
}

export async function getJobs(type:string) {
  const result=await prisma.job.findMany({
    where:{
      type,
    }
  });
  return formatJobs(result);
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