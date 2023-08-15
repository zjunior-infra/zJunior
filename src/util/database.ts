import { PrismaClient } from "@prisma/client/edge";
import moment from "moment";

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'prisma://aws-eu-central-1.prisma-data.com/?api_key=GE3pF59sE51MfL1Mv6AVl0mtqfS15FeCtMyFGVcnfAPLqHCupePAfhyX9TOiziuL'
    },
  },
});

export async function getUser(username:string){
  const data = await prisma.user.findUnique({
    where:{
          username:username
    },
    include:{
      opportunities:true,
      profile: true,
    }
})
return data
}
export function formatJobs(
  jobs: any[],
  { filterPriority = true, sortByDate = true } = {}
) {
  // add a close property to the job with true
  const filteredJobs = jobs.reduce((acc, job) => {
    const { deadline } = job;
    const date = new Date(deadline);
    const today = new Date();
    const closeDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 8
    );
    if (date <= closeDate) {
      return [...acc, { ...job, close: true }];
    }
    acc.push(job);
    return acc;
  }, []);
  // filter by priority
  if (sortByDate) {
    filteredJobs.sort(
      (a: { deadline: string | number | Date; }, b: { deadline: string | number | Date; }) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
    );
  }
  return filteredJobs;
}

// export async function cleaningJobs() {
//   //construct today date in format yyyy-mm-dd
//   const today = moment().format("YYYY-MM-DD");
//   // delete all jobs that are older than today
//   const result = await prisma.opportunity.deleteMany({
//     where: {
//       createdAt: {
//         lt: today,
//       },
//     },
//   });
//   return `Deleted ${result.count} jobs`;
// }

export async function getJobs() {
  const result = await prisma.opportunity.findMany({});
  return formatJobs(result);
}


