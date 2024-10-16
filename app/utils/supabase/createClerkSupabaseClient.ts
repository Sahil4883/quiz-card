import { createClient } from "@supabase/supabase-js";
import { useSession } from "@clerk/nextjs";

//for simplicity, we are using environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default function createClerkSupabaseClient() {
  const { session } = useSession();
  return createClient(supabaseUrl!, supabaseAnonKey!, {
    global: {
      fetch: async (url, options = {}) => {
        const clerkToken = await session?.getToken({
          template: "supabase",
        });
        const headers = new Headers(options?.headers);
        headers.set("Authorization", `Bearer ${clerkToken}`);
        return fetch(url, { ...options, headers });
      },
    },
  });
}
