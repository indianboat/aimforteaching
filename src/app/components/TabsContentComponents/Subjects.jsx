"use client";
import React, { useEffect, useState } from "react";

const Subjects = ({ examDetails }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (examDetails.length <= 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [examDetails]);

  return (
    <>
      <div className="border flex flex-col">
        <p className="text-xl font-bold">
          {examDetails?.attributes.exam_name} Subjects
        </p>
        <div className="mt-6 border">
          {loading ? (
            "Loading..."
          ) : examDetails?.attributes?.exam_subjects == null ? (
            "No Subject Available"
          ) : (
            <>
              {" "}
              <ul className="border grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 text-center place-items-center">
                {examDetails?.attributes?.exam_subjects.map((val, index) => {
                  return (
                    <li
                      key={index}
                      className="border w-full bg-slate-100 hover:bg-slate-300 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-900 p-3 rounded-xl"
                    >
                      {val}
                    </li>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Subjects;
