"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { CiMail } from "react-icons/ci";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

const Signin = () => {

  const [showPassword, setShowPassword] = useState(false);

  if(showPassword){
    setTimeout(() => {
      setShowPassword(false)
    }, 3000);
  }

  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto lg:my-6 md:mt-6 sm:mt-28 mt-24 mb-10 border p-4">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 justify-between gap-y-8">
          <div className="border md:rounded-tl-[50px] py-16 xl:px-28 lg:px-16 md:px-16 sm:px-8 px-2 bg-slate-50 dark:bg-neutral-900">
            <h1 className="font-semibold text-3xl drop-shadow">
              Welcome back
            </h1>
            <p className="border mt-2 text-slate-700 dark:text-slate-200">
              Please enter your details.
            </p>
            <form className="mt-6">
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-slate-600 dark:text-slate-200 text-sm"
                >
                  Email
                </label>
                <div className="mt-1 flex items-center justify-end">
                  <input
                    className="w-full focus:ring-2 shadow ring-[#7F56DA] border-2 pl-3 pr-14 py-2 transition-all dark:border-[#3B3B3B] rounded-lg outline-none focus:border-gray-300 lowercase"
                    type="email"
                    placeholder="enter your email"
                    id="email"
                    name="email"
                    required
                    autoFocus
                    spellCheck={false}
                  />
                  <div className="flex rounded-e-md justify-center  items-center px-3 py-2 absolute">
                    <CiMail size={24} className="text-slate-400" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col">
                <label
                  htmlFor="password"
                  className="text-slate-600 dark:text-slate-200 text-sm"
                >
                  Password
                </label>
                <div className="mt-1 flex items-center justify-end">
                  <input
                    className="w-full focus:ring-2 shadow ring-[#7F56DA] border-2 px-3 py-2 transition-all dark:border-[#3B3B3B] rounded-lg outline-none focus:border-gray-300"
                    type={showPassword?"text":"password"}
                    placeholder="enter your password"
                    id="password"
                    name="password"
                    required
                  />
                  <div className="flex rounded-e-md justify-center  items-center px-3 py-2 absolute">
                    <button type="button" onClick={(e)=> setShowPassword(!showPassword)}>{
                      showPassword ? <FaRegEye size={24} className="text-slate-400" /> : <FaRegEyeSlash size={24} className="text-slate-400" />
                    }</button>
                  </div>
                </div>
              </div>
              <div className="my-4 flex justify-end">
                <Link
                  href={"/login"}
                  className="font-medium outline-purple-950"
                >
                  Forgot password
                </Link>
              </div>
              <div className="flex justify-center">
                <button
                  className="px-3 py-2 outline-purple-950 bg-[#7F56DA] active:scale-95 transition-transform text-white border w-full rounded-lg"
                  type="submit"
                >
                  Sign in
                </button>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  className="flex hover:ring-2 ring-[#7F56DA] justify-center active:scale-95 transition items-center gap-x-2 px-3 py-2 border-2 w-full rounded-lg bg-white text-black outline-purple-950 hover:border-gray-300"
                  type="button"
                >
                  <FcGoogle size={24} />
                  Sign in with Google
                </button>
              </div>
              <div className="mt-8 flex justify-center">
                <span className="text-sm">
                  Don&apos;t have an account?{" "}
                  <Link
                    href={"/signup"}
                    className="text-[#7F56DA] text-sm hover:underline outline-purple-950"
                  >
                    Sign up
                  </Link>
                </span>
              </div>
            </form>
          </div>
          <div className="border flex md:rounded-br-[50px] justify-end bg-gradient-radial to-[#8251F6] from-[#AC4EE5] dark:from-[#111111] dark:to-[#000000]">
            <Image
              src={"/login.svg"}
              width={1000}
              height={1000}
              sizes="100%"
              style={{ width: "100%", height: "100%" }}
              alt="signin-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
