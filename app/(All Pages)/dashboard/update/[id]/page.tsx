"use client";
import createClerkSupabaseClient from "@/app/utils/supabase/supabase";
import { useState, useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const [todo, setTodo] = useState("");
  const taskId = params.id;
  const supabase = createClerkSupabaseClient();

  async function getTodo() {
    const { data, error } = await supabase
      .from("todo")
      .select("todo")
      .eq("id", taskId)
      .single();

    if (data) {
      setTodo(data.todo);
    }
    if (error) {
      console.error("Error fetching todo:", error);
    }
  }

  getTodo();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase
        .from("todo")
        .update({ todo: todo })
        .eq("id", taskId);
      //There's an error getting the data and the data being updated
      //Make a update RLS in supabase
      //got the update rls policy still there's an error updating the data
      console.log(data);
      setTodo("");
    } catch {
      console.log("error");
    }
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
            defaultValue={todo}
            onChange={(e) => setTodo(e.target.value)}
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
