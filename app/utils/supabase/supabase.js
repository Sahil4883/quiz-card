import { createClient } from "@supabase/supabase-js";

//doing this from the clerk video on clerk and supbase video tutorial and will continue ahead
//it can always be deleted if not needed as its experimental for now

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseClient = async (supabaseToken) => {
  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    global: { headers: { Authorization: `Bearer ${supabaseToken}` } },
  });
  return supabase;
};
