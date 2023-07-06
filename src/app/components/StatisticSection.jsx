import Counter from "./StatCounter";

const StatisticSection = () => {

  return (
    <>
      <div className="border w-full">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl border lg:text-left md:text-left sm:text-center text-center font-extrabold text-orange-700 dark:text-white mb-12">Our Material Records</h1>
        <div className="border grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 sm:gap-7 gap-6">
            <div className="border px-6 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl">
              <h1 className="border text-center text-lg font-semibold">Recorded Live Classes</h1>
              <div className="border flex justify-center mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center">
              <Counter number={455}/> +
              </div>
            </div>
            <div className="border px-6 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl">
              <h1 className="border text-center text-lg font-semibold">Mock Tests</h1>
              <div className="border flex justify-center mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center">
              <Counter number={150}/> +
              </div>
            </div>
            <div className="border px-6 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl">
              <h1 className="border text-center text-lg font-semibold">Exam Related Videos</h1>
              <div className="border flex justify-center mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center">
              <Counter number={70}/> +
              </div>
            </div>
            <div className="border px-6 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl">
              <h1 className="border text-center text-lg font-semibold">Practice Material</h1>
              <div className="border flex justify-center mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center">
              <Counter number={350}/> +
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default StatisticSection;
