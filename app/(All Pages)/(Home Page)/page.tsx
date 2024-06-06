import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";

export default async function Home() {
  /*Checking if the user is logged in or Not */
  const session = await getSession();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <>
      <div className=" h-screen flex items-center flex-col justify-center bg-black">
        <h1 className="h1-home text-7xl md:text-8xl text-white">
          Ready To Grab <br />
          Your Notes
        </h1>
        <a
          href="/dashboard"
          className="text-white bg-gradient-to-r from-cyan-700 to-blue-700 p-3 rounded-3xl m-5"
        >
          Start Taking Notes
        </a>
      </div>
    </>
  );
}
