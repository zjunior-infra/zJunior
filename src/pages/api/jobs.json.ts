import { prisma,formatJobs } from "@util/database";
import type { APIContext, APIRoute } from "astro";



export const get: APIRoute = async (context: APIContext) => {
    const crosHeaders={
        "Access-Control-Allow-Origin":"origin",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "*",
        "Content-type":"application/json"
    }
    
    try {
        const result= await prisma.job.findMany()
        return new Response(JSON.stringify(formatJobs(result)),{status:200, headers:crosHeaders})
    }
    catch (e: any) {
        return new Response(e.message, { status: 500 });
    }
}