import { currentUser } from "@clerk/nextjs/server"; // Use Clerk's `currentUser` function
import { createTodo } from "@/actions/actions"; // Import the `createTodo` function
import prisma from "@/lib/db";

export default async function NewDashboard() {
  const user = await currentUser(); // Retrieve the current user on the server
  const currentUserId = user?.id;
  const todo = await prisma.todo.findMany({
    where: {
      user_id: currentUserId,
    },
  });
  async function handleAction(formData: FormData) {
    "use server";
    formData.append("user_id", currentUserId ?? "");

    await createTodo(formData);
  }
  return (
    <div>
      <div className="max-w-md mx-auto mt-10">
        <form
          className="bg-white p-6 rounded-lg shadow-md"
          action={handleAction}
        >
          <h2 className="text-2xl mb-4">Create a new Todo</h2>

          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium">
              Todo
            </label>
            <input
              name="todo"
              type="text"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </form>
      </div>
      {/* The list goes below*/}
      <div className="max-w-md mx-auto mt-10">
        <h2 className="text-2xl mb-4">Todo List</h2>
        <ul className="bg-white p-6 rounded-lg shadow-md">
          {todo.map((t) => (
            <li
              key={t.id}
              className="border-b py-2 flex justify-between items-center"
            >
              {t.todo}
              <div className="flex justify-between space-x-4">
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-lg transition duration-300 ease-in-out">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
