import Link from "next/link";

export default function NotFound(){

  return (
    <>
      <div className="container flex flex-col items-center md:w-11/12 sm:w-full w-full mx-auto my-6 border p-4">
        <h1>404 Page not found, Please check back later</h1>
        <Link href={"/"} className="mt-2 px-3 py-1 bg-blue-400 text-white dark:bg-orange-700 rounded-full">Go Home</Link>
      </div>
    </>
  )
} 