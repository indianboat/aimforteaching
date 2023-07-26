"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const GetStartedSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div
        ref={ref}
        className="lg:w-2/3 md:w-full sm:w-full w-full border flex flex-col justify-center"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="border lg:text-5xl md:text-3xl sm:text-3xl text-2xl font-extrabold lg:text-start md:text-left sm:text-center text-center drop-shadow-md">
            Great Place To{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text drop-shadow-md">
              Learn
            </span>
          </h1>
          <h1 className="border lg:text-4xl md:mt-2 md:text-3xl sm:text-3xl text-2xl sm:mt-1 mt-1 font-extrabold lg:text-start md:text-left sm:text-center text-center drop-shadow-md">
            Create Your Own Destiny
          </h1>
        </motion.div>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="border text-md font-normal mt-5 lg:text-start md:text-left sm:text-center text-center text-gray-600 dark:text-gray-100"
        >
          Master Your Teaching Exams, Study Tips, and Exam Updates in One Place.
          Stay Informed with the Latest Teaching Exams Updates and Strategies
        </motion.p>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 },
          }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex md:justify-start sm:justify-center justify-center mt-8 border"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="text-white border py-2 rounded-full bg-[#9A092B] dark:bg-orange-800 dark:shadow-orange-900 shadow-sm hover:shadow-md shadow-[#cf4366]"
          >
            <Link href="/signup" className="border px-5 py-2 rounded-full text-white">Get Started</Link>
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex md:w-1/2 sm:w-full w-full justify-center border"
      >
        <Image
          src="/bg3.png"
          width={300}
          height={180}
          alt="home_image"
          priority
          className="select-none"
        />
      </motion.div>
    </>
  );
};

export default GetStartedSection;
