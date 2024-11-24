"use client";

import Navbar from "@/components/nav";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Wall() {
  return (
    <div
      className="relative w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans"
      style={{
        backgroundImage: "url(/connect-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <div className="flex justify-center items-center p-24 py-40 w-full px-8">
        <motion.div
          className="text-left flex-col gap-2  mb-24 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h2
            className="text-white text-5xl font-bold tracking-wider"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            Hi
          </motion.h2>

          <motion.div className="relative">
            <motion.div
              className="text-gray-400 text-2xl font-light tracking-wide"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Let's Connect to Wireless
            </motion.div>

            <motion.div
              className="text-gray-200 text-4xl font-medium tracking-wide relative group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="relative inline-block">Charge to your EV</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 w-full">
        {/* Scooter and Person */}
        <motion.div
          className="absolute -right-10 bottom-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.9,
            type: "spring",
            stiffness: 100,
          }}
        >
          <div className="relative">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Image
                src="/scooty.png"
                alt="Person on Scooter"
                width={500}
                height={500}
                className="object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
