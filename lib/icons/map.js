import {
  IoLogoGithub,
  IoGlobe,
  IoRocket,
  IoMailOutline,
  IoHomeOutline,
  FaLinkedinIn,
  FaDiscord,
  FaChevronLeft,
  FaChevronRight,
  FaXTwitter,
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaGear,
  GoArrowDownLeft,
  BsThreeDots,
  BsLightningCharge,
  FiCpu,
  FiBookOpen,
  FiServer,
  CiFolderOn,
} from "./index";

export const IconMap = {
  // Social & Navigation
  github: IoLogoGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  globe: IoGlobe,
  home: IoHomeOutline,
  external: GoArrowDownLeft,

  // Communication
  mail: IoMailOutline,
  chat: FaDiscord,

  // UI Controls
  check: FaCheck,
  chevronDown: FaChevronDown,
  chevronUp: FaChevronUp,
  chevronLeft: FaChevronLeft,
  chevronRight: FaChevronRight,
  dots: BsThreeDots,

  // Content & Features
  folder: CiFolderOn,
  book: FiBookOpen,
  server: FiServer,
  rocket: IoRocket,
  cpu: FiCpu,
  lightning: BsLightningCharge,
  gear: FaGear,
};

/**
 * @typedef {keyof typeof IconMap} IconMapKey
 */
