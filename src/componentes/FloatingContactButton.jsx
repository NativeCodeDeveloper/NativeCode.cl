"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function FloatingContactButton() {
  return (
    <motion.div 
      className="fixed bottom-8 right-8 z-[100]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
    >
      <Link href={"/comprar"}>
        <motion.button 
          className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full shadow-lg backdrop-blur-sm border border-white/10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          {/* Icon */}
          <div className="relative w-8 h-8 flex items-center justify-center">
            <Image 
              src="/ico2.png" 
              alt="NativeCode Logo" 
              width={32} 
              height={32}
              className="rounded-full"
            />
          </div>
          
          {/* Text */}
          <span className="font-bold text-white text-base">
            Contáctanos
          </span>
          
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
          </span>
        </motion.button>
      </Link>
    </motion.div>
  );
}
