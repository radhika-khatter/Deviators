import Head from "next/head";
import HeroSection from "@/components/HomePage/HeroSection";
import AboutSection from "@/components/HomePage/AboutSection";
import TeamPreviewSection from "@/components/HomePage/TeamPreview";
import events from "@/data/event";
import ImageCarousel from "@/components/HomePage/ImageCarousel";

export default function Home() {
  const images = events.map((event) => event.images[event.index]);
  return (
    <>
      <Head>
        <title>Deviators Club</title>
        <meta
          name="description"
          content="Where Code Breaks Free and Innovation Reigns"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <AboutSection />
        <TeamPreviewSection />
        <ImageCarousel images={images} />
      </main>
    </>
  );
}
