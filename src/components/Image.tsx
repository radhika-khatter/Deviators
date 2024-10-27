"use client";

import Image, { StaticImageData } from "next/image";
import { Gallery, Item as ItemPSG } from "react-photoswipe-gallery";

export default function ImageGallery({
  images,
}: {
  images: StaticImageData[];
}) {
  return (
    <Gallery>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-auto w-[97vw] overflow-hidden rounded-lg sm:h-[300px] sm:w-[300px] lg:h-[350px] lg:w-[350px] 2xl:h-[400px] 2xl:w-[400px]"
          >
            <ImageCx image={image} />
          </div>
        ))}
      </div>
    </Gallery>
  );
}

export function ImageCx({ image }: { image: StaticImageData }) {
  return (
    <ItemPSG
      original={image.src}
      thumbnail={image.src}
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <Image
          ref={ref}
          onClick={open}
          src={image}
          alt="Image"
          className="border-20 aspect-square h-full w-full scale-110 cursor-pointer object-cover transition-transform hover:scale-100"
        />
      )}
    </ItemPSG>
  );
}
