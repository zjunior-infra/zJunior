import type { APIRoute } from "astro";
import cookie from 'cookie'
import { auth, prisma } from "@util/database"

export const post: APIRoute = async ({ request }) => {
    try {

        const body = await request.json();
        //get data from body
        const { email,description,type } = body;
        const result = await prisma.reports.create({
            data: {
                issuedBy:email,
                description,
                type,
            }
        })
        return new Response(JSON.stringify(result), { status: 201 });
    } catch (e: any) {
        return new Response(e.message, { status: 500 });
    }
}