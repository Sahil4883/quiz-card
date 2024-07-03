import { currentUser } from "@clerk/nextjs/server";

export async function UserProfile() {
  const user = await currentUser();
  const username = user?.firstName;
  const welcomesuffix = username ? `Welcome ${username}` : "Welcome User";
  /*Check if the user is logged in*/
  return (
    <div>
      <h1>User Profile</h1>
      <p>{welcomesuffix}</p>
    </div>
  );
}
