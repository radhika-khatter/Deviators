/* eslint-disable no-unused-vars */
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import type { StaticImageData } from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface CarouselProps {
  images: StaticImageData[];
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

function CustomCursor({ isLeft }: { isLeft: boolean }) {
  return (
    <div
      className={`pointer-events-none flex h-16 w-16 items-center justify-center rounded-full ${
        isLeft ? "bg-yellow-500" : "bg-blue-700"
      } opacity-90 shadow-lg`}
    >
      {isLeft ? (
        <ArrowLeft className="h-8 w-8 text-white" />
      ) : (
        <ArrowRight className="h-8 w-8 text-white" />
      )}
    </div>
  );
}

function TouchableControls({
  paginate,
  images,
  setPage,
  slideIndex,
  resetTimeout,
}: {
  paginate: (newDirection: number) => void;
  images: StaticImageData[];
  setPage: React.Dispatch<React.SetStateAction<[number, number]>>;
  slideIndex: number;
  resetTimeout: () => void;
}) {
  return (
    <>
      <div className="absolute inset-0 z-10 flex cursor-none items-center justify-between p-2 sm:p-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            resetTimeout();
            paginate(-1);
          }}
          className="rounded-full bg-black/70 p-2 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-black/90 sm:p-3"
        >
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            resetTimeout();
            paginate(1);
          }}
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
            onClick={() => {
              resetTimeout();
              setPage([index, index > slideIndex ? 1 : -1]);
            }}
            className={`h-2 w-2 rounded-full shadow-lg transition-colors sm:h-3 sm:w-3 ${
              index === slideIndex ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

function NonTouchableCarousel({
  images,
  page,
  direction,
  paginate,
  slideIndex,
  resetTimeout,
  stopInterval,
}: {
  images: StaticImageData[];
  page: number;
  direction: number;
  paginate: (newDirection: number) => void;
  slideIndex: number;
  resetTimeout: () => void;
  stopInterval: () => void;
}) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showCustomMouse, setShowCustomMouse] = useState(false);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      setCursorPosition({ x: x - 32, y: y - 32 });
      setHoveredSide(x < rect.width / 2 ? "left" : "right");
    },
    [],
  );

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipe = swipePower(info.offset.x, info.velocity.x);
    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full"
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
      onMouseEnter={() => {
        setShowCustomMouse(true);
        stopInterval();
      }}
      onMouseLeave={() => {
        setShowCustomMouse(false);
        resetTimeout();
      }}
      onClick={() => resetTimeout()}
    >
      {showCustomMouse && (
        <motion.div
          className="pointer-events-none absolute left-0 top-0 z-50"
          style={{
            x: cursorPosition.x,
            y: cursorPosition.y,
          }}
        >
          <CustomCursor isLeft={hoveredSide === "left"} />
        </motion.div>
      )}
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
            x: { type: "spring", stiffness: 250, damping: 30, mass: 0.8 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 },
          }}
          className="absolute h-full w-full overflow-hidden rounded-xl object-cover"
          alt={`Slide ${slideIndex + 1}`}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          onClick={() =>
            hoveredSide && paginate(hoveredSide === "left" ? -1 : 1)
          }
        />
      </AnimatePresence>
    </div>
  );
}

export default function ImageCarousel({ images }: CarouselProps) {
  const [isTouchableDevice, setIsTouchableDevice] = useState(false);
  const [[page, direction], setPage] = useState([0, 0]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const slideIndex = Math.abs(page % images.length);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    },
    [page],
  );

  const checkIsTouchableDevice = useCallback(() => {
    setIsTouchableDevice(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    checkIsTouchableDevice();
    window.addEventListener("resize", checkIsTouchableDevice);
    return () => window.removeEventListener("resize", checkIsTouchableDevice);
  }, [checkIsTouchableDevice]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      paginate(1);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [paginate]);

  const resetTimeout = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      paginate(1);
    }, 3000);
  }, [paginate]);

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  return (
    <div className="w-full bg-[#1E1144] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto mb-4 max-w-4xl text-center sm:mb-6">
        <h2 className="mb-1 font-pixelify text-2xl font-bold text-white sm:mb-2 sm:text-3xl md:text-4xl">
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

      <div className="relative mx-auto mt-4 h-[250px] w-full max-w-4xl overflow-hidden sm:mt-8 sm:h-[350px] md:h-[450px] lg:h-[500px]">
        {isTouchableDevice ? (
          <>
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
                  x: { type: "spring", stiffness: 250, damping: 30, mass: 0.8 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                }}
                className="absolute h-full w-full object-cover"
                alt={`Slide ${slideIndex + 1}`}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, info) => {
                  const swipe = swipePower(info.offset.x, info.velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              />
            </AnimatePresence>
            <TouchableControls
              paginate={paginate}
              images={images}
              setPage={setPage}
              slideIndex={slideIndex}
              resetTimeout={resetTimeout}
            />
          </>
        ) : (
          <NonTouchableCarousel
            images={images}
            page={page}
            direction={direction}
            paginate={paginate}
            slideIndex={slideIndex}
            resetTimeout={resetTimeout}
            stopInterval={stopInterval}
          />
        )}
      </div>
    </div>
  );
}
