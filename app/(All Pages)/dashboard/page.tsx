import { Suspense } from "react";
import { UserProfile } from "@/Components/TodoComponents/User-Profile";
import Textloading from "@/Components/(Skeleton)/Loading";
import { Protect } from "@clerk/nextjs";

export default async function dashboard() {
  return (
    /*Protecting the dashboard route and it doesn't render */
    <Protect>
      <Suspense fallback={<Textloading />}>
        {" "}
        <UserProfile />
      </Suspense>
    </Protect>
  );
}
