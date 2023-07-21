import Link from "next/link";
import React from "react";

const Subnav = () => {
  const navs = [
    {
      name: "Upcoming Exams",
      link: "/",
    },
    {
      name: "Current Affairs",
      link: "/currentaffairs",
    },
    {
      name: "Results",
      link: "/results",
    },
    {
      name: "Admit Cards",
      link: "/",
    },
    {
      name: "Daily Quizzes",
      link: "/",
    },
    {
      name: "Free Notes Pdf",
      link: "/",
    },
  ];

  return (
    <>
      <nav className="w-full mt-[76px] border py-3 bg-[#F5F7F8] dark:bg-neutral-800 lg:flex md:flex sm:hidden hidden">
        <div className="container md:w-11/12 sm:w-full w-full mx-auto lg:px-4 md:px-3 sm:px-2 px-2 py-2 border flex justify-between">
          <div className="border text-center w-full flex flex-row flex-wrap gap-2 justify-normal">
            {navs.map((val, index) => {
              return (
                <Link
                  href={val.link}
                  key={index}
                  className="border line-clamp-1 bg-white dark:bg-neutral-950 overflow-hidden text-sm px-4 py-2 rounded-full transition-colors font-medium hover:bg-[#F4194B] hover:text-white dark:hover:bg-[#F75C37]"
                >
                  {val.name}
                </Link>
              );
            })}

            <Link
              href="/"
              className="border text-sm bg-white dark:bg-neutral-950 transition-colors dark:hover:text-white px-4 py-2 rounded-full font-medium hover:bg-[#F4194B] hover:text-white dark:hover:bg-[#F75C37]"
            >
              Ask Query
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Subnav;
