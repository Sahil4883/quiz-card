import { Suspense } from "react";
import { UserProfile } from "./User-Profile";
import TodoList from "@/Components/(Functional Component)/TodoComponent";
import Textloading from "@/Components/(Skeleton)/Textloading";
import { Protect } from "@clerk/nextjs";

export default async function Home() {
  return (
    /*Protecting the dashboard route and it doesn't render */
    <Protect>
      <div>
        <UserProfile />
        <Suspense fallback={<Textloading />}></Suspense>
        <TodoList />
      </div>
    </Protect>
  );
}
