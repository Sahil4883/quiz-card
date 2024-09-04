import { useState } from "react";
import { createNote } from "@/app/utils/supabase/data";
export default function Input() {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      // Call the createNote function to push the input to the server
      await createNoteServer(title);
      setTitle(""); // Clear the input after submission
      alert("Note added successfully!"); // Alert the user
    } catch (error) {
      console.error("Error creating note:", error);
      alert("Error creating note.");
    }
  };
  return <div>Hello</div>;
}
const createNoteServer = async (title: string) => {
  return await createNote(title);
};
