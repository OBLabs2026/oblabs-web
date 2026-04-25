import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Portfolio from "@/components/Portfolio";
import AboutAndStats from "@/components/AboutAndStats";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background">
        <Hero />
        <Categories />
        <Services />
        <TechStack />
        <Portfolio />
        <AboutAndStats />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
