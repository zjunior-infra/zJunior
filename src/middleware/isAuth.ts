import { supabase } from "@lib/supabase/init";
import type { AuthResponse } from "@supabase/supabase-js";
import type { APIContext } from "astro";

export async function isAuth(context:APIContext):Promise<Boolean>{
    const access_token = context.cookies.get('access-token').value
    const refresh_token = context.cookies.get('refresh-token').value
    if(access_token && refresh_token){
        const{data,error} = await supabase.auth.setSession({access_token,refresh_token});
        if(data.session != null){
            return true;
        }
    }
    return false;
}

/*
    we should update the session expire on every login
*/
