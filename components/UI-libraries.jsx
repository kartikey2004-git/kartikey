"use client";

import { Chapters } from "@/app/data/index";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import Link from "next/link";

const ChapterSection = () => {
  return (
    <div className="py-20 mb-10 bg-background text-foreground">
      <h2
        className={`text-3xl md:text-5xl font-dancing mb-6 flex items-center justify-center`}
      >
        <span className="text-foreground">
          UI Libraries 
        </span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-20 mt-10">
        {Chapters.map((item, idx) => (
          <div
            className="h-auto w-64 flex items-center justify-center"
            key={idx}
          >
            <Link href={item.link} target="_blank">
              <PinContainer title={item.title} href={item.link}>
                <div
                  className={`flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 bg-card border border-border rounded-xl ${
                    idx == 1
                      ? "md:w-[18rem] md:h-[22rem] w-[16rem] h-[20rem]"
                      : "w-[16rem] h-[20rem]"
                  }`}
                >
                  <h3 className="max-w-xs !pb-2 !m-0 font-normal text-base text-foreground">
                    {item.title}
                  </h3>
                  <div className="text-sm !m-0 !p-0 font-normal">
                    <span className="text-muted-foreground">{item.des}</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg object-contain mt-4">
                    <Image
                      src={item.img}
                      alt="tect"
                      width={350}
                      height={200}
                      className="flex flex-1 w-full rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChapterSection;
