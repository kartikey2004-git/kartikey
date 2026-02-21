import { FiFolder, FiBookOpen, FiMail } from "react-icons/fi";
import { IconHome, IconBrandGithub } from "@tabler/icons-react";
import { Cpu, Server, Zap, Brain } from "lucide-react";

export const projects = [
  {
    title: "ShortenX",
    slug: "shorten-x",
    description:
      "A fast, minimal tool that turns long URLs into clean short links with simple analytics and an easy dashboard.",
    tech: ["React.js (Vite)", "Tailwind CSS", "Supabase"],
    image: "/url.png",
    features: [
      "Shorten links instantly.",
      "Check click counts and insights.",
      "Manage all saved URLs after login.",
      "Edit or delete links anytime.",
    ],
    bg: "shortenx",
    projectLink: "https://github.com/kartikey2004-git/URL-Shortener",
    liveLink: "https://clippyurl.vercel.app",
    currentlyBuilding: false,
  },
  {
    title: "JobConnect",
    slug: "jobconnect",
    description:
      "A straightforward job portal where candidates apply and track progress while recruiters post openings and update statuses.",
    tech: ["React.js (Vite)", "Tailwind CSS", "Supabase"],
    image: "/job.png",
    features: [
      "Role-based access for candidates and recruiters.",
      "Post and manage job listings easily.",
      "Apply to jobs from a personal dashboard.",
      "Track and update application stages.",
    ],
    bg: "jobconnect",
    projectLink: "https://github.com/kartikey2004-git/JobPortal",
    liveLink: "https://jobconnectx.vercel.app",
    currentlyBuilding: false,
  },
  {
    title: "Connectify",
    slug: "connectify",
    description:
      "A smooth scheduling tool where users set up event types, share booking links, and handle meetings through an organized dashboard.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "Neon",
      "Clerk",
      "Shadcn UI",
    ],
    image: "/connect.png",
    features: [
      "Create and customize event types with your availability.",
      "Share booking links for quick and easy scheduling.",
      "View and manage all upcoming and past meetings.",
      "Smart calendar integration",
    ],
    bg: "connectify",
    projectLink: "https://github.com/kartikey2004-git/Connectify",
    liveLink: "https://connectify-space.vercel.app",
    currentlyBuilding: false,
  },
  {
    title: "VartaX",
    slug: "vartax",
    description:
      "A smooth, fast chat app where conversations, status updates, and sharing stay reliable even under heavy load.",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "RabbitMQ",
      "Socket.IO",
      "Redis",
      "AWS",
    ],
    image: "/Vartax.webp",
    features: [
      "Send and receive messages instantly with live delivery status.",
      "Share files, images, and media during chats.",
      "See online/offline presence and realtime status updates.",
      "Secure OTP login and stable performance backed by a scalable backend.",
    ],
    bg: "vartax",
    projectLink: "https://github.com/kartikey2004-git/vartaX",
    liveLink: "https://varta-x.vercel.app",
    currentlyBuilding: false,
  },
  {
    title: "RouteX",
    slug: "routex",
    description:
      "An AI-assisted platform for designing, testing, and inspecting APIs with real-time collaboration, smart tooling, and a clean developer-first interface.",
    tech: [
      "Nextjs",
      "Better-Auth",
      "TanStack React Query",
      "Zustand",
      "AI SDK",
      "TypeScript",
      "NeonDB",
    ],
    bg: "routex",
    image: "/routex.png",
    features: [
      "Send and inspect REST requests with params, headers, and a full JSON editor.",
      "Use built-in WebSocket client to send messages and track real-time events.",
      "Organize work in shared workspaces with teammates in realtime.",
      "Generate full API requests and names instantly using built-in AI helpers.",
    ],
    projectLink: "https://github.com/kartikey2004-git/routeX",
    liveLink: "https://route-x-seven.vercel.app",
    currentlyBuilding: false,
  },
  {
    title: "Kairo",
    slug: "kairo",
    description:
      "A powerful AI-driven CLI that chats, searches, builds apps, and runs tasks on its own, all wrapped in a smooth command-line workflow.",
    tech: [
      "Node.js",
      "Commander.js",
      "Google Gemini",
      "PostgreSQL",
      "Prisma",
      "OAuth Device Flow",
      "Chalk",
      "Boxen",
      "Clack Prompts",
      "Zod",
      "Vercel AI SDK",
    ],
    image: "/projects/kairo.png",
    features: [
      "Chat with AI and pull live web results without leaving the terminal.",
      "Turn simple prompts into complete applications or useful code.",
      "Let the built-in agent run tools, execute code, and solve tasks independently.",
      "Secure your sessions and store conversation history",
    ],
    bg: "kairo",
    projectLink: "https://github.com/kartikey2004-git/Kairo",
    liveLink: "",
    currentlyBuilding: true,
  },
  {
    title: "CodeSense AI",
    slug: "codesense-ai",
    description:
      "A collaboration tool that helps teams understand code faster, stay aligned, and work with greater clarity across the entire codebase.",
    tech: [
      "Next.js",
      "AI",
      "Git Integration",
      "Audio Transcription",
      "Search Engine",
    ],
    image: "/projects/codesense.png",
    features: [
      "Generate clear, automatic documentation for any part of the codebase.",
      "Search through files, functions, and context-aware results instantly.",
      "Get AI-generated summaries for commit messages and project activity.",
      "Transcribe meetings and search past discussions with real-time context.",
    ],
    bg: "codesense",
    projectLink: "https://github.com/kartikey2004-git/CodeSense-AI",
    liveLink: "https://codesenseworks.vercel.app",
    currentlyBuilding: false,
  },
];

export const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export const technologies = [
  {
    iconname: "JavaScript",
    description: "Web scripting language",
    icon: "/svgs/js.svg",
    bgColor: "bg-yellow-500",
  },
  {
    iconname: "TypeScript",
    description: "Typed JS superset",
    icon: "/svgs/TypeScript.svg",
    bgColor: "bg-blue-600",
  },
  {
    iconname: "React",
    description: "UI library",
    icon: "/svgs/React.svg",
    bgColor: "bg-cyan-500",
  },
  {
    iconname: "Next.js",
    description: "React framework",
    icon: "/svgs/nextjs.svg",
    bgColor: "bg-gray-800",
  },
  {
    iconname: "Tailwind CSS",
    description: "Utility CSS",
    icon: "/svgs/Tailwind-CSS.svg",
    bgColor: "bg-teal-500",
  },
  {
    iconname: "Node.js",
    description: "Backend runtime",
    icon: "/svgs/Node.js.svg",
    bgColor: "bg-green-700",
  },
  {
    iconname: "Express",
    description: "Node.js framework",
    icon: "/svgs/Express.svg",
    bgColor: "bg-gray-700",
  },
  {
    iconname: "Prisma",
    description: "Node ORM",
    icon: "/svgs/prisma.svg",
    bgColor: "bg-indigo-400",
  },
  {
    iconname: "MongoDB",
    description: "NoSQL database",
    icon: "/svgs/MongoDB.svg",
    bgColor: "bg-green-600",
  },
  {
    iconname: "PostgreSQL",
    description: "Relational database",
    icon: "/svgs/PostgresSQL.svg",
    bgColor: "bg-blue-700",
  },
  {
    iconname: "SQL",
    description: "Database queries",
    icon: "/svgs/MySQL.svg",
    bgColor: "bg-indigo-500",
  },
  {
    iconname: "Vercel",
    description: "Frontend deployment",
    icon: "/svgs/Vercel.svg",
    bgColor: "bg-white/80",
  },
  {
    iconname: "Netlify",
    description: "Static hosting",
    icon: "/svgs/netlify.svg",
    bgColor: "bg-green-500",
  },
  {
    iconname: "Render",
    description: "Cloud hosting",
    icon: "/svgs/render.png",
    bgColor: "bg-purple-400",
  },
  {
    iconname: "Git",
    description: "Version control",
    icon: "/svgs/Git.svg",
    bgColor: "bg-red-500",
  },
  {
    iconname: "Firebase",
    description: "App backend",
    icon: "/svgs/Firebase.svg",
    bgColor: "bg-orange-500",
  },
  {
    iconname: "Supabase",
    description: "Open-source backend",
    icon: "/svgs/supabase.png",
    bgColor: "bg-sky-500",
  },
  {
    iconname: "Appwrite",
    description: "Backend platform",
    icon: "/svgs/Appwrite.svg",
    bgColor: "bg-red-500",
  },
  {
    iconname: "Redis",
    description: "In-memory DB",
    icon: "/svgs/Redis.svg",
    bgColor: "bg-red-600",
  },
  {
    iconname: "RabbitMQ",
    description: "Message broker",
    icon: "/svgs/RabbitMQ.svg",
    bgColor: "bg-pink-500",
  },
  {
    iconname: "ShadCN",
    description: "UI components",
    icon: "/svgs/shadcn.png",
    bgColor: "bg-indigo-400",
  },
  {
    iconname: "Framer Motion",
    description: "Animations",
    icon: "/svgs/framer.svg",
    bgColor: "bg-pink-500",
  },
  {
    iconname: "Clerk",
    description: "Authentication",
    icon: "/svgs/clerkk.png",
    bgColor: "bg-orange-500",
  },
  {
    iconname: "Postman",
    description: "API testing",
    icon: "/svgs/Postman.svg",
    bgColor: "bg-orange-400",
  },
  {
    iconname: "HTML",
    description: "Markup language",
    icon: "/svgs/HTML5.svg",
    bgColor: "bg-orange-500",
  },
  {
    iconname: "CSS",
    description: "Styling language",
    icon: "/svgs/CSS3.svg",
    bgColor: "bg-blue-500",
  },
  {
    iconname: "C++",
    description: "High-performance language",
    icon: "/svgs/C++.svg",
    bgColor: "bg-purple-700",
  },
  {
    iconname: "Python",
    description: "Versatile programming",
    icon: "/svgs/Python.svg",
    bgColor: "bg-green-500",
  },
];

export const skills = [
  { src: "/svgs/React.svg", label: "React" },
  { src: "/svgs/js.svg", label: "JavaScript" },
  { src: "/svgs/TypeScript.svg", label: "TypeScript" },
  { src: "/svgs/Node.js.svg", label: "Node.js" },
  { src: "/svgs/PostgresSQL.svg", label: "PostgreSQL" },
  { src: "/svgs/MongoDB.svg", label: "MongoDB" },
];

export const gradientMap = {
  codesense: "bg-[#F2F2F2]",
  routex: "bg-white/90",
  kairo: "bg-[#212326]",
  vartax: "bg-[#101218]",
  connectify: "bg-[#F2F2F2]",
  shortenx: "bg-[#F2F2F2]",
  jobconnect: "bg-white/90",
};

export const products = [
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/b.webp",
  },
  {
    title: "Shadcn UI",
    link: "https://ui.shadcn.com",
    thumbnail: "/shadcn.png",
  },
  {
    title: "Hero UI",
    link: "https://heroui.com",
    thumbnail: "/hero.png",
  },
  {
    title: "Chakra UI",
    link: "https://chakra-ui.com",
    thumbnail: "https://chakra-ui.com/og-image.png",
  },
  {
    title: "Reactbits.dev",
    link: "https://reactbits.dev",
    thumbnail: "/a.webp",
  },
  {
    title: "Motion Primitives",
    link: "https://motion-primitives.com",
    thumbnail: "/motion-primitives.png",
  },
  {
    title: "21st.dev",
    link: "https://21st.dev",
    thumbnail: "/21st-dev.png",
  },

  {
    title: "Hero UI",
    link: "https://heroui.com",
    thumbnail: "/hero.png",
  },
  {
    title: "Chakra UI",
    link: "https://chakra-ui.com",
    thumbnail: "https://chakra-ui.com/og-image.png",
  },
  {
    title: "Reactbits.dev",
    link: "https://reactbits.dev",
    thumbnail: "/a.webp",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/b.webp",
  },
  {
    title: "Shadcn UI",
    link: "https://ui.shadcn.com",
    thumbnail: "/shadcn.png",
  },
  {
    title: "Motion Primitives",
    link: "https://motion-primitives.com",
    thumbnail: "/motion-primitives.png",
  },
  {
    title: "21st.dev",
    link: "https://21st.dev",
    thumbnail: "/21st-dev.png",
  },
];

export const navLinks = [
  {
    title: "Home",
    description: "Back to the main section",
    icon: (
      <IconHome className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#hero",
  },
  {
    title: "Projects",
    description: "Some of my recent work and experiments",
    icon: (
      <FiFolder className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#projects",
  },
  {
    title: "How I Build",
    description: "What I’m good at and tools I use",
    icon: (
      <FiBookOpen className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#how-i-build",
  },
  {
    title: "Testimonials",
    description: "What people say about my work",
    icon: <FiMail className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />,
    href: "#testimonials",
  },
  {
    title: "GitHub",
    description: "Explore my code and open-source projects",
    icon: (
      <IconBrandGithub className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#github",
  },
];

export const highlights = [
  {
    Icon: Server,
    text: "Full-stack architecture",
  },
  {
    Icon: Zap,
    text: "Real-time systems",
  },
  {
    Icon: Cpu,
    text: "Performance-first backend",
  },
  {
    Icon: Brain,
    text: "Practical AI integration",
  },
];

export const highlightsData = [
  {
    heading: "Who Am I?",
    text:
      "I architect full-stack applications that don't fall apart at 3 AM. " +
      "React, Node.js, real-time systems, and the occasional AI integration " +
      "when it actually makes sense (not everything needs GPT-5). " +
      "Currently building tools that developers actually want to use.",
    subheading:
      "“If you're scared to deploy on Friday, that's an architecture problem.”",
  },
];

export const testimonials = [
  {
    name: "Dewank Rastogi",
    role: "Core Contributor",
    company: "Elixir Tech Community",
    content:
      "Kartikey's leadership on the Elixir Tech website redesign was exceptional. His full-stack expertise and attention to performance optimization helped us achieve 40% faster load times.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Dewank Rastogi",
    metric: "40%",
  },
  {
    name: "Granth Agarwal",
    role: "GFGX Elixir Lead",
    company: "GFG ABESEC Chapter",
    content:
      "Working with Kartikey on the GFGX Elixir platform was incredible. His technical vision and ability to deliver complex features under tight deadlines made our community platform a huge success.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Granth Agarwal",
    metric: "3x",
  },
  {
    name: "Vaibhav Tripathi",
    role: "Project Contributor",
    company: "GFG ABESEC Chapter",
    content:
      "Kartikey's architectural decisions on our community projects were spot-on. The real-time features he built for our platforms have significantly improved user engagement.",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Vaibhav Tripathi",
    metric: "60%",
  },
];
