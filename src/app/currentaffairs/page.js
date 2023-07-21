import React from "react";
import getCurrentAffairs from "../utils/getCurrentAffairs";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrum";

const page = async () => {
  const current_affairs = await getCurrentAffairs();

  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Current Affairs", path: "/currentaffairs" },
  ];

  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto lg:my-6 md:mt-6 sm:mt-28 mt-24 mb-10 border p-4">
        <div className="border flex items-center">
          <Breadcrumb links={breadcrumbLinks} />
        </div>
        <div className="border mt-4 flex items-center">
          <h2 className="text-2xl font-bold flex">Current Affairs</h2>
        </div>
        <div className="border mt-4 overflow-auto h-auto rounded-lg dark:bg-zinc-900 shadow-md p-4">
          {current_affairs.data.length <= 0
            ? <div className="text-gray-500 dark:text-gray-200">No Current Affairs</div>
            : current_affairs.data?.map((val, index) => {
                return (
                  <Link
                    key={index}
                    className="flex w-fit border hover:text-blue-600"
                    href={`/currentaffairs/${new Date(val.attributes.createdAt)
                      .toLocaleDateString()
                      .replaceAll("/", "-")}`}
                  >
                    {new Date(val.attributes.createdAt).toDateString()}
                  </Link>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default page;
