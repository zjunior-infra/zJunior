import { APIRoute } from "astro";
import { prisma } from "@util/database"

export const post: APIRoute = async ({ request }) => {
    const body= await request.json();
    const {company,title,link,email,type,deadline,logo,skills}=body;
    const result=await prisma.job.create({
        data:{
            company,
            title,
            link,
            email,
            type,
            deadline,
            logo,
            skills,
        }
    })
    return new Response(JSON.stringify(result), { status: 400 });
}