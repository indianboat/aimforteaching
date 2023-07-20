import Link from "next/link";
import React from "react";

const Subjects = ({ examName }) => {
  return (
    <>
      <div className="border flex flex-col">
        <p className="text-xl font-bold">Subjects</p>
        <div className="mt-6 border">
          <ul className="border grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 text-center place-items-center">
              <li className="flex border w-full"><Link className="border w-full bg-slate-100 hover:bg-slate-300 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-900 p-3 rounded-xl" href={"/exams"}>Child Pedagogy</Link></li>
              <li className="flex border w-full"><Link className="border w-full bg-slate-100 hover:bg-slate-300 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-900 p-3 rounded-xl" href={"/exams"}>EVS Pedagogy</Link></li>
              <li className="flex border w-full"><Link className="border w-full bg-slate-100 hover:bg-slate-300 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-900 p-3 rounded-xl" href={"/exams"}>Maths Pedagogy</Link></li>
              <li className="flex border w-full"><Link className="border w-full bg-slate-100 hover:bg-slate-300 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-900 p-3 rounded-xl" href={"/exams"}>English Pedagogy</Link></li>
              <li className="flex border w-full"><Link className="border w-full bg-slate-100 hover:bg-slate-300 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-900 p-3 rounded-xl" href={"/exams"}>Hindi Pedagogy</Link></li>
              <li className="flex border w-full"><Link className="border w-full bg-slate-100 hover:bg-slate-300 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-900 p-3 rounded-xl" href={"/exams"}>Science Pedagogy</Link></li>
              <li className="flex border w-full"><Link className="border w-full bg-slate-100 hover:bg-slate-300 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-900 p-3 rounded-xl" href={"/exams"}>S.S.T Pedagogy</Link></li>
              <li className="flex border w-full"><Link className="border w-full bg-slate-100 hover:bg-slate-300 shadow-md dark:bg-zinc-800 dark:hover:bg-zinc-900 p-3 rounded-xl" href={"/exams"}>Educational Psychology</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Subjects;