import Hero from "@/components/Hero";
import SolucionesSection from "@/components/SolucionesSection";
import MisionSection from "@/components/MisionSection";
import FeatureGrid from "@/components/FeatureGrid";
import CortexSection from "@/components/CortexSection";
import InfoSection from "@/components/InfoSection";
import Portfolio from "@/components/Portfolio";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
            {/* Hero Section */}
            <Hero />

            {/* Solutions */}
            <SolucionesSection />

            {/* Mission */}
            <MisionSection />

            {/* Services Grid */}
            <FeatureGrid />

            {/* Cortex AI */}
            <CortexSection />

            {/* Info Section (SuperGrok style) */}
            <InfoSection />

            {/* Portfolio Section (x.ai News Style) */}
            <Portfolio />
        </main>
    );
}
