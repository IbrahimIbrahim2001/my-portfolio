"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-background relative mt-8 mb-16"
      ref={containerRef}
    >
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-primary/5 to-primary/10  blur-xl" />
      {/* Main content container */}
      <div className="relative bg-card/80 backdrop-blur-md  border border-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-500 px-4 pb-8">
        {/* Subtle top accent line */}
        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
        <div className="max-w-3xl mx-auto pt-12">
          <div className="text-3xl flex items-center gap-2">
            <div className="h-2 w-8 bg-primary rounded-full" />
            <h2 className="text-3xl leading-none font-semibold max-w-3xl">
              Changelog from my journey
            </h2>
          </div>
          <p className=" text-sm md:text-base max-w-sm">
            I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
            a timeline of my journey.
          </p>
        </div>

        <div ref={ref} className="relative max-w-4xl mx-auto">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-4 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-secondary flex items-center justify-center">
                  <div className="size-4 rounded-full bg-accent border border-border p-2" />
                </div>
                <h3 className="hidden md:block text-lg md:pl-16 md:text-3xl font-bold ">
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <h3 className="md:hidden block text-2xl mb-4 text-left font-bold">
                  {item.title}
                </h3>
                {item.content}{" "}
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-0.5 bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 dark:via-neutral-700 to-transparent to-99%  mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-0.5 bg-linear-to-t from-primary via-secondary to-transparent from-0% via-10% rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};
