import { PrismaClient } from "@prisma/client/edge"
import moment from "moment";
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
      const today=new Date();
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

export async function cleaningJobs() {
  //construct today date in format yyyy-mm-dd
  const today=moment().format('YYYY-MM-DD')
  // delete all jobs that are older than today
  const result =await prisma.job.deleteMany({
      where:{
          deadline:{
              lt:today
          }
      }
  })
  return (`Deleted ${result.count} jobs`)
}
export async function getJobs() {
  const result=await prisma.job.findMany({});
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