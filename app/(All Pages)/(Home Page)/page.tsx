import Image from "next/image";
import { SignInButton } from "@clerk/nextjs";
import rr from "@/public/(Home)/rr.png";
import certificate from "@/public/(Home)/certificate.png";
export default async function Home() {
  return (
    <>
      <div className=" h-screen flex items-center flex-col justify-center bg-black">
        <h1 className="h-home text-7xl md:text-8xl text-white text-center">
          Ready To Grab <br />
          Your Notes
        </h1>
        <a className="text-white bg-gradient-to-r from-cyan-700 to-blue-700 p-3 rounded-3xl m-5">
          <SignInButton fallbackRedirectUrl="/dashboard">
            Start Taking Notes
          </SignInButton>
        </a>
      </div>
      <div className="md:flex md:items-center">
        <Image
          className="col-span-1 md:col-span-2"
          src={certificate}
          sizes="50vw"
          width={500}
          height={500}
          alt="Certificate"
        />
        <h3 className="h-home text-4xl col-span-1 md:col-span-2 md:text-6xl md:text-center">
          Easy to Save and Bookmark Files
        </h3>
      </div>

      <div className="md:flex md:items-center md:flex-row-reverse">
        <Image
          className="col-span-1 md:col-span-2"
          src={rr}
          sizes="50vw"
          width={500}
          height={500}
          alt="Rocket"
        />
        <h3 className="h-home text-4xl col-span-1 md:col-span-2 md:text-6xl md:text-center">
          Share your notes and help others
        </h3>
      </div>
    </>
  );
}
