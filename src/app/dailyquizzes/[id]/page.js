"use client";

import Breadcrumb from "@/app/components/Breadcrum";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DailyQuiz = () => {
  const { id } = useParams();

  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Daily Quizzes", path: "/dailyquizzes" },
    { label: id, path: `/dailyquizzes/${id}` },
  ];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getDailyQuizs() {
      setLoading(true);
      const getAllQuiz = await fetch(
        `https://aimforteaching-backend.onrender.com/api/daily-quizzes/${id}`,
        { cache: "no-cache" }
      );
      const dq = await getAllQuiz.json();
      setLoading(false);

      const htmlContainerDailyQuizzes = document.getElementById(
        "htmlContainerDailyQuizzes"
      );
      const htmlContainerDate = document.getElementById("htmlContainerDate");

      if (loading) {
        htmlContainerDailyQuizzes.innerHTML = "Loading...";
        htmlContainerDate.innerHTML = "Loading...";
      } else {
        htmlContainerDailyQuizzes.innerHTML = dq?.data.attributes.quiz;
        htmlContainerDate.innerHTML = new Date(
          dq?.data.attributes.createdAt
        ).toDateString();
      }
    }
    getDailyQuizs();
  }, []);

  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto my-6 border p-4">
        <div className="border ">
          <Breadcrumb links={breadcrumbLinks} />
        </div>
        <div className="border mt-4 flex">
          <h2 className="text-2xl font-bold flex">Daily Quizzes</h2>
        </div>
        <div
          className="border flex mt-4 font-medium text-neutral-600 dark:text-neutral-300"
          id="htmlContainerDate"
        ></div>
        <div className="border mt-2">
          <div id="htmlContainerDailyQuizzes"></div>
        </div>
      </div>
    </>
  );
};

export default DailyQuiz;
