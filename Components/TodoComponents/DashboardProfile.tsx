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
  // Load task functions

  useEffect(() => {
    if (!user) return;

    async function loadTasks() {
      setLoading(true);
      const { data, error } = await client
        .from("todo")
        .select("id, todo")
        .order("id", { ascending: false });
      if (!error) setList(data);
      setLoading(false);
    }

    loadTasks();
  }, [user]);

  return (
    <>
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
      {/* The list goes below*/}
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl mb-4">Todo List</h2>
        {list.length > 0 ? (
          <ul className="bg-white p-6 rounded-lg shadow-md">
            {list.map((task: { id: number; todo: string }) => (
              <li
                key={task.id}
                className="border-b py-2 flex justify-between items-center"
              >
                {task.todo} {/* Displaying the `todo` field */}
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No todos found.</p>
        )}
      </div>
    </>
  );
}
