import { motion } from "framer-motion";

const Skeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-200 dark:bg-neutral-600 h-full w-full p-3 rounded-md animate-pulse"
    >Loading...</motion.div>
  );
};

export default Skeleton;
