// utils/supabaseClient.ts
//TODO: Make a working crud code
import { createClient } from "@/app/utils/supabase/server";

const supabase = createClient();

// Function to create a new note
export const createNote = async (title: string) => {
  const { data, error } = await supabase.from("notes").insert([{ title }]);
  if (error) throw error;
  return data;
};

// Function to read all notes
export const readNotes = async () => {
  const { data, error } = await supabase.from("notes").select();
  if (error) throw error;
  return data;
};

// Function to update a note by id
export const updateNote = async (id: number, title: string) => {
  const { data, error } = await supabase
    .from("notes")
    .update({ title })
    .eq("id", id);
  if (error) throw error;
  return data;
};

// Function to delete a note by id
export const deleteNote = async (id: number) => {
  const { data, error } = await supabase.from("notes").delete().eq("id", id);
  if (error) throw error;
  return data;
};
