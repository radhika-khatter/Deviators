"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import aboutItems from "@/data/about";

export default function AboutSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveIndex((prevIndex) =>
          prevIndex === aboutItems.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <section id="about" className="relative min-h-screen w-full bg-gradient-to-b from-black via-[#0D0B21] to-[#1E1144]">
      {/* Subtle star effect with adjusted gradient */}
      <div className="absolute inset-0">
        <div className="absolute h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-40" />
      </div>
      <div
        className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-20"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-5xl font-bold text-white"
        >
          About Deviators
        </motion.h2>

        {/* Welcome Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 max-w-3xl text-center"
        >
          <p className="text-lg leading-relaxed text-gray-300 w-full">
            Welcome to DEVIATORS… The coolest tech haven on the campus! We are a
            group of tech enthusiasts diving deep into the world of technology
            and having a blast while doing it. Whether you&apos;re a newbie or a
            seasoned coder, we provide a playground for all, where innovation
            thrives, ideas are shared and everybody debates on &quot;It&apos;s a feature
            not a Bug&quot;. Join us, explore, innovate, while making memories and
            let&apos;s push the boundaries of what&apos;s possible together!
          </p>
        </motion.div>

        <div className="relative h-[300px] w-full max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-12 shadow-xl backdrop-blur-sm"
            >
              <div className="flex h-full flex-col items-center justify-center text-center">
                <h3 className="mb-6 text-2xl font-semibold text-white">
                  {aboutItems[activeIndex].title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-300">
                  {aboutItems[activeIndex].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="mt-8 flex space-x-2">
          {aboutItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500"
                  : "bg-gray-500/50 hover:bg-gray-400/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
