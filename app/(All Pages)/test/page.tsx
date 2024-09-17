"use client";
import { useEffect, useState } from "react";
import { useSession, useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";
//TODO: make a update function with a button to update the task
export default function Test() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const { user } = useUser();
  const { session } = useSession();

  function createClerkSupabaseClient() {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        global: {
          fetch: async (url, options = {}) => {
            const clerkToken = await session?.getToken({
              template: "supabase",
            });
            const headers = new Headers(options?.headers);
            headers.set("Authorization", `Bearer ${clerkToken}`);
            return fetch(url, { ...options, headers });
          },
        },
      }
    );
  }

  const client = createClerkSupabaseClient();

  useEffect(() => {
    if (!user) return;

    async function loadTasks() {
      setLoading(true);
      const { data, error } = await client.from("tasks").select();
      if (!error) setTasks(data);
      setLoading(false);
    }

    loadTasks();
  }, [user]);

  async function createTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await client.from("tasks").insert({ name });
    window.location.reload();
  }

  const deleteSupabaseItem = async (id: string) => {
    try {
      const response = await fetch(`/api/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        console.log("Task deleted successfully.");
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)); // Update state to remove the task
      } else {
        console.log("Failed to delete the task.");
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1>Tasks</h1>

      <form onSubmit={createTask} className="bg-white p-6 rounded-lg shadow-md">
        <input
          autoFocus
          type="text"
          name="name"
          placeholder="Enter new task"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      {loading && <p>Loading...</p>}
      <div className="max-w-md mx-auto mt-10">
        <ul className="bg-white p-6 rounded-lg shadow-md">
          {!loading &&
            tasks.length > 0 &&
            tasks.map((task: any) => (
              <li
                key={task.id}
                className="border-b py-2 flex justify-between items-center"
              >
                {task.name}
                <button
                  onClick={() => deleteSupabaseItem(task.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
                >
                  Delete
                </button>
              </li>
            ))}

          {!loading && tasks.length === 0 && <p>No tasks found</p>}
        </ul>
      </div>
    </div>
  );
}
