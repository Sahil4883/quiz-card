import { useState } from "react";
import { createNote } from "@/app/utils/supabase/data";
export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createNote(title);
      setMessage("Note added successfully!");
      setTitle(""); // Clear the input field after successful submission
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter note title"
          required
        />
        <button type="submit">Add Note</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
