import { prisma } from "@util/database";

export async function getJobs(){
    const jobs= await prisma.job.findMany({})
    if(!jobs){
        return new Response(null,{
            status:404,
            statusText:'Not Found, opps'
        })
    }
    return new Response(JSON.stringify(jobs),{
        status:200,
        headers:{
            "Content-Type":"application/json"
        }
    })
}

