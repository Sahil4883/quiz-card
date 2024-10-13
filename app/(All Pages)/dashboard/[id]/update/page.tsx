"use client";
//Putting this page on hold for now
import createClerkSupabaseClient from "@/app/utils/supabase/createClerkSupabaseClient";
import { useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function Page({ params }: { params: { id: string } }) {
  const { user } = useUser();
  const [todo, setTodo] = useState("");
  const taskId = params.id;
  const supabase = createClerkSupabaseClient();

  async function getTodo() {
    if (!user) {
      return;
    }
    try {
      const { data, error } = await supabase
        .from("todo")
        .select("todo")
        .eq("id", taskId)
        .single(); //dont touch this as this works perfectly
      if (data) {
        setTodo(data.todo);
      }
    } catch {
      console.log("Error fetching todo:");
    }
  }

  getTodo();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    //the default value is passed in the function eg. if the loaded value is yum then even if editing the value in the input field the value will be yum
    //make the changes in this code
    if (!user) {
      return;
    }
    try {
      console.log(todo);
      console.log("its in submitting");
      const { data, error } = await supabase
        .from("todo")
        .update({ todo: todo })
        .eq("id", taskId)
        .eq("user_id", user.id);
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
            value={todo} // change defaultValue to value
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
