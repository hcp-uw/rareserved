import { createClient } from "@/utils/supabase/server";

// Get API for pinging database cron job.
export async function GET(request: Request) {
    var supabase = createClient()
    const { data, error } = await supabase
        .from("Test")
        .select("*")
    console.log('api/ping_database/get - data: '+data);
    console.log('api/ping_database/get - error: '+error);
    return new Response('Pinged Database');
}