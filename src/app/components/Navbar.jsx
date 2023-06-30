"use client";

import Link from "next/link";
import ThemeComponent from "./ThemeComponent";
import { HiMiniBars3 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const drawerHandler = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      drawerHandler();
    }
  };

  if (isOpen) {
    document.body.style.setProperty("overflow", "hidden");
  } else {
    document.body.style.removeProperty("overflow");
  }

  return (
    <>
      <nav className="fixed w-full border py-1 z-30 top-0 backdrop-saturate-[80%] backdrop-blur-sm bg-white/70 dark:bg-[#121212]/70">
        <div className="container md:w-11/12 sm:w-full w-full mx-auto lg:px-4 md:px-3 sm:px-2 px-2 py-2 border flex justify-between">
          <div className="flex md:w-auto sm:w-full w-full items-center md:justify-center sm:justify-between justify-between border gap-x-4">
            <button
              onClick={drawerHandler}
              className="lg:hidden md:hidden sm:flex flex p-2 rounded-full hover:bg-gray-100 hover:dark:bg-[#4B5563] transition-colors"
            >
              <HiMiniBars3 size={18} />
            </button>
            <Link
              href="/"
              className="font-semibold lg:text-2xl md:text-xl sm:text-lg text-md border"
            >
              AimForTeaching
            </Link>
            <div className="lg:hidden md:hidden sm:flex flex">
              <ThemeComponent />
            </div>
            <div className="lg:flex md:flex sm:hidden hidden items-center justify-center gap-x-4">
              <Link href="/" className="text-md border">
                Home
              </Link>
              <Link href="/" className="text-md border">
                Explore Exams
              </Link>
              <Link href="/" className="text-md border">
                Upcoming Exams
              </Link>
            </div>
          </div>

          <div className="lg:flex md:flex sm:hidden hidden items-center justify-center gap-x-4 border">
            <ThemeComponent />
            <Link href="/login" className="text-md border">
              Sign in
            </Link>
            <Link href="/signup" className="text-md border">
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Drawer */}

      <div
        className={`${
          isOpen ? "z-40 absolute inset-0 transition-opacity" : ""
        }`}
      >
        <div
          tabIndex="0"
          onClick={drawerHandler}
          className={`${isOpen ? "absolute inset-0 bg-black opacity-50" : ""}`}
        ></div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="z-50 fixed left-0 w-64 h-full bg-white overflow-y-auto dark:bg-gray-800 shadow-md p-4 transform"
            initial={{ x: -280 }}
            animate={{ x: isOpen ? 0 : -300 }}
            transition={{ type: "spring", stiffness: 800, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            exit={{ x: isOpen ? -300 : 0, }}
          >
            <button
              type="button"
              onClick={drawerHandler}
              data-drawer-hide="drawer"
              aria-controls="drawer"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <CgClose />
              <span className="sr-only">Close menu</span>
            </button>

            <div className="flex flex-col mb-4 mt-8 border gap-y-3">
              <Link
                href={"/"}
                className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                href={"/"}
                className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg"
                onClick={handleLinkClick}
              >
                Explore Exams
              </Link>
              <Link
                href={"/"}
                className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg"
                onClick={handleLinkClick}
              >
                Upcoming Exams
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/login"
                className="flex justify-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={handleLinkClick}
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="flex justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleLinkClick}
              >
                Sign up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
