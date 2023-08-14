import type { OAuthResponse } from '@supabase/supabase-js'
import {supabase} from './init'

async function signIn(provider:'github'|'google'):Promise<Pick<OAuthResponse, "data">>{
    let {data,error}:OAuthResponse = await 
        supabase.auth.signInWithOAuth({provider:provider,
            options:{
                redirectTo:`http://localhost:3000/login`}
            })
    return {data}
}
async function getUser(){
    const data= await supabase.auth.getSession();
    return data;
}
export {
    signIn,
    getUser
}