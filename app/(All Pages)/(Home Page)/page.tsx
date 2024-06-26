import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  /*If user is already logged in then user are redirected to '/dashboard' */

  return (
    /*The Tailwind part is needed to be edited asap */
    /* Learned about the basics of tailwind and already implementing it on another side project */
    /*Learned More Tailwind and will start to implement it from next week or so */
    <>
      <div className=" h-screen flex items-center flex-col justify-center bg-black">
        <h1 className="h-home text-7xl md:text-8xl text-white">
          Ready To Grab <br />
          Your Notes
        </h1>
        <a
          href="/api/auth/login"
          className="text-white bg-gradient-to-r from-cyan-700 to-blue-700 p-3 rounded-3xl m-5"
        >
          Start Taking Notes
        </a>
      </div>
      <div className="md:flex md:items-center">
        <Image
          className="col-span-1 md:col-span-2"
          src="/certificate.png"
          width={500}
          height={500}
          alt="Certificate"
        />
        <h3 className="h-home text-4xl col-span-1 md:col-span-2 md:text-6xl md:text-center">
          Easy to Save and Bookmark Files
        </h3>
      </div>

      <div className="md:flex md:items-center">
        <Image
          className="col-span-1 md:col-span-2"
          src="/rr.png"
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
