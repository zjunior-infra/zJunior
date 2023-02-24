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
            if(!jobType && !tags && !query){
                // data = await prisma.job.findMany();
                return new Response (JSON.stringify(context.request.credentials),{status:200, headers:crosHeaders})
            }
            else
            return new Response(JSON.stringify(jobType), { status: 200 });
        // }
        // else{
            // return new Response('Sorry You Cannot Get The Data',{status:401 , headers:crosHeaders})
        // }
    } catch (e: any) {
        return new Response(e.message, { status: 500 });
    }
}