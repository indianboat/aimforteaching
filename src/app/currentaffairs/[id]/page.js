"use client";

import Breadcrumb from "@/app/components/Breadcrum";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const CurrentAffairs = () => {
  const { id } = useParams();

  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Current Affairs", path: "/currentaffairs" },
    { label: id, path: `/currentaffairs/${id}` },
  ];

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getCurrentAffairs() {
      setLoading(true);
      const getCurrentAffairs = await fetch(
        `https://aimforteaching-backend.onrender.com/api/current-affairs/${id}`,
        { cache: "no-cache" }
      );
      const ca = await getCurrentAffairs.json();
      setLoading(false);

      const htmlContainerCurrentAffairs = document.getElementById(
        "htmlContainerCurrentAffairs"
      );
      const htmlContainerDate = document.getElementById("htmlContainerDate");

      if (loading) {
        htmlContainerCurrentAffairs.innerHTML = "Loading...";
        htmlContainerDate.innerHTML = "Loading...";
      } else {
        htmlContainerCurrentAffairs.innerHTML =
          ca?.data?.attributes.current_affairs_list;
        htmlContainerDate.innerHTML = new Date(
          ca?.data?.attributes.createdAt
        ).toDateString();
      }
    }
    getCurrentAffairs();
  }, []);

  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto my-6 border p-4">
        <div className="border ">
          <Breadcrumb links={breadcrumbLinks} />
        </div>
        <div className="border mt-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold flex">Current Affairs</h2>
        </div>
        <div
          className="border flex mt-4 font-medium text-neutral-600 dark:text-neutral-300"
          id="htmlContainerDate"
        ></div>
        <div className="border mt-2">
          <div id="htmlContainerCurrentAffairs"></div>
        </div>
      </div>
    </>
  );
};

export default CurrentAffairs;
