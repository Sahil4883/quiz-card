import { Suspense } from "react";
import { UserProfile } from "./User-Profile";
import TodoList from "@/Components/(Functional Component)/TodoComponent";

export default async function Home() {
  return (
    <div>
      <Suspense fallback="Loading your information...">
        <UserProfile />
        <TodoList />
      </Suspense>
    </div>
  );
}
