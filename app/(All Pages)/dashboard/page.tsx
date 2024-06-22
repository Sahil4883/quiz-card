import { Suspense } from "react";
import { UserProfile } from "./User-Profile";
import TodoList from "@/Components/(Functional Component)/TodoComponent";
import Textloading from "@/Components/(Skeleton)/Textloading";

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<Textloading />}>
        <UserProfile />
        <TodoList />
      </Suspense>
    </div>
  );
}
