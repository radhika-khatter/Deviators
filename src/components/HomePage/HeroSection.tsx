"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { activities } from "@/data/heroSection";
import { ArrowRightIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import posts from "@/data/posts";

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

  const buttonBaseClass =
    "group relative overflow-hidden rounded-lg px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto min-w-[200px]";

  const showHiringBtn =
    posts.filter((post) => new Date() < new Date(post.expiresOn)).length > 0;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-10 text-white"
    >
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
          className="h-[800px] w-[800px] opacity-30 blur-[100px]"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, #3B82F6, #8B5CF6, #EC4899, #3B82F6)",
          }}
        />
      </div>

      <div
        className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative z-10 space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-block rounded-full border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-1">
                <span className="text-sm text-blue-400 sm:text-base">
                  Join our community
                </span>
              </div>

              <h1
                className={`bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text font-pixelify text-xl font-bold text-transparent sm:text-4xl sm:text-6xl lg:text-5xl lg:text-7xl`}
              >
                Deviators Club
              </h1>

              <p className="max-w-xl text-xl text-gray-300 sm:text-2xl">
                Welcome to Deviators – The coolest tech haven on the campus!
              </p>

              <p className="max-w-xl text-gray-400">
                Whether you&apos;re a newbie or seasoned coder, we provide a
                platform full of innovation, learnings, and fun. Let&apos;s
                build and push the boundaries of what&apos;s possible together!
              </p>
            </motion.div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={"https://forms.gle/Pd86V6uGVUEjfcMx5"}
                className="w-full sm:w-auto"
              >
                <motion.button
                  className={`${buttonBaseClass} bg-gradient-to-r from-blue-600 to-purple-600`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 text-base font-medium sm:text-lg">
                    We are hiring!
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ mixBlendMode: "overlay" }}
                  />
                </motion.button>
              </Link>

              {showHiringBtn && (
                <Link href="/we-are-hiring" className="w-full sm:w-auto">
                  <motion.button
                    className={`${buttonBaseClass} bg-gradient-to-r from-pink-600 to-orange-600`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2 text-base font-medium sm:text-lg">
                      We&apos;re Hiring
                      <BriefcaseIcon className="h-4 w-4 transition-transform group-hover:rotate-12" />
                      <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-pink-600">
                        {posts.length}
                      </span>
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 opacity-0 transition-opacity group-hover:opacity-100"
                      style={{ mixBlendMode: "overlay" }}
                    />
                  </motion.button>
                </Link>
              )}
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
                      className="absolute inset-0 rounded-2xl bg-black/50 p-6 backdrop-blur-sm sm:p-8"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div
                        className={`inline-flex rounded-xl bg-gradient-to-br p-4 ${activity.color}`}
                      >
                        <activity.icon className="h-8 w-8 text-white" />
                      </div>

                      <h3
                        className={`mt-4 font-pixelify text-xl font-bold sm:text-4xl`}
                      >
                        {activity.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-400 sm:text-base">
                        {activity.description}
                      </p>

                      <div className="mt-6 flex items-center gap-2">
                        <div className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300">
                          {activity.stats}
                        </div>
                      </div>

                      <div className="absolute bottom-6 right-6 text-gray-500">
                        {index + 1}/{activities.length}
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>

            <div className="absolute bottom-4 left-4 flex gap-2">
              {activities.map((_, index) => (
                <motion.button
                  name="activity"
                  title="Activity"
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
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
