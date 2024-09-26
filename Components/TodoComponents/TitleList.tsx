"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import createClerkSupabaseClient from "@/app/utils/supabase/supabase";
import { toast, Bounce } from "react-toastify";

export default function TitleList() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const { user } = useUser();
  const supabase = createClerkSupabaseClient();

  // Fetch todos when user is available
  useEffect(() => {
    if (!user) return;

    async function loadTasks() {
      try {
        const { data, error } = await supabase
          .from("todo")
          .select("id, todo") // Fetch the id and todo column
          .order("id", { ascending: false });

        if (!error) {
          setTasks(data);
        }
      } catch (e) {
        setError("An unexpected error occurred");
      }
    }

    loadTasks();
  }, [user, supabase]);

  // Function to delete a task
  const deleteTask = async (taskId: number) => {
    try {
      await supabase.from("todo").delete().eq("id", taskId); // Delete the task by id
      toast("Todo Deleted!", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (e) {
      setError("An unexpected error occurred during deletion");
    }
  };

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl mb-4">Todo List</h2>
      {tasks.length > 0 ? (
        <ul className="bg-white p-6 rounded-lg shadow-md">
          {tasks.map((task: { id: number; todo: string }) => (
            <li
              key={task.id}
              className="border-b py-2 flex justify-between items-center"
            >
              {task.todo} {/* Displaying the `todo` field */}
              <button
                onClick={() => deleteTask(task.id)} // Call deleteTask on click
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No todos found.</p>
      )}
    </div>
  );
}
