import Breadcrumb from "../components/Breadcrum";

const UpcomingExams = () => {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Upcoming Exams", path: "/upcomingexams" },
  ];

  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto my-6 border p-4">
        <div className="border flex items-center">
          <Breadcrumb links={breadcrumbLinks} />
        </div>
        <div className="border mt-4 flex items-center">
          <h2 className="text-2xl font-bold flex">Upcoming Exams</h2>
        </div>
        <div className="border mt-4 overflow-auto h-auto rounded-lg dark:bg-zinc-900 shadow-md p-4">
          No Upcoming Exam Found
        </div>
      </div>
    </>
  );
};

export default UpcomingExams;
