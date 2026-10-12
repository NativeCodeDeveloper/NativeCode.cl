"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { clsx } from "clsx";

const INTERVALO_MS = 4500;

export default function CarruselTienda({ imagenes }) {
    const [activa, setActiva] = useState(0);
    const contenedorRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return undefined;

        let timer = null;
        const iniciar = () => {
            if (timer) return;
            timer = setInterval(() => setActiva((i) => (i + 1) % imagenes.length), INTERVALO_MS);
        };
        const detener = () => {
            clearInterval(timer);
            timer = null;
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) iniciar();
            else detener();
        });
        observer.observe(contenedorRef.current);

        return () => {
            detener();
            observer.disconnect();
        };
    }, [imagenes.length]);

    return (
        <div ref={contenedorRef}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/15">
                {imagenes.map(({ src, alt }, i) => (
                    <Image
                        key={src}
                        src={src}
                        alt={alt}
                        fill
                        unoptimized
                        priority={i === 0}
                        aria-hidden={i !== activa}
                        className={clsx(
                            "object-contain object-top transition-[opacity,transform] duration-[1600ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                            i === activa ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"
                        )}
                    />
                ))}
            </div>

            <div className="mt-5 flex justify-end gap-1.5">
                {imagenes.map(({ src }, i) => (
                    <button
                        key={src}
                        type="button"
                        onClick={() => setActiva(i)}
                        aria-label={`Ver imagen ${i + 1} de ${imagenes.length}`}
                        className={clsx(
                            "h-1.5 rounded-full transition-all duration-500",
                            i === activa ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
