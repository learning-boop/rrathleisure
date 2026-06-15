import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeTicker from "./components/MarqueeTicker";
import Features from "./components/Features";
import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import PromoBanner from "./components/PromoBanner";
import BrandStory from "./components/BrandStory";
import TestimonialsSection from "./components/TestimonialsSection";
import VideoGallery from "./components/VideoGallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MarqueeTicker />
        <Features />
        <CategorySection />
        <FeaturedProducts />
        <PromoBanner />
        <BrandStory />
        <TestimonialsSection />
        <VideoGallery />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
