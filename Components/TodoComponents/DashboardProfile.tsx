"use client";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import createClerkSupabaseClient from "@/app/utils/supabase/supabase";
import { toast, Bounce } from "react-toastify";
import { useRouter } from "next/navigation";

export default function DashboardProfile() {
  const [list, setList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState("");
  const { user } = useUser();
  const client = createClerkSupabaseClient();
  const router = useRouter();

  async function createList(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast("Todo Created!", {
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
    if (!user) {
      return "You must be logged in to create a task";
    }
    try {
      await client.from("todo").insert({
        todo: todo,
        user_id: user.id, // Use Clerk's user ID to associate the task with the user
      });
      loadTasks();
      setTodo("");
    } catch (err) {
      console.log(err);
      return "An unexpected error occurred";
    }
  }
  // Load task functions

  const loadTasks = async () => {
    // Load tasks function called here so it can be reused
    setLoading(true);
    const { data, error } = await client
      .from("todo")
      .select("id, todo")
      .order("id", { ascending: false });
    if (!error) setList(data);
    setLoading(false);
  };
  useEffect(() => {
    if (!user) return;

    loadTasks();
  }, [user]);
  //delete id function goes below
  const deleteTask = async (taskId: number) => {
    try {
      await client.from("todo").delete().eq("id", taskId); // Delete the task by id
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
      return "An unexpected error occurred during deletion";
    }
    loadTasks();
  };

  const updateTask = async (taskId: number) => {
    const id = taskId;
    router.push(`/update/${id}`);
    //router push to the update page successfull
  };
  return (
    <>
      <div className="max-w-md mx-auto mt-10">
        <form
          onSubmit={createList}
          className="bg-white p-6 rounded-lg shadow-md"
        >
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
      </div>
      {/* The list goes below*/}
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl mb-4">Todo List</h2>
        {loading && <p>Loading...</p>}
        {list.length > 0 ? (
          <ul className="bg-white p-6 rounded-lg shadow-md">
            {list.map((task: { id: number; todo: string }) => (
              <li
                key={task.id}
                className="border-b py-2 flex justify-between items-center"
              >
                {task.todo} {/* Displaying the `todo` field */}
                <li className="flex justify-between space-x-4">
                  <button
                    onClick={() => updateTask(task.id)} // Call deleteTask on click
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteTask(task.id)} // Call deleteTask on click
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out"
                  >
                    Delete
                  </button>
                </li>
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
