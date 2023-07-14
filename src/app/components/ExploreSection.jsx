"use client";

import Link from "next/link";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ExploreSection = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    triggerOnce: true  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const exams = [
    {
      examName: "CTET",
      examState: "Delhi",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/ctet",
      delay:0
    },
    {
      examName: "UPTET",
      examState: "Uttar Pradesh",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/uptet",
      delay:0.2
    },
    {
      examName: "Bihar TET",
      examState: "Bihar",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/bihartet",
      delay:0.4
    },
    {
      examName: "HTET",
      examState: "Haryana",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/htet",
      delay:0.6
    },
    {
      examName: "REET",
      examState: "Rajasthan",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/ctet",
      delay:0.8
    },
    {
      examName: "TNTET",
      examState: "Tamil Nadu",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/tntet",
      delay:1.0
    },
    {
      examName: "HP TET",
      examState: "Himachal Pradesh",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/hptet",
      delay:1.2
    },
    {
      examName: "TS TET",
      examState: "Telangana",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/tstet",
      delay:1.4
    },
    {
      examName: "UTET",
      examState: "Uttarakhand",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/utet",
      delay:1.6
    },
    {
      examName: "PSTET",
      examState: "Punjab",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/pstet",
      delay:1.8
    },
    {
      examName: "T TET",
      examState: "Tripura",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/ttet",
      delay:2.0
    },
    {
      examName: "CG TET",
      examState: "Chhattisgarh",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/cgtet",
      delay:2.2
    },
    {
      examName: "MPTET",
      examState: "Madhya Pradesh",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/mptet",
      delay:2.4
    },
    {
      examName: "KARTET",
      examState: "Karnataka",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/kartet",
      delay:2.6
    },
    {
      examName: "OSSTET",
      examState: "Odisha",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/kartet",
      delay:2.8
    },
    {
      examName: "GTET",
      examState: "Goa",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/gtet",
      delay:3.0
    },
  ];

  return (
    <>
      <div className="border w-full">
      <motion.h1 
        initial="hidden"
        animate={controls}
        variants={{
          visible: { x: "0%"},
          hidden: { x: "-300%" },
        }}
        transition={{ type:"spring", duration: 1, bounce:0.3}}
        className="lg:text-4xl md:text-3xl sm:text-2xl inline-flex text-2xl border lg:text-left md:text-left sm:text-center text-center font-extrabold text-neutral-900 dark:text-white mb-12">
          Explore Exams
        </motion.h1>
        <div className="border grid lg:grid-cols-6 bg-none md:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-5 sm:gap-4 gap-3">
          {
            exams.map((exam)=>{
              return (
                <Link ref={ref} href={exam.redirectUrl} key={exam.examName}>
                <motion.div
                initial="hidden"
                animate={controls}
                variants={{
                  visible: { opacity: 1, y: 0},
                  hidden: { opacity: 0, y: 50 },
                }}
                transition={{ duration: 0.6, delay:exam.delay }}
                className="border-2 flex flex-col items-center px-2 py-4 gap-x-4 gap-y-1 shadow rounded-xl  hover:shadow-lg hover:border-rose-700 dark:hover:bg-neutral-950 hover:text-rose-700">
                <h1 className="border text-lg text-center font-extrabold">{exam.examName}</h1>
                  <p title={exam.examState} className="text-gray-500 lg:w-[100px] md:w-fit w-fit truncate ... text-sm text-center dark:text-white border">{exam.examState}
                  </p>             
                </motion.div>
              </Link>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default ExploreSection;
