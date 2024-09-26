"use client";
import createClerkSupabaseClient from "@/app/utils/supabase/supabase";

export default function Page({ params }: { params: { id: string } }) {
  const taskId = params.id;
  const supabase = createClerkSupabaseClient();
  async function getTodo() {
    const res = await supabase.from("todo").select("todo").eq("id", taskId);
    console.log(res);
  }
  getTodo();
  return (
    <div className="max-w-md mx-auto mt-10">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl mb-4">Update Title</h2>

        {/* Show the error message if there is one */}

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            id="title"
            type="text"
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
