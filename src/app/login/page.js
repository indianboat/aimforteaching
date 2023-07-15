import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Signin = () => {
  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto md:my-24 sm:my-28 my-24 border p-4">
        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col border">
          <div className="border w-full">
            <div className="flex flex-col border md:w-[350px] sm:w-full w-full justify-center mx-auto">
              <h1 className="border font-semibold text-3xl">Welcome back</h1>
              <p className="border mt-2 text-slate-700 dark:text-slate-200">
                Please enter your details.
              </p>
              <form method="post" className="mt-6">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-slate-600 dark:text-slate-200 text-sm">
                    Email
                  </label>
                  <input
                    className="mt-1 border-2 px-3 py-2 transition-all dark:border-[#3B3B3B] rounded-lg outline-none focus:border-gray-300"
                    type="email"
                    placeholder="enter your email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mt-6 flex flex-col">
                  <label htmlFor="password" className="text-slate-600 dark:text-slate-200 text-sm">
                    Password
                  </label>
                  <input
                    className="mt-1 border-2 px-3 py-2 transition-all dark:border-[#3B3B3B] rounded-lg outline-none focus:border-gray-300"
                    type="password"
                    placeholder="enter your password"
                    id="password"
                    name="password"
                  />
                </div>
                <div className="my-4 flex justify-end">
                  <Link href={"/login"} className="font-medium">Forgot password</Link>
                </div>
                <div className="flex justify-center">
                  <button className="px-3 py-2 bg-[#7F56DA] active:scale-95 transition-transform text-white border w-full rounded-lg" type="button">Sign in</button>
                </div>
                <div className="mt-4 flex justify-center">
                  <button className="flex justify-center active:scale-95 transition items-center gap-x-2 px-3 py-2 border-2 w-full rounded-lg outline-none hover:border-gray-300" type="button"><FcGoogle size={24} />Sign in with Google</button>
                </div>
                <div className="mt-8 flex justify-center">
                  <span className="text-sm">Don&apos;t have an account? <Link href={"/signup"} className="text-[#7F56DA] text-sm hover:underline">Sign up</Link></span>
                </div>
              </form>
            </div>
          </div>
          <div className="border w-full"></div>
        </div>
      </div>
    </>
  );
};

export default Signin;
