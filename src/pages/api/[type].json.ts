import { APIRoute } from "astro";

import { auth, getJobs, prisma } from "@util/database"

export const get: APIRoute = async ({ params, request }) => {
    try{
        const jobs = await getJobs(params.type);
        return new Response(JSON.stringify(jobs), { status: 200 });
    }
    catch(err){
        return new Response(JSON.stringify(err), { status: 500 });
    }
}