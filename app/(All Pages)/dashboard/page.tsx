import { Suspense } from "react";
import { UserProfile } from "@/Components/TodoComponents/User-Profile";
import Textloading from "@/Components/(Skeleton)/Loading";
import { Protect } from "@clerk/nextjs";
import DashboardProfile from "@/Components/TodoComponents/DashboardProfile";

export default async function dashboard() {
  return (
    /*Protecting the dashboard route and it doesn't render */
    <Protect>
      <Suspense fallback={<Textloading />}>
        {" "}
        <DashboardProfile />
      </Suspense>
    </Protect>
  );
}
