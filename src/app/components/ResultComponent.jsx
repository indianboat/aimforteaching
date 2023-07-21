"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ResultComponent = ({ results }) => {
  return (
    <>
      <table className="min-w-full text-left table-auto h-auto">
        <thead>
          <tr className="border-b-2">
            <th className="px-4 py-2">Exam</th>
            <th className="px-4 py-2">Link</th>
          </tr>
        </thead>
        <tbody>
          {results &&
            results.map((item, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-200 my-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                }}
              >
                <td className="px-4 py-2">{item.attributes.result_name}</td>
                <td className="px-4 py-2">
                  <Link
                    href={item.attributes.result_link}
                    className="hover:text-blue-600"
                    target="_blank"
                  >
                    Click Here
                  </Link>
                </td>
              </motion.tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ResultComponent;
