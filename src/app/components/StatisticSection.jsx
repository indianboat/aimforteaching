const StatisticSection = () => {
  return (
    <>
      <div className="border w-full">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl border lg:text-left md:text-left sm:text-center text-center font-extrabold text-orange-700 dark:text-white mb-12">Our Material Records</h1>
        <div className="border grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 sm:gap-7 gap-6">
            <div className="border px-6 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl">
              <h1 className="border text-center text-lg font-semibold">Recorded Live Classes</h1>
              <p className="border mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center ">455+</p>
            </div>
            <div className="border px-6 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl">
              <h1 className="border text-center text-lg font-semibold">Mock Tests</h1>
              <p className="border mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center ">150+</p>
            </div>
            <div className="border px-6 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl">
              <h1 className="border text-center text-lg font-semibold">Exam Related Videos</h1>
              <p className="border mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center ">70+</p>
            </div>
            <div className="border px-6 py-8 rounded-3xl bg-orange-200 dark:bg-neutral-700 shadow-md hover:shadow-xl">
              <h1 className="border text-center text-lg font-semibold">Practice Material</h1>
              <p className="border mt-4 text-4xl text-orange-950 dark:text-white/80 font-extrabold text-center ">350+</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default StatisticSection;
