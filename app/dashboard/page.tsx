import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { UserProfile } from "./User-Profil";

export default async function Home() {
  return (
    <div>
      <Suspense fallback="Loading your information...">
        <UserProfile />
      </Suspense>
    </div>
  );
}
