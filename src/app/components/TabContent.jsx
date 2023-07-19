"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const examTypes = [
  {
    examName: "CTET",
    examState: "Delhi",
    redirectUrl: "/exams/ctet",
  },
  {
    examName: "UPTET",
    examState: "Uttar Pradesh",
    redirectUrl: "/exams/uptet",
  },
  {
    examName: "Bihar TET",
    examState: "Bihar",
    redirectUrl: "/exams/bihartet",
  },
  {
    examName: "HTET",
    examState: "Haryana",
    redirectUrl: "/exams/htet",
  },
  {
    examName: "REET",
    examState: "Rajasthan",
    redirectUrl: "/exams/ctet",
  },
  {
    examName: "TNTET",
    examState: "Tamil Nadu",
    redirectUrl: "/exams/tntet",
  },
  {
    examName: "HP TET",
    examState: "Himachal Pradesh",
    redirectUrl: "/exams/hptet",
  },
  {
    examName: "TS TET",
    examState: "Telangana",
    redirectUrl: "/exams/tstet",
  },
  {
    examName: "UTET",
    examState: "Uttarakhand",
    redirectUrl: "/exams/utet",
  },
  {
    examName: "PSTET",
    examState: "Punjab",
    redirectUrl: "/exams/pstet",
  },
  {
    examName: "SUPER TET",
    examState: "Uttar Pradesh",
    redirectUrl: "/exams/supertet",
  },
  {
    examName: "T TET",
    examState: "Tripura",
    redirectUrl: "/exams/ttet",
  },
  {
    examName: "CG TET",
    examState: "Chhattisgarh",
    redirectUrl: "/exams/cgtet",
  },
  {
    examName: "MPTET",
    examState: "Madhya Pradesh",
    redirectUrl: "/exams/mptet",
  },
  {
    examName: "KARTET",
    examState: "Karnataka",
    redirectUrl: "/exams/kartet",
  },
  {
    examName: "OSSTET",
    examState: "Odisha",
    redirectUrl: "/exams/kartet",
  },
  {
    examName: "GTET",
    examState: "Goa",
    redirectUrl: "/exams/gtet",
  },
];

const TabContent = ({ activeTab }) => {
  return (
    <motion.div
      layout
      key={activeTab}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.3 }}
      className="border px-4 py-3 rounded-md shadow-md h-full"
    >
      {activeTab === 1 && (
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
          {examTypes.map((exam) => {
            return (
              <Link key={exam.examName} className="border hover:bg-slate-100 dark:hover:bg-neutral-950 shadow hover:shadow-md flex flex-col px-4 py-3 h-full w-full rounded-lg text-center justify-center items-center" href={exam.redirectUrl}>
                  <p className="text-md font-semibold">{exam.examName}</p>
                  <p className="text-sm text-gray-500 dark:text-neutral-300">{exam.examState}</p>
              </Link>
            );
          })}
        </div>
      )}
      {activeTab === 2 && <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
      <Link className="border hover:bg-slate-100 dark:hover:bg-neutral-950 shadow hover:shadow-md flex flex-col px-4 py-3 h-full w-full rounded-lg text-center justify-center items-center" href="/">
                  <p className="text-md font-semibold">KVS</p>
                  <p className="text-sm text-gray-500 dark:text-neutral-300">Govt of India</p>
              </Link>
      </div> }
      {activeTab === 3 && <p>Click here</p>}
    </motion.div>
  );
};

export default TabContent;
