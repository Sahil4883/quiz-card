"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import createClerkSupabaseClient from "@/app/utils/supabase/supabase";
import { useUser } from "@clerk/nextjs";
import { toast, Bounce } from "react-toastify";
import { revalidatePath } from "next/cache";

export default function CreateForm() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClerkSupabaseClient();
  const { user } = useUser(); // Get the user from Clerk

  async function HandleSubmit(e: React.FormEvent<HTMLFormElement>) {
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

    // Ensure the user is authenticated before proceeding
    if (!user) {
      setError("You must be logged in to create a task");
      return;
    }

    try {
      // Clear any previous errors
      setError(null);

      // Insert task with the current user's ID from Clerk
      const { error: insertError } = await supabase.from("todo").insert({
        todo: title,
        user_id: user.id, // Use Clerk's user ID to associate the task with the user
      });

      if (insertError) {
        setError("Error creating task: " + insertError.message);
      } else {
        setTitle(""); // Clear the form input
        revalidatePath("/dashboard"); // Revalidate the cache for the current path
      }
    } catch (err) {
      console.log(err);
      setError("An unexpected error occurred");
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={HandleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl mb-4">Create a new Title</h2>

        {/* Show the error message if there is one */}
        {error && <p className="text-red-500">{error}</p>}

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
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
