import { Suspense } from "react";
import { UserProfile } from "./User-Profile";

export default async function Home() {
  return (
    <div>
      <Suspense fallback="Loading your information...">
        <UserProfile />
      </Suspense>
    </div>
  );
}
