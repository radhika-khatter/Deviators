import Link from "next/link";
import team from "@/data/team";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { Twitter } from "lucide-react";

export default function TeamSection() {
  return (
    <section id="team" className="bg-[#1E1144] py-16 pt-20 lg:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text font-pixelify text-3xl font-bold text-transparent md:text-4xl">
            Meet Our Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            The brilliant minds behind Deviators Club pushing the boundaries of
            what&apos;s possible
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              className="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:transform hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="flex flex-col items-center">
                <div className="relative mb-4 h-32 w-32">
                  <img
                    src={member.image.src}
                    alt={member.name}
                    className="size-full rounded-full border-2 border-purple-500 object-cover"
                  />
                </div>
                <h3 className="mb-2 font-pixelify text-2xl font-semibold text-white">
                  {member.name}
                </h3>
                <div className="mb-4 flex flex-wrap justify-center gap-2">
                  {member.roles.map((role, roleIndex) => (
                    <span
                      key={roleIndex}
                      className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-center text-sm text-gray-400">
                  {member.intro}
                </p>
                <div className="flex space-x-4">
                  {Object.entries(member.urls).map(([key, url]) => (
                    <Link
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 transition-colors hover:text-white"
                    >
                      {key === "github" && (
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      )}
                      {key === "linkedin" && (
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      )}
                      {key === "twitter" && <Twitter className="h-5 w-5" />}
                      {key === "portfolio" && (
                        <GlobeAltIcon className="h-5 w-5" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
