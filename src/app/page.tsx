import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <Hero />
            <About />
            <Features />
            <Stats />
            <Services />
            <Footer />
        </div>
    );
}
