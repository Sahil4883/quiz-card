import React from "react";
import { getSession } from "@auth0/nextjs-auth0";
export async function UserInfo() {
  /*Check if the user is logged in*/
  const session = await getSession();
  return <div>{session?.user && <div>{session.user.email}</div>}</div>;
}

export default UserInfo;
