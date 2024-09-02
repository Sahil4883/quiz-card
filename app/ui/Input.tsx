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
  return (
    <div className="mb-4 flex">
      <input
        type="text"
        placeholder="Enter new todo title"
        className="flex-grow p-2 border rounded-l-lg border-gray-300 focus:outline-none"
      />
      <button className="p-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600">
        Add Todo
      </button>
    </div>
  );
}
const createNoteServer = async (title: string) => {
  return await createNote(title);
};
