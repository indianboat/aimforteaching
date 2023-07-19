import Link from "next/link";

const Notification = () => {
  return (
    <>
      <div className="border flex flex-col">
        <p className="text-xl font-bold">CTET Notification 2023 Out</p>
        <p className="italic mt-2">CTET or Central Teacher Eligibility Test</p>
        <p className="mt-2 text-justify tracking-normal leading-relaxed">
          It is a national-level examination conducted by CBSE to determine the
          eligibility of candidates for teaching positions in schools across
          India. It is held twice a year, usually in the months of July and
          December. The CTET Notification 2023 has been released by <strong>CENTRAL BOARD OF SECONDARY EDUCATION</strong> for July 2023 along with complete details on its
          official website <Link href={"https://ctet.nic.in/"} target="_blank" className="text-blue-700 dark:text-orange-600">www.ctet.nic.in.</Link> Candidates who applied for CTET 2023
          July Exam to begin their teaching career have to appear for the
          offline exam scheduled for 20th August 2023. For complete details
          regarding the CTET 2023 July Notification, go through the article.
        </p>
      </div>
    </>
  );
};

export default Notification;
