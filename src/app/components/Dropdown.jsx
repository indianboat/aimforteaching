// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Dropdown = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="relative">
//       <button
//         className="text-md border hover:text-blue-900 dark:hover:text-orange-700"
//         onClick={toggleDropdown}
//       >
//         Explore Exams
//       </button>

//       <AnimatePresence>
//         {isDropdownOpen && (
//           <motion.div
//             initial={{ y: -320 }}
//             animate={{ y: 0 }}
//             exit={{ y: -320 }}
//             transition={{ duration: 0.2, type:"spring" }}
//             className="absolute mt-2 w-48 border rounded shadow-lg"
//           >
//             <ul className="py-2">
//               <li className="px-4 py-2 hover:bg-gray-100">Item 1</li>
//               <li className="px-4 py-2 hover:bg-gray-100">Item 2</li>
//               <li className="px-4 py-2 hover:bg-gray-100">Item 3</li>
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Dropdown;
