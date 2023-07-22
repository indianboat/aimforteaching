"use client";

import { useState } from "react";
import TabContent from "../components/TabContent";
import BreadcrumSection from "../components/Breadcrum";
import { usePathname } from "next/navigation";

const tabs = ["All State TET", "Central Exams", "B.Ed Entrance"];

const ExploreExams = () => {
  const [activeTab, setActiveTab] = useState(1);

  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Exams", path: usePathname() }
  ];

  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto my-6 border p-4">
        <div className="border">
          <div className="border mb-4 px-4">
            <BreadcrumSection links={breadcrumbLinks}/>
          </div>
          <h1 className="text-2xl font-bold border px-4">Explore Exams</h1>
          <div className="border flex lg:flex-row md:flex-row sm:flex-col flex-col mt-6">
          <div className="border lg:w-1/5 md:w-2/5 sm:w-full w-full h-full p-3 gap-6 grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-3 grid-cols-2 gap-y-3 flex-col">
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
              <TabContent activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreExams;
