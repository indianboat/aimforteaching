import Link from "next/link";
import React from "react";

const Subjects = ({ examName }) => {

  const subjectList = [
    "Child Pedagogy",
    "EVS Pedagogy",
    "Maths Pedagogy",
    "English Pedagogy",
    "Hindi Pedagogy",
    "Science Pedagogy",
    "Social Science Pedagogy",
    "Educational Psychology",
    "Hindi Grammer",
    "English Grammer",
    "Maths",
    "General Knowledge",
    "General Awareness",
    "Science",
    "Social Science"
  ]

  return (
    <>
      <div className="border flex flex-col">
        <p className="text-xl font-bold">Subjects</p>
        <div className="mt-6 border">
          <ul className="border grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 text-center place-items-center">

            {
              subjectList.map((val, index)=>{
                return <li key={index} className="flex border w-full"><Link className="border w-full bg-slate-100 hover:bg-slate-300 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-900 p-3 rounded-xl" href={"/exams"}>{val}</Link></li>
              })
            }
              
          </ul>
        </div>
      </div>
    </>
  );
};

export default Subjects;