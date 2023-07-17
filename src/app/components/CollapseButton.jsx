"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const CollapseButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const examTypes = [
    {
      examName:"All TET Exam"
    },
    {
      examName:"KVS Exam"
    },
    {
      examName:"DSSSB Exam"
    },
    {
      examName:"NVS Exam"
    },
    {
      examName:"Super TET Exam"
    },
    {
      examName:"AWES Exam"
    },
    {
      examName:"NDMC Exam"
    },
    {
      examName:"SDMC Exam"
    },
    {
      examName:"B.Ed Entrance"
    },
    {
      examName:"EMRC Exam"
    }
  ]

  return (
    <div className='w-full text-left'>
      <button
        className="flex gap-x-1 items-center px-4 py-1 text-left hover:bg-slate-200 transition-colors hover:dark:bg-slate-700 rounded-lg w-full"
        onClick={toggleCollapse}
      >
        Explore Exams           {isOpen ? (
            <IoIosArrowUp />
          ) : (
            <IoIosArrowDown />
          )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type:"spring", duration:0.3 }}
            className="overflow-hidden w-full mt-2"
          >
            <div className="px-4 py-2 bg-slate-50 rounded-xl dark:bg-slate-900">
              <ul className='flex flex-col gap-y-1'>
                {
                  examTypes.map((exam)=>{
                    return ( 
                    <li className='flex w-full'>
                      <Link className='transition-all text-sm w-full font-medium hover:text-blue-800 dark:hover:text-orange-700 px-2 py-[1px]' href={"/"}>{exam.examName}</Link>
                    </li> 
                      )
                  })
                }
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CollapseButton;
