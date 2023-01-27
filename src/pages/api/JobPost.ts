import type { APIRoute } from "astro";
import cookie from 'cookie'
import { auth, prisma } from "@util/database"

export const post: APIRoute = async ({ request }) => {
    try {
        //get cookies
        const reqCookies = request.headers.get('cookie') as string;
        //parse cookies
        const parsedCookies = cookie.parse(reqCookies);
        //get token
        const { token } = parsedCookies;
        //check if token exists
        if (!token) return new Response('Not authorized', { status: 401 });
        // authenticate user
        const user = await auth(parsedCookies);
        if (!user) return new Response('Not authorized', { status: 401 });
        //parse body
        const body = await request.json();
        //get data from body
        const { company, title, link, email, type, deadline, logo, skills } = body;
        //check if all fields are filled
        if (!company || !title || (!link && !email) || !type || !deadline || !logo || !skills)
            return new Response('Please fill all fields', { status: 400 });
        const result = await prisma.job.create({
            data: {
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
        return new Response(JSON.stringify(result), { status: 201 });
    } catch (e: any) {
        return new Response(e.message, { status: 500 });
    }
}