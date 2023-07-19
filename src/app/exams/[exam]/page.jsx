"use client";

import { useParams } from "next/navigation";
import BreadcrumSection from "@/app/components/Breadcrum";
import { usePathname } from "next/navigation";

const Exam = () => {
  const { exam } = useParams();
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Exams", path: "/exams" },
    { label: exam, path: exam },
  ];

  return (
    <>
    <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto md:my-24 sm:my-28 my-24 border p-4">
      <div className="border">
        <div className="border mb-4 px-4">
          <BreadcrumSection links={breadcrumbLinks}/>
        </div>
        <h1 className="text-2xl font-bold border px-4">{exam.toUpperCase()} Exam</h1>
        <div className="border px-4 mt-8">
          All about ctet here
        </div>
      </div>
    </div>
  </>
  );
};

export default Exam;
