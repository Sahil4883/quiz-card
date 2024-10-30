import { currentUser } from "@clerk/nextjs/server"; // Use Clerk's `currentUser` function
import { createTodo } from "@/actions/actions"; // Import the `createTodo` function
import prisma from "@/lib/db";
import NewDashboard from "@/Components/TodoComponents/NewDashboard"; // Import the `NewDashboard` component

export default async function TodoForm() {
  return (
    <>
      <NewDashboard />
    </>
  );
}
