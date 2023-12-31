"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ExploreSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const [allExamList, setAllExamList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(
        "https://aimforteaching-backend.onrender.com/api/exams"
      );
      const data = await response.json();
      setAllExamList(data.data);
      setLoading(false);
    }
    fetchData();
  }, []);

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
          className="lg:text-4xl md:text-3xl sm:text-2xl inline-flex text-2xl border lg:text-left md:text-left sm:text-center text-center font-extrabold text-neutral-900 dark:text-white mb-12"
        >
          Explore Exams
        </motion.h1>
        <div className="border grid lg:grid-cols-6 bg-none md:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-5 sm:gap-4 gap-3">
          {loading ? (
            "Loading..."
          ) : (
            <>
              {allExamList.map((exam, index) => {
                return (
                  <Link href={`exams/${exam.id}`} key={index}>
                    <motion.div
                      initial="hidden"
                      animate={controls}
                      variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 50 },
                      }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border-2 flex flex-col items-center px-2 py-4 gap-x-4 gap-y-1 shadow rounded-xl  hover:shadow-lg hover:border-rose-700 dark:hover:bg-neutral-950 hover:text-rose-700"
                    >
                      <h1 className="border text-lg text-center font-extrabold">
                        {exam?.attributes?.exam_name}
                      </h1>
                      <p
                        title={exam?.attributes?.exam_state}
                        className="text-gray-500 lg:w-[100px] md:w-fit w-fit truncate ... text-sm text-center dark:text-white border"
                      >
                        {exam?.attributes?.exam_state}
                      </p>
                    </motion.div>
                  </Link>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ExploreSection;
