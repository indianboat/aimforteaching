"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Subnav = () => {
  const navs = [
    {
      name: "Upcoming Exams",
      link: "/upcomingexams",
      active: usePathname() === "/upcomingexams" ? true : false,
    },
    {
      name: "Current Affairs",
      link: "/currentaffairs",
      active: usePathname() === "/currentaffairs" ? true : false,
    },
    {
      name: "Results",
      link: "/results",
      active: usePathname() === "/results" ? true : false,
    },
    {
      name: "Admit Cards",
      link: "/admitcards",
      active: usePathname() === "/admitcards" ? true : false,
    },
    {
      name: "Daily Quizzes",
      link: "/dailyquizzes",
      active: usePathname() === "/dailyquizzes" ? true : false,
    },
    {
      name: "Subject wise Quizzes",
      link: "/subject-wise-quizzes",
      active: usePathname() === "/subject-wise-quizzes" ? true : false,
    },
    {
      name: "Notes or Tricks",
      link: "/notes-tricks",
      active: usePathname() === "/notes-tricks" ? true : false,
    },
    {
      name: "Videos",
      link: "/videos",
      active: usePathname() === "/videos" ? true : false,
    },
    {
      name: "Ask Query",
      link: "/ask-query",
      active: usePathname() === "/ask-query" ? true : false,
    },
  ];

  return (
    <>
      <nav className="w-full mt-[76px] border py-3 bg-[#F5F7F8] dark:bg-neutral-800 flex">
        <div className="container md:w-11/12 sm:w-full w-full overflow-auto mx-auto lg:px-4 md:px-3 sm:px-2 px-2 py-2 border flex justify-between">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            className="mySwiper w-full border text-center gap-2 flex justify-normal"
          >
            {navs.map((val, index) => {
              return (
                <SwiperSlide className="swiper-slide" key={index}>
                  <Link
                    href={val.link}
                    className={`border flex w-fit ${
                      val.active
                        ? "bg-[#F4194B] dark:bg-[#F75C37] text-white"
                        : "bg-white dark:bg-neutral-950"
                    } overflow-hidden text-sm px-4 py-2 rounded-full transition-colors font-medium hover:bg-[#F4194B] hover:text-white dark:hover:bg-[#F75C37]`}
                  >
                    {val.name}
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </nav>
    </>
  );
};

export default Subnav;
