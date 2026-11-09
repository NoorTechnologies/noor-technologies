
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Courses from "@/components/sections/Courses";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";

import PageLoader from "@/components/PageLoader";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      <PageLoader />

      <main className="min-h-screen bg-[#F8FAFC] pb-24 text-[#172033]">
        <Hero />
        <About />
        <Services />
        <Courses />
        <Portfolio />
        <Contact />
        <Footer />
      </main>

      <BottomNav />
    </>
  );
}
