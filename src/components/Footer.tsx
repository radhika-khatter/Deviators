import Link from "next/link";
import socials from "@/data/socials";

export default function Footer() {
  return (
    <footer id="contact" className="mt-auto bg-[#1a103d] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          <Link href="/" className="text-2xl font-bold text-white">
            Deviators Club
          </Link>

          <div className="flex flex-wrap justify-center gap-6">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                className="text-gray-400 transition-colors hover:text-[#8b7ff9]"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
