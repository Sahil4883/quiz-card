//Here we'll seed our database seed
//TODO: Make a schema of the table and import it here
import { createClient } from "@/app/utils/supabase/server";

const supabase = createClient();

export async function createNotes(title: string) {
  const { data, error } = await supabase.from("notes").insert([{ title }]);
  if (error) throw error;
  return data;
}

async function GET() {
  try {
    await createNotes("Hello Next");
  } catch (error) {
    return error;
  }
}
