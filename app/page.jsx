import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import InfoSection from "@/components/InfoSection";
import Portfolio from "@/components/Portfolio";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white font-sans selection:bg-purple-500 selection:text-white">
            {/* Hero Section */}
            <Hero />

            {/* Services Grid */}
            <FeatureGrid />

            {/* Info Section (SuperGrok style) */}
            <InfoSection />

            {/* Portfolio Section (x.ai News Style) */}
            <Portfolio />
        </main>
    );
}
