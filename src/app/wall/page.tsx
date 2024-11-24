"use client";

import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Wall() {
  return (
    // Black background container for larger screens
    <div className="max-h-screen w-full bg-black flex items-center justify-center ">
      {/* Fixed size container that maintains 768x1024 aspect ratio */}
      <div
        className="relative w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] scale-50"
        style={{
          backgroundImage: "url(/connect-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header with logo */}
        <motion.div
          className="absolute top-8 left-8 flex items-center space-x-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-10 w-10">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <circle cx="20" cy="20" r="19" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold tracking-tight">
              Dash Dynamic
            </h1>
            <p className="text-gray-400 text-sm">Technology Curator</p>
          </div>
        </motion.div>

        {/* Settings Icon */}
        <motion.button
          className="absolute top-8 right-8 text-gray-400 hover:text-white transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="w-6 h-6"
          >
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </motion.button>

        {/* Main Content */}
        <div className="flex justify-center items-center p-24 py-40 w-full px-8">
          <motion.div
            className="text-left space-y-6 mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-white text-4xl font-bold">Hi</h2>
            <div className="space-y-3">
              <p className="text-gray-400 text-2xl font-light">
                Lets Connect to Wireless
              </p>
              <p className="text-gray-200 text-4xl font-medium">
                Charge to your EV
              </p>
            </div>
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
            <div className="relative ">
              <Image
                src="/scooty.png"
                alt="Person on Scooter"
                width={500}
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
