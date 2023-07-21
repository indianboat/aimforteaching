"use client";

import Breadcrumb from "@/app/components/Breadcrum";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const CurrentAffairs = () => {

  const [loading, setLoading] = useState(false);
  const { date } = useParams();

  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Current Affairs", path: "/currentaffairs" },
    { label: date, path: `/currentaffairs/${date}` }
  ];

  useEffect(() => {
    async function getCurrentAffairs() {
      setLoading(true);
      const getCurrentAffairs = await fetch(
        "https://aimforteaching-backend.onrender.com/api/current-affairs",
        { cache: "no-cache" }
      );
      const ca = await getCurrentAffairs.json();
      
      const htmlContainerCurrentAffairs = document.getElementById("htmlContainerCurrentAffairs");
      const htmlContainerDate = document.getElementById("htmlContainerDate");

      setLoading(false);

      if(loading){
        htmlContainerCurrentAffairs.innerText = "Loading..."
        htmlContainerDate.innerText = "Loading..."
      }
      else {
        for (let i = 0; i < ca.data.length; i++) {

          const dd = new Date(ca.data[i].attributes.createdAt).getDate();
          const mm = new Date(ca.data[i].attributes.createdAt).getMonth();
          const yyyy = new Date(ca.data[i].attributes.createdAt).getFullYear();
          const element  = `${dd}-${mm+1}-${yyyy}`;
          if(element == date)
          {          
            htmlContainerCurrentAffairs.innerHTML = ca?.data[i]?.attributes?.current_affairs_list;
            htmlContainerDate.innerHTML = element;
          }
        }
      }
    
    }
    getCurrentAffairs();
  }, []);

  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto lg:my-6 md:mt-6 sm:mt-28 mt-24 mb-10 border p-4">
      <div className="border ">
          <Breadcrumb links={breadcrumbLinks}/>
        </div>
        <div className="border mt-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold flex">Current Affairs</h2>
          <div className="flex font-semibold" id="htmlContainerDate"></div>
        </div>

  
        <div className="border mt-4">
          <div id="htmlContainerCurrentAffairs"></div>
        </div>
      </div>
    </>
  );
};

export default CurrentAffairs;
