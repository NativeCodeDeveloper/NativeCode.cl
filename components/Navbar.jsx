"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img 
                        src="/logos/ico2.png" 
                        alt="NativeCode" 
                        className="h-14 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 font-mono text-sm uppercase tracking-widest text-zinc-400">
                    <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                    <Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link>
                    <Link href="/proyectos" className="hover:text-white transition-colors">Proyectos</Link>
                    <Link href="/sobre-nosotros" className="hover:text-white transition-colors">Sobre nosotros</Link>
                </div>

                {/* CTA */}
                <div className="hidden md:flex items-center">
                    <Link
                        href="https://wa.me/56966091038"
                        target="_blank"
                        className="px-5 py-2 rounded-full border border-white/20 text-xs font-mono uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                    >
                        Comienza tu proyecto
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-zinc-400 hover:text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-2">
                    <Link href="/" className="text-zinc-400 hover:text-white font-mono uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Inicio</Link>
                    <Link href="/servicios" className="text-zinc-400 hover:text-white font-mono uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Servicios</Link>
                    <Link href="/proyectos" className="text-zinc-400 hover:text-white font-mono uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Proyectos</Link>
                    <Link href="/sobre-nosotros" className="text-zinc-400 hover:text-white font-mono uppercase tracking-widest text-sm" onClick={() => setIsOpen(false)}>Sobre nosotros</Link>
                    <Link href="https://wa.me/56966091038" target="_blank" className="w-full text-center py-3 border border-white/20 rounded-full font-mono uppercase text-xs" onClick={() => setIsOpen(false)}>
                        Comienza tu proyecto
                    </Link>
                </div>
            )}
        </nav>
    );
}
