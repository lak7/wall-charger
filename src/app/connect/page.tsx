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

            {/* New Loader Section */}
            <motion.div
              className="mt-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.span
                className="text-gray-400 text-lg"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Waiting to Connect
              </motion.span>

              {/* Simple Circular Loader */}
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
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
