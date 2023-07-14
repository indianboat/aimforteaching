"use client";

import { AiOutlineNotification } from "react-icons/ai";
import { BiBookReader, BiSpreadsheet } from "react-icons/bi";
import { MdLightbulbOutline } from "react-icons/md";
import { PiFiles } from "react-icons/pi";
import { LiaIdCardSolid } from "react-icons/lia";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ExamUpdatesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold:0.2
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const cards = [
    {
      index: 0,
      icon: (
        <AiOutlineNotification
          size={48}
          className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"
        />
      ),
      heading: "Comprehensive Exam Notifications",
      desc: "Get instant access to accurate and up-to-date notifications about upcoming government teacher exams across various states and organizations.",
      delay: 0,
    },
    {
      index: 1,
      icon: (
        <BiBookReader
          size={48}
          className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"
        />
      ),
      heading: "Exam Syllabus & Pattern Discussion",
      desc: "Access detailed information on the syllabus and exam pattern of government teacher exams.",
      delay: 0.3,
    },
    {
      index: 2,
      icon: (
        <BiSpreadsheet
          size={48}
          className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"
        />
      ),
      heading: "Study Materials & Resources",
      desc: "Explore a wide range of study materials, including textbooks, sample papers, previous year question papers, and recommended reference books.",
      delay: 0.6,
    },
    {
      index: 3,
      icon: (
        <MdLightbulbOutline
          size={48}
          className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"
        />
      ),
      heading: "Preparation Tips & Strategies",
      desc: "Discover expert tips, tricks, and strategies shared by successful candidates and experienced educators.",
      delay: 0.9,
    },
    {
      index: 4,
      icon: (
        <PiFiles
          size={48}
          className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"
        />
      ),
      heading: "Mock Tests & Practice Papers",
      desc: "Access a vast collection of mock tests and practice papers designed specifically for government teacher exams.",
      delay: 1.2,
    },
    {
      index: 5,
      icon: (
        <LiaIdCardSolid
          size={48}
          className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"
        />
      ),
      heading: "Result & Admit Cards Updates",
      desc: "Stay updated with the latest result announcements and admid cards available for government teacher exams.",
      delay: 1.5,
    },
  ];

  return (
    <>
      <div ref={ref} className="border w-full">
        <motion.h1 
        initial="hidden"
        animate={controls}
        variants={{
          visible: { x: "0%"},
          hidden: { x: "-300%" },
        }}
        transition={{ type:"spring", duration: 1, bounce:0.3}}
        className="lg:text-4xl inline-flex md:text-3xl sm:text-2xl text-2xl border lg:text-left md:text-left sm:text-center text-center font-extrabold text-orange-700 dark:text-white">
          Everything your needs about exam updates
        </motion.h1>
        <div  className="mt-12 border grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 sm:gap-7 gap-6">
          {cards?.map((card) => {
            return (
              <motion.div
              ref={ref}
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 0.6, delay:card.delay}}
                className="border p-8 rounded-3xl bg-white/75 dark:bg-neutral-900 shadow-md hover:shadow-xl"
                key={card.index}
              >
                <div className="border flex justify-center">{card.icon}</div>
                <h1 className="border mt-6 text-xl font-semibold text-center">
                  {card.heading}
                </h1>
                <p className="border mt-3 text-justify text-gray-800 dark:text-gray-200 transition-all duration-75">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExamUpdatesSection;
