"use client";

import Link from "next/link";
import { useState } from "react";

const Notification = ({ examDetails }) => {

  const [loading, setLoading] = useState(false);

  // if()

  console.log(examDetails.attributes);

  return (
    <>
      <div className="border flex flex-col">
        <p className="text-xl font-bold">Notification 2023 Out</p>
        <p className="italic mt-2">CTET or Central Teacher Eligibility Test</p>
        <p className="mt-2 text-justify tracking-normal leading-relaxed">
        
        </p>
      </div>
    </>
  );
};

export default Notification;
