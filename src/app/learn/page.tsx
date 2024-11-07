"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { tracks } from "@/data/resources";
import Image from "next/image";

export default function LearnPage() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scaleInVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-[90vh] w-full bg-gradient-to-br from-black via-purple-950 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 space-y-6"
        >
          <h1 className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-4xl font-extrabold text-transparent md:text-6xl lg:text-7xl">
            Learn with Us
          </h1>
          <p className="mx-auto max-w-2xl text-center text-lg font-medium text-gray-300">
            Explore our comprehensive resources and roadmaps designed to
            accelerate your learning journey.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              variants={scaleInVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="h-full overflow-hidden border-2 border-purple-800/50 bg-gradient-to-br from-black/80 to-purple-950/30 backdrop-blur-sm transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="relative h-12 w-12 rounded-lg bg-purple-900/30 p-2 transition-transform duration-300">
                      <Image
                        src={track.image}
                        alt={`${track.name} icon`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <CardTitle className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-2xl font-bold text-transparent">
                      {track.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="mt-4 text-base text-gray-300/90">
                    {track.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-end pt-4">
                  <Link href={`/learn/${track.url}`}>
                    <Button className="relative bg-purple-700 font-medium transition-all duration-300 after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:translate-y-2 after:bg-purple-950/50 after:blur-lg hover:bg-purple-600">
                      Explore Track
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
