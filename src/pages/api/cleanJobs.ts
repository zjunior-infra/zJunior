import type { APIRoute } from "astro";
import { cleaningJobs } from "@util/database"

export const post: APIRoute = async ({ request }) => {
        const reqAuth = request.headers.get('auth');
        try{
            if (!reqAuth)
            return new Response("Not Authorized", {status:401})
            if(reqAuth==="process.env.DEL_TOKEN")
            {
                const result = await cleaningJobs();
                return new Response(result,{status:200});
            }
            else {
                return new Response(`TOKEN is unvalid: ${[process.env.DEL_TOKEN]}`,{status:401});
            }
        }
        catch(err){
            return new Response(err.message,{status:500})
        }
        
}
export const get: APIRoute = async ({ request }) => {
    const reqAuth = request.headers.get('auth');
    
    return new Response(reqAuth,{status:200})
    
}