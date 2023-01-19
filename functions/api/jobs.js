import {PrismaClient} from '@prisma/client/edge'
import {Router, listen} from 'worktop'

const prisma= new PrismaClient()

const API=new Router();

API.add('GET','/api/hello',async (req,ctx)=>{
    new Response("HIIIII bitch")
})

export default{
    async fetch(req,env,ctx){
        const url =new URL(req.url)
        if(url.pathname.startsWith('/api/')){
            ctx.bindings=env;
            // @ts-ignore
            return API.run(req,ctx)
        }

        return env.ASSETS.fetch(req);
    }
}