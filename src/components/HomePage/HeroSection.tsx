"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { activities } from "@/data/heroSection";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveIndex((prev) => (prev + 1) % activities.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section className="min-h-screen bg-black flex items-center text-white overflow-hidden relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="w-[800px] h-[800px] blur-[100px] opacity-30"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, #3B82F6, #8B5CF6, #EC4899, #3B82F6)",
          }}
        />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
          {/* Updated Left Content */}
          <div className="space-y-6 sm:space-y-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <span className="text-sm sm:text-base text-blue-400">
                  Join our community
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                DEVIATORS CLUB
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 max-w-xl">
                Welcome to Deviators – The coolest tech haven on the campus!
              </p>

              <p className="text-gray-400 max-w-xl">
                Whether you&apos;re a newbie or seasoned coder, we provide a platform full of innovation, learnings, and fun. Let&apos;s build and push the boundaries of what&apos;s possible together!
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 text-base sm:text-lg font-medium flex items-center justify-center gap-2">
                  Join the Rebellion
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ mixBlendMode: "overlay" }}
                />
              </motion.button>
            </div>
          </div>

          {/* Right Content - Activity Showcase */}
          <div className="relative h-[400px] sm:h-[450px] lg:h-[500px]">
            <AnimatePresence mode="wait">
              {activities.map(
                (activity, index) =>
                  index === activeIndex && (
                    <motion.div
                      key={activity.title}
                      className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div
                        className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${activity.color}`}
                      >
                        <activity.icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold mt-4">
                        {activity.title}
                      </h3>
                      <p className="text-gray-400 mt-2 text-sm sm:text-base">
                        {activity.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2">
                        <div className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-sm">
                          {activity.stats}
                        </div>
                      </div>

                      <div className="absolute bottom-6 right-6 text-gray-500">
                        {index + 1}/{activities.length}
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>

            <div className="absolute bottom-4 left-4 flex gap-2">
              {activities.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 
                    ${
                      index === activeIndex
                        ? "bg-white"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
