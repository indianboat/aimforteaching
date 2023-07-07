"use client";

import { useParams } from "next/navigation";

const Exam = () => {
  const { exam } = useParams();

  console.log(exam);

  return (
    <>
      <div className="container md:w-10/12 sm:w-11/12 mx-auto md:mt-24 sm:mt-28 mt-24 flex w-full border lg:px-4 md:px-3 sm:px-2 px-2 py-4">
        {exam}
      </div>
    </>
  );
};

export default Exam;
