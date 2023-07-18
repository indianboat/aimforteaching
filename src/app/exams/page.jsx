"use client";

import { useState } from "react";
import TabContent from "../components/TabContent";

const tabs = ["All State TET", "Central Exams", "B.Ed Entrance"];

const ExploreExams = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto md:my-24 sm:my-28 my-24 border p-4">
        <div className="border">
          <h1 className="text-2xl font-bold border">Explore Exams</h1>
          <div className="border flex lg:flex-row md:flex-row sm:flex-col flex-col mt-6">
            <div className="border lg:w-1/5 md:w-2/5 sm:w-full w-full p-6 flex gap-y-3 flex-col">
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
              {/* <button onClick={() => setActiveTab(1)} className="border px-3 py-2 w-full">All State TET</button> */}
              {/* <button onClick={() => setActiveTab(2)} className="border px-3 py-2 w-full">Central Exams</button> */}
              {/* <button onClick={() => setActiveTab(3)} className="border px-3 py-2 w-full">B.Ed Entrance</button> */}
            </div>
            <div className="border w-full flex gap-y-3 flex-col">
              <TabContent activeTab={activeTab} />
            </div>

            {/* <div className="flex justify-center items-center h-screen">
              <div className="w-80">
                <div className="flex space-x-4">
                  {tabs.map((tab, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index + 1)}
                      className={`${
                        activeTab === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-black"
                      } px-4 py-2 rounded-md`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <TabContent activeTab={activeTab} />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreExams;
