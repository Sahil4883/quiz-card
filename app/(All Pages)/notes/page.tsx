import { useState } from "react";
import { createNote } from "@/app/utils/supabase/data";
import { readNotes } from "@/app/utils/supabase/data";
export default async function page() {
  const readnotes = await readNotes();
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {readnotes.map((note) => (
          <li key={note.id}>{note.title}</li>
        ))}
      </ul>
    </div>
  );
}
