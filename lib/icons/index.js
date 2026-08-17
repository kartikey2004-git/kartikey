// Centralized Icon System
// Tree-shakable exports for all icons used in the project

// React Icons (io5)
export { IoRocket, IoHomeOutline } from "react-icons/io5";

// React Icons (fa)
export { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// React Icons (fa6)
export { FaCheck, FaChevronDown, FaChevronUp, FaGear } from "react-icons/fa6";

// React Icons (bs)
export { BsThreeDots } from "react-icons/bs";

// React Icons (fi)
export { FiCpu, FiBookOpen, FiServer, FiZap, FiFileText } from "react-icons/fi";

// React Icons (ci)
export { CiFolderOn } from "react-icons/ci";

// React Icons (si) — brand/product logos, used on /gears for real tool identity
export {
  SiZedindustries,
  SiGnubash,
  SiWarp,
  SiDocker,
  SiDbeaver,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiInsomnia,
  SiLoom,
  SiObsstudio,
  SiMega,
  SiTelegram,
  SiDiscord,
  SiX,
  SiCursor,
  SiLmstudio,
  SiOpencode,
} from "react-icons/si";

// Hand-built brand icons (no entry in react-icons/si), used on /gears
export {
  SiVscodeBrand,
  SiPowershellBrand,
  SiWindowsTerminalBrand,
  SiRequestlyBrand,
  SiAntigravityBrand,
  SiDevinBrand,
  SiWisprFlowBrand,
  SiTraeBrand,
  SiCometBrand,
  SiWebstormBrand,
  SiPycharmBrand,
  SiQoderBrand,
} from "./brands";

// Icon components accept optional className prop
/**
 * @typedef {React.ComponentType<{className?: string}>} IconComponent
 */
