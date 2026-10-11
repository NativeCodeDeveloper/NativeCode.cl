import Hero from "@/components/Hero";
import PathToResilienceOrbitalTimeline from "@/components/PathToResilienceOrbitalTimeline";
import HeroSection_05 from "@/components/HeroSection05";
import { CinematicHero } from "@/components/ui/cinematic-landing-hero";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
            {/* Hero Section */}
            <Hero />

            {/* Título introductorio (video) */}
            <section className="bg-black px-6 pt-6 sm:px-10 sm:pt-8" aria-label="NativeCode">
                <div className="relative mx-auto aspect-[5/1] w-full max-w-5xl overflow-hidden">
                    <video
                        className="absolute inset-0 h-full w-full object-cover"
                        src="/video/nativecode_intro_1080p.mp4"
                        autoPlay
                        muted
                        playsInline
                        preload="metadata"
                    />
                </div>
            </section>

            <PathToResilienceOrbitalTimeline />

            <HeroSection_05 />

            {/* Hero cinematográfico de cierre */}
            <div className="w-full overflow-x-hidden">
                <CinematicHero />
            </div>
        </main>
    );
}
