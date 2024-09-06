import { useState } from "react";
import { createClient } from "@/app/utils/supabase/server";

const supabase = createClient();

export default function TodoComponent() {
  const [title, setTitle] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // Prevents the form from reloading the page
    const { data, error } = await supabase
      .from("notes")
      .insert([{ title: title }]);

    if (error) {
      console.error("Error inserting data:", error.message);
    } else {
      console.log("Data inserted successfully:", data);
      setTitle(""); // Clear the input field after successful submission
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter todo title"
        />
        <button type="submit">Submit</button>
      </form>
      <p>Todo: {title}</p>
    </div>
  );
}
