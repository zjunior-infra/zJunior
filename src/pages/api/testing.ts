import type { APIRoute } from "astro";

import { getJobs, prisma, formatJobs } from "@util/database"

export const get: APIRoute = async ({ }) => {
    const data=await getJobs('internship');
    const dataDate=formatJobs(data);
    return new Response(JSON.stringify(dataDate), { status: 200 });
}