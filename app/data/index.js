import {
  CiFolderOn,
  FiBookOpen,
  FiFileText,
  IoHomeOutline,
} from "@/lib/icons";

export const projects = [
  {
    title: "ShortenX",
    slug: "shorten-x",
    description:
      "Turns long URLs into short, trackable links. Supabase handles auth and storage, and every link gets click analytics plus a dashboard to edit or kill it.",
    tech: [
      "React",
      "Vite",
      "Supabase",
      "React Router",
      "QR Code Generation",
      "Analytics Dashboard",
      "Material UI",
      "Yup Validation",
    ],
    image: "/shortener.png",
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
      "A job portal with real role-based access: candidates apply and track status, recruiters post listings and move applicants through stages, all backed by Supabase.",
    tech: [
      "React",
      "Vite",
      "Supabase",
      "Clerk Authentication",
      "React Hook Form",
      "Zod",
      "Markdown Editor",
      "Shadcn UI",
    ],
    image: "/job-portal.png",
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
      "Calendly-style scheduling: define event types, share a booking link, and manage meetings from one dashboard. Clerk handles auth, Prisma and Neon handle the data.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Clerk Authentication",
      "Shadcn UI",
    ],
    image: "/connectify.png",
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
    title: "Kairo",
    slug: "kairo",
    description:
      "An AI-native CLI: chat, search the web, scaffold apps, and hand tasks to an agent that runs tools on its own, without leaving the terminal. OAuth device flow keeps sessions secure.",
    tech: [
      "TypeScript",
      "Express.js",
      "Google Gemini",
      "AI SDK",
      "CLI Development",
      "Prisma",
      "Better Auth",
      "Next.js",
    ],
    image: "/kairoo.png",
    features: [
      "Chat with AI and pull live web results without leaving the terminal.",
      "Turn simple prompts into complete applications or useful code.",
      "Let the built-in agent run tools, execute code, and solve tasks independently.",
      "Secure your sessions and store conversation history",
    ],
    bg: "kairo",
    projectLink: "https://github.com/kartikey2004-git/Kairo",
    liveLink: "",
    currentlyBuilding: false,
  },
  {
    title: "VartaX",
    slug: "vartax",
    description:
      "A real-time chat app built to survive load: Socket.IO for live delivery, RabbitMQ for message queuing, Redis for presence and caching, AWS behind file and media sharing.",
    tech: [
      "Next.js",
      "Express.js",
      "Websockets",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "JWT Authentication",
      "Cloudinary",
    ],
    image: "/vartax.png",
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
    title: "MarkStack",
    slug: "markstack",
    description:
      "One workspace for creators: an AI-assisted markdown editor with live preview, an Excalidraw canvas for diagrams, one-click blog publishing, and a built-in task planner.",
    tech: [
      "TypeScript",
      "Next.js",
      "Monaco Editor",
      "Excalidraw",
      "Prisma",
      "Better Auth",
      "Google Gemini",
      "Markdown/MDX",
    ],
    image: "/markstack.png",
    features: [
      "AI-powered markdown editor with real-time preview.",
      "Visual canvas for diagrams and brainstorming.",
      "Publish markdown as SEO-optimized blog posts.",
      "Built-in task planner with calendar view.",
    ],
    bg: "markstack",
    projectLink: "https://github.com/kartikey2004-git/markstack",
    liveLink: "https://markstack-app.vercel.app",
    currentlyBuilding: false,
  },
  {
    title: "RouteX",
    slug: "routex",
    description:
      "A Postman alternative for API design and testing: REST requests, a WebSocket client for real-time events, shared workspaces for teams, and AI helpers that generate requests for you.",
    tech: [
      "TypeScript",
      "Next.js",
      "Better Auth",
      "Prisma",
      "PostgreSQL",
      "TanStack Query",
      "Zustand",
      "Google Gemini",
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
    title: "CodeSense AI",
    slug: "codesense-ai",
    description:
      "Helps teams actually understand a codebase: auto-generated docs, context-aware code search, AI commit and activity summaries, and meeting transcripts with searchable context.",
    tech: [
      "TypeScript",
      "Next.js",
      "tRPC",
      "PostgreSQL",
      "Prisma",
      "LLMs & AI SDK",
      "AWS S3",
      "React Query",
    ],
    image: "/codesense-ai.png",
    features: [
      "Generate clear, automatic documentation for any part of the codebase.",
      "Search through files, functions, and context-aware results instantly.",
      "Get AI-generated summaries for commit messages and project activity.",
      "Transcribe meetings and search past discussions with real-time context.",
    ],
    bg: "codesense",
    projectLink: "https://github.com/kartikey2004-git/CodeSense-AI",
    liveLink: "",
    currentlyBuilding: false,
  },
  {
    title: "SQLFlow",
    slug: "sqlflow",
    description:
      "A multi-tenant SQL learning platform with isolated PostgreSQL sandboxes for executing and grading student queries. It separates assignment data from execution infrastructure while keeping user workloads isolated.",
    tech: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Monaco Editor",
    ],
    image: "/sql.png",
    features: [
      "Isolated PostgreSQL sandbox for every user.",
      "Dynamic database provisioning from assignment schemas.",
      "Order-independent SQL result comparison and grading.",
      "Separate MongoDB and PostgreSQL workloads with TTL-based audit logs.",
    ],
    bg: "sqlflow",
    projectLink: "https://github.com/kartikey2004-git/SQLFlow",
    liveLink: "",
    currentlyBuilding: false,
  },
  {
    title: "Kyron",
    slug: "kyron",
    description:
      "An AI-powered code review system that understands a repository's structure, retrieves relevant code context, and automatically reviews GitHub pull requests for bugs, security issues, and code quality.",
    tech: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Inngest",
      "Tree-sitter",
      "pgvector",
      "Gemini",
      "Redis",
      "Octokit",
      "RAG",
      "OpenTelemetry",
    ],
    image: "/kryon.png",
    features: [
      "AST-based repository indexing with Tree-sitter for structure-aware code analysis.",
      "Semantic code retrieval using pgvector and HNSW to provide relevant context during PR reviews.",
      "Incremental indexing that avoids re-processing unchanged code and reduces embedding costs.",
      "Automated GitHub PR summaries, inline review suggestions, and bug and security vulnerability detection.",
      "Durable background review workflows with crash recovery, retries, and rate-limit handling.",
    ],
    bg: "kyron",
    projectLink: "https://github.com/kartikey2004-git/AI-Code-Review",
    liveLink: "https://ai-code-review-sandy.vercel.app",
    currentlyBuilding: false,
  },
  {
    title: "YSync",
    slug: "ysync",
    description:
      "A real-time collaborative text editor built from scratch around a custom sequence CRDT. It handles concurrent edits, offline changes, presence, and reconnects while keeping replicas conflict-free.",
    tech: [
      "TypeScript",
      "Node.js",
      "WebSockets",
      "React",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "IndexedDB",
      "Sequence CRDT",
    ],
    image: "/ysync.png",
    features: [
      "Custom RGA-based sequence CRDT for conflict-free editing.",
      "Real-time cursor and selection presence across clients.",
      "Offline-first editing with CRDT-based merge on reconnect.",
      "Persistent operation log with snapshots and tombstone garbage collection.",
    ],
    bg: "ysync",
    projectLink: "https://github.com/kartikey2004-git/ysync",
    liveLink: "https://ysync-web.kartikeybhatnagar247.workers.dev",
    currentlyBuilding: true,
  },
];

export const techCategories = [
  "Languages & Data",
  "Backend & Web",
  "DevOps & Infrastructure",
  "Observability",
];

export const technologies = [
  {
    iconname: "JavaScript",
    description: "Web scripting language",
    icon: "/svgs/js.svg",
    bgColor: "bg-yellow-500",
    category: "Languages & Data",
  },
  {
    iconname: "TypeScript",
    description: "Typed JS superset",
    icon: "/svgs/TypeScript.svg",
    bgColor: "bg-blue-600",
    category: "Languages & Data",
  },
  {
    iconname: "React",
    description: "UI library",
    icon: "/svgs/React.svg",
    bgColor: "bg-cyan-500",
    category: "Backend & Web",
  },
  {
    iconname: "Next.js",
    description: "React framework",
    icon: "/svgs/nextjs.svg",
    iconLight: "/svgs/nextjs-light.svg",
    bgColor: "bg-gray-800",
    category: "Backend & Web",
  },
  {
    iconname: "Tailwind CSS",
    description: "Utility CSS",
    icon: "/svgs/Tailwind-CSS.svg",
    bgColor: "bg-teal-500",
    category: "Backend & Web",
  },
  {
    iconname: "Node.js",
    description: "Backend runtime",
    icon: "/svgs/Node.js.svg",
    bgColor: "bg-green-700",
    category: "Backend & Web",
  },
  {
    iconname: "Express",
    description: "Node.js framework",
    icon: "/svgs/Express.svg",
    iconLight: "/svgs/Express-light.svg",
    bgColor: "bg-gray-700",
    category: "Backend & Web",
  },
  {
    iconname: "Prisma",
    description: "Node ORM",
    icon: "/svgs/prisma.svg",
    bgColor: "bg-indigo-400",
    category: "Backend & Web",
  },
  {
    iconname: "MongoDB",
    description: "NoSQL database",
    icon: "/svgs/MongoDB.svg",
    bgColor: "bg-green-600",
    category: "Languages & Data",
  },
  {
    iconname: "PostgreSQL",
    description: "Relational database",
    icon: "/svgs/PostgresSQL.svg",
    bgColor: "bg-blue-700",
    category: "Languages & Data",
  },
  {
    iconname: "SQL",
    description: "Database queries",
    icon: "/svgs/MySQL.svg",
    bgColor: "bg-indigo-500",
    category: "Languages & Data",
  },
  {
    iconname: "Vercel",
    description: "Frontend deployment",
    icon: "/svgs/Vercel.svg",
    iconLight: "/svgs/Vercel-light.svg",
    bgColor: "bg-white/80",
    category: "DevOps & Infrastructure",
  },
  {
    iconname: "Netlify",
    description: "Static hosting",
    icon: "/svgs/netlify.svg",
    bgColor: "bg-green-500",
    category: "DevOps & Infrastructure",
  },
  {
    iconname: "Render",
    description: "Cloud hosting",
    icon: "/svgs/render.png",
    bgColor: "bg-purple-400",
    category: "DevOps & Infrastructure",
  },
  {
    iconname: "Git",
    description: "Version control",
    icon: "/svgs/Git.svg",
    bgColor: "bg-red-500",
    category: "DevOps & Infrastructure",
  },
  {
    iconname: "Firebase",
    description: "App backend",
    icon: "/svgs/Firebase.svg",
    bgColor: "bg-orange-500",
    category: "Backend & Web",
  },
  {
    iconname: "Supabase",
    description: "Open-source backend",
    icon: "/svgs/supabase.png",
    bgColor: "bg-sky-500",
    category: "Backend & Web",
  },
  {
    iconname: "Appwrite",
    description: "Backend platform",
    icon: "/svgs/Appwrite.svg",
    bgColor: "bg-red-500",
    category: "Backend & Web",
  },
  {
    iconname: "Redis",
    description: "In-memory DB",
    icon: "/svgs/Redis.svg",
    bgColor: "bg-red-600",
    category: "Languages & Data",
  },
  {
    iconname: "RabbitMQ",
    description: "Message broker",
    icon: "/svgs/RabbitMQ.svg",
    bgColor: "bg-pink-500",
    category: "DevOps & Infrastructure",
  },
  {
    iconname: "ShadCN",
    description: "UI components",
    icon: "/svgs/shadcn.png",
    bgColor: "bg-indigo-400",
    category: "Backend & Web",
  },
  {
    iconname: "Framer Motion",
    description: "Animations",
    icon: "/svgs/framer.svg",
    iconLight: "/svgs/framer-light.svg",
    bgColor: "bg-pink-500",
    category: "Backend & Web",
  },
  {
    iconname: "Clerk",
    description: "Authentication",
    icon: "/svgs/clerkk.png",
    bgColor: "bg-orange-500",
    category: "Backend & Web",
  },
  {
    iconname: "Postman",
    description: "API testing",
    icon: "/svgs/Postman.svg",
    bgColor: "bg-orange-400",
    category: "Backend & Web",
  },
  {
    iconname: "HTML",
    description: "Markup language",
    icon: "/svgs/HTML5.svg",
    bgColor: "bg-orange-500",
    category: "Languages & Data",
  },
  {
    iconname: "CSS",
    description: "Styling language",
    icon: "/svgs/CSS3.svg",
    bgColor: "bg-blue-500",
    category: "Languages & Data",
  },
  {
    iconname: "C++",
    description: "High-performance language",
    icon: "/svgs/C++.svg",
    bgColor: "bg-purple-700",
    category: "Languages & Data",
  },
  {
    iconname: "Python",
    description: "Versatile programming",
    icon: "/svgs/Python.svg",
    bgColor: "bg-green-500",
    category: "Languages & Data",
  },
  {
    iconname: "Docker",
    description: "Containerization",
    icon: "/svgs/docker.svg",
    iconLight: "/svgs/docker-light.svg",
    bgColor: "bg-blue-500",
    category: "DevOps & Infrastructure",
  },
  {
    iconname: "AWS",
    description: "Cloud platform",
    icon: "/svgs/AWS.svg",
    iconLight: "/svgs/AWS-light.svg",
    bgColor: "bg-orange-500",
    category: "DevOps & Infrastructure",
  },
  {
    iconname: "Prometheus",
    description: "Metrics & monitoring",
    icon: "/svgs/Prometheus.svg",
    iconLight: "/svgs/Prometheus-light.svg",
    bgColor: "bg-orange-600",
    category: "Observability",
  },
  {
    iconname: "Alertmanager",
    description: "Alert routing",
    icon: "/svgs/Alertmanager.svg",
    iconLight: "/svgs/Alertmanager-light.svg",
    bgColor: "bg-orange-600",
    category: "Observability",
  },
  {
    iconname: "Loki",
    description: "Log aggregation",
    icon: "/svgs/Loki.svg",
    iconLight: "/svgs/Loki-light.svg",
    bgColor: "bg-orange-500",
    category: "Observability",
  },
  {
    iconname: "Tempo",
    description: "Distributed tracing",
    icon: "/svgs/Tempo.svg",
    iconLight: "/svgs/Tempo-light.svg",
    bgColor: "bg-orange-500",
    category: "Observability",
  },
  {
    iconname: "OpenTelemetry",
    description: "Observability framework",
    icon: "/svgs/OpenTelemetry.svg",
    iconLight: "/svgs/OpenTelemetry-light.svg",
    bgColor: "bg-neutral-800",
    category: "Observability",
  },
  {
    iconname: "ELK Stack",
    description: "Log search & analytics",
    icon: "/svgs/Elastic.svg",
    iconLight: "/svgs/Elastic-light.svg",
    bgColor: "bg-teal-700",
    category: "Observability",
  },
  {
    iconname: "k6",
    description: "Load testing",
    icon: "/svgs/k6.svg",
    iconLight: "/svgs/k6-light.svg",
    bgColor: "bg-violet-600",
    category: "Observability",
  },
];

export const navLinks = [
  {
    title: "Home",
    description: "Back to the main section",
    icon: (
      <IoHomeOutline className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Projects",
    description: "Some of my recent work and experiments",
    icon: (
      <CiFolderOn className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/projects",
  },
  {
    title: "Blogs",
    description: "Thoughts, ideas, and tutorials",
    icon: (
      <FiBookOpen className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/blogs",
  },
  {
    title: "Resume",
    description: "Preview and download my resume",
    icon: (
      <FiFileText className="h-5 w-5 text-neutral-500 dark:text-neutral-300" />
    ),
    href: "/resume",
  },
];

export const highlightsData = [
  {
    heading: "Who Am I?",
    paragraphs: [
      "I like building systems from the ground up and understanding the trade-offs behind them. Most of my time goes into figuring out what's happening underneath the abstractions especially when something breaks, needs to scale, or needs to be made more reliable and fault-tolerant. I enjoy building the infrastructure around products just as much as building the products themselves.",
      "I'm usually building something, shipping it, breaking it, and figuring out why it broke. When I'm not coding, I'm probably reading an engineering article, scrolling through tech Twitter, or getting lost in a good sci-fi book. And when I've completely fucked up, you'll probably find me chilling with the homies.",
    ],
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

export const listen = [
  {
    id: "1",
    title: "Tere Bina",
    artist: "A.R. Rahman, Chinmayi, Murtuza Khan, Qadir Khan",
    duration: "5:09",
    url: "https://open.spotify.com/track/4FeczSomVWVyU4FW7xDeAI",
  },
  {
    id: "2",
    title: "Ishq de Fanniyar - Female Version",
    artist: "Jyotica Tangri, Kumaar",
    duration: "2:57",
    url: "https://open.spotify.com/track/6JARNpkUypyzQEltxZM95O",
  },
  {
    id: "3",
    title: "bargad",
    artist: "sufr, Arpit Bala, toorjo dey",
    duration: "2:55",
    url: "https://open.spotify.com/track/0Q9rHyEG7lME4y2Fqtuxgl",
  },
  {
    id: "4",
    title: "Sahiba",
    artist: "Aditya Rikhari",
    duration: "3:10",
    url: "https://open.spotify.com/track/0eLtIxPRNJfsmehITZ1qaJ",
  },
  {
    id: "5",
    title: "Ik Kudi",
    artist: "wolf.cryman, Arpit Bala",
    duration: "3:51",
    url: "https://open.spotify.com/track/7h79u6jChrCZfnwCnt20LF",
  },
];

export const movies = [
  {
    id: "1",
    title: "Project Hail Mary",
    year: "2026",
    genre: ["sci-fi", "space"],
    note: "hard sci-fi + problem solving + survival in space",
  },
  {
    id: "2",
    title: "Interstellar",
    year: "2014",
    genre: ["sci-fi", "space", "drama"],
    note: "time dilation, relativity, emotional storytelling",
  },
  {
    id: "3",
    title: "The Martian",
    year: "2015",
    genre: ["sci-fi", "survival"],
    note: "engineering mindset + problem solving under constraints",
  },
  {
    id: "4",
    title: "Inception",
    year: "2010",
    genre: ["sci-fi", "thriller"],
    note: "layered systems, recursion, mental models",
  },
  {
    id: "5",
    title: "Oppenheimer",
    year: "2023",
    genre: ["biography", "drama"],
    note: "engineering, consequences, real-world impact",
  },
];

export const moviesMeta = {
  identity: ["kartikey.dev", "watchlist.log"],
  headline: "Systems, Space, and Stories that make you think",
  subtext:
    "A curated list of movies that align with how I think problem solving, systems, and human decisions under pressure.",
  tags: ["sci-fi", "engineering", "systems thinking"],
  quote:
    '"The universe is under no obligation to make sense to you." — Neil deGrasse Tyson',
};

export const listenMeta = {
  identity: ["kartikey.dev", "listening.log"],

  headline: "What's playing while the build runs",

  subtext:
    "A rotating stack of tracks for when the code needs company late nights, long diffs, and everything in between.",

  persona: [
    "in the zone",
    "3am compiler",
    "bug hunting",
    "one more commit",
    "shipping anyway",
    "refactor mode",
  ],

  tags: ["flow state", "headphones on", "do not disturb", "caffeine + bpm"],

  quote:
    '"Music is the compiler flag that makes everything run faster." — me, justifying my setup',
};

export const gear = {
  tools: [
    {
      category: "editors & IDEs",
      items: ["VS Code", "WebStorm", "PyCharm", "Zed", "Cursor"],
    },
    {
      category: "AI coding agents",
      items: ["Devin", "Trae", "Qoder", "Antigravity", "OpenCode", "LM Studio"],
    },
    {
      category: "terminal",
      items: ["PowerShell", "Git Bash", "Windows Terminal", "Warp"],
    },
    {
      category: "database",
      items: [
        "Docker Desktop",
        "DBeaver",
        "MongoDB Compass",
        "MySQL Workbench",
      ],
    },
    {
      category: "API & testing",
      items: ["Postman", "Insomnia", "Requestly"],
    },
    {
      category: "productivity",
      items: ["Wispr Flow", "Comet", "Loom", "OBS Studio", "MEGAsync"],
    },
    {
      category: "communication",
      items: ["Telegram", "Discord", "X"],
    },
  ],

  system: {
    processor: "Intel i3-1115G4",
    ram: "8GB",
    graphics: "Intel UHD",
    storage: "477GB SSD",
  },

  extensions: [
    "Prettier",
    "ESLint",
    "Tailwind CSS IntelliSense",
    "Git Graph",
    "Thunder Client",
    "Prisma",
    "MongoDB",
    "Live Server",
    "Material Icon Theme",
    "WakaTime",
  ],

  mobile: {
    name: "realme C67 5G",
    ui: "realme UI 6.0",
    processor: "MediaTek Dimensity 6100+",
    ram: "6GB (+4GB virtual)",
    storage: "128GB (103GB used)",
    battery: "5000 mAh",
    camera: "50MP + 2MP (rear), 8MP (front)",
  },
};

export const gearMeta = {
  identity: ["kartikey.dev", "tools.log"],
  headline: "Tools I use to build and ship",
  subtext:
    "A snapshot of my daily development environment — optimized for speed, debugging, and iteration.",
  tags: ["dev stack", "workflow", "windows"],
  quote: '"Good tools make hard problems easier."',
};
