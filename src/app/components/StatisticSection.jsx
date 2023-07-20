"use client";

import Counter from "./StatCounter";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const StatisticSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div ref={ref} className="border w-full">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={{
            visible: { x: "0%" },
            hidden: { x: "-300%" },
          }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
          className="lg:text-4xl inline-flex md:text-3xl sm:text-2xl text-2xl border lg:text-left md:text-left sm:text-center text-center font-extrabold text-orange-700 dark:text-white mb-12"
        >
          Our Material Records
        </motion.h1>
        <div className="border grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 sm:gap-7 gap-6">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6, delay: 0 }}
            className="border px-4 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl"
          >
            <h1 className="border text-center text-lg font-semibold">
              Youtube Classes
            </h1>
            <div className="border flex justify-center mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center">
              <Counter number={1000} /> +
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border px-4 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl"
          >
            <h1 className="border text-center text-lg font-semibold">
              Mock Tests
            </h1>
            <div className="border flex justify-center mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center">
              <Counter number={150} /> +
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border px-4 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl"
          >
            <h1 className="border text-center text-lg font-semibold">
              Exam Related Videos
            </h1>
            <div className="border flex justify-center mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center">
              <Counter number={70} /> +
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="border px-4 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl"
          >
            <h1 className="border text-center text-lg font-semibold">
              Practice Material
            </h1>
            <div className="border flex justify-center mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center">
              <Counter number={350} /> +
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default StatisticSection;
