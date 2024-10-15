import createClerkSupabaseClient from "./supabase/createClerkSupabaseClient";
import { useUser } from "@clerk/clerk-react";
const client = createClerkSupabaseClient();
export default async function readtask({ user }: { user: any }) {\
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
//for eg
const loadTasks = async () => {
  // Load tasks function called here so it can be reused
  const { data, error } = await client
    .from("todo")
    .select("id, todo")
    .order("id", { ascending: false });
};
