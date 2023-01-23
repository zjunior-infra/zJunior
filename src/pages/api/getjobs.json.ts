import { prisma } from "@util/database";
import type { APIRoute } from "astro";

export const get: APIRoute = async function getJobs() {
	try {
		const jobs: any = await prisma.job.findMany({})
		if (jobs) {
			return new Response(JSON.stringify(jobs), {
				headers: { "content-type": "application/json" },
				status: 200,
			});
		}

		return new Response(JSON.stringify({ jobs: [] }), {
			headers: { "content-type": "application/json" },
			status: 200,
		});
	} catch (error: unknown) {
		console.error(`Error in /api GET method: ${error as string}`);
		return new Response(JSON.stringify({ jobs: [] }), {
			headers: { "content-type": "application/json" },
			status: 200,
		});
	}
};

