import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { setTimeout } from "timers/promises";
export async function UserProfile() {
  /*Check if the user is logged in*/
  const session = await getSession();
  await setTimeout(5000);
  if (session?.user == null) {
    redirect("/api/auth/login");
  }
  return (
    <div>
      Welcome {!!session?.user && <div>{session.user.email}</div>} -
      <a href="/api/auth/logout">Logout User</a>
    </div>
  );
}
