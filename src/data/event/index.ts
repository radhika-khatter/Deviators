import { EVENT } from "@/types/event";
import { GitGithub } from "./gitGithub";
import { DebugDecrypt } from "./debugDecrypt";
import { CyberSec } from "./cyberSec";
import { EngineersDay } from "./engineersDay";
import { OrientationProgram24 } from "./orientationProgram24";
import { IOSLabSessions } from "./iosLabSession";
import { DockerSession } from "./dockerSession";

const eventsWithSlug: Omit<EVENT, "slug">[] = [
  DebugDecrypt,
  GitGithub,
  CyberSec,
  EngineersDay,
  OrientationProgram24,
  IOSLabSessions,
  DockerSession,
];

const events = eventsWithSlug
  .map((event) => ({
    ...event,
    slug: event.title.toLowerCase().replace(/\s+/g, "-"),
  }))
  .sort((a, b) => b.date.getTime() - a.date.getTime());

export default events;
