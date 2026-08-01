"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-linear-to-b from-black/70 to-transparent">
            <div className="mx-auto flex h-[106px] max-w-[1920px] items-center justify-between px-6 sm:px-10 md:px-16 lg:pl-[5.75vw] lg:pr-[4.5vw]">

                {/* Logo */}
                <Link href="/" className="flex items-center font-sawah text-xs uppercase tracking-widest text-zinc-400 transition-opacity hover:opacity-80 hover:text-white">
                    <Image
                        src="/logos/nativecodelogonuevo1.PNG"
                        alt="NativeCode Logo"
                        width={230}
                        height={107}
                        className="h-auto w-40 object-contain sm:w-48 lg:-ml-6 lg:w-[260px]"
                        priority
                    />

                </Link>

                {/* Desktop Links */}
                <div className="ml-auto mr-[2.55vw] hidden items-center gap-[2.4vw] font-michroma text-[8px] uppercase tracking-[0.18em] text-zinc-300 lg:flex lg:text-[10px]">
                    <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                    <Link href="/servicios" className="hover:text-white transition-colors">Soluciones</Link>
                    <Link href="/proyectos" className="hover:text-white transition-colors">Productos</Link>
                    <Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre nosotros</Link>
                </div>

                {/* CTA */}
                <div className="hidden rounded-[13px] bg-linear-to-r from-fuchsia-500 via-violet-500 to-sky-400 p-px lg:flex">
                    <Link
                        href="/#soluciones"
                        className="whitespace-nowrap rounded-[12px] bg-[#03050d]/95 px-5 py-3 font-michroma text-[9px] uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#0a0d17] lg:text-[10px]"
                    >
                        Conoce nuestras soluciones
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="text-zinc-400 hover:text-white lg:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-20 left-0 right-0 flex flex-col gap-6 border-b border-white/10 bg-black p-6 animate-in slide-in-from-top-2 lg:hidden">
                    <Link href="/" className="text-zinc-400 hover:text-white font-mono uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Inicio</Link>
                    <Link href="/servicios" className="text-zinc-400 hover:text-white font-mono uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Soluciones</Link>
                    <Link href="/proyectos" className="text-zinc-400 hover:text-white font-mono uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Productos</Link>
                    <Link href="/sobre-nosotros" className="text-zinc-400 hover:text-white font-mono uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Sobre nosotros</Link>
                    <Link href="/#soluciones" className="w-full text-center py-3 border border-white/20 rounded-full font-mono uppercase text-xs" onClick={() => setIsOpen(false)}>
                        Conoce nuestras soluciones
                    </Link>
                </div>
            )}
        </nav>
    );
}
