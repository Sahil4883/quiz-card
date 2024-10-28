import createClerkSupabaseClient from "@/app/utils/supabase/createClerkSupabaseClient";
import { useUser } from "@clerk/clerk-react";
const client = createClerkSupabaseClient();
//for eg
export const loadTasks = async () => {
  const { data, error } = await client
    .from("todo")
    .select("id, todo")
    .order("id", { ascending: false });
  return data;
};

export async function load() {
  const { data, error } = await client
    .from("todo")
    .select("id, todo")
    .order("id", { ascending: false });
  return data;
}
export default async function readtask({ user }: { user: any }) {
  //work on this one
  if (!user) {
    return "You must be logged in to create a task";
  }
  try {
    const { data, error } = await client
      .from("todo")
      .select("id, todo")
      .order("id", { ascending: false });
    return data;
  } catch (err) {
    console.log(err);
    return "An unexpected error occurred";
  }
}
