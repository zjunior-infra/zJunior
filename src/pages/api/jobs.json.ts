import { prisma,formatJobs } from "@util/database";
import type { APIContext, APIRoute } from "astro";
function customizeQuery(query){
    const split=query.split(' ')
    const first=split[0];
    const second=split[1];
    return `+${first} +${second}`
}

async function getQueredData(query='',jobtype='',tags=''){
    if(!query && !jobtype && !tags){
        try{
            const result= await prisma.job.findMany()
            return formatJobs(result);
        }
        catch(err){
            return err.message;
        }
    }
    if(!jobtype && !tags && query){
        try{
            const result = await prisma.job.findMany({
            where:{
                title:{
                    search:customizeQuery(query)
                    }
                }
            });
            return formatJobs(result)
        }
        catch(err){
            return err.message
        }
    }
    if(jobtype && !tags && !query){
        try{
            const result = await prisma.job.findMany({
            where:{
                type:{
                    equals:jobtype
                    }
                }
            });
            return formatJobs(result)
        }
        catch(err){
            return err.message
        }
    }
    if(!jobtype && tags && !query){
        try{
            const result = await prisma.job.findMany({
            where:{
                skills:{
                    search:tags
                    }
                }
            });
            return formatJobs(result)
        }
        catch(err){
            return err.message
        }
    }
    if(jobtype && !tags && query){
        try{
            const result = await prisma.job.findMany({
            where:{
                title:{
                    search:customizeQuery(query)
                    },
                type:{
                    equals:jobtype
                },
                }
            });
            return formatJobs(result)
        }
        catch(err){
            return err.message
        }
    }
    if(!jobtype && tags && query){
        try{
            const result = await prisma.job.findMany({
            where:{
                title:{
                    search:customizeQuery(query)
                    },
                skills:{
                    search:tags
                },
                }
            });
            return formatJobs(result)
        }
        catch(err){
            return err.message
        }
    }
    if(jobtype && tags && !query){
        try{
            const result = await prisma.job.findMany({
            where:{
                type:{
                    equals:jobtype
                    },
                skills:{
                    search:tags
                },
                }
            });
            return formatJobs(result)
        }
        catch(err){
            return err.message
        }
    }
}

export const get: APIRoute = async (context: APIContext) => {
    const crosHeaders={
        "Access-Control-Allow-Origin":"origin",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "*",
        "Content-type":"application/json"
    }
    
    try {
            const jobtype = context.url.searchParams.get('jobtype') ? context.url.searchParams.get('jobtype'): ''
            const tags = context.url.searchParams.get('tags') ? context.url.searchParams.get('tags'): ''
            const query = context.url.searchParams.has('query') ? context.url.searchParams.get('query'): ''
            
            const data=await getQueredData(query,jobtype,tags)
            return new Response(JSON.stringify(data),{status:200, headers:crosHeaders})
            
        // }
        // else{
            // return new Response('Sorry You Cannot Get The Data',{status:401 , headers:crosHeaders})
        // }
    } catch (e: any) {
        return new Response(e.message, { status: 500 });
    }
}