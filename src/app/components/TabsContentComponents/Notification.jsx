"use client";

import { useEffect, useState } from "react";

const Notification = ({ examDetails }) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let notification = document.getElementById("notification");

    if(examDetails.length <= 0){
      setLoading(true);
      notification.innerHTML = "Loading..."
    }
    else{
      setLoading(false);
      if(examDetails?.attributes.exam_notification == null){
        notification.innerHTML = "No Notification Yet..."
      }
      else{
        notification.innerHTML = examDetails?.attributes.exam_notification
      }
      
    }
  }, [examDetails]);

  return (
    <>
      <div className="border flex flex-col">
        <p className="text-xl font-bold">{examDetails?.attributes?.exam_name} Notification 2023</p>
        <p className="italic mt-2">
          {
            loading ? "Loading..." : `${examDetails?.attributes?.exam_name} or ${examDetails?.attributes?.exam_full_form}` 
          }
        </p>
        <p className="mt-2 text-justify tracking-normal leading-relaxed" id="notification"></p>
      </div>
    </>
  );
};

export default Notification;
