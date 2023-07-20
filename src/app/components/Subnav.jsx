import Link from "next/link";
import React from "react";

const Subnav = () => {
  const navs = [
    "Current Affairs",
    "Results",
    "Admit Cards",
    "Daily Quizzes",
    "Free Notes Pdf"
  ];

  return (
    <>
      <nav className="w-full mt-[76px] mb-4 border py-3 bg-[#F5F7F8] dark:bg-neutral-800 lg:flex md:flex sm:hidden hidden">
        <div className="container md:w-11/12 sm:w-full w-full mx-auto lg:px-4 md:px-3 sm:px-2 px-2 py-2 border flex justify-between">
          <div className="border text-center w-full gap-8 grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 grid-cols-2">
            {navs.map((val, index) => {
              return (
                <div className="flex w-full" key={index}>
                  <Link href="/" className="border w-full px-2 py-2 rounded-full font-semibold hover:bg-[#F4194B] hover:text-white dark:hover:bg-[#F75C37]">
                    {val}
                  </Link>
                </div>
              );
            })}
            <div className="flex w-full">
            <Link href="/" className="border text-blue-700 dark:text-orange-600 dark:hover:text-white border-rose-700 w-full px-2 py-2 rounded-full font-semibold hover:bg-[#F4194B] hover:text-white dark:hover:bg-[#F75C37]">
                    Ask Query
                  </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Subnav;
