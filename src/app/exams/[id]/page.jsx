"use client";

import { useParams } from "next/navigation";
import BreadcrumSection from "@/app/components/Breadcrum";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Notification from "@/app/components/TabsContentComponents/Notification";
import Subjects from "@/app/components/TabsContentComponents/Subjects";

const Exam = () => {

  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(1);
  const [exam, setExam] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function getExams(){
      setLoading(true);
      const res = await fetch(`https://aimforteaching-backend.onrender.com/api/exams/${id}`, {cache:"no-cache"});
      const examData = await res.json();
      setExam(examData.data);
      setLoading(false);
    }

    getExams();

  }, [])

  const tabs = [
    "Notification 2023",
    "Subjects",
    "Syllabus",
    "Notes Pdf",
    "Study Material",
    "Result",
    "Admit Card",
    "Quizzes",
    "Exam Pattern",
    "Previous Year Papers",
    "Exam Tips",
    "FAQ"
  ];

  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Exams", path: "/exams" },
    { label: loading ? "fetching_exam" : `${exam?.attributes?.exam_name.toUpperCase()}`, path: `/exams/${id}` },
  ];

  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto my-6 border p-4">
        <div className="border">
          <div className="border mb-4 px-4">
            <BreadcrumSection links={breadcrumbLinks} />
          </div>
          <h1 className="text-2xl font-bold border px-4">
            {loading ? "Loading" : `${exam?.attributes?.exam_name.toUpperCase()} Exam`}
          </h1>
          <div className="border flex lg:flex-row md:flex-row sm:flex-col flex-col mt-6">
            <div className="border lg:w-1/5 md:w-2/5 sm:w-full w-full h-full p-3 gap-6 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-2 grid-cols-2 gap-y-3 flex-col">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index + 1)}
                  className={`border px-3 py-2 w-full ${
                    activeTab === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-black"
                  } px-4 py-2 rounded-md`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="border w-full flex gap-y-3 flex-col">
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
                {activeTab === 1 && <div className="border"><Notification examDetails={exam}/></div>}
                {activeTab === 2 && <div className="border"><Subjects examDetails={exam}/></div>}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exam;
