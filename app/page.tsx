import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import ReviewsSection from '@/components/ReviewsSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <MenuSection />
      <ReviewsSection />
      <LocationsSection />
      <Footer />
    </main>
  );
}
