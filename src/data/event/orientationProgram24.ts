import { EVENT } from "@/types/event";

import Image1 from "@/assets/events/orientationProgram24/1.png";
import Image2 from "@/assets/events/orientationProgram24/2.png";
import Image3 from "@/assets/events/orientationProgram24/3.png";
import Image4 from "@/assets/events/orientationProgram24/4.png";

export const OrientationProgram24: Omit<EVENT, "slug"> = {
  title: "Orientation Program",
  // 25 aug 2024
  date: new Date("2024-08-25T18:25:00.000Z"),
  images: [Image1, Image2, Image3, Image4],
  index: 0,
};
