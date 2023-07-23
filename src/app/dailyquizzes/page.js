import Link from "next/link";
import Breadcrumb from "../components/Breadcrum";
import getDailyQuizzes from "../utils/getDailyQuizzes";

const DailyQuizzes = async () => {

  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Daily Quizzes", path: "/dailyquizzes" },
  ];

  const daily_quizzes = await getDailyQuizzes();


  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto my-6 border p-4">
      <div className="border flex items-center">
          <Breadcrumb links={breadcrumbLinks} />
        </div>
        <div className="border mt-4 flex items-center">
          <h2 className="text-2xl font-bold flex">Daily Quizzes</h2>
        </div>
        <div className="border mt-4 rounded-lg dark:bg-zinc-900 shadow-md p-4 flex flex-row flex-wrap gap-3">
          {daily_quizzes?.data.length <= 0
            ? <div className="text-gray-500 dark:text-gray-200">No Quizzes</div>
            : daily_quizzes.data?.map((val, index) => {
                return (
                  <Link
                    key={index}
                    className="flex w-fit border hover:text-blue-600 dark:hover:text-orange-600"
                    href={`/dailyquizzes/${val.id}`}
                  >
                    {new Date(val.attributes.createdAt).toDateString()}
                  </Link>
                );
              }).reverse()}
        </div>
      </div>
    </>
  );
};

export default DailyQuizzes;
