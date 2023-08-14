import { getUser, prisma } from "@util/database";
import type { APIRoute } from "astro";

export const get:APIRoute = async ({params,redirect})=>{
    const user = params.username ?? ''
    try{
        const userInfo = await getUser(user)
        return new Response(JSON.stringify(userInfo),{
            status:200,
            headers:{
                "Content-Type":"application/json"
            }
        })
    }
    catch(err){
        return redirect('/404')
    }
}
