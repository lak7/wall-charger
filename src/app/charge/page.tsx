"use client";
import WaveCharging from "@/components/WaveCharging";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"],
});

// Demo Component with Auto-incrementing Percentage
const Charge = () => {
  const [demoPercentage, setDemoPercentage] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoPercentage((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  //   return <WaveCharging percentage={demoPercentage} />;
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
            className="text-white text-5xl font-medium tracking-wide relative group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className={`${poppins.className} "relative inline-block"`}>
              Charging
            </span>
          </motion.div>
        </motion.div>
      </div>
      <WaveCharging percentage={demoPercentage} />
      <div className="flex w-full justify-center items-center">
        <Image
          src="/charging-scooty.png"
          alt="Charger pad"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Charge;
