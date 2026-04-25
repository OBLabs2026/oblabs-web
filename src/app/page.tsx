import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        
        {/* Animated Logo Reveal Section */}
        <section className="py-24 bg-background relative border-t border-white/10">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-12 md:mb-0 pr-0 md:pr-12">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                The Future is <span className="text-primary">Now</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8">
                We are constantly pushing the boundaries of technology to create seamless, impactful, and revolutionary digital products. Join us on our journey.
              </p>
              <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
                Learn About Us
              </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <div className="relative w-full max-w-md aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/media/logo-reveal.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
