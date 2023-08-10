import { supabase } from "@lib/supabase/init"
import type { APIRoute } from "astro"

export const get:APIRoute = async function get(context){
    const access_token = context.cookies.get('access-token').value
    const refresh_token = context.cookies.get('refresh-token').value
    if(access_token && refresh_token){
        try{
            const res = await supabase.auth.setSession({access_token,refresh_token});
            return new Response (JSON.stringify(res),{
                headers:{
                    "Content-Type":"application/json"
                },status:200}) 
        }
        catch(err){
            return new Response(JSON.stringify(err),{status:400})
        }
    }
    return context.redirect('/login')
}