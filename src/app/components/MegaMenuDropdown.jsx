"use client";

import { AnimatePresence, motion } from "framer-motion";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { CgClose } from "react-icons/cg";

function MegaMenuDropdown({ index, dropdownIndex, toggleDropdown, nav, data }) {

  const isOpen = index === dropdownIndex;

  return (
    <>
      <div className="relative">
        <div
          onClick={() => toggleDropdown(index)}
          className="select-none border flex items-center cursor-pointer"
        >
          {nav}{" "}
          {isOpen ? (
            <IoIosArrowUp />
          ) : (
            <IoIosArrowDown />
          )}
        </div>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            // initial={{ opacity: 0, y: -10 }}
            // animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -10 }}
            initial={{ y : "-220%" }}
            animate={{ y : "202%" }}
            exit={{ y : "-220%" }}

            transition={{ duration: 0.3, type : "spring" , damping:25, stiffness:700 }}
            className="container shadow md:w-11/12 sm:w-full w-full mx-auto z-0 left-0 right-0 absolute border bg-red-500"
          >
            <div className="flex float-right border justify-end px-4">
              <button onClick={() => toggleDropdown(index)}>
                <CgClose size={20} />
              </button>
            </div>
            {data}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MegaMenuDropdown;
