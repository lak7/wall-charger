"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Park = () => {
  return (
    <div
      className="w-[768px] h-[1024px] overflow-hidden bg-[#2A2D32] font-sans pt-7"
      style={{
        backgroundImage: "url(/main-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <div className="flex justify-center items-center p-1 pt-40 w-full px-8">
        <motion.div
          className="text-left flex-col gap-2  mb-24 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-gray-200 text-5xl font-medium tracking-wide relative group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="relative inline-block">Park your vehicle</span>
          </motion.div>
        </motion.div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="flex-col justify-center items-center">
          <motion.div
            className="w-full flex justify-center items-center pb-2 relative"
            initial="initial"
            animate="animate"
          >
            {/* Outer Glow Effect */}
            <motion.div
              className="absolute w-16 h-16 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%)",
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Inner Green Glow */}
            <motion.div
              className="absolute w-14 h-14 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(42,248,4,0.3) 0%, rgba(42,248,4,0) 60%)",
              }}
              animate={{
                scale: [1.1, 1.3, 1.1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.svg
              width="36"
              height="31"
              viewBox="0 0 36 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
              }}
            >
              <motion.path
                d="M17.9089 0L0.185966 30.697H35.6318L17.9089 0Z"
                fill="white"
                animate={{
                  opacity: [0.92, 1, 0.92],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                d="M17.9088 5.22461L4.71089 28.0841H31.1067L17.9088 5.22461Z"
                fill="#2AF804"
                animate={{
                  fill: ["#2AF804", "#40FF1A", "#2AF804"],
                  filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "drop-shadow(0 0 3px rgba(42,248,4,0.5))",
                }}
              />
            </motion.svg>
          </motion.div>

          <Image
            src="/charger-base.png"
            alt="Charger pad"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <Image
          src="/park-scooty.png"
          alt="Charger pad"
          width={350}
          height={350}
        />
      </div>
    </div>
  );
};

export default Park;
