import Hero from "@/components/Hero";
import SolucionesSection from "@/components/SolucionesSection";
import ServiciosDigitalesSection from "@/components/ServiciosDigitalesSection";
import MisionSection from "@/components/MisionSection";
import FeatureGrid from "@/components/FeatureGrid";
import InfoSection from "@/components/InfoSection";
import Portfolio from "@/components/Portfolio";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
            {/* Hero Section */}
            <Hero />

            {/* Servicios digitales a medida */}
            <ServiciosDigitalesSection />

            {/* Solutions */}
            <SolucionesSection />

            {/* Mission */}
            <MisionSection />

            {/* Services Grid */}
            <FeatureGrid />

            {/* Info Section (SuperGrok style) */}
            <InfoSection />

            {/* Portfolio Section (x.ai News Style) */}
            <Portfolio />
        </main>
    );
}
