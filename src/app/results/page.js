import Breadcrumb from "../components/Breadcrum";
import ResultComponent from "../components/ResultComponent";
import getResults from "../utils/getResults";

const Results = async () => {
  const breadcrumbLinks = [
    { label: "Home", path: "/" },
    { label: "Result", path: "/results" },
  ];

  let results = await getResults();
  return (
    <>
      <div className="container flex flex-col md:w-11/12 sm:w-full w-full mx-auto lg:my-6 md:mt-6 sm:mt-28 mt-24 mb-10 border p-4">
        <div className="border flex items-center">
          <Breadcrumb links={breadcrumbLinks} />
        </div>
        <div className="border mt-4 flex items-center">
          <h2 className="text-2xl font-bold flex">Results</h2>
        </div>
        <div className="border mt-4 overflow-auto h-auto rounded-lg dark:bg-zinc-900 shadow-md p-4">
          {results.data.length <= 0 ? (
            <div className="text-gray-500 dark:text-gray-200">No Result Found</div>
          ) : (
            <ResultComponent results={results.data} />
          )}
        </div>
      </div>
    </>
  );
};

export default Results;
