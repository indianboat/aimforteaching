"use client";

import Link from "next/link";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import { BsYoutube } from "react-icons/bs";

const VideoSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div ref={ref} className="border w-full h-full">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={{
            visible: { x: "0%" },
            hidden: { x: "-300%" },
          }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
          className="lg:text-4xl md:text-3xl sm:text-2xl inline-flex text-2xl border lg:text-left md:text-left sm:text-center text-center font-extrabold text-neutral-900 dark:text-white mb-12"
        >
          Latest Youtube Classes
        </motion.h1>
        <div className="grid justify-between lg:grid-cols-3 bg-none md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-6">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl relative border flex w-full h-full overflow-hidden place-items-center place-content-center"
          >
            <Image
              src={"/thumbnail1.jpg"}
              width={740}
              height={400}
              alt="youtube-thumnail1"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              type="button"
              className="absolute border p-2 rounded-full bg-white"
            >
              <Link href={"https://youtu.be/_q4lRD2-E_g"} target="_blank"><BsYoutube color="#ff0000" size={32} /></Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl relative border flex w-full h-full overflow-hidden place-items-center place-content-center"
          >
            <Image
              src={"/thumbnail2.jpg"}
              width={740}
              height={400}
              alt="youtube-thumnail2"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="absolute border p-2 rounded-full bg-white"
            >
              <Link href={"https://youtu.be/oV1y6lVjE_4"} target="_blank"><BsYoutube color="#ff0000" size={32} /></Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl relative border flex w-full h-full overflow-hidden place-items-center place-content-center"
          >
            <Image
              src={"/thumbnail3.jpg"}
              width={740}
              height={400}
              alt="youtube-thumnail3"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="absolute border p-2 rounded-full bg-white"
            >
              <Link href={"https://youtu.be/vkNS-5opsq8"} target="_blank"><BsYoutube color="#ff0000" size={32} /></Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
