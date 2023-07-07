import Image from "next/image";
import Link from "next/link";
import React from "react";

const ExploreSection = () => {
  const exams = [
    {
      examName: "CTET",
      examState: "Delhi",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/ctet",
    },
    {
      examName: "UPTET",
      examState: "Uttar Pradesh",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/uptet",
    },
    {
      examName: "Bihar TET",
      examState: "Bihar",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/bihartet",
    },
    {
      examName: "HTET",
      examState: "Haryana",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/htet",
    },
    {
      examName: "REET",
      examState: "Rajasthan",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/ctet",
    },
    {
      examName: "TNTET",
      examState: "Tamil Nadu",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/tntet",
    },
    {
      examName: "HP TET",
      examState: "Himachal Pradesh",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/hptet",
    },
    {
      examName: "TS TET",
      examState: "Telangana",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/tstet",
    },
    {
      examName: "UTET",
      examState: "Uttarakhand",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/utet",
    },
    {
      examName: "PSTET",
      examState: "Punjab",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/pstet",
    },
    {
      examName: "Tripura TET",
      examState: "Tripura",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/ttet",
    },
    {
      examName: "CG TET",
      examState: "Chhattisgarh",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/cgtet",
    },
    {
      examName: "MPTET",
      examState: "Madhya Pradesh",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/mptet",
    },
    {
      examName: "KARTET",
      examState: "Karnataka",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/kartet",
    },
    {
      examName: "OSSTET",
      examState: "Odisha",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/kartet",
    },
    {
      examName: "GTET",
      examState: "Goa",
      logoUrl: "/logos/ctet.png",
      redirectUrl: "/exams/gtet",
    },
  ];

  return (
    <>
      <div className="border w-full">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl border lg:text-left md:text-left sm:text-center text-center font-extrabold text-neutral-900 dark:text-white mb-12">
          Explore Exams
        </h1>
        <div className="border grid lg:grid-cols-6 bg-none md:grid-cols-3 sm:grid-cols-3 grid-cols-2 lg:gap-6 md:gap-5 sm:gap-4 gap-3">
          {
            exams.map((exam)=>{
              return (
                <Link href={exam.redirectUrl} key={exam.examName}>
                <div className="border flex flex-col items-center px-2 py-4 gap-x-4 shadow rounded-xl  hover:shadow-lg hover:border-rose-700 dark:hover:bg-neutral-950 hover:text-rose-700">
                  <h1 className="border text-xl text-center font-extrabold">{exam.examName}</h1>
                  <p className="text-gray-500 text-center dark:text-white border">{exam.examState}</p>
                </div>
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
