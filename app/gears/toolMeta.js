// Presentation-only metadata for /gears.
//
// This intentionally does NOT live in app/data/index.js — `gear` there stays
// the single source of truth for which tools exist. This file only adds
// visual identity (icon + one-line purpose) and category copy on top of it.
//
// Icons are pulled from the centralized icon system (lib/icons): either a
// real brand mark from the installed react-icons/si set, or a hand-built
// brand SVG in lib/icons/brands.js for tools absent from that set (sourced
// from Tabler Icons, selfh.st icons, and Boxicons — see brands.js for
// provenance). Tools with no verified brand mark anywhere fall back to a
// plain monogram — never a mismatched or generic logo.

import {
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
  SiWebstorm,
  SiPycharm,
  SiVscodeBrand,
  SiPowershellBrand,
  SiWindowsTerminalBrand,
  SiRequestlyBrand,
  SiAntigravityBrand,
  SiDevinBrand,
  SiWisprFlowBrand,
  SiTraeBrand,
  SiCometBrand,
  SiQoderBrand,
} from "@/lib/icons";

// category (exact string from app/data/index.js `gear.tools[].category`)
export const CATEGORY_META = {
  "editors & IDEs": {
    description: "Where I write, navigate, and debug code.",
  },
  "AI coding agents": {
    description:
      "Autonomous and assisted agents that write, refactor, and ship code alongside me.",
  },
  terminal: {
    description: "Shells and terminal emulators for running everything else.",
  },
  database: {
    description:
      "Local databases, containers, and GUI clients for data work.",
  },
  "API & testing": {
    description: "Hitting endpoints, mocking responses, debugging requests.",
  },
  productivity: {
    description:
      "Capture, dictate, record, and sync, the tools around the code.",
  },
  communication: {
    description: "Where collaboration and async conversation happen.",
  },
};

// tool name (exact string from `gear.tools[].items`)
export const TOOL_META = {
  // editors & IDEs
  "VS Code": { icon: SiVscodeBrand, purpose: "Primary editor" },
  WebStorm: {
    icon: SiWebstorm,
    purpose: "JavaScript / TypeScript IDE",
  },
  PyCharm: { icon: SiPycharm, purpose: "Python IDE" },
  Zed: { icon: SiZedindustries, purpose: "Fast, native editor" },
  Cursor: { icon: SiCursor, purpose: "AI-assisted development" },

  // AI coding agents
  Devin: { icon: SiDevinBrand, purpose: "Autonomous coding agent" },
  Trae: { icon: SiTraeBrand, purpose: "AI pair programmer" },
  Qoder: { icon: SiQoderBrand, purpose: "Agentic code assistant" },
  Antigravity: { icon: SiAntigravityBrand, purpose: "AI dev agent" },
  OpenCode: { icon: SiOpencode, purpose: "Open-source AI agent" },
  "LM Studio": { icon: SiLmstudio, purpose: "Local LLM runner" },

  // terminal
  PowerShell: { icon: SiPowershellBrand, purpose: "Default shell" },
  "Git Bash": { icon: SiGnubash, purpose: "Unix-style shell" },
  "Windows Terminal": {
    icon: SiWindowsTerminalBrand,
    purpose: "Terminal host",
  },
  Warp: { icon: SiWarp, purpose: "AI-enabled terminal" },

  // database
  "Docker Desktop": { icon: SiDocker, purpose: "Containers & services" },
  DBeaver: { icon: SiDbeaver, purpose: "Universal DB client" },
  "MongoDB Compass": { icon: SiMongodb, purpose: "MongoDB GUI" },
  "MySQL Workbench": { icon: SiMysql, purpose: "MySQL GUI" },

  // API & testing
  Postman: { icon: SiPostman, purpose: "API testing" },
  Insomnia: { icon: SiInsomnia, purpose: "REST client" },
  Requestly: { icon: SiRequestlyBrand, purpose: "Request interception" },

  // productivity
  "Wispr Flow": { icon: SiWisprFlowBrand, purpose: "Voice-to-text" },
  Comet: { icon: SiCometBrand, purpose: "AI browser" },
  Loom: { icon: SiLoom, purpose: "Async screen recording" },
  "OBS Studio": { icon: SiObsstudio, purpose: "Screen & stream capture" },
  MEGAsync: { icon: SiMega, purpose: "Cloud backup & sync" },

  // communication
  Telegram: { icon: SiTelegram, purpose: "Messaging" },
  Discord: { icon: SiDiscord, purpose: "Community & voice chat" },
  X: { icon: SiX, purpose: "Dev discourse" },
};

export function getToolMeta(name) {
  return (
    TOOL_META[name] ?? {
      icon: null,
      mono: name.slice(0, 2).toUpperCase(),
      purpose: "",
    }
  );
}
