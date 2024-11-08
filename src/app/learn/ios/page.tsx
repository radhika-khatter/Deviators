"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { iosResources } from "@/data/resources/ios";
import DisplayTeam from "@/components/DisplayTeam";

export default function IosLearnPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const handleAccordionClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-purple-950 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 space-y-4"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl lg:text-6xl">
            Learn iOS Development
          </h1>
          <p className="mx-auto max-w-2xl text-center text-base text-gray-300">
            Explore our comprehensive resources and roadmaps to kickstart your
            iOS development journey.
          </p>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {iosResources.map((resource, index) => (
            <Card
              key={index}
              className="border-purple-800 bg-black/50 transition-all duration-300 hover:bg-black/60"
            >
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value={index.toString()}>
                    <AccordionTrigger
                      onClick={() => handleAccordionClick(index)}
                      className="group flex w-full justify-between"
                    >
                      <CardHeader>
                        <div className="flex items-center">
                          <CardTitle className="text-2xl text-purple-400">
                            {resource.name}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-gray-400">
                          {resource.desc}
                        </CardDescription>
                      </CardHeader>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-gray-400">
                        In this tutorial you will learn about the concepts given
                        below
                      </p>
                      {resource.content.map(
                        ({ head: title, links }, contentIndex) => (
                          <div key={contentIndex} className="mt-4">
                            <h2 className="text-lg font-semibold text-purple-400">
                              {title}
                            </h2>
                            <ul className="list-disc space-y-2 pl-4 text-gray-400">
                              {links.map(({ url, title }) => (
                                <li key={title}>
                                  {url ? (
                                    <Link
                                      target="_blank"
                                      className="underline hover:text-purple-300"
                                      href={url}
                                    >
                                      {title}
                                    </Link>
                                  ) : (
                                    <span>{title}</span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ),
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="mt-4 flex justify-end">
                  <Link target="_blank" href={resource.url}>
                    <Button className="bg-purple-700 hover:bg-purple-600">
                      Explore
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>
        <motion.div
          variants={fadeInUpVariants}
          initial="hidden"
          animate="visible"
          className="mt-8 text-center text-sm text-gray-400"
        >
          <p className="mb-4 text-lg text-gray-300">
          For further assistance, contact the Deviators iOS team.
          </p>
          <DisplayTeam keyword="ios" />
        </motion.div>
      </div>
    </div>
  );
}
