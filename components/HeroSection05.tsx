"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function HeroSection_05() {
  const gradientRef = useRef<HTMLDivElement>(null);

  const transitionVariants = {
    item: {
      hidden: {
        opacity: 0,
        filter: "blur(12px)",
        y: 12,
      },
      visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          type: "spring" as const,
          bounce: 0.3,
          duration: 1.5,
        },
      },
    },
  };

  useEffect(() => {
    if (!gradientRef.current) return;
    gsap.fromTo(
      gradientRef.current,
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.6, ease: "power3.out" },
    );
  }, []);

  return (
    <div className="p-6 overflow-hidden rounded-xl">
      <div className="relative w-full">
        <div
          ref={gradientRef}
          className="absolute inset-0 -z-10 transition-colors duration-700 dark:bg-black max-h-[90vh] rounded-2xl"
          style={{
            backgroundImage: `
                linear-gradient(180deg, #ffffff 0%, #FFEDD5 25%, #FFDAB9 50%, #FFB6C1 70%, #E0BBE4 85%, #F3E5F5 100%),
                radial-gradient(at 20% 30%, #ffffff33 0%, transparent 60%),
                radial-gradient(at 80% 70%, #f3e5f533 0%, transparent 70%)
            `,
            backgroundBlendMode: "overlay, screen",
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
          }}
        />

        <div className="pt-4 pb-10 sm:pt-6 sm:pb-12 text-center">
          <div className="relative max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-6xl text-gray-800 dark:text-gray-200 font-bold tracking-tight">
              Software a medida para impulsar tu empresa.
            </h1>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
              Diseñamos y desarrollamos soluciones tecnológicas adaptadas a las
              necesidades de tu negocio. Desde plataformas empresariales hasta
              sistemas de gestión, convertimos tus desafíos en software que
              optimiza procesos y potencia tu crecimiento.
            </p>
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
            >
              <div
                key={1}
                className="bg-foreground/10 rounded-[14px] border p-0.5"
              >
                <Button asChild size="lg" className="rounded-xl px-5 text-base">
                  <a
                    href="https://wa.me/56932912943?text=Hola%2C%20quiero%20solicitar%20una%20cotizaci%C3%B3n."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-nowrap">Solicitar una cotización →</span>
                  </a>
                </Button>
              </div>
              <div
                key={2}
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-[14px] border p-0.5"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-xl px-5 text-base bg-white text-black hover:bg-black hover:text-white"
                >
                  <a href="#metodologia">
                    <span className="text-nowrap">Conoce cómo trabajamos ↗</span>
                  </a>
                </Button>
              </div>
            </AnimatedGroup>
          </div>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.75,
                },
              },
            },
            ...transitionVariants,
          }}
        >
          <div className="relative overflow-hidden px-2">
            <div
              aria-hidden
              className="bg-gradient-to-b from-background to-background absolute inset-0 z-10 from-transparent from-35%"
            />
            <div className="inset-shadow-2xs max-h-[40vh] ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-t-2xl border border-gray-50 border-b-0 p-4 shadow-lg shadow-zinc-950/15 ring-1">
              <Link
                href="https://ruixen.com?utm_source=21st.dev&utm_medium=hero_section_05&utm_campaign=ruixen"
                target="_blank"
              >
                <Image
                  className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                  src="https://cdn.21st.dev/assets/localized/00b99ba644f75f048140ddd20c947ffda5bac3823c31b743f15932ef747d8b23.png"
                  alt="app screen"
                  width={2700}
                  height={1440}
                  unoptimized
                />
                <Image
                  className="z-2 border-border/25 aspect-15/8 relative rounded-2xl dark:hidden"
                  src="https://cdn.21st.dev/assets/localized/6f643e9b131c95a2d7caaab9628e9b3705e5a0aa35be8de19bada8b4e1c1c8d7.png"
                  alt="app screen"
                  width={2700}
                  height={1440}
                  unoptimized
                />
              </Link>
            </div>
          </div>
        </AnimatedGroup>
      </div>
      <BrandsGrid />
    </div>
  );
}

export const BrandsGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const brands = [
    { name: "Google", logo: "/nuevasimg/google.png" },
    { name: "WhatsApp", logo: "/nuevasimg/whatsapp.png" },
    { name: "Mercado Pago", logo: "/nuevasimg/mpago.png" },
    { name: "Brevo", logo: "/nuevasimg/brev.png" },
    { name: "SII", logo: "/nuevasimg/ls.png" },
    { name: "Visa", logo: "/nuevasimg/qewqwe.png" },
    { name: "Twilio", logo: "/nuevasimg/twilio.png" },
  ];

  return (
    <div ref={ref} className={cn("py-8", className)} {...props}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-4">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="relative h-20 w-[calc(50%-0.5rem)] sm:h-28 sm:w-[calc(25%-0.75rem)]"
            >
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

BrandsGrid.displayName = "BrandsGrid";

type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur"
  | "blur-slide"
  | "zoom"
  | "flip"
  | "bounce"
  | "rotate"
  | "swing";

type AnimatedGroupProps = {
  children: ReactNode;
  className?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants: Record<
  PresetType,
  { container: Variants; item: Variants }
> = {
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  },
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  },
  "blur-slide": {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(4px)", y: 20 },
      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
  },
  zoom: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.5 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring" as const, stiffness: 300, damping: 20 },
      },
    },
  },
  flip: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotateX: -90 },
      visible: {
        opacity: 1,
        rotateX: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 20 },
      },
    },
  },
  bounce: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: -50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 400, damping: 10 },
      },
    },
  },
  rotate: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -180 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring" as const, stiffness: 200, damping: 15 },
      },
    },
  },
  swing: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, rotate: -10 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: { type: "spring" as const, stiffness: 300, damping: 8 },
      },
    },
  },
};

function AnimatedGroup({
  children,
  className,
  variants,
  preset,
}: AnimatedGroupProps) {
  const selectedVariants = preset
    ? presetVariants[preset]
    : { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

export { AnimatedGroup };
