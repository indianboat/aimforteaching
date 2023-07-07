import { AiOutlineNotification } from "react-icons/ai";
import { BiBookReader, BiSpreadsheet } from "react-icons/bi";
import { MdLightbulbOutline } from "react-icons/md";
import { PiFiles } from "react-icons/pi";
import { LiaIdCardSolid } from "react-icons/lia";


const ExamUpdatesSection = () => {

  // array for all cards <-------





  return (
    <>
      <div className="border w-full">
        <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl border lg:text-left md:text-left sm:text-center text-center font-extrabold text-orange-700 dark:text-white">Everything your needs about exam updates</h1>
        <div className="mt-12 border grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:gap-10 md:gap-8 sm:gap-7 gap-6">
          <div className="border p-8 rounded-3xl bg-white/75 dark:bg-neutral-900 shadow-md hover:shadow-xl">
            <div className="border flex justify-center">
              <AiOutlineNotification size={48} className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"/>
            </div>
            <h1 className="border mt-6 text-xl font-semibold text-center">Comprehensive Exam Notifications</h1>
            <p className="border mt-3 text-justify text-gray-800 dark:text-gray-200 transition-all duration-75">Get instant access to accurate and up-to-date notifications about upcoming government teacher exams across various states and organizations.</p>
          </div>
          <div className="border p-8 rounded-3xl bg-white/75 dark:bg-neutral-900 shadow-md hover:shadow-xl">
          <div className="border flex justify-center">
            <BiBookReader size={48} className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"/>
            </div>
            <h1 className="border mt-6 text-xl font-semibold text-center">Exam Syllabus & Pattern Discussion</h1>
            <p className="border mt-3 text-justify text-gray-800 dark:text-gray-200 transition-all duration-75">Access detailed information on the syllabus and exam pattern of government teacher exams.</p>
          </div>
          <div className="border p-8 rounded-3xl bg-white/75 dark:bg-neutral-900 shadow-md hover:shadow-xl">
               <div className="border flex justify-center">
            <BiSpreadsheet  size={48} className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"/>
            </div>
            <h1 className="border mt-6 text-xl font-semibold text-center">Study Materials & Resources</h1>
            <p className="border mt-3 text-justify text-gray-800 dark:text-gray-200 transition-all duration-75">Explore a wide range of study materials, including textbooks, sample papers, previous year question papers, and recommended reference books.</p>
          </div>
          <div className="border p-8 rounded-3xl bg-white/75 dark:bg-neutral-900 shadow-md hover:shadow-xl">
          <div className="border flex justify-center">
            <MdLightbulbOutline size={48} className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"/>
            </div>
            <h1 className="border mt-6 text-xl font-semibold text-center">Preparation Tips & Strategies</h1>
            <p className="border mt-3 text-justify text-gray-800 dark:text-gray-200 transition-all duration-75">Discover expert tips, tricks, and strategies shared by successful candidates and experienced educators.</p>
          </div>
          <div className="border p-8 rounded-3xl bg-white/75 dark:bg-neutral-900 shadow-md hover:shadow-xl">
          <div className="border flex justify-center">
            <PiFiles size={48} className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"/>
            </div>
            <h1 className="border mt-6 text-xl font-semibold text-center">Mock Tests & Practice Papers</h1>
            <p className="border mt-3 text-justify text-gray-800 dark:text-gray-200 transition-all duration-75">Access a vast collection of mock tests and practice papers designed specifically for government teacher exams.</p>
          </div>
          <div className="border p-8 rounded-3xl bg-white/75 dark:bg-neutral-900 shadow-md hover:shadow-xl">
          <div className="border flex justify-center">
            <LiaIdCardSolid size={48} className="border rounded-full p-3 w-16 h-16 bg-orange-300/100 dark:bg-neutral-800 text-orange-900 dark:text-white/90"/>
            </div>
            <h1 className="border mt-6 text-xl font-semibold text-center">Result Updates & Admit Cards</h1>
            <p className="border mt-3 text-justify text-gray-800 dark:text-gray-200 transition-all duration-75">Stay updated with the latest result announcements and admid cards available for government teacher exams.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamUpdatesSection;
