"use server";

import { currentUser } from "@clerk/nextjs/server"; // Use Clerk's `currentUser` function
import { createTodo } from "@/actions/actions"; // Import the `createTodo` function
import prisma from "@/lib/db";

export default async function TodoForm() {
  const user = await currentUser(); // Retrieve the current user on the server
  const userId = user?.id;
  const todo = await prisma.todo.findMany({
    where: {
      user_id: userId,
    },
  });
  async function handleAction(formData: FormData) {
    "use server";
    formData.append("user_id", userId ?? "");

    await createTodo(formData);
  }

  return (
    <>
      <div>
        <ul>
          {todo.map((t) => (
            <li key={t.id}>{t.todo}</li>
          ))}
        </ul>
      </div>
      <form action={handleAction}>
        <input type="text" name="todo" placeholder="Enter your todo" required />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}
