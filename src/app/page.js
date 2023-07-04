"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className="container flex md:w-10/12 sm:w-11/12 w-full md:flex-row sm:flex-col flex-col mx-auto md:my-24 sm:my-28 my-24 border lg:px-4 md:px-3 sm:px-2 px-2 py-4 gap-y-8">
        <div className="lg:w-2/3 md:w-full sm:w-full w-full border flex flex-col justify-center">
          <div className="">
            <h1 className="border lg:text-5xl md:text-3xl sm:text-3xl text-2xl font-extrabold lg:text-start md:text-left sm:text-center text-center drop-shadow-md">
              Great Place To{" "}
              <span className="text-transparent bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text drop-shadow-md">
                Learn
              </span>
            </h1>
            <h1 className="border lg:text-4xl md:mt-2 md:text-3xl sm:text-3xl text-2xl sm:mt-1 mt-1 font-extrabold lg:text-start md:text-left sm:text-center text-center drop-shadow-md">
              Create Your Own Destiny
            </h1>
          </div>
          <p className="border text-md font-normal mt-5 lg:text-start md:text-left sm:text-center text-center text-gray-600 dark:text-gray-100">
            Master Your Teaching Exams, Study Tips, and Exam Updates in One
            Place. Stay Informed with the Latest Teaching Exams Updates and
            Strategies
          </p>
          <div className="flex md:justify-start sm:justify-center justify-center mt-8 border">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="border px-5 py-2 rounded-full bg-orange-400 dark:bg-orange-800 shadow-sm hover:shadow-md shadow-orange-700 text-white"
            >
              <Link href="/">Get Started</Link>
            </motion.button>
          </div>
        </div>
        <div className="flex md:w-1/2 sm:w-full w-full justify-center border">
          <Image
            src="/bg3.png"
            width={430}
            height={500}
            alt="home_image"
            className="drop-shadow-md select-none"
          />
        </div>
      </div>
    </>
  );
}
