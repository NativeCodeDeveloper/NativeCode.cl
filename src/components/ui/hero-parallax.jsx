"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "motion/react";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Runa Joyas",
    link: "https://runajoyas.cl/",
    thumbnail: "/runajoyas1.png",
  },
  {
    title: "JPA Ingeniería",
    link: "https://jpaingenieriasolutions.cl/",
    thumbnail: "/jpaing.png",
  },
  {
    title: "Medify.cl",
    link: "https://medify.cl/",
    thumbnail: "/medifyport.png",
  },
  {
    title: "Macar-Repuestos",
    link: "https://www.repuestosmacar.cl/",
    thumbnail: "/macarrep.png",
  },
  {
    title: "Dennis Psicología",
    link: "https://dennispsicologia.cl/",
    thumbnail: "/dennismed.png",
  },
  {
    title: "JPA Ingeniería - Proyecto 3",
    link: "https://jpaingenieriasolutions.cl/",
    thumbnail: "/jpa.png",
  },
  {
    title: "Runa Joyas - Proyecto 4",
    link: "https://runajoyas.cl/",
    thumbnail: "/runa.png",
  },
  {
    title: "JPA Ingeniería - Proyecto 4",
    link: "https://jpaingenieriasolutions.cl/",
    thumbnail: "/jpa.png",
  },
  {
    title: "Runa Joyas - Proyecto 5",
    link: "https://runajoyas.cl/",
    thumbnail: "/runa.png",
  },
  {
    title: "JPA Ingeniería - Proyecto 5",
    link: "https://jpaingenieriasolutions.cl/",
    thumbnail: "/jpa.png",
  },
  {
    title: "Runa Joyas - Proyecto 6",
    link: "https://runajoyas.cl/",
    thumbnail: "/runa.png",
  },
  {
    title: "JPA Ingeniería - Proyecto 6",
    link: "https://jpaingenieriasolutions.cl/",
    thumbnail: "/jpa.png",
  },
  {
    title: "Runa Joyas - Proyecto 7",
    link: "https://runajoyas.cl/",
    thumbnail: "/runa.png",
  },
  {
    title: "JPA Ingeniería - Proyecto 7",
    link: "https://jpaingenieriasolutions.cl/",
    thumbnail: "/jpa.png",
  },
  {
    title: "Runa Joyas - Proyecto 8",
    link: "https://runajoyas.cl/",
    thumbnail: "/runa.png",
  },
];

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 60, damping: 25, bounce: 0 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[320vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      style={{ willChange: 'transform' }}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        Nuestro <br /> Portafolio
      </h1>
      <p className="max-w-2xl text-justify text-base md:text-xl mt-8 text-gray-300">
        Algunos de los proyectos que ya confían en <span className="text-indigo-400 font-semibold">NativeCode</span>.
        Combinamos diseño y performance para entregar productos digitales sólidos, escalables y fáciles de usar.
      </p>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
        willChange: 'transform',
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-[26rem] w-[28rem] relative shrink-0"
    >
      <a
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height="700"
          width="700"
          loading="lazy"
          decoding="async"
          className="object-cover object-top absolute h-full w-full inset-0 rounded-2xl ring-1 ring-white/10"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-gradient-to-t from-black/90 via-black/60 to-transparent pointer-events-none rounded-2xl transition-opacity duration-200"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-xl font-semibold drop-shadow-[0_0_12px_rgba(99,102,241,0.5)] transition-opacity duration-200">
        {product.title}
      </h2>
    </motion.div>
  );
};
