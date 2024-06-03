import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();
  if (session?.user == null) {
    redirect("/");
  }
  return (
    <div>
      {!!session?.user && <div>{session.user.email}</div>}-
      <a href="/api/auth/logout">Logout User</a>
    </div>
  );
}
