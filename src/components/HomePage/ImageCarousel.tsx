"use client";

import React, { useState, useEffect, useCallback } from "react";
import type { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function AnimatedCarousel({
  images,
}: {
  images: StaticImageData[];
}) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const slideIndex = Math.abs(page % images.length);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page],
  );

  useEffect(() => {
    if (!isHovered) {
      const intervalId = setInterval(() => {
        paginate(1);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [isHovered, page, paginate]);

  return (
    <div className="w-full bg-[#1E1144] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto mb-4 max-w-4xl text-center sm:mb-6">
        <h2 className="mb-1 text-2xl font-bold text-white sm:mb-2 sm:text-3xl md:text-4xl">
          View Our Gallery
        </h2>
        <p className="mb-4 text-sm text-gray-300 sm:text-base md:text-lg">
          Explore our curated collection
        </p>
        <Link
          href="/gallery"
          className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white transition-all duration-300 hover:gap-3 hover:bg-white/20 sm:text-base"
        >
          View Full Gallery
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div
        className="relative mx-auto mt-4 h-[250px] w-full max-w-4xl sm:mt-8 sm:h-[350px] md:h-[450px] lg:h-[500px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={page}
              src={images[slideIndex].src}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute h-full w-full object-cover"
              alt={`Slide ${slideIndex + 1}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(_, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            />
          </AnimatePresence>

          <div className="absolute inset-0 z-10 flex items-center justify-between p-2 sm:p-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
              className="rounded-full bg-black/70 p-2 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/90 sm:p-3"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
              className="rounded-full bg-black/70 p-2 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/90 sm:p-3"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </motion.button>
          </div>

          <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 transform space-x-1.5 sm:bottom-4 sm:space-x-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setPage([index, index > slideIndex ? 1 : -1])}
                className={`h-2 w-2 rounded-full shadow-lg transition-colors sm:h-3 sm:w-3 ${
                  index === slideIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
