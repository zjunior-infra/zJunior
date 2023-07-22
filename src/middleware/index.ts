import { supabase } from '@lib/supabase/init'
import { defineMiddleware } from 'astro/middleware'
import { isAuth } from './isAuth'

/**  
    * this middleware check if i have already auth, and also refresh the token
    * redirect if auth from / and /login to /in
    * redirect if !auth from any /in/* and /in to /login
*/


export const onRequest = defineMiddleware(async (context,next)=>{
    const route = context.url.pathname
    const privateRoutes = ['/in','in/*']
    const redirectOnAuth = ['/login','/']
    const auth = await isAuth(context)
    
    if(privateRoutes.includes(route)){
        if(auth){
            return next();
        }
        return context.redirect('/login')
    }
    if(redirectOnAuth.includes(route)){
        if(auth){
            return context.redirect('/in');
        }
        return next();
    }
    return next();
})

