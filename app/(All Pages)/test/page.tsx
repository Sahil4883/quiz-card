"use client";
import { useEffect, useState } from "react";
import { useSession, useUser } from "@clerk/nextjs";
import { createClient } from "@supabase/supabase-js";

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
    <div>
      <h1>Tasks</h1>

      <form onSubmit={createTask}>
        <input
          autoFocus
          type="text"
          name="name"
          placeholder="Enter new task"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button type="submit">Add</button>
      </form>

      {loading && <p>Loading...</p>}

      {!loading &&
        tasks.length > 0 &&
        tasks.map((task: any) => (
          <div key={task.id}>
            <p>{task.name}</p>
            <button onClick={() => deleteSupabaseItem(task.id)}>Delete</button>
          </div>
        ))}

      {!loading && tasks.length === 0 && <p>No tasks found</p>}
    </div>
  );
}
