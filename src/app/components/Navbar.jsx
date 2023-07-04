"use client";

import Link from "next/link";
import ThemeComponent from "./ThemeComponent";
import { HiMiniBars3 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [isOpen]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1
      },
    },
  };

  const item = {
    hidden: { y: "-25%", opacity: 0 },
    show: { y: "0", opacity: 1 },
  };

 
  return (
    <>
      <nav className="fixed w-full border py-3 z-30 top-0 backdrop-saturate-[80%] backdrop-blur-sm bg-white/70 dark:bg-[#121212]/70 shadow-md">
        <div className="container md:w-11/12 sm:w-full w-full mx-auto lg:px-4 md:px-3 sm:px-2 px-2 py-2 border flex justify-between">
          <div className="flex md:w-auto sm:w-full w-full items-center md:justify-center sm:justify-between justify-between border gap-x-4">
            <button
              onClick={drawerHandler}
              className="lg:hidden md:hidden sm:flex flex p-2 rounded-full hover:bg-gray-100 hover:dark:bg-[#4B5563] transition-colors"
            >
              <HiMiniBars3 size={22} />
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
              <Link href="/" className={`text-md border hover:text-blue-900 dark:hover:text-orange-700 ${usePathname() == "/" ? "text-blue-800 dark:text-orange-500" : "text-inherit"}`}>
                Home
              </Link>
              <Link href="/exams" className={`text-md border hover:text-blue-900 dark:hover:text-orange-700 ${usePathname() == "/exams" ? "text-blue-800 dark:text-orange-500" : "text-inherit"} `}>
                Explore Exams
              </Link>
              <Link href="/exams/upcomingexams" className={`text-md border hover:text-blue-900 dark:hover:text-orange-700 ${usePathname() == "/exams/upcomingexams" ? "text-blue-800 dark:text-orange-500" : "text-inherit"} `}>
                Upcoming Exams
              </Link>
            </div>
          </div>

          <div className="lg:flex md:flex sm:hidden hidden items-center justify-center gap-x-4 border">
            <ThemeComponent />
            <Link href="/login" className={`text-md border hover:text-blue-900 dark:hover:text-orange-700 ${usePathname() == "/login" ? "text-blue-800 dark:text-orange-500" : "text-inherit"} `}>
              Sign in
            </Link>
            <Link href="/signup" className={`text-md border hover:text-blue-900 dark:hover:text-orange-700 ${usePathname() == "/signup" ? "text-blue-800 dark:text-orange-500" : "text-inherit"} `}>
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Drawer */}

      <div
        className={`${
          isOpen ? "z-40 absolute h-full w-full inset-0 transition-opacity" : ""
        }`}
      >
        <div
          onClick={drawerHandler}
          className={`${
            isOpen ? "inset-0 fixed w-full h-full bg-black opacity-50" : ""
          }`}
        ></div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="z-50 fixed left-0 w-64 h-full bg-white overflow-y-auto dark:bg-gray-800 shadow-md p-4 transform"
            variants={{
              open: {
                x: "0%",
              },
              closed: {
                x: "-300%",
              },
            }}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "spring", stiffness: 800, damping: 35 }}
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

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col mb-4 mt-8 border gap-y-3"
            >
              <motion.div
                variants={item}
                transition={{ delay: 0.10 }}
                className="flex w-full"
              >
                <Link
                  href={"/"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                transition={{ delay: 0.15 }}
                className="flex w-full"
              >
                <Link
                  href={"/exams"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Explore Exams
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                transition={{ delay: 0.20 }}
                className="flex w-full"
              >
                <Link
                  href={"/exams/upcomingexams"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Upcoming Exams
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-evenly border"
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={item}
                transition={{ delay: 0.25 }}
                className="flex"
              >
                <Link
                  href="/login"
                  className="flex justify-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={handleLinkClick}
                >
                  Sign in
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                transition={{ delay: 0.30 }}
                className="flex"
              >
                <Link
                  href="/signup"
                  className="flex justify-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 border"
                  onClick={handleLinkClick}
                >
                  Sign up
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
