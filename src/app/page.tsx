import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Societies from "@/components/Societies";
import PlotSizes from "@/components/PlotSizes";
import HorizontalGallery from "@/components/HorizontalGallery";
import LahoreBand from "@/components/LahoreBand";
import WhyESK from "@/components/WhyESK";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SiteReadyProvider } from "@/components/SiteReadyContext";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function Home() {
  return (
    <SiteReadyProvider>
      <SmoothScrollProvider>
        <Preloader />
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Societies />
          <PlotSizes />
          <HorizontalGallery />
          <LahoreBand />
          <WhyESK />
          <About />
          <Process />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </SmoothScrollProvider>
    </SiteReadyProvider>
  );
}
