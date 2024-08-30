import { createClient } from "@/app/utils/supabase/server";

export default async function Notes() {
  const supabase = createClient();
  const { data: notes, error } = await supabase.from("notes").select();

  if (error) {
    return <div>Error loading notes: {error.message}</div>;
  }

  return (
    <div>
      {notes && notes.length > 0 ? (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No notes available.</p>
      )}
    </div>
  );
}
