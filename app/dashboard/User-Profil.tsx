import { getSession } from "@auth0/nextjs-auth0";
import { setTimeout } from "timers/promises";
import { redirect } from "next/navigation";
export async function UserProfile() {
  const session = await getSession();
  if (session?.user == null) {
    redirect("/");
  }
  await setTimeout(5000);
  return (
    <div>
      {!!session?.user && <div>{session.user.email}</div>} -
      <a href="/api/auth/logout">Logout User</a>
    </div>
  );
}
