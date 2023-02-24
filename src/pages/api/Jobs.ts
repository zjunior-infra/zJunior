import { prisma } from "@util/database";
import type { APIContext, APIRoute } from "astro";

export const get: APIRoute = async (context: APIContext) => {
    const crosHeaders={
        "Access-Control-Allow-Origin":"origin",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "*",
    }
    try {
            const jobType = context.url.searchParams.get('jobtype')
            const tags = context.url.searchParams.get('tags')
            const query = context.url.searchParams.get('query')
            let data=[];
            if(!jobType && !tags && query){
                try{
                    const result = await prisma.job.findMany({
                    where:{
                        title:{
                            search:query
                            }
                        }
                    });
                    data = result;
                }
                catch(err){
                    return new Response(err.message,{status:404,headers:crosHeaders})
                }
            }
            if(jobType && !tags && !query){
                try{
                    const result = await prisma.job.findMany({
                    where:{
                        type:{
                            equals:jobType
                            }
                        }
                    });
                    data = result;
                }
                catch(err){
                    return new Response(err.message,{status:404,headers:crosHeaders})
                }
            }
            if(jobType && tags && query){
                try{
                    const result = await prisma.job.findMany({
                    where:{
                        title:{
                            search:query
                            },
                        type:{
                            equals:jobType
                        },
                        skills:{
                            contains:tags
                        }
                        }
                    });
                    data = result;
                }
                catch(err){
                    return new Response(err.message,{status:404,headers:crosHeaders})
                }
            }
            else{
                return new Response('search is not done',{status:404,headers:crosHeaders})
            }
            return new Response(JSON.stringify(data), { status: 200 });
        // }
        // else{
            // return new Response('Sorry You Cannot Get The Data',{status:401 , headers:crosHeaders})
        // }
    } catch (e: any) {
        return new Response(e.message, { status: 500 });
    }
}