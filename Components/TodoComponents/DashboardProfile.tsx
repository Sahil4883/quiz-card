"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import createClerkSupabaseClient from "@/app/utils/supabase/supabase";

export default function DashboardProfile() {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState("");
  const { user } = useUser();
  const client = createClerkSupabaseClient();

  async function createList(e: React.FormEvent<HTMLFormElement>) {
    if (!user) {
      return "You must be logged in to create a task";
    }
    try {
      await client.from("todo").insert({
        todo: todo,
        user_id: user.id, // Use Clerk's user ID to associate the task with the user
      });
    } catch (err) {
      console.log(err);
      return "An unexpected error occurred";
    }
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading &&
        list.length > 0 &&
        list.map((task: any) => <p>{task.name}</p>)}
      {!loading && list.length === 0 && <p>No tasks found</p>}
      <form onSubmit={createList} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Create a new Title</h2>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={todo}
            required
            onChange={(e) => setTodo(e.target.value)}
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
    </>
  );
}
