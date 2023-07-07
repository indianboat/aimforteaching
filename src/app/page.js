import ExamUpdatesSection from "./components/ExamUpdatesSection";
import ExploreSection from "./components/ExploreSection";
import GetStartedSection from "./components/GetStartedSection";
import StatisticSection from "./components/StatisticSection";

export default function Home() {
  return (
    <>


      <div className="border w-full pb-8 bg-[url(/bgs/bg-2.png)] bg-cover bg-top">
        <div className="container flex md:w-10/12 sm:w-11/12 w-full md:flex-row sm:flex-col flex-col mx-auto md:mt-24 sm:mt-28 mt-24 border lg:px-4 md:px-3 sm:px-2 px-2 py-4 gap-y-8">
          <GetStartedSection />
        </div>
      </div>


      <div className="border w-full mt-20 py-8 bg-orange-50 dark:bg-neutral-950 z-0 backdrop-blur">
        <div className="container md:w-10/12 sm:w-11/12 mx-auto flex w-full border lg:px-4 md:px-3 sm:px-2 px-2 py-4 backdrop-blur">
          <ExamUpdatesSection />
        </div>
      </div>



      <div className="container md:w-10/12 sm:w-11/12 mx-auto mt-20 flex w-full border lg:px-4 md:px-3 sm:px-2 px-2 py-4">
        <StatisticSection />
      </div>


      <div className="explore-section border w-full mt-20 py-8 bg-none dark:bg-neutral-950">
        <div className="container backdrop-blur-sm relative md:w-10/12 sm:w-11/12 mx-auto my-10 flex w-full border lg:px-4 md:px-3 sm:px-2 px-2 py-4">
          <ExploreSection />
        </div>
      </div>


    </>
  );
}
