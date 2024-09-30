"use client";
import createClerkSupabaseClient from "@/app/utils/supabase/supabase";
import { useState, useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [todo, setTodo] = useState(""); // State to hold the todo value
  const taskId = params.id;
  const supabase = createClerkSupabaseClient();

  // Function to fetch the todo item
  async function getTodo() {
    const { data, error } = await supabase
      .from("todo")
      .select("todo")
      .eq("id", taskId)
      .single(); // Fetch a single todo by id

    if (data) {
      setTodo(data.todo); // Set the todo value in state
    }
    if (error) {
      console.error("Error fetching todo:", error);
    }
  }

  // Fetch the todo item when the component mounts
  getTodo();

  // Handle form submission (optional)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform update logic here
    console.log("Updated Todo:", todo);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl mb-4">Update Title</h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={todo} // Bind the input to the todo state
            onChange={(e) => setTodo(e.target.value)} // Allow updating the input value
            required
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
