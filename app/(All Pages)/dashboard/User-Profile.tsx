import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
export async function UserProfile() {
  /*Check if the user is logged in*/
  const session = await getSession();
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
