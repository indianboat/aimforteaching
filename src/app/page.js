import ExamUpdatesSection from "./components/ExamUpdatesSection";
import ExploreSection from "./components/ExploreSection";
import GetStartedSection from "./components/GetStartedSection";
import SocialIcons from "./components/SocialIcons";
import StatisticSection from "./components/StatisticSection";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <>
      <SocialIcons/>
      <div className="border w-full pb-8 bg-[url(/bgs/bg-2.png)] dark:bg-none bg-cover bg-top">
        <div className="container flex md:w-10/12 sm:w-11/12 w-full md:flex-row sm:flex-col flex-col mx-auto my-2 border lg:px-4 md:px-3 sm:px-2 px-2 py-4 gap-y-8">
          <GetStartedSection />
        </div>
      </div>

      <div className="border w-full mt-14 py-8 bg-orange-50 dark:bg-neutral-950 z-0">
        <div className="container relative md:w-10/12 sm:w-11/12 mx-auto my-10 flex w-full border lg:px-4 md:px-3 sm:px-2 px-2 py-4">
          <VideoSection />
        </div>
      </div>

      <div className="border w-full mt-14 py-8">
        <div className="container relative md:w-10/12 sm:w-11/12 mx-auto my-10 flex w-full border lg:px-4 md:px-3 sm:px-2 px-2 py-4">
          <ExploreSection />
        </div>
      </div>


      <div className="border w-full mt-14 py-8 bg-orange-50 dark:bg-neutral-950 z-0">
        <div className="container relative md:w-10/12 sm:w-11/12 mx-auto my-10 flex w-full border lg:px-4 md:px-3 sm:px-2 px-2 py-4">
          <ExamUpdatesSection />
        </div>
      </div>

      <div className="container md:w-10/12 sm:w-11/12 mx-auto my-14 flex w-full border lg:px-4 md:px-3 sm:px-2 px-2 py-4">
        <StatisticSection />
      </div>
      
    </>
  );
}
