import events from "@/data/event";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { ALLIMAGESDATA } from "@/types/event";
import { Metadata } from "next";
import { metaDataBase } from "@/data/metaData";

export default function GalleryPage() {
  const allImagesData: ALLIMAGESDATA = [];
  for (const event of events) {
    allImagesData.push({
      image: event.images[event.index],
      title: event.title,
      slug: event.slug,
    });
  }
  return (
    <section className="bg-black px-4 py-12 pt-20 text-white sm:px-6 lg:px-8 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-center text-4xl font-bold text-transparent sm:text-5xl lg:text-6xl">
          Event Gallery
        </h1>
        <ParallaxScroll images={allImagesData} />
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  ...metaDataBase,
  title: "Event Gallery | Deviators Club",
};
