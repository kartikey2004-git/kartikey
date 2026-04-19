"use client";

import {
  BsChevronRight,
  BsSend,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsRocket,
  BsCodeSlash,
  BsCupHot,
  BsBug,
  BsFileText,
} from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaXTwitter as FaXTwitterIcon } from "react-icons/fa6";
import { FileUser } from "lucide-react"
import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import FlipWords from "@/components/ui/flip-words";

const Hero = () => {
  const iconClasses =
    "h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground transition hover:text-foreground";

  const roles = [
    "Developer",
    "Engineer",
    "Learner",
    "Builder",
  ];

  return (
    <section
      id="hero"
      className="relative w-full border-b border-border bg-background py-6 sm:py-12 md:py-14"
    >
      <div className="mx-auto w-full max-w-4xl px-3 sm:px-5">
        <div className="flex flex-col gap-4 sm:gap-6 text-left">

          {/* profile */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28">
              <Image
                src="/toji.png"
                alt="Kartikey"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 96px, 112px"
                priority
              />
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold truncate">
                Hi, I'm Kartikey  |

                <span className="text-[10px] sm:text-[10px] md:text-[11px] lg:text-[11px] uppercase tracking-[0.15em] text-muted-foreground ml-2">
                  Ghaziabad, India
                </span>
              </h1>

              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-lg md:text-xl lg:text-xl uppercase tracking-tight text-muted-foreground">
                  21 ,
                </span>
                <FlipWords
                  words={roles}
                  duration={2000}
                  className="text-md sm:text-lg md:text-xl lg:text-xl text-muted-foreground"
                />
              </div>

              <p className="text-sm sm:text-base md:text-lg lg:text-lg text-muted-foreground leading-relaxed mt-2">
                Build your own internal compass for navigating new territories.
              </p>
            </div>
          </div>

          {/* heading */}
          <h2 className="max-w-3xl text-base sm:text-xl md:text-2xl lg:text-2xl font-semibold leading-tight -mb-4">
            Engineer at caffeine
          </h2>

          {/* description */}
          <p className="max-w-2xl text-xs sm:text-base md:text-lg lg:text-lg text-muted-foreground leading-relaxed">
            Learning | Building | Shipping
          </p>

          {/* socials */}
          <div className="flex items-center gap-4 flex-wrap">
            <TooltipProvider delayDuration={100}>
              {[
                {
                  icon: <FaXTwitterIcon className={iconClasses} />,
                  link: "https://x.com/kartikeybuilds",
                  label: "Twitter",
                },
                {
                  icon: <BsLinkedin className={iconClasses} />,
                  link: "https://www.linkedin.com/in/kartikey-bhatnagar-2702a4337",
                  label: "LinkedIn",
                },
                {
                  icon: <BsGithub className={iconClasses} />,
                  link: "https://github.com/kartikey2004-git",
                  label: "GitHub",
                },
                {
                  icon: <BsInstagram className={iconClasses} />,
                  link: "https://www.instagram.com/_k4rtik.exe",
                  label: "Instagram",
                },
                {
                  icon: <FileUser className={iconClasses} />,
                  link: "https://drive.google.com/file/d/1eyrmowrL6wTZLZEx5cpDHqG20rK9nGnc/view",
                  label: "Resume",
                },
              ].map((item, i) => (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>
                    <a href={item.link} target="_blank">
                      {item.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>{item.label}</TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>

          <div className="mt-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4">
            {[
              {
                Icon: BsRocket,
                value: "Ship Fast",
                label: "From idea to production",
              },
              {
                Icon: BsCodeSlash,
                value: "Clean Code",
                label: "Readable, maintainable systems",
              },
              {
                Icon: FiSearch,
                value: "Break Things",
                label: "Then understand why",
              },
            ].map(({ Icon, value, label }, idx) => (
              <div key={idx} className="min-w-0">
                {/* Top row */}
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 text-muted-foreground shrink-0" />

                  {/* Value → always single line */}
                  <span className="text-md sm:text-lg md:text-xl lg:text-xl font-semibold leading-none whitespace-nowrap">
                    {value}
                  </span>
                </div>

                {/* Label → controlled wrap (max 2 lines) */}
                <p className="mt-1 text-[12px] sm:text-sm md:text-base lg:text-base text-muted-foreground leading-tight line-clamp-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;