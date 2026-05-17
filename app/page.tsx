import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ReviewsSection from '@/components/ReviewsSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection />
      <ReviewsSection />
      <LocationsSection />
      <Footer />
    </main>
  );
}
