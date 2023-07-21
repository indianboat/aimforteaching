"use client";

import Link from "next/link";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const VideoSection = () => {
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
      <div ref={ref} className="border w-full h-full">
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
          Latest Youtube Classes
        </motion.h1>
        <div className="border h-auto grid justify-between lg:grid-cols-2 bg-none md:grid-cols-1 sm:grid-cols-1 grid-cols-1 lg:gap-6 md:gap-5 sm:gap-4 gap-3">
          <motion.iframe
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl w-full"
            width="500"
            height="370"
            src="https://www.youtube-nocookie.com/embed/oV1y6lVjE_4"
            title="APS (AWES)-2022 Full Notification | Eligibility, Age, fee, Important Dates | Aim for Teaching"
          ></motion.iframe>
          <motion.iframe
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl w-full"
            width="500"
            height="370"
            src="https://www.youtube-nocookie.com/embed/_q4lRD2-E_g"
            title="Rajasthan 2022 RPSC School Lecturer Recruitment, Exam Date, Syllabus, Fee Age 2022"
          ></motion.iframe>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
