import {PrismaClient} from '@prisma/client/edge'
const prisma= new PrismaClient()
export async function onRequestGet(context){
    const jobs= await prisma.job.findMany({})
    return new Response(JSON.stringify(jobs))
}