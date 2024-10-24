"use client";
import React from "react";
import { EnvelopeIcon, HomeIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import Navbar from "./ui/floating-navbar";
export default function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "home",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "about",
      icon: <UserIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Team",
      link: "team",
      icon: <UsersIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "contact",
      icon: (
        <EnvelopeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return <Navbar navItems={navItems} />;
}
