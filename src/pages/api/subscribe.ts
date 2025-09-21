import { LOOPS_API_KEY } from "astro:env/server";
import type { APIRoute } from "astro";
import { LoopsClient, APIError as LoopsError } from "loops";

export const prerender = false;

const loops = new LoopsClient(LOOPS_API_KEY)

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json() as { email: string };
    const email = body.email
    console.log(email)
    if (typeof email !== "string" || !email) {
        return new Response(JSON.stringify({
            error: "Invalid email"
        }), {
            status: 422
        })
    }

    try {
        await loops.updateContact({
            email,
            properties: {
                source: "website",
                subscribed: true,
            },
            mailingLists: { "cmftpvkub26590ixp5zhw4u4z": true }
        })
    } catch (error) {
        if (error instanceof LoopsError) {
            console.error(error.json);
            console.log(error.statusCode)
        } else {
            console.error(error)
        }
        return new Response(JSON.stringify({
            error: "Something went wrong."
        }), {
            status: 500
        })
    }

    return new Response(JSON.stringify({
        status: "success"
    }))
}