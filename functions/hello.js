import {PrismaClient} from '@prisma/client/edge.js'
import {Router, listen} from 'worktop'


const API=new Router();

API.add('GET','/',async (req,ctx)=>{
    new Response("HIIIII bitch")
})

export default{
    async fetch(req,env,ctx){
        const url =new URL(req.url)
            ctx.bindings=env;
            console.log("1")
            // @ts-ignore
            return API.run(req,ctx)

    }
}