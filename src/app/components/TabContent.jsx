"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";


const variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

const TabContent = ({ activeTab }) => {

  const [allTetExamList, setAllTetExamList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch("https://aimforteaching-backend.onrender.com/api/exams");
      const data = await response.json();
      setAllTetExamList(data.data);
      setLoading(false);
    }
    fetchData();
  }, []);

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
      {activeTab === 1 &&
        (loading ? (
          <div className="p-2">Loading...</div>
        ) : allTetExamList.length <= 0 ? (
          <div className="p-2">Exam Not Found...</div>
        ) : (
          <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
            {allTetExamList.map((exam) => {
              return (
                <Link
                  key={exam?.attributes?.exam_name}
                  className="border hover:bg-slate-100 dark:hover:bg-neutral-950 shadow hover:shadow-md flex flex-col px-4 py-3 h-full w-full rounded-lg text-center justify-center items-center"
                  href={`exams/${exam.id}`}
                >
                  <p className="text-md font-semibold">
                    {exam?.attributes?.exam_name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-neutral-300">
                    {exam?.attributes?.exam_state}
                  </p>
                </Link>
              );
            })}
          </div>
        ))}
      {activeTab === 2 && (
        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
          <Link
            className="border hover:bg-slate-100 dark:hover:bg-neutral-950 shadow hover:shadow-md flex flex-col px-4 py-3 h-full w-full rounded-lg text-center justify-center items-center"
            href="/"
          >
            <p className="text-md font-semibold">KVS</p>
            <p className="text-sm text-gray-500 dark:text-neutral-300">
              Govt of India
            </p>
          </Link>
        </div>
      )}
      {activeTab === 3 && <p>Click here</p>}
    </motion.div>
  );
};

export default TabContent;
