"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: "Runa Joyas",
    link: "https://runajoyas.cl/",
    thumbnail: "/runajoyas1.png",
    description: "E-commerce de joyería artesanal"
  },
  {
    title: "JPA Ingeniería",
    link: "https://jpaingenieriasolutions.cl/",
    thumbnail: "/jpaing.png",
    description: "Sitio corporativo de servicios de ingeniería"
  },
  {
    title: "Medify.cl",
    link: "https://medify.cl/",
    thumbnail: "/medifyport.png",
    description: "Plataforma de servicios médicos online"
  },
  {
    title: "Macar-Repuestos",
    link: "https://www.repuestosmacar.cl/",
    thumbnail: "/macarrep.png",
    description: "Tienda online de repuestos automotrices"
  },
  {
    title: "Dennis Psicología",
    link: "https://dennispsicologia.cl/",
    thumbnail: "/dennismed.png",
    description: "Sitio web de servicios psicológicos"
  },
];

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = useCallback((newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === projects.length - 1 ? 0 : prevIndex + 1;
      }
      return prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
    });
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, paginate]);

  return (
    <div className="relative w-full bg-black py-20 overflow-hidden">
      {/* Header */}
      <div className="max-w-8xl mx-auto px-8 mb-12">
        <h2 className="text-6xl md:text-6xl font-bold text-white mb-4">
          Nuestro <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">Portafolio</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Algunos de los proyectos que ya confían en NativeCode
        </p>
      </div>

      {/* Carousel */}
      <div 
        className="relative max-w-6xl mx-auto px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <a
                href={projects[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative group cursor-pointer">
                  {/* Image container */}
                  <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900">
                    <Image
                      src={projects[currentIndex].thumbnail}
                      alt={projects[currentIndex].title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      priority={currentIndex === 0}
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Project info */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        {projects[currentIndex].title}
                      </h3>
                      <p className="text-lg text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        {projects[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 hover:scale-110"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-gradient-to-r from-purple-400 to-fuchsia-400' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails preview */}
      <div className="max-w-6xl mx-auto px-6 mt-12">
        <div className="flex justify-center gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex 
                  ? 'ring-2 ring-purple-400 scale-105' 
                  : 'ring-1 ring-white/10 opacity-50 hover:opacity-100'
              }`}
            >
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
