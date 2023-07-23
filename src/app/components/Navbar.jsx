"use client";

import Link from "next/link";
import ThemeComponent from "./ThemeComponent";
import { HiMiniBars3 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import CollapseButton from "./CollapseButton";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const drawerHandler = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (isDrawerOpen) {
        if (event.key == "Escape") {
          setDrawerOpen(false);
        }
      }
    };

    if (isDrawerOpen) {
      document.body.style.setProperty("overflow", "hidden");
      document.addEventListener("keydown", handleEscKey);
    } else {
      document.body.style.removeProperty("overflow");
      document.removeEventListener("keydown", handleEscKey);
    }
  }, [isDrawerOpen]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: { y: "-25%", opacity: 0 },
    show: { y: "0", opacity: 1 },
  };

  const handleLinkClick = () => {
    if (isDrawerOpen) {
      drawerHandler();
    }
  };



  return (
    <>
      <nav className="fixed w-full border py-3 z-50 top-0 backdrop-saturate-[80%] backdrop-blur-sm bg-white/70 dark:bg-[#121212]/70 shadow">
        <div className="container md:w-11/12 sm:w-full w-full mx-auto lg:px-4 md:px-3 sm:px-2 px-2 py-2 border flex justify-between">
          <div className="flex md:w-auto sm:w-full w-full items-center md:justify-center sm:justify-between justify-between border gap-x-4">
            <button
              onClick={drawerHandler}
              className="lg:hidden md:hidden sm:flex flex p-2 rounded-full hover:bg-gray-100 hover:dark:bg-[#4B5563] transition-colors"
              aria-labelledby="drawer-icon"
            >
              <HiMiniBars3 size={22} />
            </button>
            <Link
              href="/"
              className="flex font-semibold lg:text-2xl md:text-xl sm:text-xl text-md border"
            >
              AimForTeaching
            </Link>
            <div className="lg:hidden md:hidden sm:flex flex">
              <ThemeComponent />
            </div>
            <div className="lg:flex md:flex sm:hidden hidden items-center justify-center gap-x-4">
              <ul className="flex flex-row justify-center items-center gap-x-4">
                <li>
                  <Link
                    href="/"
                    className={`text-md border hover:text-blue-900 dark:hover:text-orange-700 ${
                      usePathname() == "/"
                        ? "text-blue-800 dark:text-orange-500"
                        : "text-inherit"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exams"
                    className={`text-md border hover:text-blue-900 dark:hover:text-orange-700 ${
                      usePathname() == "/exams"
                        ? "text-blue-800 dark:text-orange-500"
                        : "text-inherit"
                    }`}
                  >
                    Explore Exams
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:flex md:flex sm:hidden hidden items-center justify-center gap-x-4 border">
            <ThemeComponent />
            <Link
              href="/login"
              className={`text-md border hover:text-blue-900 dark:hover:text-orange-700 ${
                usePathname() == "/login"
                  ? "text-blue-800 dark:text-orange-500"
                  : "text-inherit"
              } `}
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className={`text-md border hover:text-blue-900 dark:hover:text-orange-700 ${
                usePathname() == "/signup"
                  ? "text-blue-800 dark:text-orange-500"
                  : "text-inherit"
              } `}
            >
              Sign up
            </Link>
          </div>
        </div>
      </nav>

      {/* Drawer overlay */}

      <div
        className={`${
          isDrawerOpen
            ? "z-40 absolute h-full top-[72.5px] w-full inset-0 transition-opacity"
            : "hidden"
        }`}
      >
        <div
          onClick={drawerHandler}
          className={`${
            isDrawerOpen
              ? "inset-0 fixed w-full top-[72.5px] h-full bg-black opacity-25"
              : "hidden"
          }`}
        ></div>
      </div>

      {/* SIDE DRAWER */}
      <AnimatePresence>
        {isDrawerOpen && (
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
                transition={{ delay: 0.1 }}
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
                transition={{ delay: 0.2 }}
                className="flex w-full"
              >
                <CollapseButton onClick={handleLinkClick} />
              </motion.div>

              <motion.div
                variants={item}
                transition={{ delay: 0.3 }}
                className="flex w-full"
              >
                <Link
                  href={"/upcomingexams"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Upcoming Exams
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                transition={{ delay: 0.4 }}
                className="flex w-full"
              >
                <Link
                  href={"/"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Job Alert
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                transition={{ delay: 0.5 }}
                className="flex w-full"
              >
                <Link
                  href={"/"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Syllabus
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                transition={{ delay: 0.6 }}
                className="flex w-full"
              >
                <Link
                  href={"/dailyquizzes"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Daily Quizzes
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                transition={{ delay: 0.7 }}
                className="flex w-full"
              >
                <Link
                  href={"/currentaffairs"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Current Affairs
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                transition={{ delay: 0.8 }}
                className="flex w-full"
              >
                <Link
                  href={"/results"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Results
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                transition={{ delay: 0.9 }}
                className="flex w-full"
              >
                <Link
                  href={"/admitcards"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Admit Card
                </Link>
              </motion.div>

              <motion.div
                variants={item}
                transition={{ delay: 1 }}
                className="flex w-full"
              >
                <Link
                  href={"/"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Notes or Tricks
                </Link>
              </motion.div>
              <motion.div
                variants={item}
                transition={{ delay: 1.1 }}
                className="flex w-full"
              >
                <Link
                  href={"/"}
                  className="border px-4 py-1 hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
                  onClick={handleLinkClick}
                >
                  Learn through videos
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
                transition={{ delay: 0.9 }}
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
                transition={{ delay: 1 }}
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